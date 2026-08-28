import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { VNPayAdapter } from '@/utils/payment/VNPayAdapter';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const adapter = new VNPayAdapter();
  
  try {
    // 1. Lấy cấu hình Secret từ biến môi trường của Worker
    const VNPAY_SECRET = (env as any)?.VNPAY_HASH_SECRET;
    if (!VNPAY_SECRET) {
      console.error("Missing VNPAY_HASH_SECRET environment variable");
      // Trả về 99 (Unknown Error) để VNPAY retry sau
      return adapter.buildWebhookResponse(false, "System configuration error");
    }

    // 2. Xác thực Signature (Layer 1: Signature Verification)
    const isValid = await adapter.verifyWebhook(request, VNPAY_SECRET);
    if (!isValid) {
      console.error("VNPAY Webhook Signature Verification Failed!", request.url);
      // Signature sai -> Trả về lỗi 97 (Checksum failed) chuẩn VNPAY
      return new Response(JSON.stringify({ RspCode: '97', Message: 'Invalid Checksum' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Chuẩn hóa Payload thành Standard FIT TOUR Payment Contract
    const standardPayload = await adapter.normalizeWebhook(request);
    
    // 4. Gắn kết Database & Queue
    const d1Db = (env as any)?.dulichcoguu_d1;
    const queue = (env as any)?.ASYNC_QUEUE;
    
    if (!d1Db || !queue) {
      console.error("Database or Queue binding is missing!");
      return adapter.buildWebhookResponse(false, "System infrastructure error");
    }

    // 5. Ghi vào D1 Outbox (Layer 3: Durable Async Processing)
    // Chống Replay Attack: D1 Outbox id/event_id sẽ chặn trùng lặp,
    // hoặc có thể rely vào việc Queue/ERP tự bắt Idempotency Key (Layer 2).
    // Ở đây ta tạo record PENDING mới
    const outboxId = crypto.randomUUID();
    
    try {
      await d1Db.prepare(`
        INSERT INTO outbox_events (id, event_id, event_type, idempotency_key, correlation_id, payload, status)
        VALUES (?, ?, ?, ?, ?, ?, 'PENDING')
      `).bind(
        outboxId, 
        standardPayload.event_id, 
        standardPayload.type, 
        standardPayload.idempotency_key, 
        standardPayload.correlation_id, 
        JSON.stringify(standardPayload)
      ).run();
    } catch (dbError: any) {
      // Nếu ghi D1 thất bại (VD: Database lỗi hoặc Unique Constraint Replay Attack)
      console.error("Failed to commit D1 Outbox:", dbError);
      
      // Nếu là lỗi Trùng Idempotency (Replay Attack) - phụ thuộc schema D1
      if (dbError.message && dbError.message.includes('UNIQUE constraint failed')) {
        // Đã nhận rồi, cứ báo OK cho VNPAY ngừng spam
        return adapter.buildWebhookResponse(true, "Already processed");
      }
      
      // Lỗi DB thực sự -> 5xx để VNPAY retry
      return new Response(JSON.stringify({ RspCode: '99', Message: 'Database error' }), { status: 500 });
    }

    // --- TRANSACTION ĐÃ ĐƯỢC COMMIT THÀNH CÔNG VÀO D1 OUTBOX ---
    // Bây giờ mới gọi Queue. Nếu gọi Queue xịt thì Cronjob Sweeper sẽ hốt lại.
    try {
      await queue.send(standardPayload);
      await d1Db.prepare(`UPDATE outbox_events SET status = 'QUEUED' WHERE id = ?`).bind(outboxId).run();
    } catch (qError) {
      console.error("Queue send failed, but safely stored in D1. Sweeper will retry:", qError);
    }

    // 6. Trả về HTTP 200 OK cho VNPAY ngay lập tức
    return adapter.buildWebhookResponse(true);

  } catch (error: any) {
    console.error("VNPAY Webhook Error:", error);
    return adapter.buildWebhookResponse(false, "Internal Server Error");
  }
};
