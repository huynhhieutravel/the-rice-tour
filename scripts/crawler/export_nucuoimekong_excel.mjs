import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "../..");

const SRC_DATA_DIR = path.join(ROOT_DIR, "data", "nucuoimekong");
const TARGET_DIR = path.join(ROOT_DIR, "nucuoimekong_blog_data");

async function exportData() {
  console.log(`[Start] Organizing dedicated folder: ${TARGET_DIR}`);

  // Create target directory structure
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  const allPostsDir = path.join(TARGET_DIR, "all_posts");
  if (!fs.existsSync(allPostsDir)) {
    fs.mkdirSync(allPostsDir, { recursive: true });
  }

  for (let ph = 1; ph <= 4; ph++) {
    const phDir = path.join(TARGET_DIR, `phase_${ph}`);
    if (!fs.existsSync(phDir)) {
      fs.mkdirSync(phDir, { recursive: true });
    }
  }

  // Load manifest
  const manifestPath = path.join(SRC_DATA_DIR, "manifest.json");
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Manifest not found at ${manifestPath}`);
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  const postsList = Object.values(manifest.posts).sort((a, b) => a.order - b.order);

  console.log(`[Process] Found ${postsList.length} posts. Copying files...`);

  // Copy files to target directories
  for (const post of postsList) {
    const orderStr = String(post.order).padStart(3, "0");
    const fileName = `${orderStr}_${post.slug}.md`;
    const srcPath = path.join(SRC_DATA_DIR, `phase_${post.phase}`, fileName);

    if (fs.existsSync(srcPath)) {
      const content = fs.readFileSync(srcPath, "utf-8");

      // Copy to phase dir
      const targetPhasePath = path.join(TARGET_DIR, `phase_${post.phase}`, fileName);
      fs.writeFileSync(targetPhasePath, content, "utf-8");

      // Copy to all_posts dir
      const targetAllPath = path.join(allPostsDir, fileName);
      fs.writeFileSync(targetAllPath, content, "utf-8");

      // Update post metadata with new paths
      post.localRelativePath = `all_posts/${fileName}`;
      post.localAbsolutePath = targetAllPath;
    }
  }

  // Save new manifest.json in TARGET_DIR
  fs.writeFileSync(
    path.join(TARGET_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );

  // -------------------------------------------------------------
  // CREATE EXCEL WORKBOOK
  // -------------------------------------------------------------
  console.log(`[Excel] Creating formatted Excel file...`);
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
    { header: "Mở File Markdown (.md)", key: "md_link", width: 35 },
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

  // Border style
  const thinBorder = {
    top: { style: "thin", color: { argb: "FFE2E8F0" } },
    left: { style: "thin", color: { argb: "FFE2E8F0" } },
    bottom: { style: "thin", color: { argb: "FFE2E8F0" } },
    right: { style: "thin", color: { argb: "FFE2E8F0" } }
  };

  // Add rows
  postsList.forEach((post, index) => {
    const orderStr = String(post.order).padStart(3, "0");
    const fileName = `${orderStr}_${post.slug}.md`;
    const catStr = (post.categories || []).join(", ") || "Chung";
    const dateStr = post.publishedDate ? post.publishedDate.split("T")[0] : "-";
    const localFileUri = `file://${post.localAbsolutePath}`;

    const rowData = {
      order: post.order,
      title: post.title,
      categories: catStr,
      published_date: dateStr,
      phase: `Phase ${post.phase}`,
      web_link: { text: "🔗 Mở Web Gốc", hyperlink: post.originalUrl, tooltip: post.originalUrl },
      md_link: { text: `📄 Mở ${fileName}`, hyperlink: localFileUri, tooltip: `Mở file: ${fileName}` },
      file_name: fileName,
      image_link: post.featuredMedia ? { text: "🖼️ Xem Ảnh", hyperlink: post.featuredMedia } : "",
      excerpt: (post.excerpt || "").substring(0, 300)
    };

    const row = sheet.addRow(rowData);
    row.height = 24;

    // Alternating background
    const isEven = index % 2 === 0;
    const bgArgb = isEven ? "FFFFFFFF" : "FFF8FAFC";

    row.eachCell((cell, colNumber) => {
      cell.border = thinBorder;
      cell.alignment = { vertical: "middle" };

      // Alignments
      if (colNumber === 1 || colNumber === 4 || colNumber === 5) {
        cell.alignment = { vertical: "middle", horizontal: "center" };
      }

      // Link styling
      if (colNumber === 6 || colNumber === 7 || colNumber === 9) {
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

  // Enable Auto-Filter
  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: postsList.length + 1, column: 10 }
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

  // Statistics by Phase
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

  // Statistics by Category
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
  console.log(`[Excel] Saved Excel file: ${excelPath}`);

  // -------------------------------------------------------------
  // CREATE CSV FILE
  // -------------------------------------------------------------
  console.log(`[CSV] Creating CSV file...`);
  const csvHeaders = ["STT", "Tiêu Đề Bài Viết", "Chuyên Mục", "Ngày Đăng", "Phase", "Link Bài Gốc", "Tên File Local", "Đường Dẫn File Markdown"];
  const csvRows = [csvHeaders.join(",")];

  postsList.forEach(post => {
    const orderStr = String(post.order).padStart(3, "0");
    const fileName = `${orderStr}_${post.slug}.md`;
    const catStr = `"${(post.categories || []).join("; ").replace(/"/g, '""')}"`;
    const titleStr = `"${post.title.replace(/"/g, '""')}"`;
    const dateStr = post.publishedDate ? post.publishedDate.split("T")[0] : "-";
    const webLink = `"${post.originalUrl}"`;
    const fileLocal = `"${fileName}"`;
    const filePath = `"${post.localAbsolutePath}"`;

    csvRows.push([
      post.order,
      titleStr,
      catStr,
      dateStr,
      `Phase ${post.phase}`,
      webLink,
      fileLocal,
      filePath
    ].join(","));
  });

  const csvPath = path.join(TARGET_DIR, "DANH_SACH_BLOG_NUCUOIMEKONG.csv");
  fs.writeFileSync(csvPath, "\uFEFF" + csvRows.join("\n"), "utf-8"); // UTF-8 BOM for Excel compatibility
  console.log(`[CSV] Saved CSV file: ${csvPath}`);

  // -------------------------------------------------------------
  // CREATE UPDATED INDEX.md
  // -------------------------------------------------------------
  console.log(`[Index] Creating comprehensive INDEX.md...`);
  let indexMd = `# Thư Viện Toàn Bộ 788 Bài Viết Blog Nụ Cười Mê Kông\n\n`;
  indexMd += `> 📅 **Cập nhật:** ${new Date().toLocaleString("vi-VN")}\n`;
  indexMd += `> 📊 **Tổng số bài:** **${total} bài viết** (Đầy đủ 100% nội dung Markdown & Link đối chiếu)\n`;
  indexMd += `> 📂 **Thư mục chứa:** \`thericetour/nucuoimekong_blog_data/\`\n\n`;

  indexMd += `### 📁 Liên Kết Nhanh Tài Liệu\n`;
  indexMd += `- 📊 **[Mở File Excel Tổng Hợp (DANH_SACH_BLOG_NUCUOIMEKONG.xlsx)](file://${excelPath})** *(Có bộ lọc, hyperlink mở web & mở file trực tiếp)*\n`;
  indexMd += `- 📑 **[Mở File CSV (DANH_SACH_BLOG_NUCUOIMEKONG.csv)](file://${csvPath})**\n`;
  indexMd += `- 📂 **[Mở Thư Mục Chứa Tất Cả 788 Bài (all_posts/)](file://${allPostsDir})**\n\n`;

  indexMd += `### 📊 Thống Kê Theo Phase\n`;
  for (let ph = 1; ph <= 4; ph++) {
    const c = phaseCounts[ph];
    const phFolder = path.join(TARGET_DIR, `phase_${ph}`);
    indexMd += `- **Phase ${ph}** (${c} bài): [Xem Thư Mục Phase ${ph}](file://${phFolder})\n`;
  }
  indexMd += `\n---\n\n`;

  indexMd += `## Bảng Tra Cứu Toàn Bộ Bài Viết (788 Bài)\n\n`;
  indexMd += `| STT | Tiêu Đề Bài Viết | Chuyên Mục | Ngày Đăng | Phase | Link Bài Gốc (Web) | File Markdown Local |\n`;
  indexMd += `| :---: | :--- | :--- | :---: | :---: | :---: | :--- |\n`;

  postsList.forEach(p => {
    const stt = p.order;
    const cleanTitle = p.title.replace(/\|/g, "\\|");
    const catStr = (p.categories || []).slice(0, 2).join(", ") || "Chung";
    const dateStr = p.publishedDate ? p.publishedDate.split("T")[0] : "-";
    const webLink = `[🔗 Xem Web](${p.originalUrl})`;
    const mdLink = `[📄 ${path.basename(p.localAbsolutePath)}](file://${p.localAbsolutePath})`;
    indexMd += `| ${stt} | ${cleanTitle} | ${catStr} | ${dateStr} | Phase ${p.phase} | ${webLink} | ${mdLink} |\n`;
  });

  const indexFilePath = path.join(TARGET_DIR, "INDEX.md");
  fs.writeFileSync(indexFilePath, indexMd, "utf-8");
  console.log(`[Index] Saved INDEX.md: ${indexFilePath}`);

  console.log(`\n======================================================`);
  console.log(`[SUCCESS] DEDICATED FOLDER READY AT:`);
  console.log(`${TARGET_DIR}`);
  console.log(`======================================================\n`);
}

exportData().catch(err => {
  console.error("Error exporting data:", err);
  process.exit(1);
});
