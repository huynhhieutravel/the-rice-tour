import { Document, Packer, Paragraph, TextRun, HeadingLevel, ExternalHyperlink } from "docx";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "../..");
const TARGET_DIR = path.join(ROOT_DIR, "nucuoimekong_blog_data");
const ALL_POSTS_DIR = path.join(TARGET_DIR, "all_posts");
const ALL_DOCX_DIR = path.join(TARGET_DIR, "all_docx");
const MANIFEST_PATH = path.join(TARGET_DIR, "manifest.json");

// Function to convert Markdown lines into docx Paragraphs
function markdownToDocxParagraphs(mdContent, postMeta) {
  const children = [];

  // Title
  children.push(new Paragraph({
    text: postMeta.title,
    heading: HeadingLevel.TITLE,
    spacing: { after: 200 }
  }));

  // Metadata block
  children.push(new Paragraph({
    children: [
      new TextRun({ text: "🔗 Link bài gốc đối chiếu: ", bold: true, color: "1E40AF" }),
      new ExternalHyperlink({
        children: [new TextRun({ text: postMeta.originalUrl, color: "2563EB", underline: {} })],
        link: postMeta.originalUrl
      })
    ],
    spacing: { after: 80 }
  }));

  children.push(new Paragraph({
    children: [
      new TextRun({ text: "🏷️ Chuyên mục: ", bold: true }),
      new TextRun({ text: (postMeta.categories || []).join(", ") || "Chung" }),
      new TextRun({ text: "   |   📅 Ngày đăng: ", bold: true }),
      new TextRun({ text: postMeta.publishedDate ? postMeta.publishedDate.split("T")[0] : "-" }),
      new TextRun({ text: "   |   📦 Phase: ", bold: true }),
      new TextRun({ text: `${postMeta.phase}` })
    ],
    spacing: { after: 240 }
  }));

  // Parse markdown lines
  const lines = mdContent.split("\n");
  let inFrontmatter = false;
  let frontmatterCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === "---") {
      frontmatterCount++;
      inFrontmatter = frontmatterCount < 2;
      continue;
    }
    if (inFrontmatter || !line) continue;

    // Skip redundant headers
    if (line.startsWith("# ") && line.includes(postMeta.title)) continue;
    if (line.startsWith("> 🔗 **Link bài gốc") || line.startsWith("> 🏷️ **Chuyên mục") || line.startsWith("> 🖼️ **Ảnh")) continue;

    if (line.startsWith("## ")) {
      children.push(new Paragraph({
        text: line.replace(/^##\s+/, ""),
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 240, after: 120 }
      }));
    } else if (line.startsWith("### ")) {
      children.push(new Paragraph({
        text: line.replace(/^###\s+/, ""),
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 200, after: 100 }
      }));
    } else if (line.startsWith("#### ")) {
      children.push(new Paragraph({
        text: line.replace(/^####\s+/, ""),
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 160, after: 80 }
      }));
    } else if (line.startsWith("> ")) {
      children.push(new Paragraph({
        children: [new TextRun({ text: line.replace(/^>\s+/, ""), italics: true, color: "4B5563" })],
        spacing: { before: 100, after: 100 }
      }));
    } else if (line.startsWith("- ")) {
      children.push(new Paragraph({
        children: [new TextRun({ text: line.replace(/^-\s+/, "") })],
        bullet: { level: 0 },
        spacing: { after: 60 }
      }));
    } else if (/^\d+\.\s+/.test(line)) {
      children.push(new Paragraph({
        children: [new TextRun({ text: line.replace(/^\d+\.\s+/, "") })],
        spacing: { after: 60 }
      }));
    } else if (line.startsWith("![") && line.includes("](")) {
      const match = line.match(/!\[(.*?)\]\((.*?)\)/);
      if (match) {
        const alt = match[1] || "Hình ảnh";
        const src = match[2];
        children.push(new Paragraph({
          children: [
            new TextRun({ text: `📷 [Ảnh minh họa: ${alt}] - `, italics: true, color: "6B7280" }),
            new ExternalHyperlink({
              children: [new TextRun({ text: "Xem ảnh gốc", color: "2563EB", underline: {} })],
              link: src
            })
          ],
          spacing: { before: 100, after: 100 }
        }));
      }
    } else {
      // Normal paragraph
      const runs = [];
      const parts = line.split(/(\*\*.*?\*\*)/g);
      for (const part of parts) {
        if (part.startsWith("**") && part.endsWith("**")) {
          runs.push(new TextRun({ text: part.slice(2, -2), bold: true }));
        } else if (part) {
          runs.push(new TextRun({ text: part }));
        }
      }
      children.push(new Paragraph({
        children: runs.length ? runs : [new TextRun({ text: line })],
        spacing: { after: 120 }
      }));
    }
  }

  return children;
}

