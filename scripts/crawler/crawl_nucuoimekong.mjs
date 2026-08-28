import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "../..");
const DATA_DIR = path.join(ROOT_DIR, "data", "nucuoimekong");
const MANIFEST_FILE = path.join(DATA_DIR, "manifest.json");
const INDEX_FILE = path.join(DATA_DIR, "INDEX.md");

const BASE_API = "https://nucuoimekong.com/wp-json/wp/v2/posts";

// Decode HTML entities
function decodeHtmlEntities(str) {
  if (!str) return "";
  const $ = cheerio.load(`<span>${str}</span>`);
  return $("span").text().trim();
}

// Convert HTML to clean Markdown
function htmlToMarkdown(html) {
  if (!html) return "";
  const $ = cheerio.load(html, { decodeEntities: false });

  // Remove useless tags
  $("script, style, noscript, svg, form, iframe").remove();
  $(".sharedaddy, .sd-sharing, .table-of-contents, #toc_container, .ez-toc-v2_0_72").remove();

  // Process figures & images
  $("figure").each((_, fig) => {
    const img = $(fig).find("img");
    const caption = $(fig).find("figcaption").text().trim();
    const src = img.attr("src") || img.attr("data-src") || "";
    const alt = img.attr("alt") || caption || "Image";
    let md = `\n\n![${alt}](${src})\n`;
    if (caption) {
      md += `*${caption}*\n\n`;
    }
    $(fig).replaceWith(md);
  });

  $("img").each((_, img) => {
    const src = $(img).attr("src") || $(img).attr("data-src") || "";
    const alt = $(img).attr("alt") || "Image";
    $(img).replaceWith(`\n\n![${alt}](${src})\n\n`);
  });

  // Headings
  $("h1").each((_, el) => $(el).replaceWith(`\n\n# ${decodeHtmlEntities($(el).text())}\n\n`));
  $("h2").each((_, el) => $(el).replaceWith(`\n\n## ${decodeHtmlEntities($(el).text())}\n\n`));
  $("h3").each((_, el) => $(el).replaceWith(`\n\n### ${decodeHtmlEntities($(el).text())}\n\n`));
  $("h4").each((_, el) => $(el).replaceWith(`\n\n#### ${decodeHtmlEntities($(el).text())}\n\n`));
  $("h5").each((_, el) => $(el).replaceWith(`\n\n##### ${decodeHtmlEntities($(el).text())}\n\n`));
  $("h6").each((_, el) => $(el).replaceWith(`\n\n###### ${decodeHtmlEntities($(el).text())}\n\n`));

  // Links
  $("a").each((_, el) => {
    const href = $(el).attr("href") || "";
    const text = decodeHtmlEntities($(el).text()) || href;
    $(el).replaceWith(`[${text}](${href})`);
  });

  // Bold / Italic / Strikethrough
  $("strong, b").each((_, el) => $(el).replaceWith(`**${$(el).text()}**`));
  $("em, i").each((_, el) => $(el).replaceWith(`*${$(el).text()}*`));
  $("del, s, strike").each((_, el) => $(el).replaceWith(`~~${$(el).text()}~~`));
  $("code").each((_, el) => $(el).replaceWith(`\`${$(el).text()}\``));

  // Tables
  $("table").each((_, tbl) => {
    let tableMd = "\n\n";
    const rows = $(tbl).find("tr");
    rows.each((rowIndex, tr) => {
      const cells = $(tr).find("th, td");
      if (cells.length === 0) return;
      const cellTexts = [];
      cells.each((_, td) => {
        cellTexts.push($(td).text().trim().replace(/\|/g, "\\|").replace(/\n/g, " "));
      });
      tableMd += "| " + cellTexts.join(" | ") + " |\n";
      if (rowIndex === 0) {
        tableMd += "| " + cellTexts.map(() => "---").join(" | ") + " |\n";
      }
    });
    tableMd += "\n";
    $(tbl).replaceWith(tableMd);
  });

  // Lists
  $("ul > li").each((_, li) => $(li).replaceWith(`- ${$(li).text().trim()}\n`));
  $("ol > li").each((i, li) => $(li).replaceWith(`${i + 1}. ${$(li).text().trim()}\n`));
  $("ul, ol").each((_, list) => $(list).replaceWith(`\n\n${$(list).text().trim()}\n\n`));

  // Paragraphs & Blockquotes
  $("p").each((_, p) => $(p).replaceWith(`\n\n${$(p).text().trim()}\n\n`));
  $("blockquote").each((_, bq) => $(bq).replaceWith(`\n\n> ${$(bq).text().trim().replace(/\n/g, "\n> ")}\n\n`));
  $("hr").each((_, hr) => $(hr).replaceWith(`\n\n---\n\n`));

  return $.text()
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Fetch single page of posts with retry
async function fetchPostsPage(page, perPage = 100, retries = 3) {
  const url = `${BASE_API}?page=${page}&per_page=${perPage}&_embed=1`;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`[Fetch] Fetching page ${page} (per_page=${perPage}, attempt ${attempt})...`);
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const totalPosts = response.headers.get("x-wp-total");
      const totalPages = response.headers.get("x-wp-totalpages");
      const posts = await response.json();
      return { posts, totalPosts: Number(totalPosts), totalPages: Number(totalPages) };
    } catch (err) {
      console.error(`[Error] Failed to fetch page ${page}: ${err.message}`);
      if (attempt < retries) {
        console.log(`[Retry] Waiting 2 seconds before retry...`);
        await new Promise(r => setTimeout(r, 2000));
      } else {
        throw err;
      }
    }
  }
}

