import { execSync } from 'child_process';
const DB_NAME = 'dulichcoguu-d1';

console.log("=== SEO Health ===");
for (const table of ['Page', 'Post', 'Tour']) {
  const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(*) as cnt FROM ${table} WHERE (seoTitle IS NULL OR seoTitle = '') AND status = 'publish';"`);
  const missingSeo = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`${table} without SEO Title: ${missingSeo}`);
}

console.log("\n=== Relational Integrity ===");
// Posts without a category
const outPosts = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(p.id) as cnt FROM Post p LEFT JOIN PostCategory pc ON p.id = pc.postId WHERE pc.postId IS NULL AND p.status = 'publish';"`);
console.log(`Published Posts without Category: ${JSON.parse(outPosts.toString())[0].results[0].cnt}`);

// Tours without a country
const outTours = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(t.id) as cnt FROM Tour t LEFT JOIN TourCountry tc ON t.id = tc.tourId WHERE tc.tourId IS NULL AND t.status = 'publish';"`);
console.log(`Published Tours without Country: ${JSON.parse(outTours.toString())[0].results[0].cnt}`);

// Missing Featured Image
for (const table of ['Page', 'Post', 'Tour']) {
  const outImg = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(*) as cnt FROM ${table} WHERE (featuredImage IS NULL OR featuredImage = '') AND status = 'publish';"`);
  console.log(`${table} without Featured Image: ${JSON.parse(outImg.toString())[0].results[0].cnt}`);
}
