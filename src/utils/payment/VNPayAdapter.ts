import type { PaymentProviderAdapter, StandardPaymentWebhook } from './PaymentProviderAdapter';

export class VNPayAdapter implements PaymentProviderAdapter {
  
  // Hàm Helper mã hóa HMAC-SHA512 dùng Web Crypto API (tương thích Cloudflare Worker)
  private async hmacSHA512(key: string, data: string): Promise<string> {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(key);
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-512' },
      false,
      ['sign']
    );
    const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(data));
    return Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  async verifyWebhook(request: Request, secret: string): Promise<boolean> {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    
    // Copy URLSearchParams to avoid mutating the original (though in this context it might be fine)
    const params = new URLSearchParams(searchParams.toString());
    
    const secureHash = params.get('vnp_SecureHash');
    if (!secureHash) return false;

    // Loại bỏ các trường hash để tạo chuỗi ký
    params.delete('vnp_SecureHash');
    params.delete('vnp_SecureHashType');

    // Chuyển đổi thành Object để xử lý giống hệt thư viện chuẩn của VNPAY
    const obj: Record<string, string> = {};
    params.forEach((value, key) => {
      obj[key] = value;
    });

    // 1. Trích xuất và mã hóa các Keys, sau đó Sort alphabet (theo mã ASCII)
    const sortedKeys = Object.keys(obj)
      .map(key => encodeURIComponent(key))
      .sort();

    // 2. Nối chuỗi
    const signDataArray = [];
    for (const key of sortedKeys) {
      // Decode lại key vì params.get() nhận chuỗi gốc chưa encode
      const rawKey = decodeURIComponent(key); 
      const value = obj[rawKey];
      if (value !== undefined && value !== null && value !== '') {
        // VNPAY chuẩn: encodeURIComponent(value).replace(/%20/g, '+')
        signDataArray.push(`${key}=${encodeURIComponent(value).replace(/%20/g, '+')}`);
      }
    }
    
    const signData = signDataArray.join('&');
    
    // Tạo hash
    const checkSum = await this.hmacSHA512(secret, signData);
    
    return checkSum === secureHash;
  }

  async normalizeWebhook(request: Request): Promise<StandardPaymentWebhook> {
    const url = new URL(request.url);
    const params = url.searchParams;
    
    const rawPayload: Record<string, string> = {};
    params.forEach((value, key) => {
      rawPayload[key] = value;
    });

    const vnp_TxnRef = params.get('vnp_TxnRef') || ''; // Đây là Payment Attempt ID (ví dụ: PAY-2026-123)
    const vnp_TransactionNo = params.get('vnp_TransactionNo') || ''; // Mã giao dịch ghi nhận tại hệ thống VNPAY
    const vnp_Amount = parseInt(params.get('vnp_Amount') || '0', 10) / 100; // VNPAY gửi số tiền nhân 100
    const vnp_ResponseCode = params.get('vnp_ResponseCode');
    const vnp_PayDate = params.get('vnp_PayDate') || ''; // Format yyyyMMddHHmmss

    let status: "SUCCEEDED" | "FAILED" | "PENDING" = "PENDING";
    if (vnp_ResponseCode === '00') {
      status = "SUCCEEDED";
    } else {
      status = "FAILED";
    }

    // Convert vnp_PayDate to ISO String (Optional, for now just use raw string or basic parsing)
    let paid_at = new Date().toISOString();
    if (vnp_PayDate && vnp_PayDate.length === 14) {
      const year = vnp_PayDate.substring(0, 4);
      const month = vnp_PayDate.substring(4, 6);
      const day = vnp_PayDate.substring(6, 8);
      const hour = vnp_PayDate.substring(8, 10);
      const min = vnp_PayDate.substring(10, 12);
      const sec = vnp_PayDate.substring(12, 14);
      // Tạo chuỗi dạng chuẩn, VNPAY theo giờ VN (+07:00)
      paid_at = `${year}-${month}-${day}T${hour}:${min}:${sec}+07:00`;
    }

    const eventId = `vnpay_${vnp_TxnRef}_${Date.now()}`;
    const correlationId = request.headers.get('x-correlation-id') || crypto.randomUUID();

    return {
      type: "PAYMENT_WEBHOOK",
      provider: "VNPAY",
      event_id: eventId,
      correlation_id: correlationId,
      // Idempotency namespace bảo vệ Replay Attack
      idempotency_key: `payment:VNPAY:${vnp_TransactionNo || vnp_TxnRef}`,
      provider_order_id: vnp_TxnRef, 
      provider_transaction_id: vnp_TransactionNo,
      status: status,
      amount: vnp_Amount,
      currency: "VND", // VNPAY IPN hiện tại ngầm định VND
      paid_at: paid_at,
      raw_event_ref: rawPayload
    };
  }

  buildWebhookResponse(isSuccess: boolean, message?: string): Response {
    // VNPAY bắt buộc IPN trả về chuẩn JSON với RspCode 00 cho thành công
    // hoặc mã lỗi khác nếu có sự cố (ví dụ 99 = Unknown error)
    const code = isSuccess ? '00' : '99';
    const msg = message || (isSuccess ? 'Confirm Success' : 'Unknown Error');
    
    return new Response(JSON.stringify({ RspCode: code, Message: msg }), {
      status: 200, // VNPAY luôn yêu cầu HTTP 200, mã lỗi nằm trong RspCode
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
