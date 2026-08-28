import type { APIRoute } from 'astro';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

export const prerender = false;

export const POST: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('create', 'media')) return apiError('Bạn không có quyền upload media.', 403);
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return apiError("No file provided", 400);
  }

  // File size limit: 20MB
  const MAX_FILE_SIZE = 20 * 1024 * 1024;
  if (file.size > MAX_FILE_SIZE) {
    return apiError(`File quá lớn (${(file.size / 1024 / 1024).toFixed(1)}MB). Giới hạn tối đa 20MB.`, 400);
  }

  // MIME type whitelist
  const ALLOWED_TYPES = [
    'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/avif',
    'video/mp4', 'video/webm',
    'application/pdf',
    'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];
  if (file.type && !ALLOWED_TYPES.includes(file.type)) {
    return apiError(`Loại file không được phép: ${file.type}`, 400);
  }

  const r2Endpoint = env?.R2_ENDPOINT || import.meta.env.R2_ENDPOINT;
  const r2AccessKeyId = env?.R2_ACCESS_KEY_ID || import.meta.env.R2_ACCESS_KEY_ID;
  const r2SecretAccessKey = env?.R2_SECRET_ACCESS_KEY || import.meta.env.R2_SECRET_ACCESS_KEY;
  const r2BucketName = env?.R2_BUCKET_NAME || import.meta.env.R2_BUCKET_NAME;
  const r2PublicDomain = env?.R2_PUBLIC_DOMAIN || import.meta.env.R2_PUBLIC_DOMAIN;

  if (!r2Endpoint || !r2AccessKeyId || !r2SecretAccessKey || !r2BucketName) {
    return apiError("R2 Configuration missing in environment variables", 500);
  }

  // 1. Setup S3 Client for Cloudflare R2
  const s3Client = new S3Client({
    region: "auto",
    endpoint: r2Endpoint,
    credentials: {
      accessKeyId: r2AccessKeyId,
      secretAccessKey: r2SecretAccessKey,
    },
  });

  // 2. Generate SEO-friendly filename (WordPress Style: append -1, -2 if exists)
  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
  const originalName = file.name.split('.').slice(0, -1).join('.') || 'file';
  const safeName = originalName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  
  let finalName = safeName;
  const d1Db = env?.dulichcoguu_d1;
  
  if (d1Db) {
    let exists = true;
    let counter = 1;
    while (exists) {
      const filenameToCheck = `uploads/${finalName}.${ext}`;
      const dbRes = await d1Db.prepare('SELECT id FROM Media WHERE filename = ?').bind(filenameToCheck).first();
      if (!dbRes) {
        exists = false;
      } else {
        finalName = `${safeName}-${counter}`;
        counter++;
      }
    }
  } else {
    // Fallback if D1 is somehow unavailable
    finalName = `${safeName}-${Date.now().toString().slice(-6)}`;
  }

  const filename = `uploads/${finalName}.${ext}`;
  const arrayBuffer = await file.arrayBuffer();

  // 3. Upload to R2
  await s3Client.send(
    new PutObjectCommand({
      Bucket: r2BucketName,
      Key: filename,
      Body: new Uint8Array(arrayBuffer),
      ContentType: file.type || 'image/jpeg',
    })
  );

  // 4. Return the public URL
  const publicUrl = `${r2PublicDomain}/${filename}`;
  const createdAt = new Date().toISOString();
  
  const customTitle = (formData.get('title') as string) || originalName;
  const customAlt = (formData.get('altText') as string) || '';
  const customCaption = (formData.get('caption') as string) || '';
  const customDesc = (formData.get('description') as string) || '';

  // Save to Media table in D1
  let mediaId: number | null = null;
  if (d1Db) {
    const dbRes = await d1Db.prepare(`
      INSERT INTO Media (filename, url, mimeType, sizeBytes, title, altText, caption, description, createdAt) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING id
    `).bind(filename, publicUrl, file.type, file.size, customTitle, customAlt, customCaption, customDesc, createdAt).first<{ id: number }>();
    mediaId = dbRes?.id ?? null;
  }

  return apiSuccess({ 
    url: publicUrl, 
    id: mediaId, 
    filename: filename.replace(/^uploads\//, ''), 
    title: customTitle,
    altText: customAlt,
    caption: customCaption,
    description: customDesc,
    size: file.size,
    mimeType: file.type,
    createdAt 
  });
});
