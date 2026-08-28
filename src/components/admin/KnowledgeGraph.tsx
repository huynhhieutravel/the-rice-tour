import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// ──────────────────────────── Types ────────────────────────────
interface GraphNode {
  id: string;
  slug: string;
  title: string;
  type: 'post' | 'tour' | 'page';
  categoryId?: string;
  countrySlug?: string;
  connections: number;
  featuredImage?: string;
  url: string;
  x?: number;
  y?: number;
}

interface GraphEdge {
  source: string | GraphNode;
  target: string | GraphNode;
}

interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
  categories: Record<string, string>;
  stats: {
    totalNodes: number;
    totalEdges: number;
    orphanNodes: number;
    posts: number;
    tours: number;
    pages: number;
  };
}

// ──────────────────────────── Colors ────────────────────────────
const TYPE_COLORS: Record<string, string> = {
  post: '#6366f1',  // Indigo
  tour: '#f59e0b',  // Amber
  page: '#10b981',  // Emerald
};
const TYPE_LABELS: Record<string, string> = {
  post: 'Bài viết',
  tour: 'Tour',
  page: 'Trang',
};

// ──────────────────────────── Slider ────────────────────────────
function Slider({ label, value, min, max, step, onChange }: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: '#94a3b8' }}>{label}</span>
        <span style={{ fontSize: 11, color: '#64748b' }}>{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: '100%', accentColor: '#6366f1', height: 4, cursor: 'pointer' }}
      />
    </div>
  );
}

// ──────────────────────────── Toggle ────────────────────────────
function Toggle({ label, checked, onChange }: {
  label: string; checked: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', marginBottom: 8 }}>
      <span style={{ fontSize: 12, color: '#cbd5e1' }}>{label}</span>
      <div onClick={() => onChange(!checked)} style={{
        width: 36, height: 20, borderRadius: 10, cursor: 'pointer',
        background: checked ? '#6366f1' : '#334155', position: 'relative', transition: 'background 0.2s',
      }}>
        <div style={{
          width: 16, height: 16, borderRadius: '50%', background: '#fff', position: 'absolute',
          top: 2, left: checked ? 18 : 2, transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }} />
      </div>
    </label>
  );
}

