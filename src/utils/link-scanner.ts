export async function extractLinks(db: any, html: string, sourceUrl: string, slugMap: Map<string, string>, validUrlSet: Set<string>, depth: number = 0) {
  const links: { sourceUrl: string, targetUrl: string, anchorText: string, type: string, is404: number }[] = [];
  if (!html || depth > 3) return links;
  
  const staticRoutes = new Set(['/', '/tours', '/blog', '/destinations', '/contact', '/about', '/search', '/gallery']);
  
  const processUrl = (rawUrl: string, anchorText: string) => {
    let targetUrl = rawUrl.replace(/\\/g, ''); 
    
    if (targetUrl.startsWith('https://thericetour.com')) {
      targetUrl = targetUrl.replace('https://thericetour.com', '');
    } else if (targetUrl.startsWith('https://www.fittour.vn')) {
      targetUrl = targetUrl.replace('https://www.fittour.vn', '');
    }
    
    if (targetUrl.startsWith('/')) {
      let cleanTargetUrl = targetUrl;
      if (cleanTargetUrl.endsWith('/') && cleanTargetUrl.length > 1) {
        cleanTargetUrl = cleanTargetUrl.slice(0, -1);
      }
      
      const [basePath, ...rest] = cleanTargetUrl.split(/(?=[#?])/);
      const hashOrQuery = rest.join('');
      
      const parts = basePath.split('/');
      const slug = parts[parts.length - 1];
      
      if (slugMap.has(slug)) {
        cleanTargetUrl = (slugMap.get(slug) as string) + hashOrQuery;
      }
      
      let is404 = 0;
      const urlToCheck = cleanTargetUrl.split(/(?=[#?])/)[0];
      if (!validUrlSet.has(urlToCheck) && !staticRoutes.has(urlToCheck)) {
        const dynamicPrefixes = ['/country/', '/tag/', '/category/', '/chuyen-muc/', '/dich-vu-visa', '/dia-diem-to-chuc', '/author/'];
        const isDynamic = dynamicPrefixes.some(prefix => urlToCheck.startsWith(prefix));
        if (!isDynamic) {
          is404 = 1;
        }
      }
      
      links.push({
        sourceUrl,
        targetUrl: cleanTargetUrl,
        anchorText,
        type: 'content',
        is404
      });
    }
  };

  // 1. Parse HTML <a> tags
  const htmlRegex = /<[aA]\s+(?:[^>]*?\s+)?href\s*=\s*\\?(["'])(.*?)\\?\1[^>]*>([\s\S]*?)<\/[aA]>/gi;
  let match;
  while ((match = htmlRegex.exec(html)) !== null) {
    const rawUrl = match[2].trim();
    const anchorText = match[3].replace(/(<([^>]+)>)/gi, "").trim().substring(0, 100);
    processUrl(rawUrl, anchorText);
  }

  // 2. Parse Elementor JSON links
  const elementorRegex = /"url"\s*:\s*\\?(["'])(.*?)\\?\1/gi;
  while ((match = elementorRegex.exec(html)) !== null) {
    const rawUrl = match[2].trim();
    processUrl(rawUrl, '[Elementor DB]');
  }
  
  // 3. Parse Shortcodes [snippet slug="..."] or [data_tour slug="..."]
  const shortcodeRegex = /\[(\w+)\s+([^\]]+)\]/g;
  while ((match = shortcodeRegex.exec(html)) !== null) {
    const name = match[1];
    const propsStr = match[2];
    
    // Extract slug, id, or name prop
    const slugMatch = propsStr.match(/(?:slug|id|name)=\\?["']([^\\"']+)\\?["']/);
    const shortcodeSlug = slugMatch ? slugMatch[1] : null;
    
    if (shortcodeSlug) {
      if (name === 'snippet' && db) {
        // Query Snippet content
        try {
          const snipRes = await db.prepare("SELECT html_content FROM Snippet WHERE slug = ?").bind(shortcodeSlug).first();
          if (snipRes && snipRes.html_content) {
            // Recursively extract links from snippet HTML
            const snipLinks = await extractLinks(db, snipRes.html_content as string, sourceUrl, slugMap, validUrlSet, depth + 1);
            snipLinks.forEach(l => {
              // Override anchor text to show it came from a snippet
              l.anchorText = `[Snippet: ${shortcodeSlug}] ${l.anchorText}`;
              links.push(l);
            });
          }
        } catch (e) { console.error("Snippet DB query error", e); }
      } 
      else if (name === 'data_tour' || name === 'data_post' || name === 'data_country') {
        if (name === 'data_post' && propsStr.match(/source=\\?["']category\\?["']/) && db) {
          // It's fetching posts from a category
          try {
            const limitMatch = propsStr.match(/limit=\\?["'](\d+)\\?["']/);
            const limit = limitMatch ? parseInt(limitMatch[1]) : 10;
            
            const excludeMatch = propsStr.match(/exclude_current=\\?["'](true|false)\\?["']/);
            const excludeCurrent = excludeMatch ? excludeMatch[1] === 'true' : false;
            
            let query = `
              SELECT p.slug FROM Post p 
              JOIN PostCategory pc ON (CAST(p.id AS TEXT) = pc.postId OR p.id = pc.postId)
              JOIN BlogCategory c ON pc.categoryId = c.id 
              WHERE (p.status = 'published' OR p.status = 'publish')
              AND c.slug = ?
            `;
            
            let bindArgs: any[] = [shortcodeSlug];
            
            if (excludeCurrent) {
              const currentSlug = sourceUrl.split('/').filter(Boolean).pop();
              if (currentSlug) {
                query += ` AND p.slug != ?`;
                bindArgs.push(currentSlug);
              }
            }
            
            query += ` ORDER BY p.createdAt DESC LIMIT ?`;
            bindArgs.push(limit);
            
            let statement = db.prepare(query);
            statement = statement.bind(...bindArgs);
            const catRes = await statement.all();
            
            if (catRes && catRes.results) {
              for (const row of catRes.results) {
                processUrl('/' + row.slug, `[Shortcode: data_post (Cat: ${shortcodeSlug})]`);
              }
            }
          } catch(e) { console.error("DataPost DB query error", e); }
        } else if (name === 'data_post' && propsStr.includes('source=')) {
          // It's fetching posts from a tag, latest, or trending. We can ignore extracting links for now
          // as we don't have the logic to resolve tag -> posts or latest -> posts yet.
        } else {
          // Direct slugs
          const prefix = name === 'data_tour' ? '/tour/' : (name === 'data_country' ? '/country/' : '/');
          const slugs = shortcodeSlug.split(',').map(s => s.trim());
          for (const s of slugs) {
            processUrl(prefix + s, `[Shortcode: ${name}]`);
          }
        }
      }
    }
  }

  // 4. Parse Tiptap JSON links
  const tiptapRegex = /"href"\s*:\s*\\?(["'])(.*?)\\?\1/gi;
  while ((match = tiptapRegex.exec(html)) !== null) {
    const rawUrl = match[2].trim();
    if (!rawUrl.startsWith('#') && rawUrl.length > 0) {
      processUrl(rawUrl, '[Tiptap DB]');
    }
  }

  return links;
}
