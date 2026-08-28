const fs = require('fs');
let content = fs.readFileSync('src/pages/api/seed-all-tours.ts', 'utf8');
content = content.replace('export const GET: APIRoute = async () => {', 'export const GET: APIRoute = async () => {\n  try {\n');
fs.writeFileSync('src/pages/api/seed-all-tours.ts', content, 'utf8');
