import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return new Response(JSON.stringify({ success: false, message: 'Invalid Content-Type' }), { status: 400 });
  }

  try {
    const body = await request.json();
    const { identifier, otp } = body;

    if (!identifier || !otp) {
      return new Response(JSON.stringify({ success: false, message: 'Vui lòng cung cấp số điện thoại và mã OTP' }), { status: 400 });
    }

    // Logic giả lập: Bất kỳ SĐT nào nhập đúng mã 123456 sẽ được đăng nhập
    if (otp === '123456') {
      // Dữ liệu User ảo (Mock) trả về cho App, kèm JWT giả định
      const mockUser = {
        id: 999,
        name: 'VIP Khách Hàng',
        email: 'vip@fittour.com.vn',
        phone: identifier,
        gender: 'male',
        address: '195 Đề Thám, Q1, TP.HCM',
        avatar_url: 'https://media.fittour.vn/avatar_placeholder.jpg'
      };

      const mockToken = `mock-secure-token-${Date.now()}`;

      return new Response(JSON.stringify({
        success: true,
        message: 'Đăng nhập thành công',
        user: mockUser,
        token: mockToken
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: 'Mã OTP không chính xác. Hãy thử 123456.'
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

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
