const fs = require('fs');
const { execSync } = require('child_process');
const cheerio = require('cheerio');

// Lấy dữ liệu Matrix Link từ Local D1
function getMatrixLinks() {
  console.log('Fetching Matrix Link from D1 (Local)...');
  try {
    const rawOutput = execSync('npx wrangler d1 execute dulichcoguu_d1 --local --command="SELECT * FROM MatrixLink" --json', { encoding: 'utf-8' });
    const output = JSON.parse(rawOutput);
    const rows = output[0].results;
    
    let matrix = [];
    rows.forEach(row => {
      const anchors = row.anchorTexts.split(',').map(a => a.trim()).filter(a => a);
      anchors.forEach(anchor => {
        matrix.push({
          keyword: anchor,
          url: row.targetUrl
        });
      });
    });
    
    // Sort by length descending to match longer keywords first (e.g. "tour ladakh cao cấp" before "tour ladakh")
    return matrix.sort((a, b) => b.keyword.length - a.keyword.length);
  } catch (e) {
    console.error('Lỗi khi fetch Matrix Link:', e.message);
    process.exit(1);
  }
}

// Hàm chèn link an toàn vào chuỗi HTML bằng Regex (Dùng cho Astro / Text thô)
// Tránh thay thế bên trong các thẻ HTML (VD: href="...", alt="...")
function insertLinksRegex(html, matrix, currentUrl) {
  let updatedHtml = html;
  
  matrix.forEach(({ keyword, url }) => {
    if (url === currentUrl) return; // Không link tới chính bài hiện tại

    // Regex tìm keyword: không nằm trong thẻ HTML (giữa > và <), và độc lập (word boundary)
    // Cảnh báo: Regex này ở mức cơ bản, với Astro file phức tạp cần review lại.
    const regex = new RegExp(`(?<!<[^>]*)\\b(${keyword})\\b(?![^<]*>)`, 'gi');
    
    // Chỉ chèn 1 lần đầu tiên cho mỗi keyword trong file để tránh spam link (Tùy chọn SEO)
    let matchCount = 0;
    updatedHtml = updatedHtml.replace(regex, (match) => {
      if (matchCount === 0) {
        matchCount++;
        return `<a href="${url}">${match}</a>`;
      }
      return match; // Giữ nguyên các lần sau
    });
  });
  
  return updatedHtml;
}

async function processAstroFile(filePath, matrix) {
  console.log(`Processing Astro file: ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Xác định URL của bài hiện tại (Dựa vào tên file)
  const filename = filePath.split('/').pop().replace('.astro', '');
  const currentUrl = `/${filename}`;

  const updatedContent = insertLinksRegex(content, matrix, currentUrl);
  
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    console.log(`✅ Đã chèn link thành công vào: ${filePath}`);
  } else {
    console.log(`ℹ️ Không có từ khóa nào được tìm thấy hoặc cần thay thế.`);
  }
}

function main() {
  const targetFile = process.argv[2];
  if (!targetFile) {
    console.error('Vui lòng cung cấp đường dẫn file. VD: node scripts/auto-link-matrix.js src/pages/bai-viet.astro');
    process.exit(1);
  }

  const matrix = getMatrixLinks();
  console.log(`Loaded ${matrix.length} anchor texts from Matrix.`);

  if (targetFile.endsWith('.astro')) {
    processAstroFile(targetFile, matrix);
  } else {
    console.error('Hiện tại tool chỉ mới hỗ trợ test trên file .astro!');
  }
}

main();
