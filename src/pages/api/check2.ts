import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from './utils';

export const GET = withErrorHandler(async ({ request }) => {
  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);

  await db.exec(`UPDATE Tour SET format = 'astro' WHERE slug = 'tour-alaska-8n7d'`);
  
  return apiSuccess({ message: "Updated format to astro for tour-alaska-8n7d." });
});
