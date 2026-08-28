const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const cheerio = require('cheerio');

const PAGES_DIR = path.join(__dirname, '../src/pages');
const TMP_SQL_FILE = path.join(__dirname, '../.wrangler/state/v3/d1/temp_tracker.sql');

// Tiện ích gom file đệ quy
function getFilesRecursively(directory, fileList = []) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFilesRecursively(filePath, fileList);
    } else {
      if (filePath.endsWith('.astro')) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

// Lọc Internal Links
function isInternalLink(url) {
  if (!url) return false;
  if (url.startsWith('/')) return true;
  if (url.startsWith('https://fittour.vn') || url.startsWith('https://www.fittour.vn')) return true;
  return false;
}

// Xử lý làm gọn URL để tracking
function normalizeUrl(url) {
  if (url.startsWith('https://fittour.vn')) return url.replace('https://fittour.vn', '');
  if (url.startsWith('https://www.fittour.vn')) return url.replace('https://www.fittour.vn', '');
  return url;
}

// Scan files
console.log('Bắt đầu quét Internal Links trong thư mục src/pages...');
const astroFiles = getFilesRecursively(PAGES_DIR);

let trackedLinks = [];

astroFiles.forEach(file => {
  const relativePath = file.replace(PAGES_DIR, '').replace('.astro', '');
  const sourceUrl = relativePath.endsWith('/index') ? relativePath.replace('/index', '') || '/' : relativePath;
  
  // Bỏ qua các trang API hoặc Admin
  if (sourceUrl.startsWith('/api/') || sourceUrl.startsWith('/admin/')) return;

  const content = fs.readFileSync(file, 'utf-8');
  // Lưu ý: Cheerio parse Astro file có thể làm hỏng cú pháp gốc, nhưng ở đây chúng ta CHỈ ĐỌC (không lưu lại file) nên rất an toàn.
  const $ = cheerio.load(content);
  
  $('a').each((i, el) => {
    const target = $(el).attr('href');
    const text = $(el).text().trim().substring(0, 100); // Lấy tối đa 100 ký tự text
    
    if (isInternalLink(target) && text) {
      trackedLinks.push({
        sourceUrl,
        targetUrl: normalizeUrl(target),
        anchorText: text,
        type: 'auto' // Mặc định báo cáo là link có trong file tĩnh
      });
    }
  });
});

console.log(`Đã quét được ${trackedLinks.length} Internal Links. Đang cập nhật vào D1...`);

// Tạo lệnh SQL Bulk Insert
if (trackedLinks.length > 0) {
  // Xoá sạch data cũ để cập nhật lại (hoặc có thể dùng DELETE thay vì truncate)
  let sqlQueries = `DELETE FROM InternalLinkTracker;\n`;
  
  trackedLinks.forEach(link => {
    // Escape quotes
    const s = link.sourceUrl.replace(/'/g, "''");
    const t = link.targetUrl.replace(/'/g, "''");
    const a = link.anchorText.replace(/'/g, "''");
    sqlQueries += `INSERT INTO InternalLinkTracker (sourceUrl, targetUrl, anchorText, type) VALUES ('${s}', '${t}', '${a}', 'auto');\n`;
  });
  
  // Tạo thư mục tạm nếu chưa có
  const tmpDir = path.dirname(TMP_SQL_FILE);
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }

  fs.writeFileSync(TMP_SQL_FILE, sqlQueries, 'utf-8');
  
  try {
    const isRemote = process.argv.includes('--remote');
    const flag = isRemote ? '--remote' : '--local';
    console.log(`Executing SQL queries on ${isRemote ? 'Remote' : 'Local'} D1...`);
    
    if (isRemote) {
      // Cloudflare User Token có thể lỗi /import API khi dùng --file, nên ta dùng --command với toàn bộ nội dung file
      const rawSql = fs.readFileSync(TMP_SQL_FILE, 'utf-8');
      execSync(`npx wrangler d1 execute dulichcoguu_d1 ${flag} --command="${rawSql}"`, { stdio: 'inherit' });
    } else {
      execSync(`npx wrangler d1 execute dulichcoguu_d1 ${flag} --file="${TMP_SQL_FILE}"`, { stdio: 'inherit' });
    }
    
    console.log('✅ Cập nhật Tracker thành công!');
  } catch (error) {
    console.error('❌ Lỗi khi cập nhật DB:', error.message);
  } finally {
    if (fs.existsSync(TMP_SQL_FILE)) {
      fs.unlinkSync(TMP_SQL_FILE); // Xoá file SQL tạm
    }
  }
} else {
  console.log('Không có link nào được tìm thấy.');
}
