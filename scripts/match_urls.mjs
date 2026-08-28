import fs from 'fs';

const content = fs.readFileSync('/Users/huynhtronghieu/.gemini/antigravity-ide/brain/ddfa79bc-6f90-4d0b-988e-636ab3451359/topic_cluster_ladakh_plan.md', 'utf8');
const allUrls = fs.readFileSync('/tmp/all-urls.txt', 'utf8').split('\n').filter(Boolean);

const lines = content.split('\n').filter(l => l.startsWith('| **'));
const rows = lines.map(l => {
  const parts = l.split('|').map(p => p.trim());
  let rawUrl = parts[3].replace(/`/g, '');
  let anchor = parts[4].replace(/`/g, '');
  
  // Find matching full URL
  const slug = rawUrl.split('/').filter(Boolean).pop();
  let matchedUrl = rawUrl;
  
  const matches = allUrls.filter(u => u.endsWith('/' + slug) || u.endsWith('/' + slug + '/'));
  if (matches.length > 0) {
    matchedUrl = new URL(matches[0]).pathname;
  } else if (!rawUrl.startsWith('/')) {
    matchedUrl = '/' + rawUrl;
  }
  
  return { original: rawUrl, matchedUrl, anchor };
});

console.log(rows.map(r => `${r.original} -> ${r.matchedUrl}`).join('\n'));