// ──────────────────────────── Main ────────────────────────────
export default function KnowledgeGraph({ dataEndpoint = '/api/admin/graph' }: { dataEndpoint?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<any>(null);
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showOrphans, setShowOrphans] = useState(false); // default OFF for performance
  const [showArrows, setShowArrows] = useState(false);

  // Display
  const [nodeSize, setNodeSize] = useState(4);
  const [linkWidth, setLinkWidth] = useState(0.5);
  const [textThreshold, setTextThreshold] = useState(2.5);
  const [chargeStrength, setChargeStrength] = useState(-50);

  // UI State
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [highlightNodes, setHighlightNodes] = useState<Set<string>>(new Set());
  const [highlightEdges, setHighlightEdges] = useState<Set<string>>(new Set());
  const [hoverNode, setHoverNode] = useState<GraphNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [ForceGraph, setForceGraph] = useState<any>(null);
  const [panelOpen, setPanelOpen] = useState(true);

  // SSR-safe dynamic import
  useEffect(() => {
    import('react-force-graph-2d').then(mod => setForceGraph(() => mod.default));
  }, []);

  // Resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(entries => {
      for (const e of entries) setDimensions({ width: e.contentRect.width, height: e.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Fetch
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(dataEndpoint, { credentials: 'same-origin' });
        const data = await res.json();
        if (!res.ok) {
          let errStr = `HTTP ${res.status}`;
          if (data?.message) errStr = data.message;
          else if (data?.error) {
            errStr = typeof data.error === 'object' ? (data.error.message || JSON.stringify(data.error)) : data.error;
          }
          throw new Error(errStr);
        }
        if (data?.error) {
          throw new Error(typeof data.error === 'object' ? (data.error.message || JSON.stringify(data.error)) : data.error);
        }
        if (!data?.nodes) throw new Error('API trả về dữ liệu không hợp lệ');
        setGraphData(data);
      } catch (e: any) { setError(e.message || String(e)); }
      finally { setLoading(false); }
    })();
  }, []);

  // Category list
  const categoryOptions = useMemo(() => {
    if (!graphData) return [];
    const catCount = new Map<string, number>();
    graphData.nodes.filter(n => n.type === 'post' && n.categoryId).forEach(n => {
      catCount.set(n.categoryId!, (catCount.get(n.categoryId!) || 0) + 1);
    });
    return Array.from(catCount.entries())
      .map(([id, count]) => ({ id, name: graphData.categories[id] || id, count }))
      .sort((a, b) => b.count - a.count);
  }, [graphData]);

  // Filtered graph
  const filteredData = useMemo(() => {
    if (!graphData) return { nodes: [], links: [] };
    let nodes = [...graphData.nodes];
    let edges = [...graphData.edges];

    // Type filter
    if (filterType !== 'all') {
      const ids = new Set(nodes.filter(n => n.type === filterType).map(n => n.id));
      edges = edges.filter(e => {
        const s = typeof e.source === 'string' ? e.source : e.source.id;
        const t = typeof e.target === 'string' ? e.target : e.target.id;
        return ids.has(s) || ids.has(t);
      });
      const connected = new Set<string>();
      edges.forEach(e => {
        connected.add(typeof e.source === 'string' ? e.source : e.source.id);
        connected.add(typeof e.target === 'string' ? e.target : e.target.id);
      });
      nodes = graphData.nodes.filter(n => ids.has(n.id) || connected.has(n.id));
    }

    // Category filter
    if (filterCategory !== 'all') {
      const ids = new Set(nodes.filter(n => n.categoryId === filterCategory).map(n => n.id));
      edges = edges.filter(e => {
        const s = typeof e.source === 'string' ? e.source : e.source.id;
        const t = typeof e.target === 'string' ? e.target : e.target.id;
        return ids.has(s) || ids.has(t);
      });
      const connected = new Set<string>();
      edges.forEach(e => {
        connected.add(typeof e.source === 'string' ? e.source : e.source.id);
        connected.add(typeof e.target === 'string' ? e.target : e.target.id);
      });
      nodes = graphData.nodes.filter(n => ids.has(n.id) || connected.has(n.id));
    }

    // Orphans
    if (!showOrphans) {
      const connected = new Set<string>();
      edges.forEach(e => {
        connected.add(typeof e.source === 'string' ? e.source : e.source.id);
        connected.add(typeof e.target === 'string' ? e.target : e.target.id);
      });
      nodes = nodes.filter(n => connected.has(n.id));
    }

    // Search
    if (searchTerm.trim()) {
      const normalizeStr = (str: string | undefined | null) => (str || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const term = normalizeStr(searchTerm.trim());
      const matchIds = new Set(nodes.filter(n => normalizeStr(n.title).includes(term) || normalizeStr(n.slug).includes(term)).map(n => n.id));
      const expanded = new Set(matchIds);
      edges.forEach(e => {
        const s = typeof e.source === 'string' ? e.source : e.source.id;
        const t = typeof e.target === 'string' ? e.target : e.target.id;
        if (matchIds.has(s)) expanded.add(t);
        if (matchIds.has(t)) expanded.add(s);
      });
      nodes = nodes.filter(n => expanded.has(n.id));
      edges = edges.filter(e => {
        const s = typeof e.source === 'string' ? e.source : e.source.id;
        const t = typeof e.target === 'string' ? e.target : e.target.id;
        return expanded.has(s) && expanded.has(t);
      });
    }

    return { nodes, links: edges };
  }, [graphData, filterType, filterCategory, showOrphans, searchTerm]);

  // Apply physics simulation adjustments
  useEffect(() => {
    if (graphRef.current && ForceGraph && filteredData.nodes.length > 0) {
      // Apply the charge strength (repelling force) - made much stronger
      graphRef.current.d3Force('charge').strength(chargeStrength * 4); // -200 default
      
      // Increase link distance massively so nodes don't bunch up
      graphRef.current.d3Force('link').distance(150);
      
      // Soften center force to allow more spreading
      const centerForce = graphRef.current.d3Force('center');
      if (centerForce) {
        centerForce.strength(0.1);
      }
      
      // Add collision force to prevent nodes from overlapping
      graphRef.current.d3Force('collide', d3 => {
        // d3 is not passed here directly, but force-graph uses d3 under the hood. 
        // We can't easily add d3.forceCollide without importing d3, so we rely on charge and link distance.
      });

      graphRef.current.d3ReheatSimulation();
    }
  }, [chargeStrength, filteredData, ForceGraph]);

  // Hover highlight
  const handleNodeHover = useCallback((node: GraphNode | null) => {
    setHoverNode(node);
    if (!node) { setHighlightNodes(new Set()); setHighlightEdges(new Set()); return; }
    const nb = new Set<string>([node.id]);
    const ek = new Set<string>();
    filteredData.links.forEach((e: any) => {
      const s = typeof e.source === 'string' ? e.source : e.source.id;
      const t = typeof e.target === 'string' ? e.target : e.target.id;
      if (s === node.id) { nb.add(t); ek.add(`${s}→${t}`); }
      if (t === node.id) { nb.add(s); ek.add(`${s}→${t}`); }
    });
    setHighlightNodes(nb);
    setHighlightEdges(ek);
  }, [filteredData]);

  const handleNodeClick = useCallback((node: GraphNode) => {
    setSelectedNode(prev => prev?.id === node.id ? null : node);
    if (graphRef.current) { graphRef.current.centerAt(node.x, node.y, 500); graphRef.current.zoom(3, 500); }
  }, []);

  // Paint node — Obsidian style
  const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const isHl = highlightNodes.size > 0 ? highlightNodes.has(node.id) : true;
    const isSel = selectedNode?.id === node.id;
    const base = Math.max(nodeSize * 0.6, Math.min(nodeSize * 2.5, nodeSize * 0.6 + node.connections * (nodeSize * 0.15)));
    const size = isSel ? base * 1.4 : base;
    const color = TYPE_COLORS[node.type] || '#6366f1';

    // Glow for highlighted
    if (isHl && highlightNodes.size > 0) {
      ctx.beginPath(); ctx.arc(node.x, node.y, size + 6, 0, 2 * Math.PI);
      ctx.fillStyle = `${color}40`; ctx.fill();
    }

    // Node circle
    ctx.beginPath(); ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
    
    // Extreme dimming for non-highlighted nodes when something is highlighted
    if (highlightNodes.size > 0 && !isHl) {
      ctx.fillStyle = '#1e293b'; // very dim gray
    } else {
      ctx.fillStyle = color;
    }
    ctx.fill();

    // Ring for selected
    if (isSel) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); }

    // ─── Smart Labeling ───
    // Only show labels if:
    // 1. It is selected or highlighted
    // 2. Zoom is high (> 1.5) -> show all
    // 3. Zoom is medium (> 0.6) -> show if it has links
    // 4. Zoom is low (default) -> show only for Hub nodes (>= 3 connections)
    const isHighZoom = globalScale > 1.5;
    const isMedZoom = globalScale > 0.6;
    const isHub = node.connections >= 3;
    const isLinked = node.connections > 0;

    const showLabel = isSel 
      || (isHl && highlightNodes.size > 0) 
      || isHighZoom
      || (isMedZoom && isLinked)
      || isHub;

    if (showLabel) {
      const maxLen = globalScale > 3 ? 50 : 30;
      const label = node.title.length > maxLen ? node.title.substring(0, maxLen) + '…' : node.title;
      
      const fs = Math.max(4, Math.min(14, 14 / globalScale));
      ctx.font = `${isSel ? '700 ' : '500 '}${fs}px Inter, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';

      const yOffset = size + 4;

      ctx.strokeStyle = '#020617';
      ctx.lineWidth = 4 / globalScale;
      ctx.lineJoin = 'round';
      ctx.miterLimit = 2;
      ctx.strokeText(label, node.x, node.y + yOffset);

      if (isSel) {
        ctx.fillStyle = '#fff';
      } else if (isHl && highlightNodes.size > 0) {
        ctx.fillStyle = '#67e8f9'; // bright cyan for highlighted text
      } else {
        ctx.fillStyle = `${color}dd`;
      }
      ctx.fillText(label, node.x, node.y + yOffset);
    }
  }, [highlightNodes, selectedNode, nodeSize]);

  const getLinkColor = useCallback((link: any) => {
    const s = typeof link.source === 'string' ? link.source : link.source.id;
    const t = typeof link.target === 'string' ? link.target : link.target.id;
    if (highlightEdges.has(`${s}→${t}`)) return 'rgba(99,102,241,0.6)';
    if (highlightNodes.size > 0) return 'rgba(148,163,184,0.04)';
    return 'rgba(148,163,184,0.12)';
  }, [highlightEdges, highlightNodes]);

  const getLinkWidth = useCallback((link: any) => {
    const s = typeof link.source === 'string' ? link.source : link.source.id;
    const t = typeof link.target === 'string' ? link.target : link.target.id;
    return highlightEdges.has(`${s}→${t}`) ? linkWidth * 3 : linkWidth;
  }, [highlightEdges, linkWidth]);

  // Connected nodes for detail panel
  const connectedNodes = useMemo(() => {
    if (!selectedNode || !graphData) return [];
    const result: { node: GraphNode; direction: 'out' | 'in' }[] = [];
    graphData.edges.forEach(e => {
      const s = typeof e.source === 'string' ? e.source : (e.source as GraphNode).id;
      const t = typeof e.target === 'string' ? e.target : (e.target as GraphNode).id;
      if (s === selectedNode.id) { const n = graphData.nodes.find(x => x.id === t); if (n) result.push({ node: n, direction: 'out' }); }
      if (t === selectedNode.id) { const n = graphData.nodes.find(x => x.id === s); if (n) result.push({ node: n, direction: 'in' }); }
    });
    return result;
  }, [selectedNode, graphData]);

  // ──────────────────────────── Render ────────────────────────────
  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', color: '#94a3b8' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 42, marginBottom: 12, animation: 'spin 2s linear infinite' }}>🧠</div>
        <div style={{ fontSize: 15, fontWeight: 600 }}>Đang quét {'>'}900 trang nội dung...</div>
        <div style={{ fontSize: 12, marginTop: 6, color: '#64748b' }}>Phân tích liên kết nội bộ Post · Tour · Page</div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );

  if (error) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', color: '#ef4444' }}>
      <div style={{ textAlign: 'center' }}><div style={{ fontSize: 42, marginBottom: 12 }}>⚠️</div>
      <div style={{ fontSize: 15, fontWeight: 600 }}>{error}</div></div>
    </div>
  );

  const stats = graphData?.stats;
  const S: React.CSSProperties = { background: '#0f172a', color: '#e2e8f0', fontFamily: "'Inter', sans-serif" };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 84px)', overflow: 'hidden', ...S }}>

      {/* ═══ LEFT: Filters Panel ═══ */}
      {panelOpen && (
        <div style={{
          width: 260, borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column',
          overflow: 'auto', flexShrink: 0, background: '#0f172a',
        }}>
          {/* Stats bar */}
          <div style={{ padding: '12px 14px', borderBottom: '1px solid #1e293b', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {[
              { label: 'Post', val: stats?.posts, color: TYPE_COLORS.post },
              { label: 'Tour', val: stats?.tours, color: TYPE_COLORS.tour },
              { label: 'Page', val: stats?.pages, color: TYPE_COLORS.page },
              { label: 'Link', val: stats?.totalEdges, color: '#8b5cf6' },
              { label: 'Orphan', val: stats?.orphanNodes, color: '#ef4444' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1e293b', borderRadius: 6, padding: '4px 8px', flex: '1 1 45%', minWidth: 70 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: s.color }}>{s.val}</div>
                <div style={{ fontSize: 9, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div style={{ padding: '10px 14px', borderBottom: '1px solid #1e293b' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 10, top: 8, fontSize: 13, color: '#64748b' }}>🔍</span>
              <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm tệp..."
                style={{ width: '100%', boxSizing: 'border-box', background: '#1e293b', border: '1px solid #334155', borderRadius: 8,
                  padding: '8px 12px 8px 32px', color: '#e2e8f0', fontSize: 12, outline: 'none' }}
              />
            </div>
          </div>

          {/* ── Bộ lọc ── */}
          <div style={{ padding: '10px 14px', borderBottom: '1px solid #1e293b' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Bộ lọc</div>

            {/* Type filter */}
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>Loại</div>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {['all', 'post', 'tour', 'page'].map(t => (
                  <button key={t} onClick={() => setFilterType(t)} style={{
                    padding: '4px 10px', borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: 'pointer',
                    background: filterType === t ? (t === 'all' ? '#334155' : `${TYPE_COLORS[t]}22`) : '#1e293b',
                    border: filterType === t ? `1px solid ${t === 'all' ? '#475569' : TYPE_COLORS[t]}` : '1px solid #334155',
                    color: filterType === t ? '#e2e8f0' : '#64748b',
                  }}>{t === 'all' ? 'Tất cả' : TYPE_LABELS[t]}</button>
                ))}
              </div>
            </div>

            {/* Category filter */}
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>Chuyên mục</div>
              <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}
                style={{ width: '100%', boxSizing: 'border-box', background: '#1e293b', border: '1px solid #334155', borderRadius: 6,
                  padding: '6px 8px', color: '#e2e8f0', fontSize: 11, outline: 'none', cursor: 'pointer' }}>
                <option value="all">— Tất cả chuyên mục —</option>
                {categoryOptions.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.count})</option>
                ))}
              </select>
            </div>

            <Toggle label="Tệp mồ côi" checked={showOrphans} onChange={setShowOrphans} />
            <Toggle label="Mũi tên" checked={showArrows} onChange={setShowArrows} />
          </div>

          {/* ── Hiển thị ── */}
          <div style={{ padding: '10px 14px', borderBottom: '1px solid #1e293b' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Hiển thị</div>
            <Slider label="Ngưỡng mờ văn bản" value={textThreshold} min={0.5} max={5} step={0.5} onChange={setTextThreshold} />
            <Slider label="Kích thước nút" value={nodeSize} min={2} max={10} step={1} onChange={setNodeSize} />
            <Slider label="Độ dày liên kết" value={linkWidth} min={0.2} max={3} step={0.2} onChange={setLinkWidth} />
          </div>

          {/* ── Lực ── */}
          <div style={{ padding: '10px 14px', borderBottom: '1px solid #1e293b' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Lực</div>
            <Slider label="Lực tâm" value={chargeStrength} min={-200} max={-10} step={10} onChange={setChargeStrength} />
            <button onClick={() => { if (graphRef.current) graphRef.current.d3ReheatSimulation(); }}
              style={{ width: '100%', padding: '7px 0', background: '#6366f1', border: 'none', borderRadius: 8,
                color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer', marginTop: 4 }}>
              Hoạt ảnh
            </button>
          </div>

          {/* ── Legend ── */}
          <div style={{ padding: '10px 14px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Chú thích</div>
            {Object.entries(TYPE_COLORS).map(([type, color]) => (
              <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: '#94a3b8' }}>{TYPE_LABELS[type]}</span>
              </div>
            ))}
            <div style={{ fontSize: 10, color: '#475569', marginTop: 6 }}>Đang hiện: <b style={{ color: '#94a3b8' }}>{filteredData.nodes.length}</b> node · <b style={{ color: '#94a3b8' }}>{filteredData.links.length}</b> link</div>
          </div>
        </div>
      )}

      {/* ═══ CENTER: Graph ═══ */}
      <div ref={containerRef} style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#020617' }}>
        {/* Toggle panel button */}
        <button onClick={() => setPanelOpen(p => !p)} style={{
          position: 'absolute', top: 12, left: 12, zIndex: 10, background: 'rgba(15,23,42,0.9)',
          border: '1px solid #334155', borderRadius: 8, padding: '6px 10px', color: '#94a3b8',
          fontSize: 13, cursor: 'pointer', backdropFilter: 'blur(4px)',
        }}>{panelOpen ? '◀' : '▶'} Bộ lọc</button>

        {ForceGraph && (
          <ForceGraph
            ref={graphRef}
            graphData={filteredData}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="#020617"
            nodeCanvasObject={paintNode}
            nodePointerAreaPaint={(node: any, color: string, ctx: CanvasRenderingContext2D) => {
              const s = Math.max(nodeSize * 0.6, Math.min(nodeSize * 2.5, nodeSize * 0.6 + node.connections * (nodeSize * 0.15)));
              ctx.fillStyle = color; ctx.beginPath(); ctx.arc(node.x, node.y, s + 3, 0, 2 * Math.PI); ctx.fill();
            }}
            nodeLabel={(node: any) => {
              const color = TYPE_COLORS[node.type] || '#6366f1';
              const label = TYPE_LABELS[node.type] || 'Unknown';
              return `
                <div style="background: rgba(15,23,42,0.95); border: 1px solid #334155; border-radius: 8px; padding: 10px 14px; max-width: 280px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); backdrop-filter: blur(4px);">
                  <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                    <div style="width:8px; height:8px; border-radius:50%; background:${color}"></div>
                    <span style="font-size:10px; font-weight:700; color:${color}; text-transform:uppercase;">${label}</span>
                  </div>
                  <div style="font-size:13px; font-weight:700; color:#e2e8f0; line-height:1.3; margin-bottom:3px; white-space:normal;">${node.title}</div>
                  <div style="font-size:10px; color:#64748b; margin-bottom:4px;">/${node.slug}</div>
                  <div style="font-size:10px; color:#94a3b8; font-weight:500;">🔗 ${node.connections} liên kết</div>
                </div>
              `;
            }}
            linkColor={getLinkColor}
            linkWidth={getLinkWidth}
            linkDirectionalArrowLength={showArrows ? 3 : 0}
            linkDirectionalArrowRelPos={1}
            onNodeHover={handleNodeHover}
            onNodeClick={handleNodeClick}
            cooldownTicks={80}
            d3VelocityDecay={0.35}
            d3AlphaDecay={0.03}
            enableNodeDrag={true}
            warmupTicks={30}
          />
        )}
      </div>

      {/* ═══ RIGHT: Detail Panel ═══ */}
      {selectedNode && (
        <div style={{ width: 300, background: '#0f172a', borderLeft: '1px solid #1e293b', overflow: 'auto', flexShrink: 0 }}>
          <div style={{ padding: 14, borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: TYPE_COLORS[selectedNode.type] }} />
                <span style={{ fontSize: 10, fontWeight: 700, color: TYPE_COLORS[selectedNode.type], textTransform: 'uppercase' }}>{TYPE_LABELS[selectedNode.type]}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#e2e8f0', lineHeight: 1.4 }}>{selectedNode.title}</div>
              <div style={{ fontSize: 10, color: '#64748b', marginTop: 3 }}>/{selectedNode.slug}</div>
            </div>
            <button onClick={() => setSelectedNode(null)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 16, padding: 2 }}>✕</button>
          </div>

          {selectedNode.featuredImage && (
            <div style={{ padding: '10px 14px 0' }}>
              <img src={selectedNode.featuredImage} alt="" style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8, border: '1px solid #1e293b' }} />
            </div>
          )}

          <div style={{ padding: '10px 14px', display: 'flex', gap: 6 }}>
            <a href={selectedNode.url} target="_blank" rel="noopener" style={{
              flex: 1, padding: '7px 10px', background: '#1e293b', border: '1px solid #334155', borderRadius: 8,
              color: '#94a3b8', fontSize: 11, fontWeight: 600, textAlign: 'center', textDecoration: 'none',
            }}>👁 Xem</a>
            <a href={`/admin/${selectedNode.type === 'tour' ? 'tours' : selectedNode.type === 'page' ? 'pages' : 'posts'}/edit?id=${selectedNode.id.replace(/^(post|tour|page)-/, '')}`}
              style={{ flex: 1, padding: '7px 10px', background: '#6366f1', border: 'none', borderRadius: 8,
                color: '#fff', fontSize: 11, fontWeight: 600, textAlign: 'center', textDecoration: 'none',
            }}>✏️ Sửa</a>
          </div>

          <div style={{ padding: '0 14px 14px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
              🔗 Liên kết ({connectedNodes.length})
            </div>
            {connectedNodes.length === 0 ? (
              <div style={{ padding: '14px 0', textAlign: 'center' }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>🏝️</div>
                <div style={{ fontSize: 11, color: '#ef4444', fontWeight: 600 }}>Bài viết MỒ CÔI</div>
                <div style={{ fontSize: 10, color: '#64748b', marginTop: 3 }}>Không có internal link</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {connectedNodes.map(({ node, direction }) => (
                  <button key={node.id} onClick={() => {
                    setSelectedNode(node);
                    if (graphRef.current) graphRef.current.centerAt(node.x, node.y, 500);
                  }} style={{
                    display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px',
                    background: '#1e293b', border: '1px solid #334155', borderRadius: 6,
                    cursor: 'pointer', textAlign: 'left', width: '100%',
                  }}>
                    <span style={{ fontSize: 10, color: direction === 'out' ? '#6366f1' : '#10b981', flexShrink: 0 }}>{direction === 'out' ? '→' : '←'}</span>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: '#e2e8f0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{node.title}</div>
                      <div style={{ fontSize: 9, color: TYPE_COLORS[node.type] }}>{TYPE_LABELS[node.type]}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
