import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return new Response(JSON.stringify({ success: false, message: 'Invalid Content-Type' }), { status: 400 });
  }

  try {
    const body = await request.json();
    const { identifier } = body;

    if (!identifier) {
      return new Response(JSON.stringify({ success: false, message: 'Vui lòng cung cấp số điện thoại hoặc email' }), { status: 400 });
    }

    // Trong thực tế, gọi SMS Gateway ở đây (ví dụ Twilio, Zalo ZNS).
    // Ở đây, ta giả lập gửi mã OTP cố định là 123456.
    console.log(`[AUTH MOCK] Đã gửi OTP 123456 đến: ${identifier}`);

    return new Response(JSON.stringify({
      success: true,
      message: 'Mã OTP giả lập (123456) đã được gửi.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};
