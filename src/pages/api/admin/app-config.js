export const prerender = false;
import { env } from 'cloudflare:workers';

export async function GET({ request }) {
  try {
    const d1Db = env.dulichcoguu_d1;
    
    // Fetch current config
    const { results } = await d1Db.prepare("SELECT value FROM SiteSetting WHERE key = 'app_home_config'").all();
    
    let config = null;
    if (results && results.length > 0) {
      try {
        config = JSON.parse(results[0].value);
      } catch (e) {
        config = results[0].value;
      }
    }
    
    // Fallback default config mimicking current app layout
    if (!config) {
      config = {
        flash_deals: [],
        collections: {
          china: [],
          himalaya: [],
          silkroad: [],
          africa: [],
          arctic: []
        }
      };
    }
    
    return new Response(JSON.stringify({ success: true, data: config }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("GET app_home_config Error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function PUT({ request }) {
  try {
    const data = await request.json();
    const d1Db = env.dulichcoguu_d1;
    
    const configString = JSON.stringify(data);
    
    // Check if key exists
    const check = await d1Db.prepare("SELECT key FROM SiteSetting WHERE key = 'app_home_config'").first();
    
    if (check) {
      await d1Db.prepare("UPDATE SiteSetting SET value = ?, updatedAt = CURRENT_TIMESTAMP WHERE key = 'app_home_config'").bind(configString).run();
    } else {
      await d1Db.prepare("INSERT INTO SiteSetting (key, value) VALUES (?, ?)").bind(
        'app_home_config', 
        configString
      ).run();
    }
    
    return new Response(JSON.stringify({ success: true, message: 'Saved successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("PUT app_home_config Error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
