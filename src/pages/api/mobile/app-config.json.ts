import type { APIRoute } from "astro";
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async () => {
  try {
    const d1Db = env.dulichcoguu_d1;
    const config_row = await d1Db.prepare("SELECT value FROM SiteSetting WHERE key = 'app_home_config'").first();
    
    let config = {};
    if (config_row && config_row.value) {
      try {
        config = JSON.parse(config_row.value as string);
      } catch (e) {
        console.error("Parse error:", e);
      }
    }
    
    return new Response(JSON.stringify({ success: true, data: config }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
};
