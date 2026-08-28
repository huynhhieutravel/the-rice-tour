const fs = require('fs');
let content = fs.readFileSync('src/pages/api/seed-all-tours.ts', 'utf8');

if (!content.includes("import { env } from 'cloudflare:workers';")) {
  content = "import { env } from 'cloudflare:workers';\n" + content;
}

content = content.replace(
  'const d1Db = locals.runtime.env.DB;',
  'const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;'
);

fs.writeFileSync('src/pages/api/seed-all-tours.ts', content, 'utf8');