async function main() {
  console.log(`[Start] Generating DOCX files and updating Excel spreadsheet...`);

  if (!fs.existsSync(ALL_DOCX_DIR)) {
    fs.mkdirSync(ALL_DOCX_DIR, { recursive: true });
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
  const postsList = Object.values(manifest.posts).sort((a, b) => a.order - b.order);

  console.log(`[DOCX] Processing ${postsList.length} posts into Word documents...`);

  // Batch generate .docx files
  let count = 0;
  for (const post of postsList) {
    count++;
    const orderStr = String(post.order).padStart(3, "0");
    const mdFileName = `${orderStr}_${post.slug}.md`;
    const docxFileName = `${orderStr}_${post.slug}.docx`;

    const mdPath = path.join(ALL_POSTS_DIR, mdFileName);
    const docxPath = path.join(ALL_DOCX_DIR, docxFileName);

    if (fs.existsSync(mdPath)) {
      const mdContent = fs.readFileSync(mdPath, "utf-8");
      const paragraphs = markdownToDocxParagraphs(mdContent, post);
      const doc = new Document({
        sections: [{ properties: {}, children: paragraphs }]
      });
      const buffer = await Packer.toBuffer(doc);
      fs.writeFileSync(docxPath, buffer);

      post.docxAbsolutePath = docxPath;
      post.docxFileName = docxFileName;
    }

    if (count % 100 === 0 || count === postsList.length) {
      console.log(`[DOCX] Created ${count}/${postsList.length} Word files...`);
    }
  }

  // Update manifest with docx paths
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf-8");

  // -------------------------------------------------------------
  // GENERATE EXCEL WITH DOCX & MD COLUMNS
  // -------------------------------------------------------------
  console.log(`[Excel] Updating Excel file with DOCX & MD columns...`);
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "The Rice Tour Antigravity";
  workbook.created = new Date();

  // Sheet 1: Danh sách bài viết
  const sheet = workbook.addWorksheet("Danh Sách Blog (788 Bài)", {
    views: [{ state: "frozen", xSplit: 0, ySplit: 1 }]
  });

  sheet.columns = [
    { header: "STT", key: "order", width: 8 },
    { header: "Tiêu Đề Bài Viết", key: "title", width: 55 },
    { header: "Chuyên Mục", key: "categories", width: 28 },
    { header: "Ngày Đăng", key: "published_date", width: 14 },
    { header: "Phase", key: "phase", width: 10 },
    { header: "Link Bài Gốc (Web)", key: "web_link", width: 20 },
    { header: "Mở File Word (.docx)", key: "docx_link", width: 32 },
    { header: "Mở File Markdown (.md)", key: "md_link", width: 32 },
    { header: "Tên File Local", key: "file_name", width: 45 },
    { header: "Link Ảnh Đại Diện (CDN)", key: "image_link", width: 30 },
    { header: "Tóm Tắt (Excerpt)", key: "excerpt", width: 60 }
  ];

  // Header style
  const headerRow = sheet.getRow(1);
  headerRow.height = 32;
  headerRow.font = { name: "Segoe UI", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
  headerRow.alignment = { vertical: "middle", horizontal: "center" };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF1E40AF" } // Navy Blue
  };

  const thinBorder = {
    top: { style: "thin", color: { argb: "FFE2E8F0" } },
    left: { style: "thin", color: { argb: "FFE2E8F0" } },
    bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
    right: { style: "thin", color: { argb: "FFE2E8F0" } }
  };

  postsList.forEach((post, index) => {
    const orderStr = String(post.order).padStart(3, "0");
    const mdFileName = `${orderStr}_${post.slug}.md`;
    const docxFileName = `${orderStr}_${post.slug}.docx`;
    const catStr = (post.categories || []).join(", ") || "Chung";
    const dateStr = post.publishedDate ? post.publishedDate.split("T")[0] : "-";
    const mdFileUri = `file://${path.join(ALL_POSTS_DIR, mdFileName)}`;
    const docxFileUri = `file://${path.join(ALL_DOCX_DIR, docxFileName)}`;

    const rowData = {
      order: post.order,
      title: post.title,
      categories: catStr,
      published_date: dateStr,
      phase: `Phase ${post.phase}`,
      web_link: { text: "🔗 Mở Web Gốc", hyperlink: post.originalUrl, tooltip: post.originalUrl },
      docx_link: { text: `📄 Mở Word (.docx)`, hyperlink: docxFileUri, tooltip: `Mở file: ${docxFileName}` },
      md_link: { text: `📝 Mở Markdown (.md)`, hyperlink: mdFileUri, tooltip: `Mở file: ${mdFileName}` },
      file_name: mdFileName,
      image_link: post.featuredMedia ? { text: "🖼️ Xem Ảnh", hyperlink: post.featuredMedia } : "",
      excerpt: (post.excerpt || "").substring(0, 300)
    };

    const row = sheet.addRow(rowData);
    row.height = 24;

    const isEven = index % 2 === 0;
    const bgArgb = isEven ? "FFFFFFFF" : "FFF8FAFC";

    row.eachCell((cell, colNumber) => {
      cell.border = thinBorder;
      cell.alignment = { vertical: "middle" };

      // Centered columns
      if (colNumber === 1 || colNumber === 4 || colNumber === 5) {
        cell.alignment = { vertical: "middle", horizontal: "center" };
      }

      // Hyperlink columns
      if (colNumber === 6 || colNumber === 7 || colNumber === 8 || colNumber === 10) {
        if (cell.value && cell.value.text) {
          cell.font = { name: "Segoe UI", size: 10, color: { argb: "FF2563EB" }, underline: true };
          cell.alignment = { vertical: "middle", horizontal: "center" };
        }
      } else {
        cell.font = { name: "Segoe UI", size: 10 };
      }

      if (!cell.fill) {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: bgArgb }
        };
      }
    });
  });

  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: postsList.length + 1, column: 11 }
  };

  // Sheet 2: Thống kê tổng hợp (Summary)
  const summarySheet = workbook.addWorksheet("Thống Kê Tổng Hợp");
  summarySheet.views = [{ showGridLines: true }];

  summarySheet.columns = [
    { header: "Nhóm / Tiêu Chí", key: "group", width: 35 },
    { header: "Số Lượng Bài Viết", key: "count", width: 22 },
    { header: "Tỷ Lệ (%)", key: "percent", width: 18 }
  ];

  const sumHeaderRow = summarySheet.getRow(1);
  sumHeaderRow.height = 30;
  sumHeaderRow.font = { name: "Segoe UI", size: 11, bold: true, color: { argb: "FFFFFFFF" } };
  sumHeaderRow.alignment = { vertical: "middle", horizontal: "center" };
  sumHeaderRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF0D9488" } // Teal
  };

  const total = postsList.length;
  summarySheet.addRow({ group: "TỔNG SỐ BÀI VIẾT ĐÃ TẢI", count: total, percent: "100%" });

  const phaseCounts = { 1: 0, 2: 0, 3: 0, 4: 0 };
  postsList.forEach(p => { phaseCounts[p.phase] = (phaseCounts[p.phase] || 0) + 1; });

  summarySheet.addRow({ group: "--- THEO PHASE ---", count: "", percent: "" });
  for (let ph = 1; ph <= 4; ph++) {
    const c = phaseCounts[ph];
    const pct = ((c / total) * 100).toFixed(1) + "%";
    summarySheet.addRow({ group: `Phase ${ph}`, count: c, percent: pct });
  }

  const catCounts = {};
  postsList.forEach(p => {
    const cat = (p.categories && p.categories[0]) || "Chung";
    catCounts[cat] = (catCounts[cat] || 0) + 1;
  });

  summarySheet.addRow({ group: "--- THEO CHUYÊN MỤC ---", count: "", percent: "" });
  Object.keys(catCounts).sort((a, b) => catCounts[b] - catCounts[a]).forEach(cat => {
    const c = catCounts[cat];
    const pct = ((c / total) * 100).toFixed(1) + "%";
    summarySheet.addRow({ group: cat, count: c, percent: pct });
  });

  summarySheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      row.height = 22;
      row.eachCell(cell => {
        cell.border = thinBorder;
        cell.font = { name: "Segoe UI", size: 10 };
      });
    }
  });

  const excelPath = path.join(TARGET_DIR, "DANH_SACH_BLOG_NUCUOIMEKONG.xlsx");
  await workbook.xlsx.writeFile(excelPath);
  console.log(`[Excel] Saved Excel file with DOCX column: ${excelPath}`);

  // -------------------------------------------------------------
  // UPDATE CSV FILE
  // -------------------------------------------------------------
  const csvHeaders = ["STT", "Tiêu Đề Bài Viết", "Chuyên Mục", "Ngày Đăng", "Phase", "Link Bài Gốc", "Đường Dẫn File Word (.docx)", "Đường Dẫn File Markdown (.md)"];
  const csvRows = [csvHeaders.join(",")];

  postsList.forEach(post => {
    const orderStr = String(post.order).padStart(3, "0");
    const mdFileName = `${orderStr}_${post.slug}.md`;
    const docxFileName = `${orderStr}_${post.slug}.docx`;
    const catStr = `"${(post.categories || []).join("; ").replace(/"/g, '""')}"`;
    const titleStr = `"${post.title.replace(/"/g, '""')}"`;
    const dateStr = post.publishedDate ? post.publishedDate.split("T")[0] : "-";
    const webLink = `"${post.originalUrl}"`;
    const docxPath = `"${path.join(ALL_DOCX_DIR, docxFileName)}"`;
    const mdPath = `"${path.join(ALL_POSTS_DIR, mdFileName)}"`;

    csvRows.push([
      post.order,
      titleStr,
      catStr,
      dateStr,
      `Phase ${post.phase}`,
      webLink,
      docxPath,
      mdPath
    ].join(","));
  });

  const csvPath = path.join(TARGET_DIR, "DANH_SACH_BLOG_NUCUOIMEKONG.csv");
  fs.writeFileSync(csvPath, "\uFEFF" + csvRows.join("\n"), "utf-8");

  // -------------------------------------------------------------
  // UPDATE INDEX.md
  // -------------------------------------------------------------
  let indexMd = `# Thư Viện Toàn Bộ 788 Bài Viết Blog Nụ Cười Mê Kông\n\n`;
  indexMd += `> 📅 **Cập nhật:** ${new Date().toLocaleString("vi-VN")}\n`;
  indexMd += `> 📊 **Tổng số bài:** **${total} bài viết** (Đầy đủ file Word **.docx**, file **.md** & Link bài gốc)\n`;
  indexMd += `> 📂 **Thư mục chứa:** \`thericetour/nucuoimekong_blog_data/\`\n\n`;

  indexMd += `### 📁 Liên Kết Nhanh Tài Liệu\n`;
  indexMd += `- 📊 **[Mở File Excel Tổng Hợp (DANH_SACH_BLOG_NUCUOIMEKONG.xlsx)](file://${excelPath})** *(Đã có cột mở trực tiếp file Word .docx & Markdown .md)*\n`;
  indexMd += `- 📑 **[Mở File CSV (DANH_SACH_BLOG_NUCUOIMEKONG.csv)](file://${csvPath})**\n`;
  indexMd += `- 📘 **[Mở Thư Mục Chứa Tất Cả 788 File Word (.docx)](file://${ALL_DOCX_DIR})**\n`;
  indexMd += `- 📄 **[Mở Thư Mục Chứa Tất Cả 788 File Markdown (.md)](file://${ALL_POSTS_DIR})**\n\n`;

  indexMd += `### 📊 Thống Kê Theo Phase\n`;
  for (let ph = 1; ph <= 4; ph++) {
    const c = phaseCounts[ph];
    const phFolder = path.join(TARGET_DIR, `phase_${ph}`);
    indexMd += `- **Phase ${ph}** (${c} bài): [Xem Thư Mục Phase ${ph}](file://${phFolder})\n`;
  }
  indexMd += `\n---\n\n`;

  indexMd += `## Bảng Tra Cứu Toàn Bộ Bài Viết (788 Bài)\n\n`;
  indexMd += `| STT | Tiêu Đề Bài Viết | Chuyên Mục | Ngày Đăng | Phase | Link Bài Gốc | File Word (.docx) | File Markdown (.md) |\n`;
  indexMd += `| :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: |\n`;

  postsList.forEach(p => {
    const stt = p.order;
    const cleanTitle = p.title.replace(/\|/g, "\\|");
    const catStr = (p.categories || []).slice(0, 2).join(", ") || "Chung";
    const dateStr = p.publishedDate ? p.publishedDate.split("T")[0] : "-";
    const orderStr = String(p.order).padStart(3, "0");
    const mdFileName = `${orderStr}_${p.slug}.md`;
    const docxFileName = `${orderStr}_${p.slug}.docx`;
    const mdPath = path.join(ALL_POSTS_DIR, mdFileName);
    const docxPath = path.join(ALL_DOCX_DIR, docxFileName);

    const webLink = `[🔗 Web](${p.originalUrl})`;
    const docxLink = `[📘 Word](file://${docxPath})`;
    const mdLink = `[📝 MD](file://${mdPath})`;
    indexMd += `| ${stt} | ${cleanTitle} | ${catStr} | ${dateStr} | Phase ${p.phase} | ${webLink} | ${docxLink} | ${mdLink} |\n`;
  });

  const indexFilePath = path.join(TARGET_DIR, "INDEX.md");
  fs.writeFileSync(indexFilePath, indexMd, "utf-8");

  console.log(`\n======================================================`);
  console.log(`[SUCCESS] GENERATED ALL 788 DOCX FILES & UPDATED EXCEL!`);
  console.log(`======================================================\n`);
}

main().catch(err => {
  console.error("Error in main:", err);
  process.exit(1);
});
