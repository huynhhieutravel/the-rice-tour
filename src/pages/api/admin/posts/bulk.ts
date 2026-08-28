import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';

export const prerender = false;

export const PUT = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('edit', 'post')) return apiError('Forbidden', 403);
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) {
    return apiError('No D1 binding found', 500);
  }

  const body = await request.json();
  const { postIds: rawPostIds, data } = body;

  if (!rawPostIds || !Array.isArray(rawPostIds) || rawPostIds.length === 0) {
    return apiError('Invalid postIds payload', 400);
  }

  if (!data || (!data.categoryChanges && !data.status && data.author === undefined)) {
    return apiError('No data to update', 400);
  }

  // Post.id is TEXT PRIMARY KEY - support both UUIDs and stringified numbers
  const postIdsStr = rawPostIds.map((id: any) => String(id)).filter((s: string) => s.trim() !== '');

  if (postIdsStr.length === 0) {
    return apiError('No valid post IDs', 400);
  }

  const stmts = [];

  // 1. Handle Status & Primary Category Update (Post table)
  let postUpdates: string[] = [];
  let postValues: any[] = [];

  const catAdd = data.categoryChanges?.add || [];
  const catRemove = data.categoryChanges?.remove || [];

  if (catAdd.length > 0) {
    postUpdates.push("categoryId = ?");
    postValues.push(catAdd[0]);
  }
  if (data.status) {
    postUpdates.push("status = ?");
    postValues.push(data.status);
  }
  if (data.author !== undefined) {
    postUpdates.push("author = ?");
    // If empty string, we can convert it to NULL or just save as empty string. Since our query filters `author != ''`, empty string works fine.
    postValues.push(data.author);
  }

  if (postUpdates.length > 0) {
    postUpdates.push("updatedAt = ?");
    postValues.push(new Date().toISOString());

    const updateStr = postUpdates.join(", ");
    // Include all string IDs
    const allIds = postIdsStr;
    const placeholders = allIds.map(() => "?").join(",");
    postValues.push(...allIds);

    stmts.push(d1Db.prepare(`UPDATE Post SET ${updateStr} WHERE id IN (${placeholders})`).bind(...postValues));
  }

  // 2. Handle Multiple Categories (PostCategory table) — postId is TEXT in PostCategory
  if (catRemove.length > 0) {
    const removePlaceholders = catRemove.map(() => "?").join(",");
    const allIds = postIdsStr;
    for (const postId of allIds) {
      stmts.push(
        d1Db.prepare(`DELETE FROM PostCategory WHERE postId = ? AND categoryId IN (${removePlaceholders})`)
          .bind(postId, ...catRemove)
      );
    }
  }

  if (catAdd.length > 0) {
    for (const postId of postIdsStr) {
      for (const catId of catAdd) {
        stmts.push(
          d1Db.prepare(`INSERT OR IGNORE INTO PostCategory (postId, categoryId) VALUES (?, ?)`)
            .bind(postId, catId)
        );
      }
    }
  }

  if (stmts.length > 0) {
    await d1Db.batch(stmts);
  }

  return apiSuccess({ updated: postIdsStr.length });
});