// Load existing manifest if exists
function loadManifest() {
  if (fs.existsSync(MANIFEST_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf-8"));
    } catch (e) {
      return { posts: {}, updatedAt: new Date().toISOString() };
    }
  }
  return { posts: {}, updatedAt: new Date().toISOString() };
}

// Save manifest
function saveManifest(manifest) {
  manifest.updatedAt = new Date().toISOString();
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2), "utf-8");
}

// Generate INDEX.md
function generateIndexMarkdown(manifest) {
  const postsList = Object.values(manifest.posts).sort((a, b) => a.order - b.order);
  const total = postsList.length;

  // Group by phase
  const phases = {};
  postsList.forEach(p => {
    const phaseKey = `Phase ${p.phase}`;
    if (!phases[phaseKey]) phases[phaseKey] = 0;
    phases[phaseKey]++;
  });

  // Group by category
  const categories = {};
  postsList.forEach(p => {
    const cat = p.categories[0] || "Khác";
    categories[cat] = (categories[cat] || 0) + 1;
  });

  let md = `# Mục Lục Đối Chiếu Toàn Bộ Blog Nụ Cười Mê Kông\n\n`;
  md += `> 📅 **Cập nhật:** ${new Date().toLocaleString("vi-VN")}\n`;
  md += `> 📊 **Tổng số bài đã tải:** **${total} bài**\n\n`;

  md += `### Thống Kê Theo Phase\n`;
  Object.keys(phases).sort().forEach(k => {
    md += `- **${k}**: ${phases[k]} bài\n`;
  });
  md += `\n`;

  md += `### Thống Kê Theo Chuyên Mục\n`;
  Object.keys(categories).sort((a, b) => categories[b] - categories[a]).forEach(cat => {
    md += `- **${cat}**: ${categories[cat]} bài\n`;
  });
  md += `\n---\n\n`;

  md += `## Bảng Danh Sách Bài Viết & Link Đối Chiếu\n\n`;
  md += `| STT | Tiêu Đề Bài Viết | Chuyên Mục | Ngày Đăng | Link Bài Gốc | File Markdown Local |\n`;
  md += `| :---: | :--- | :--- | :---: | :---: | :---: |\n`;

  postsList.forEach(p => {
    const stt = p.order;
    const cleanTitle = p.title.replace(/\|/g, "\\|");
    const catStr = (p.categories || []).slice(0, 2).join(", ") || "Chung";
    const dateStr = p.publishedDate ? p.publishedDate.split("T")[0] : "-";
    const originalLink = `[Xem Web](${p.originalUrl})`;
    const localLink = `[${path.basename(p.localPath)}](file://${p.localPath})`;
    md += `| ${stt} | ${cleanTitle} | ${catStr} | ${dateStr} | ${originalLink} | ${localLink} |\n`;
  });

  fs.writeFileSync(INDEX_FILE, md, "utf-8");
  console.log(`[Index] Updated INDEX.md with ${total} posts.`);
}

