// src/pages/api/submit-form.ts
// Public API endpoint - NO auth required (for website visitors)
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const TELEGRAM_BOT_TOKEN = '8957107018:AAFh504ABCXIVchyWm_B04uISjivxdEksrU';
const TELEGRAM_CHAT_ID = '935329248';

async function sendTelegramNotification(data: any) {
  const esc = (s: string) => s ? s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') : '';
  
  const lines = [
    `🔔 <b>KHÁCH HÀNG MỚI ĐĂNG KÝ!</b>`,
    ``,
    `👤 <b>Họ tên:</b> ${esc(data.customerName) || 'Chưa điền'}`,
    `📞 <b>SĐT:</b> ${esc(data.customerPhone) || 'Chưa điền'}`,
    `📧 <b>Email:</b> ${esc(data.customerEmail) || 'Chưa điền'}`,
  ];

  if (data.tourName) {
    lines.push(`✈️ <b>Chương trình:</b> ${esc(data.tourName)}`);
  }

  if (data.options) {
    try {
      const opts = typeof data.options === 'string' ? JSON.parse(data.options) : data.options;
      if (opts.destination || opts.destinations) lines.push(`📍 <b>Điểm đến:</b> ${esc(opts.destinations || opts.destination)}`);
      if (opts.duration) lines.push(`⏱️ <b>Thời lượng:</b> ${esc(opts.duration)}`);
      if (opts.travelDates || opts.month) lines.push(`📅 <b>Ngày/Tháng đi:</b> ${esc(opts.travelDates || opts.month)}`);
      if (opts.adults || opts.children) lines.push(`👥 <b>Số khách:</b> ${esc(opts.adults || '0')} người lớn, ${esc(opts.children || '0')} trẻ em`);
      if (opts.hotelStandard) lines.push(`🏨 <b>Lưu trú:</b> ${esc(opts.hotelStandard)}`);
      if (opts.budget) lines.push(`💰 <b>Ngân sách:</b> ${esc(opts.budget)}`);
      if (opts.country) lines.push(`🌍 <b>Quốc tịch / Nơi ở:</b> ${esc(opts.country)}`);
      if (opts.companyName) lines.push(`🏢 <b>Công ty:</b> ${esc(opts.companyName)}`);
      if (opts.setupType) lines.push(`🎯 <b>Loại hình:</b> ${esc(opts.setupType)}`);
      if (opts.contactChannel) lines.push(`💬 <b>Kênh liên hệ:</b> ${esc(opts.contactChannel)}`);
      if (opts.notes) lines.push(`📝 <b>Ghi chú:</b> ${esc(opts.notes)}`);
      if (opts.ageGroup) lines.push(`👥 <b>Độ tuổi:</b> ${esc(opts.ageGroup)}`);
      if (opts.healthCommitment) lines.push(`✅ Cam kết sức khỏe: Có`);
      if (opts.oxygenConsult) lines.push(`🫁 Yêu cầu tư vấn oxy: Có`);
    } catch (e) {
      lines.push(`📋 <b>Ghi chú:</b> ${esc(data.options)}`);
    }
  }

  if (data.sourceUrl) {
    lines.push(`🌐 <b>Trang gửi:</b> ${esc(data.sourceUrl)}`);
  }

  lines.push(``, `⏰ <b>Thời gian:</b> ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);

  const text = lines.join('\n');

  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        link_preview_options: { is_disabled: true },
      }),
    });
    if (!res.ok) {
      const errBody = await res.text();
      console.error('Telegram API error:', res.status, errBody);
    }
  } catch (e) {
    console.error('Telegram send error:', e);
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  // CORS headers for cross-origin form submissions
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const body = await request.json();
    const { formType, customerName, customerPhone, customerEmail, tourName, options, sourceUrl } = body;

    // Basic validation
    if (!customerName && !customerPhone && !customerEmail) {
      return new Response(JSON.stringify({ success: false, error: 'Vui lòng điền ít nhất 1 thông tin liên hệ (Tên, SĐT hoặc Email)' }), { status: 400, headers });
    }

    // ===== ANTI-BOT LAYER 1: Honeypot =====
    if (body._hp) {
      return new Response(JSON.stringify({ success: true, message: 'Cảm ơn!' }), { status: 200, headers });
    }

    // ===== ANTI-BOT LAYER 2: Time Check =====
    // Reject if form submitted in less than 3 seconds (bots fill instantly)
    if (body._ts) {
      const elapsed = Date.now() - Number(body._ts);
      if (elapsed < 3000) {
        // Too fast = bot
        return new Response(JSON.stringify({ success: true, message: 'Cảm ơn!' }), { status: 200, headers });
      }
    }

    // ===== ANTI-BOT LAYER 3: Cloudflare Turnstile =====
    const turnstileToken = body['cf-turnstile-response'];
    const TURNSTILE_SECRET = body._turnstileSecret ? null : (env as any)?.TURNSTILE_SECRET_KEY;
    if (turnstileToken && TURNSTILE_SECRET) {
      try {
        const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: TURNSTILE_SECRET,
            response: turnstileToken,
            remoteip: request.headers.get('CF-Connecting-IP') || '',
          }),
        });
        const turnstileResult = await verifyRes.json() as any;
        if (!turnstileResult.success) {
          return new Response(JSON.stringify({ success: false, error: 'Xác minh bảo mật thất bại. Vui lòng thử lại.' }), { status: 403, headers });
        }
      } catch (e) {
        console.error('Turnstile verify error:', e);
        // Don't block if Turnstile service is down
      }
    }

    const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1;
    if (!d1Db) {
      return new Response(JSON.stringify({ success: false, error: 'Database unavailable' }), { status: 500, headers });
    }

    // Save to database
    const optionsStr = options ? (typeof options === 'string' ? options : JSON.stringify(options)) : null;
    
    const dbPayload = {
      formType: formType || 'general',
      customerName: customerName || null,
      customerPhone: customerPhone || null,
      customerEmail: customerEmail || null,
      tourName: tourName || null,
      options: optionsStr,
      sourceUrl: sourceUrl || null
    };

    await d1Db.prepare(`
      INSERT INTO FormSubmission (formType, customerName, customerPhone, customerEmail, tourName, options, sourceUrl, status, createdAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'new', datetime('now'))
    `).bind(
      dbPayload.formType, dbPayload.customerName, dbPayload.customerPhone, dbPayload.customerEmail, dbPayload.tourName, dbPayload.options, dbPayload.sourceUrl
    ).run();

    // Send Telegram notification (must await in Cloudflare Workers)
    await sendTelegramNotification({
      customerName, customerPhone, customerEmail, tourName, options: optionsStr, sourceUrl
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.' 
    }), { status: 201, headers });

  } catch (error: any) {
    console.error('Form submission error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Lỗi hệ thống. Vui lòng thử lại sau.' }), { status: 500, headers });
  }
};

// Handle CORS preflight
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
