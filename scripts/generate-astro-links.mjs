import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SRC_DIR = path.join(__dirname, '../src');
const OUTPUT_FILE = path.join(__dirname, '../src/data/astro-links.json');

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Exclude admin, api, feed, author, tag, category, shorts, trip
      if (['admin', 'api', 'feed', 'author', 'tag', 'category', 'shorts', 'trip'].includes(file)) continue;
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.astro') || file.endsWith('.tsx') || file.endsWith('.ts')) {
      // Avoid config files or unneeded files
      if (file.startsWith('[') || file.startsWith('_') || file === 'env.d.ts') continue;
      fileList.push(filePath);
    }
  }
  return fileList;
}

function extractLinksFromHtml(html) {
  // Remove blocks ignored via HTML comments
  html = html.replace(/<!--\s*IGNORE LINKS\s*-->[\s\S]*?<!--\s*END IGNORE LINKS\s*-->/gi, '');

  const links = [];
  // Fixed regex to handle optional backslashes for escaping: \"
  // And to handle both single and double quotes, and optional spaces around href=
  const regex = /<[aA]\s+(?:[^>]*?\s+)?href\s*=\s*\\?(["'])(.*?)\\?\1[^>]*>([\s\S]*?)<\/[aA]>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    if (match[0].includes('data-ignore-link')) continue;
    const targetUrl = match[2].trim();
    let anchorText = (match[3] || '').replace(/(<([^>]+)>)/gi, "").trim().substring(0, 100);
    
    // Ignore internal anchor links or external links that aren't fittour
    if (targetUrl.startsWith('#')) continue;
    if (targetUrl.startsWith('http') && !targetUrl.startsWith('https://fittour.vn') && !targetUrl.startsWith('https://www.fittour.vn') && !targetUrl.startsWith('http://fittour.vn')) continue;
    
    if (anchorText.includes('{') || anchorText.includes('}')) {
      anchorText = '[Dynamic Text]';
    }
    
    links.push({
      targetUrl,
      anchorText: anchorText || 'Link'
    });
  }
  
  // Try to capture JSX href={"/..."} or href={`/...`}
  const jsxRegex = /<[aA]\s+(?:[^>]*?\s+)?href=\{[\\`"']+(.*?)[\\`"']+\}[^>]*>([\s\S]*?)<\/[aA]>/gi;
  while ((match = jsxRegex.exec(html)) !== null) {
    if (match[0].includes('data-ignore-link')) continue;
    const targetUrl = match[1].trim();
    let anchorText = (match[2] || '').replace(/(<([^>]+)>)/gi, "").trim().substring(0, 100);
    
    if (targetUrl.startsWith('#')) continue;
    if (targetUrl.startsWith('http') && !targetUrl.startsWith('https://fittour.vn') && !targetUrl.startsWith('https://www.fittour.vn') && !targetUrl.startsWith('http://fittour.vn')) continue;
    
    // Check if dynamic variable was caught (e.g. ${slug}). If it contains ${, it's not static.
    if (targetUrl.includes('${')) continue;
    
    if (anchorText.includes('{') || anchorText.includes('}')) {
      anchorText = '[Dynamic Text]';
    }
    
    links.push({
      targetUrl,
      anchorText: anchorText || 'Link'
    });
  }
  
  return links;
}

function run() {
  console.log('Scanning Astro source files for links...');
  // We scan pages, components, and data
  const files = [
    ...getAllFiles(path.join(SRC_DIR, 'pages')),
    ...getAllFiles(path.join(SRC_DIR, 'components')),
    ...getAllFiles(path.join(SRC_DIR, 'data'))
  ];
  
  const result = {};
  let totalLinks = 0;

  for (const file of files) {
    // Generate an identifier from the file path
    const relativePath = path.relative(path.join(SRC_DIR, 'pages'), file);
    let slug = relativePath.replace(/\.(astro|tsx|ts)$/, '').replace(/\\/g, '/');
    if (slug === 'index') slug = '/';
    
    // If it comes from components or data, it will have a negative relative path like `../components/LadakhTours`
    if (slug.startsWith('../')) {
        slug = slug.substring(3); // e.g. components/LadakhTours
        
        // Strip 'data/' prefix so that data/am-thuc-ladakh.ts maps directly to am-thuc-ladakh
        if (slug.startsWith('data/')) {
          slug = slug.substring(5);
        }

        // Map ReactApp components to their parent slugs so outbound links work in Link Matrix
        if (slug.startsWith('components/ReactApp/TuVienPhugtal')) slug = 'tu-vien-phugtal';
        if (slug.startsWith('components/ReactApp/HoTsoMoriri')) slug = 'ho-tso-moriri';
        if (slug.startsWith('components/ReactApp/SayDoCao')) slug = 'say-do-cao';
        if (slug.startsWith('components/ReactApp/ThungLungNubra')) slug = 'thung-lung-nubra';
        if (slug.startsWith('components/ReactApp/Milestone80')) slug = 'ho-pangong-tso';
    }
    
    let content = fs.readFileSync(file, 'utf-8');
    const bodyMatch = content.replace(/---[\s\S]*?---/, '');
    
    const links = extractLinksFromHtml(bodyMatch);
    if (links.length > 0) {
      if (!result[slug]) {
        result[slug] = [];
      }
      result[slug].push(...links);
      totalLinks += links.length;
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
  console.log(`Saved ${totalLinks} links from ${Object.keys(result).length} files to src/data/astro-links.json`);
}

run();