// Process and save posts
function processAndSavePosts(posts, startingOrder, phaseNum, manifest) {
  const phaseDir = path.join(DATA_DIR, `phase_${phaseNum}`);
  if (!fs.existsSync(phaseDir)) {
    fs.mkdirSync(phaseDir, { recursive: true });
  }

  let currentOrder = startingOrder;

  for (const post of posts) {
    currentOrder++;
    const id = post.id;
    const title = decodeHtmlEntities(post.title?.rendered || "Bài viết không có tiêu đề");
    const slug = post.slug || `post-${id}`;
    const originalUrl = post.link;
    const publishedDate = post.date;
    const modifiedDate = post.modified;

    // Extract categories & tags from _embedded
    const terms = post._embedded?.["wp:term"] || [];
    const categories = (terms[0] || []).map(t => decodeHtmlEntities(t.name));
    const tags = (terms[1] || []).map(t => decodeHtmlEntities(t.name));

    // Featured media
    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

    // Excerpt
    const excerpt = decodeHtmlEntities(post.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "").trim();

    // Content Markdown
    const contentMarkdown = htmlToMarkdown(post.content?.rendered || "");

    const orderStr = String(currentOrder).padStart(3, "0");
    const fileName = `${orderStr}_${slug}.md`;
    const filePath = path.join(phaseDir, fileName);

    // Frontmatter & Markdown structure
    let postMd = `---\n`;
    postMd += `id: ${id}\n`;
    postMd += `order: ${currentOrder}\n`;
    postMd += `title: "${title.replace(/"/g, '\\"')}"\n`;
    postMd += `slug: "${slug}"\n`;
    postMd += `original_url: "${originalUrl}"\n`;
    postMd += `published_date: "${publishedDate}"\n`;
    postMd += `modified_date: "${modifiedDate}"\n`;
    postMd += `categories: ${JSON.stringify(categories)}\n`;
    postMd += `tags: ${JSON.stringify(tags)}\n`;
    postMd += `featured_image: "${featuredMedia}"\n`;
    postMd += `phase: ${phaseNum}\n`;
    postMd += `---\n\n`;

    postMd += `# ${title}\n\n`;
    postMd += `> 🔗 **Link bài gốc đối chiếu:** [${originalUrl}](${originalUrl})  \n`;
    postMd += `> 🏷️ **Chuyên mục:** ${categories.join(", ") || "Chung"} | 📅 **Ngày đăng:** ${publishedDate ? publishedDate.split("T")[0] : "-"}  \n`;
    if (featuredMedia) {
      postMd += `> 🖼️ **Ảnh đại diện:** ![${title}](${featuredMedia})\n`;
    }
    postMd += `\n---\n\n`;

    if (excerpt) {
      postMd += `## Tóm tắt\n\n${excerpt}\n\n---\n\n`;
    }

    postMd += `## Nội dung bài viết\n\n`;
    postMd += contentMarkdown;
    postMd += `\n`;

    fs.writeFileSync(filePath, postMd, "utf-8");

    // Add to manifest
    manifest.posts[id] = {
      id,
      order: currentOrder,
      title,
      slug,
      originalUrl,
      publishedDate,
      modifiedDate,
      categories,
      tags,
      featuredMedia,
      phase: phaseNum,
      localPath: filePath
    };
  }

  return currentOrder;
}

// Main execution function
async function run() {
  const args = process.argv.slice(2);
  const phaseArg = args.find(a => a.startsWith("--phase="));
  const pageArg = args.find(a => a.startsWith("--page="));
  const allArg = args.includes("--all");

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const manifest = loadManifest();

  // Mapping phases to WP REST API pages (per_page=100)
  // Phase 1: Pages 1, 2 (Posts 1 - 200)
  // Phase 2: Pages 3, 4 (Posts 201 - 400)
  // Phase 3: Pages 5, 6 (Posts 401 - 600)
  // Phase 4: Pages 7, 8 (Posts 601 - 788)
  const phasePages = {
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8]
  };

  let pagesToRun = [];
  let phaseNum = 1;

  if (allArg) {
    console.log(`[All] Running ALL 4 Phases (Pages 1 to 8)...`);
    let order = 0;
    for (let ph = 1; ph <= 4; ph++) {
      console.log(`\n========================================`);
      console.log(`>>> STARTING PHASE ${ph}`);
      console.log(`========================================\n`);
      for (const page of phasePages[ph]) {
        const { posts, totalPosts } = await fetchPostsPage(page, 100);
        console.log(`[Phase ${ph}] Processing page ${page} (${posts.length} posts)...`);
        order = processAndSavePosts(posts, order, ph, manifest);
      }
      saveManifest(manifest);
      generateIndexMarkdown(manifest);
    }
    console.log(`\n[Done] ALL 4 Phases finished! Total saved posts: ${Object.keys(manifest.posts).length}`);
    return;
  }

  if (phaseArg) {
    phaseNum = parseInt(phaseArg.split("=")[1], 10);
    pagesToRun = phasePages[phaseNum];
    if (!pagesToRun) {
      console.error(`Invalid phase: ${phaseNum}. Must be 1, 2, 3, or 4.`);
      process.exit(1);
    }
  } else if (pageArg) {
    const p = parseInt(pageArg.split("=")[1], 10);
    pagesToRun = [p];
    phaseNum = p <= 2 ? 1 : p <= 4 ? 2 : p <= 6 ? 3 : 4;
  } else {
    // Default: Run Phase 1
    phaseNum = 1;
    pagesToRun = phasePages[1];
  }

  console.log(`[Start] Running Phase ${phaseNum} (Pages: ${pagesToRun.join(", ")})...`);

  // Calculate starting order for this phase
  const startingOrder = (pagesToRun[0] - 1) * 100;
  let currentOrder = startingOrder;

  for (const page of pagesToRun) {
    const { posts, totalPosts, totalPages } = await fetchPostsPage(page, 100);
    console.log(`[Phase ${phaseNum}] Page ${page}/${totalPages}: Received ${posts.length} posts (Total on server: ${totalPosts})`);
    currentOrder = processAndSavePosts(posts, currentOrder, phaseNum, manifest);
  }

  saveManifest(manifest);
  generateIndexMarkdown(manifest);

  console.log(`\n[Success] Phase ${phaseNum} completed! Saved to data/nucuoimekong/phase_${phaseNum}/`);
  console.log(`[Summary] Total posts in manifest: ${Object.keys(manifest.posts).length}`);
}

run().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
