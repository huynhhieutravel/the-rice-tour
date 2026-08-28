import React, { useState, useEffect } from 'react';

interface PopupData {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  pageSlugToMatch: string;
}

export default function FloatingToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true); // Default true to prevent hydration mismatch
  const [isRendered, setIsRendered] = useState(false);
  const [popupData, setPopupData] = useState<PopupData | null>(null);

  useEffect(() => {
    // Only run on client
    setIsRendered(true);

    const fetchPopup = async () => {
      try {
        const res = await fetch('/api/popups/active');
        if (!res.ok) return;
        const popups: PopupData[] = await res.json();
        
        if (!popups || popups.length === 0) return;

        // Logic to select the right popup:
        // 1. Exact match with URL
        // 2. Or empty pageSlugToMatch (global popup)
        const currentPath = window.location.pathname;
        let selectedPopup = popups.find(p => p.pageSlugToMatch && currentPath.includes(p.pageSlugToMatch));
        
        if (!selectedPopup) {
          selectedPopup = popups.find(p => !p.pageSlugToMatch || p.pageSlugToMatch.trim() === '');
        }

        if (selectedPopup) {
          // Check localStorage for THIS specific popup
          const dismissedKey = `popup_dismissed_${selectedPopup.id}`;
          if (localStorage.getItem(dismissedKey) === 'true') {
            return;
          }
          
          setPopupData(selectedPopup);
          setIsDismissed(false);
        }
      } catch (err) {
        console.error("Failed to fetch popups", err);
      }
    };

    fetchPopup();
  }, []);

  useEffect(() => {
    if (isDismissed || !popupData) return;

    // Show after scrolling a bit or after 3 seconds
    const handleScroll = () => {
      if (window.scrollY > 500 && !isVisible) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => {
      if (!isVisible) setIsVisible(true);
      window.removeEventListener('scroll', handleScroll);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isVisible, isDismissed, popupData]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    setIsDismissed(true);
    if (popupData) {
      localStorage.setItem(`popup_dismissed_${popupData.id}`, 'true');
    }
  };

  const handleLinkClick = () => {
    if (popupData) {
      localStorage.setItem(`popup_dismissed_${popupData.id}`, 'true');
    }
  };

  if (!isRendered || isDismissed || !popupData) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[9999] max-w-[360px] w-[calc(100vw-48px)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
      }`}
      style={{
        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))'
      }}
    >
      <a 
        href={popupData.link} 
        onClick={handleLinkClick}
        className="block bg-white rounded-2xl overflow-hidden border border-slate-200 group hover:border-[#c5a365] transition-colors relative shadow-lg"
      >
        {/* Close Button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2 z-10 w-7 h-7 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition shadow-sm"
          aria-label="Đóng"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="flex p-3 gap-4 items-center">
          {/* Thumbnail */}
          {popupData.image && (
            <div className="w-[80px] h-[80px] shrink-0 rounded-xl overflow-hidden relative bg-slate-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src={popupData.image} 
                alt={popupData.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 pr-4 py-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#c5a365] mb-1 flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a365] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a365]"></span>
              </span>
              Gợi ý đọc thêm
            </div>
            <h4 className="font-bold text-slate-800 text-[13px] leading-tight mb-1 group-hover:text-[#c5a365] transition-colors line-clamp-2">
              {popupData.title}
            </h4>
            {popupData.description && (
              <p className="text-slate-500 text-[11px] leading-snug line-clamp-2">
                {popupData.description}
              </p>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
