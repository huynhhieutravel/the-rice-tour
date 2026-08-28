import type { APIRoute } from 'astro';
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

export const prerender = false;

export const GET: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'media')) return apiError('Forbidden', 403);

  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = parseInt(url.searchParams.get('limit') || '80', 10);
  const search = url.searchParams.get('search') || '';
  const offset = (page - 1) * limit;

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) {
    return apiError("D1 database binding not found", 500);
  }

    let countQuery = "SELECT COUNT(*) as total FROM Media";
    let dataQuery = "SELECT * FROM Media ORDER BY createdAt DESC LIMIT ? OFFSET ?";
    const countParams: any[] = [];
    const dataParams: any[] = [limit, offset];

    if (search.trim() !== '') {
      // D1 restricts LIKE patterns to 50 characters. Truncate to 40 to be safe.
      let safeSearch = search.trim();
      if (safeSearch.length > 40) {
        safeSearch = safeSearch.substring(0, 40);
      }
      
      const lowerSearch = safeSearch.toLowerCase();
      const upperSearch = safeSearch.toUpperCase();
      const capSearch = safeSearch.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
      
      // Deduplicate patterns
      const patterns = Array.from(new Set([safeSearch, lowerSearch, upperSearch, capSearch])).map(s => `%${s}%`);
      
      const fields = ['filename', 'title', 'description', 'caption', 'altText'];
      const searchClauses: string[] = [];
      const searchParams: any[] = [];
      
      for (const pattern of patterns) {
        for (const field of fields) {
          searchClauses.push(`${field} LIKE ?`);
          searchParams.push(pattern);
        }
      }
      
      const whereClause = `WHERE ${searchClauses.join(' OR ')}`;
      
      countQuery = `SELECT COUNT(*) as total FROM Media ${whereClause}`;
      dataQuery = `SELECT * FROM Media ${whereClause} ORDER BY createdAt DESC LIMIT ? OFFSET ?`;
      
      countParams.push(...searchParams);
      dataParams.unshift(...searchParams);
    }

    const countRes = await d1Db.prepare(countQuery).bind(...countParams).first<{ total: number }>();
    const totalCount = countRes?.total || 0;

    const { results } = await d1Db.prepare(dataQuery).bind(...dataParams).all();

    // Format the response similarly to how the frontend uses it
    const mediaList = (results || []).map(item => {
      const d = new Date(item.createdAt || new Date().toISOString());
      const formattedDate = d.toLocaleDateString('vi-VN', { month: 'short', day: 'numeric', year: 'numeric' }) + ' ' + d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
      
      const cleanFilename = item.filename ? item.filename.replace(/^uploads\//, '') : '';
      return {
        id: item.id,
        src: item.url,
        name: cleanFilename,
        size: item.sizeBytes ? (item.sizeBytes / 1024).toFixed(1) + ' KB' : 'Unknown',
        dim: (item.width && item.height) ? `${item.width}×${item.height}` : '',
        alt: (item.altText || '').trim(),
        title: (item.title || cleanFilename).trim(),
        caption: (item.caption || '').trim(),
        desc: (item.description || '').trim(),
        date: item.createdAt || new Date().toISOString(),
        displayDate: formattedDate
      };
    });

  return apiSuccess({ 
    media: mediaList,
    pagination: {
      total: totalCount,
      page,
      limit,
      totalPages: Math.ceil(totalCount / limit)
    }
  });
});

// PATCH: Update media metadata (protected by middleware)
export const PATCH: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('edit', 'media')) return apiError('Bạn không có quyền sửa media.', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB Error', 500);

  const body = await request.json();
  const { id, altText, title, caption, description } = body;

  if (!id) return apiError('Missing id', 400);

  const existing = await d1Db.prepare("SELECT id FROM Media WHERE id = ?").bind(Number(id)).first();
  if (!existing) return apiError('Not found', 404);

  const setClauses: string[] = [];
  const values: any[] = [];
  if (altText !== undefined) { setClauses.push("altText = ?"); values.push(altText); }
  if (title !== undefined) { setClauses.push("title = ?"); values.push(title); }
  if (caption !== undefined) { setClauses.push("caption = ?"); values.push(caption); }
  if (description !== undefined) { setClauses.push("description = ?"); values.push(description); }

  if (setClauses.length === 0) return apiError('No fields to update', 400);

  values.push(Number(id));
  await d1Db.prepare(`UPDATE Media SET ${setClauses.join(', ')} WHERE id = ?`).bind(...values).run();

  return apiSuccess({ id });
});

// DELETE: Remove media records (protected by middleware)
export const DELETE: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('delete', 'media')) return apiError('Bạn không có quyền xóa media.', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB Error', 500);

  const body = await request.json();
  const { ids } = body;

  if (!ids || !Array.isArray(ids) || ids.length === 0) return apiError('Missing ids array', 400);

  const r2Endpoint = env?.R2_ENDPOINT || import.meta.env.R2_ENDPOINT;
  const r2AccessKeyId = env?.R2_ACCESS_KEY_ID || import.meta.env.R2_ACCESS_KEY_ID;
  const r2SecretAccessKey = env?.R2_SECRET_ACCESS_KEY || import.meta.env.R2_SECRET_ACCESS_KEY;
  const r2BucketName = env?.R2_BUCKET_NAME || import.meta.env.R2_BUCKET_NAME;

  let s3Client: S3Client | null = null;
  if (r2Endpoint && r2AccessKeyId && r2SecretAccessKey && r2BucketName) {
    s3Client = new S3Client({
      region: "auto",
      endpoint: r2Endpoint,
      credentials: {
        accessKeyId: r2AccessKeyId,
        secretAccessKey: r2SecretAccessKey,
      },
    });
  }

  const results = [];
  for (const id of ids) {
    try {
      const mediaItem = await d1Db.prepare("SELECT filename FROM Media WHERE id = ?").bind(Number(id)).first<{ filename: string }>();
      if (mediaItem?.filename && s3Client && r2BucketName) {
        try {
          const key = mediaItem.filename.startsWith('uploads/') ? mediaItem.filename : `uploads/${mediaItem.filename}`;
          await s3Client.send(new DeleteObjectCommand({ Bucket: r2BucketName, Key: key }));
        } catch (r2Err) {
          console.warn('R2 delete error for key:', mediaItem.filename, r2Err);
        }
      }
      await d1Db.prepare("DELETE FROM Media WHERE id = ?").bind(Number(id)).run();
      results.push({ id, status: 'deleted' });
    } catch (err: any) {
      results.push({ id, status: 'error', reason: err.message });
    }
  }

  return apiSuccess({ results });
});
