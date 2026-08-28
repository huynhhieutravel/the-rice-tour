import type { APIRoute } from 'astro';
import { safeQueryOptional } from '@/lib/db-client';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request }) => {
  const d1Db = env?.dulichcoguu_d1;
  
  if (!d1Db) {
    return new Response(JSON.stringify({ success: false, error: "Database not connected" }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  try {
    // 1. LẤY DỮ LIỆU LỊCH KHỞI HÀNH TỪ ERP
    let erpDepartures: any[] = [];
    const cacheKey = `mobile_api_departures_b2c`;
    
    try {
      const response = await fetch(`https://erp.fittour.vn/api/op-tours/b2c`, {
        headers: { 'Accept': 'application/json' },
        signal: AbortSignal.timeout(8000)
      });
      if (response.ok) {
        const json = await response.json();
        erpDepartures = Array.isArray(json) ? json : (json?.data || []);
        // Save to cache
        if (env?.SESSION) {
          env.SESSION.put(cacheKey, JSON.stringify(erpDepartures)).catch(() => {});
        }
      }
    } catch (e) {
      // Fallback to cache if ERP is down
      if (env?.SESSION) {
        const cached = await env.SESSION.get(cacheKey, "json");
        if (cached && Array.isArray(cached)) erpDepartures = cached;
      }
    }

    // Lọc bỏ các lịch đã qua trong quá khứ
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let validDepartures = erpDepartures.filter((t: any) => {
      if (!t || !t.departureDate) return false;
      const safeDate = typeof t.departureDate === 'string' ? t.departureDate.replace(' ', 'T') : t.departureDate;
      const d = new Date(safeDate);
      return !isNaN(d.getTime()) && d >= today;
    });

    // 2. LẤY HÌNH ẢNH (FEATURED IMAGE) TỪ D1 DATABASE
    const query = `SELECT slug, featuredImage FROM Tour WHERE status = 'published' OR status = 'publish'`;
    const { results: toursFromD1 } = await safeQueryOptional(
      d1Db.prepare(query).all(),
      { results: [] },
      { route: '/api/mobile/departures', queryType: 'fetch_tours_images' }
    );

    // Tạo từ điển (Map) để tra cứu ảnh siêu nhanh theo slug
    const imageMap = new Map<string, string>();
    toursFromD1.forEach((t: any) => {
      if (t.slug && t.featuredImage) {
        imageMap.set(t.slug.toLowerCase(), t.featuredImage);
      }
    });

    // 3. GHÉP ẢNH VÀO DỮ LIỆU ERP VÀ FORMAT LẠI THÀNH CHUẨN BOOKING.COM
    const formattedData = validDepartures.map(dep => {
      // Tìm ảnh từ D1 (Ưu tiên khớp slug gốc, sau đó đến destinationSlug)
      let imageUrl = null;
      const depSlug = (dep.slug || '').toLowerCase();
      const destSlug = (dep.destinationSlug || '').toLowerCase();
      
      if (imageMap.has(depSlug)) {
        imageUrl = imageMap.get(depSlug);
      } else if (imageMap.has(destSlug)) {
        imageUrl = imageMap.get(destSlug);
      }

      // Xử lý hãng bay
      let airlineName = '';
      if (dep.airline && dep.airline.departure) {
        airlineName = dep.airline.departureName || dep.airline.departure.split('\n')[0].trim();
      }

      // Tính toán Tình trạng vé giống trên Web
      let finalStatus = dep.status || 'Mở bán';
      const seatCount = dep.seatsRemaining ?? null;
      const isFull = seatCount !== null && seatCount === 0;
      const isNearFull = !isFull && seatCount !== null && seatCount > 0 && 4 > seatCount;

      if (isFull) {
        finalStatus = 'Hết chỗ';
      } else if (isNearFull) {
        finalStatus = `Còn ${seatCount} chỗ`;
      }

      return {
        id: dep.code,
        title: dep.title,
        departureDate: dep.departureDate,
        returnDate: dep.returnDate,
        price: dep.price || 0,
        seatsRemaining: dep.seatsRemaining ?? null,
        status: finalStatus,
        airline: airlineName,
        pickup: dep.pickup || '',
        featuredImage: imageUrl || 'https://thericetour.com/placeholder.jpg',
        destinationSlug: dep.destinationSlug
      };
    });

    // Sort by departureDate ascending (Gần nhất lên đầu)
    formattedData.sort((a, b) => {
      return new Date(a.departureDate.replace(' ', 'T')).getTime() - new Date(b.departureDate.replace(' ', 'T')).getTime();
    });

    return new Response(JSON.stringify({
      success: true,
      data: formattedData,
      meta: { count: formattedData.length }
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // Cache 5 phút
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { 
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
};
