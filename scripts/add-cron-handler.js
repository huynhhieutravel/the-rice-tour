import fs from 'fs';

const file = 'dist/server/entry.mjs';
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('export {') && content.includes('w as default')) {
    content = content.replace(/export\s*\{\s*w\s*as\s*default\s*\};?/g, '');
    content += `
export default {
  async fetch(request, env, ctx) {
    return w.fetch(request, env, ctx);
  },
  async scheduled(event, env, ctx) {
    console.log("Running scheduled scan-db-links...");
    const url = "https://fittour.vn/api/admin/scan-db-links";
    const req = new Request(url, {
      method: "POST",
      headers: { "x-cron-secret": env.CRON_SECRET || "" }
    });
    try {
      const res = await w.fetch(req, env, ctx);
      console.log("Cron scan result:", res.status, await res.text());
    } catch(e) {
      console.error("Cron scan error:", e);
    }
  }
};
`;
    fs.writeFileSync(file, content);
    console.log('Successfully injected scheduled handler into entry.mjs');
  }
}
