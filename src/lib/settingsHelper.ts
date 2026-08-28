// src/lib/settingsHelper.ts
import { env } from 'cloudflare:workers';
import type { GlobalSettings } from '@/types/cms';

export async function getGlobalSettings(): Promise<{ settings: Partial<GlobalSettings>; version: number }> {
  try {
    const sessionKV = env?.SESSION;
    
    // 1. Try to read from KV using Pointer Pattern
    if (sessionKV) {
      const currentVersionStr = await sessionKV.get('settings:version');
      if (currentVersionStr) {
        const dataStr = await sessionKV.get(`settings:v${currentVersionStr}`);
        if (dataStr) {
          const parsed = JSON.parse(dataStr);
          return {
            settings: parsed.settings as Partial<GlobalSettings>,
            version: parsed.version
          };
        }
      }
    }

    // 2. Fetch from D1 if KV miss
    const d1Db = env?.dulichcoguu_d1;
    if (!d1Db) return { settings: {}, version: 1 };

    const { results } = await d1Db.prepare("SELECT * FROM SiteSetting").all();
    
    const settingsObj: Record<string, any> = {};
    let totalVersion = 0;

    (results || []).forEach((setting: any) => {
      totalVersion += setting.version || 1;
      let val = setting.value;
      if (typeof val === 'string') {
        try { val = JSON.parse(val); } catch (e) {}
      }
      settingsObj[setting.key] = val;
    });

    const result = { settings: settingsObj as Partial<GlobalSettings>, version: totalVersion };
    
    // Auto-heal KV
    if (sessionKV) {
      const targetKey = `settings:v${totalVersion}`;
      await sessionKV.put(targetKey, JSON.stringify(result));
      await sessionKV.put('settings:version', totalVersion.toString());
    }

    return result;
  } catch (error) {
    console.error('Error fetching global settings:', error);
    return { settings: {}, version: 1 };
  }
}
