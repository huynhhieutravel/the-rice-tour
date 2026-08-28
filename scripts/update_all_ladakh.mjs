import fs from 'fs';

async function run() {
  const content = fs.readFileSync('/Users/huynhtronghieu/.gemini/antigravity-ide/brain/ddfa79bc-6f90-4d0b-988e-636ab3451359/topic_cluster_ladakh_plan.md', 'utf8');
  const lines = content.split('\n').filter(l => l.startsWith('| **'));
  const targetSlugs = [];
  
  for (const l of lines) {
    const parts = l.split('|').map(p => p.trim());
    const rawUrl = parts[3].replace(/`/g, '');
    const anchor = parts[4].replace(/`/g, '');
    const slug = rawUrl.split('/').filter(Boolean).pop();
    targetSlugs.push({ slug, anchor });
  }

  console.log('Fetching nodes from production...');
  const res = await fetch('https://fittour.vn/api/admin/nodes?limit=1000', {
    headers: { 'x-bypass-auth': 'antigravity' }
  });
  
  if (!res.ok) {
    console.error('Failed to fetch nodes:', await res.text());
    return;
  }
  
  const { data: nodes } = await res.json();
  console.log(`Fetched ${nodes.length} nodes from DB`);
  
  // Find matches
  let updatedCount = 0;
  for (const target of targetSlugs) {
    const node = nodes.find(n => n.url.endsWith('/' + target.slug) || n.url === '/' + target.slug);
    if (node) {
      // Overwrite tags with exactly 'Ladakh' and set notes to the anchor text
      try {
        const updateRes = await fetch('https://fittour.vn/api/admin/nodes', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'x-bypass-auth': 'antigravity'
          },
          body: JSON.stringify({
            url: node.url,
            tags: 'Ladakh',
            notes: `Anchor: ${target.anchor}`
          })
        });
        const result = await updateRes.json();
        console.log(`Updated [${node.url}]:`, result);
        updatedCount++;
      } catch (err) {
        console.error(`Failed ${node.url}:`, err.message);
      }
    } else {
      console.log(`No node found for slug: ${target.slug}`);
    }
  }
  console.log(`Done. Updated ${updatedCount} / ${targetSlugs.length} nodes.`);
}

run();
