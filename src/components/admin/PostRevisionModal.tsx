import React, { useState, useEffect, useMemo } from 'react';

export interface PostRevisionItem {
  id: string;
  postId: string;
  title: string;
  slug?: string;
  content?: string;
  contentFormat?: string;
  format?: string;
  excerpt?: string;
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  focusKeyword?: string;
  authorId?: string;
  authorName?: string;
  savedBy?: string;
  revisionType?: string;
  wordCount?: number;
  createdAt: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  postId: string | null;
  currentData: {
    title: string;
    content: any;
    editorMode: 'tiptap' | 'raw';
    rawHtml: string;
    featuredImage: string;
    seoTitle: string;
    seoDescription: string;
    focusKeyword: string;
    format: string;
  };
  onRestore: (revision: PostRevisionItem) => void;
}

// Token-based Diff Algorithm for clean inline word comparison
function computeTokenDiff(oldStr: string, newStr: string) {
  if (oldStr === newStr) {
    return [{ type: 'unchanged', value: newStr }];
  }
  if (!oldStr) {
    return [{ type: 'added', value: newStr }];
  }
  if (!newStr) {
    return [{ type: 'removed', value: oldStr }];
  }

  // Tokenize by word boundaries / spaces / punctuation
  const oldTokens = oldStr.split(/(\s+)/);
  const newTokens = newStr.split(/(\s+)/);

  const n = oldTokens.length;
  const m = newTokens.length;

  // Fallback for massive docs to prevent freezing
  if (n * m > 600000) {
    return computeLineDiff(oldStr, newStr);
  }

  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (oldTokens[i - 1] === newTokens[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const diff: { type: 'added' | 'removed' | 'unchanged'; value: string }[] = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldTokens[i - 1] === newTokens[j - 1]) {
      diff.unshift({ type: 'unchanged', value: oldTokens[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      diff.unshift({ type: 'added', value: newTokens[j - 1] });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      diff.unshift({ type: 'removed', value: oldTokens[i - 1] });
      i--;
    }
  }

  // Merge consecutive same-type chunks
  const merged: { type: 'added' | 'removed' | 'unchanged'; value: string }[] = [];
  for (const chunk of diff) {
    if (merged.length > 0 && merged[merged.length - 1].type === chunk.type) {
      merged[merged.length - 1].value += chunk.value;
    } else {
      merged.push({ ...chunk });
    }
  }

  return merged;
}

function computeLineDiff(oldStr: string, newStr: string) {
  const oldLines = oldStr.split('\n');
  const newLines = newStr.split('\n');
  const n = oldLines.length;
  const m = newLines.length;

  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (oldLines[i - 1] === newLines[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const diff: { type: 'added' | 'removed' | 'unchanged'; value: string }[] = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
      diff.unshift({ type: 'unchanged', value: oldLines[i - 1] + '\n' });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      diff.unshift({ type: 'added', value: newLines[j - 1] + '\n' });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      diff.unshift({ type: 'removed', value: oldLines[i - 1] + '\n' });
      i--;
    }
  }
  return diff;
}

function extractReadableText(content: any): string {
  if (!content) return '';
  if (typeof content === 'string') {
    if (content.trim().startsWith('{') || content.trim().startsWith('[')) {
      try {
        return extractReadableText(JSON.parse(content));
      } catch {
        return content.replace(/<[^>]*>?/gm, ' ');
      }
    }
    return content.replace(/<[^>]*>?/gm, ' ');
  }
  if (typeof content === 'object') {
    let result = '';
    const traverse = (node: any) => {
      if (!node) return;
      if (node.type === 'text' && node.text) {
        result += node.text + ' ';
      }
      if (node.content && Array.isArray(node.content)) {
        node.content.forEach(traverse);
      }
    };
    traverse(content);
    return result.trim();
  }
  return String(content);
}

export default function PostRevisionModal({
  isOpen,
  onClose,
  postId,
  currentData,
  onRestore,
}: Props) {
  const [revisions, setRevisions] = useState<PostRevisionItem[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [selectedRevisionId, setSelectedRevisionId] = useState<string | null>(null);
  const [fullRevisionData, setFullRevisionData] = useState<PostRevisionItem | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [viewMode, setViewMode] = useState<'diff' | 'preview'>('diff');

  // Fetch revision list
  const fetchRevisions = async () => {
    if (!postId) return;
    setLoadingList(true);
    try {
      const res = await fetch(`/api/admin/posts/${postId}/revisions`);
      const json = await res.json();
      if (json.success && json.data) {
        const list: PostRevisionItem[] = json.data.revisions || [];
        setRevisions(list);
        if (list.length > 0 && !selectedRevisionId) {
          setSelectedRevisionId(list[0].id);
        }
      }
    } catch (e) {
      console.error('Failed to load revisions:', e);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    if (isOpen && postId) {
      fetchRevisions();
    }
  }, [isOpen, postId]);

  // Fetch full details of selected revision
  useEffect(() => {
    if (!isOpen || !postId || !selectedRevisionId) return;

    const fetchDetail = async () => {
      setLoadingDetail(true);
      try {
        const res = await fetch(`/api/admin/posts/${postId}/revisions?revisionId=${selectedRevisionId}`);
        const json = await res.json();
        if (json.success && json.data) {
          setFullRevisionData(json.data);
        }
      } catch (e) {
        console.error('Failed to load revision detail:', e);
      } finally {
        setLoadingDetail(false);
      }
    };

    fetchDetail();
  }, [isOpen, postId, selectedRevisionId]);

  // Current content string for diffing
  const currentContentString = useMemo(() => {
    if (currentData.editorMode === 'raw') {
      return currentData.rawHtml || '';
    }
    return extractReadableText(currentData.content);
  }, [currentData]);

  // Historical content string for diffing
  const historicalContentString = useMemo(() => {
    if (!fullRevisionData?.content) return '';
    if (fullRevisionData.contentFormat === 'html' || currentData.editorMode === 'raw') {
      return fullRevisionData.content;
    }
    return extractReadableText(fullRevisionData.content);
  }, [fullRevisionData, currentData.editorMode]);

  // Compute Diffs
  const titleDiff = useMemo(() => {
    if (!fullRevisionData) return [];
    // Compare historical (old) vs current (new)
    return computeTokenDiff(fullRevisionData.title || '', currentData.title || '');
  }, [fullRevisionData?.title, currentData.title]);

  const contentDiff = useMemo(() => {
    if (!fullRevisionData) return [];
    return computeTokenDiff(historicalContentString, currentContentString);
  }, [historicalContentString, currentContentString]);

  const diffStats = useMemo(() => {
    let addedCount = 0;
    let removedCount = 0;
    contentDiff.forEach(chunk => {
      const words = chunk.value.trim().split(/\s+/).filter(Boolean).length;
      if (chunk.type === 'added') addedCount += words;
      if (chunk.type === 'removed') removedCount += words;
    });
    return { addedCount, removedCount };
  }, [contentDiff]);

  // ESC key listener to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleRestoreClick = async () => {
    if (!fullRevisionData) return;
    const timeStr = new Date(fullRevisionData.createdAt).toLocaleString('vi-VN');
    const message = `Bạn có chắc chắn muốn khôi phục về phiên bản lúc ${timeStr}? Toàn bộ dữ liệu của bản này sẽ được nạp lại vào Editor.`;
    
    let isConfirmed = false;
    if (typeof (window as any).AppModal?.confirm === 'function') {
      isConfirmed = await (window as any).AppModal.confirm(message);
    } else {
      isConfirmed = window.confirm(message);
    }

    if (isConfirmed) {
      onRestore(fullRevisionData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        width: '1200px',
        maxWidth: '96vw',
        height: '88vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        border: '1px solid #e2e8f0'
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#f8fafc'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '24px' }}>🕒</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>
                Lịch sử phiên bản bài viết (Revisions)
              </h3>
              <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748b' }}>
                Lưu tối đa 30 bản ghi gần nhất. Bạn có thể xem lại, so sánh thay đổi và khôi phục về bất kỳ mốc nào.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              fontSize: '18px',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            title="Đóng"
          >
            ✕
          </button>
        </div>

        {/* Body Split View */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Left Column: Revisions Timeline List */}
          <div style={{
            width: '340px',
            borderRight: '1px solid #e2e8f0',
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto'
          }}>
            <div style={{
              padding: '12px 16px',
              background: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              fontSize: '12px',
              fontWeight: 600,
              color: '#475569',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Các mốc đã lưu ({revisions.length})
            </div>

            {loadingList ? (
              <div style={{ padding: '32px 16px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
                ⏳ Đang tải lịch sử...
              </div>
            ) : revisions.length === 0 ? (
              <div style={{ padding: '40px 20px', textAlign: 'center', color: '#94a3b8' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>📜</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>Chưa có bản lưu nào</div>
                <div style={{ fontSize: '12px', marginTop: '4px' }}>Mỗi khi bạn nhấn <b>Update</b> hoặc <b>Publish</b>, hệ thống sẽ tự động tạo một bản lưu lịch sử ở đây.</div>
              </div>
            ) : (
              <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {revisions.map((rev) => {
                  const isSelected = selectedRevisionId === rev.id;
                  const date = new Date(rev.createdAt);
                  const formattedTime = date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                  const formattedDate = date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });

                  return (
                    <div
                      key={rev.id}
                      onClick={() => setSelectedRevisionId(rev.id)}
                      style={{
                        padding: '12px',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        background: isSelected ? '#eff6ff' : '#ffffff',
                        border: isSelected ? '1.5px solid #3b82f6' : '1px solid #f1f5f9',
                        transition: 'all 0.15s',
                        boxShadow: isSelected ? '0 2px 4px rgba(59, 130, 246, 0.1)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 700, fontSize: '13px', color: isSelected ? '#1d4ed8' : '#1e293b' }}>
                          {formattedTime}
                        </span>
                        <span style={{
                          fontSize: '11px',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          fontWeight: 600,
                          background: rev.revisionType === 'publish' ? '#ecfdf5' : '#f1f5f9',
                          color: rev.revisionType === 'publish' ? '#059669' : '#64748b'
                        }}>
                          {rev.revisionType === 'publish' ? '🚀 Xuất bản' : '💾 Cập nhật'}
                        </span>
                      </div>

                      <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                        📅 {formattedDate}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#94a3b8' }}>
                        <span>👤 {rev.savedBy || rev.authorName || 'Admin'}</span>
                        <span>{rev.wordCount || 0} từ</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Comparison & Details */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc', overflow: 'hidden' }}>
            {/* Action & View Switcher Bar */}
            <div style={{
              padding: '12px 24px',
              borderBottom: '1px solid #e2e8f0',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setViewMode('diff')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    background: viewMode === 'diff' ? '#2563eb' : '#f1f5f9',
                    color: viewMode === 'diff' ? '#fff' : '#64748b'
                  }}
                >
                  📊 So sánh thay đổi (Diff)
                </button>
                <button
                  onClick={() => setViewMode('preview')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    background: viewMode === 'preview' ? '#2563eb' : '#f1f5f9',
                    color: viewMode === 'preview' ? '#fff' : '#64748b'
                  }}
                >
                  👁️ Xem nguyên bản
                </button>
              </div>

              {fullRevisionData && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  {viewMode === 'diff' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px' }}>
                      <span style={{ color: '#16a34a', fontWeight: 600 }}>+{diffStats.addedCount} từ thêm mới</span>
                      <span style={{ color: '#dc2626', fontWeight: 600 }}>-{diffStats.removedCount} từ bị xóa</span>
                    </div>
                  )}

                  <button
                    onClick={handleRestoreClick}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '8px',
                      background: '#d97706',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 4px rgba(217, 119, 6, 0.2)'
                    }}
                  >
                    ⏮️ Khôi phục phiên bản này
                  </button>
                </div>
              )}
            </div>

            {/* Content Display Area */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
              {loadingDetail ? (
                <div style={{ textAlign: 'center', padding: '60px', color: '#64748b' }}>
                  ⏳ Đang tải chi tiết phiên bản...
                </div>
              ) : !fullRevisionData ? (
                <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8' }}>
                  Chọn một bản lưu từ danh sách bên trái để so sánh.
                </div>
              ) : viewMode === 'diff' ? (
                /* DIFF MODE */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Legend */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '10px 16px',
                    background: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    fontSize: '12px'
                  }}>
                    <span style={{ fontWeight: 600, color: '#475569' }}>Chú thích:</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#fee2e2', color: '#991b1b', padding: '2px 8px', borderRadius: '4px' }}>
                      <b>-</b> Nội dung ở bản cũ (Đã bị xóa hoặc thay đổi ở bản hiện tại)
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '4px' }}>
                      <b>+</b> Nội dung mới thêm ở bản hiện tại
                    </span>
                  </div>

                  {/* Title Diff */}
                  <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginBottom: '8px' }}>
                      Tiêu đề bài viết (Title)
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.4 }}>
                      {titleDiff.map((chunk, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: chunk.type === 'added' ? '#dcfce7' : chunk.type === 'removed' ? '#fee2e2' : 'transparent',
                            color: chunk.type === 'added' ? '#15803d' : chunk.type === 'removed' ? '#b91c1c' : '#0f172a',
                            textDecoration: chunk.type === 'removed' ? 'line-through' : 'none',
                            padding: chunk.type !== 'unchanged' ? '2px 4px' : '0',
                            borderRadius: '3px'
                          }}
                        >
                          {chunk.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured Image Diff */}
                  {fullRevisionData.featuredImage !== currentData.featuredImage && (
                    <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginBottom: '8px' }}>
                        Ảnh đại diện (Featured Image) đã thay đổi
                      </div>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: '12px', color: '#dc2626', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Bản đã lưu:</span>
                          {fullRevisionData.featuredImage ? (
                            <img src={fullRevisionData.featuredImage} alt="Old" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', border: '2px solid #fca5a5' }} />
                          ) : (
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>(Không có ảnh)</span>
                          )}
                        </div>
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: '12px', color: '#16a34a', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Bản hiện tại:</span>
                          {currentData.featuredImage ? (
                            <img src={currentData.featuredImage} alt="Current" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', border: '2px solid #86efac' }} />
                          ) : (
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>(Không có ảnh)</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SEO Diff */}
                  {(fullRevisionData.seoTitle !== currentData.seoTitle || fullRevisionData.seoDescription !== currentData.seoDescription) && (
                    <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, marginBottom: '12px' }}>
                        Cấu hình SEO Meta
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                        {fullRevisionData.seoTitle !== currentData.seoTitle && (
                          <div>
                            <span style={{ fontWeight: 600, color: '#475569' }}>SEO Title: </span>
                            <span style={{ color: '#dc2626', textDecoration: 'line-through', marginRight: '8px' }}>{fullRevisionData.seoTitle || '(Trống)'}</span>
                            <span style={{ color: '#16a34a' }}>→ {currentData.seoTitle || '(Trống)'}</span>
                          </div>
                        )}
                        {fullRevisionData.seoDescription !== currentData.seoDescription && (
                          <div>
                            <span style={{ fontWeight: 600, color: '#475569' }}>SEO Description: </span>
                            <div style={{ color: '#dc2626', textDecoration: 'line-through', margin: '2px 0' }}>{fullRevisionData.seoDescription || '(Trống)'}</div>
                            <div style={{ color: '#16a34a' }}>{currentData.seoDescription || '(Trống)'}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Main Content Diff */}
                  <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: 700 }}>
                        Nội dung bài viết (Content Body Diff)
                      </div>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>
                        {fullRevisionData.contentFormat === 'html' ? 'Định dạng Raw HTML' : 'Định dạng Tiptap RichText'}
                      </span>
                    </div>

                    <div style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: '#1e293b',
                      whiteSpace: 'pre-wrap',
                      fontFamily: fullRevisionData.contentFormat === 'html' ? 'monospace' : 'inherit',
                      maxHeight: '450px',
                      overflowY: 'auto',
                      padding: '16px',
                      background: '#fafafa',
                      borderRadius: '8px',
                      border: '1px solid #f1f5f9'
                    }}>
                      {contentDiff.map((chunk, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: chunk.type === 'added' ? '#dcfce7' : chunk.type === 'removed' ? '#fee2e2' : 'transparent',
                            color: chunk.type === 'added' ? '#15803d' : chunk.type === 'removed' ? '#b91c1c' : 'inherit',
                            textDecoration: chunk.type === 'removed' ? 'line-through' : 'none',
                            padding: chunk.type !== 'unchanged' ? '1px 2px' : '0',
                            borderRadius: '2px'
                          }}
                        >
                          {chunk.value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* PREVIEW MODE */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                      Lưu lúc: <b>{new Date(fullRevisionData.createdAt).toLocaleString('vi-VN')}</b> bởi <b>{fullRevisionData.savedBy || 'Admin'}</b>
                    </div>
                    <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', margin: '0 0 16px' }}>
                      {fullRevisionData.title}
                    </h1>

                    {fullRevisionData.featuredImage && (
                      <img src={fullRevisionData.featuredImage} alt="Featured" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} />
                    )}

                    <div style={{
                      fontSize: '15px',
                      lineHeight: 1.8,
                      color: '#334155',
                      whiteSpace: 'pre-wrap',
                      fontFamily: fullRevisionData.contentFormat === 'html' ? 'monospace' : 'inherit'
                    }}>
                      {historicalContentString}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
