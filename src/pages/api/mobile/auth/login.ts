import type { APIRoute } from 'astro';

export const prerender = false;

// Handle OPTIONS request for CORS
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { identifier, password } = body;

    if (!identifier || !password) {
      return new Response(JSON.stringify({ success: false, message: 'Vui lòng nhập đầy đủ thông tin.' }), {
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }
      });
    }

    // Call ERP to authenticate
    const erpApiUrl = 'https://erp.fittour.vn'; // Trong thực tế nên lấy từ env
    const erpSecret = 'TạmThờiCứngĐểTest123'; // Nên lấy từ env
    
    // TODO: Khi ERP có API /api/mobile-users/auth, ta sẽ fetch
    /*
    const erpRes = await fetch(`${erpApiUrl}/api/mobile-users/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${erpSecret}`
      },
      body: JSON.stringify({ identifier, password })
    });
    
    const erpData = await erpRes.json();
    if (!erpRes.ok || !erpData.token) {
       return new Response(JSON.stringify({ success: false, message: erpData.message || 'Tài khoản không hợp lệ' }), { ... });
    }
    const token = erpData.token;
    */

    // MOCK ĐỂ TEST TRƯỚC KHI CÓ ERP API
    let token = '';
    let customerInfo = null;
    if (identifier === 'review@fittour.vn' && password === 'review123') {
        token = 'mock-jwt-token-review';
        customerInfo = { 
          id: 999, 
          name: 'Apple Reviewer', 
          phone: '0901234567', 
          email: 'review@fittour.vn', 
          app_id: 'APP-REV-01',
          tier: 'Vàng',
          point: 1250
        };
    } else {
        return new Response(JSON.stringify({ success: false, message: 'Sai số điện thoại hoặc mật khẩu.' }), {
            status: 401,
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        });
    }

    // Lưu token vào cookie để Astro SSR có thể đọc được (Session)
    cookies.set('app_session', token, {
      path: '/',
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 30 // 30 ngày
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Đăng nhập thành công',
      user: customerInfo,
      token: token
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    console.error('Login Error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Lỗi máy chủ' }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
