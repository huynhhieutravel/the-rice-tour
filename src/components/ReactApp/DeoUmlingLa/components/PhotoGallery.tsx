import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PHOTOS } from '../data';
import type { Photo } from '../types';
import { Eye, X, Camera, MapPin, Calendar, Layers } from 'lucide-react';

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'natural' | 'people' | 'spiritual' | 'moments'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = PHOTOS.filter(
    p => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <section id="gallery-section" className="relative py-24 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">Cuốn Album Ký Ức</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
            Khoảnh Khắc Từ Ống Kính Viễn Du
          </h2>
          <div className="w-16 h-0.5 bg-amber-700 mx-auto mt-4 mb-4"></div>
          <p className="max-w-2xl mx-auto text-sm text-stone-600 font-sans">
            "Có những vẻ đẹp không thể kể lại bằng ngôn từ, chỉ có thể ghi lại bằng sự rung cảm của trái tim." 
            Xem qua lăng kính mộc mạc lưu dấu hành trình đến điểm đèo cao nhất thế giới.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-12">
          {[
            { id: 'all', label: 'Tất Cả Thư Mục' },
            { id: 'natural', label: '🏞️ Tuyệt Tác Thiên Nhiên' },
            { id: 'spiritual', label: '📿 Dấu Ấn Tâm Linh' },
            { id: 'people', label: '👨‍👩‍👧 Đời Thường & Con Người' },
            { id: 'moments', label: '✨ Giây Phút Thiêng Liêng' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'bg-amber-700 text-amber-50 border-amber-700 shadow-sm font-semibold'
                  : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Polaroid Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={photo.id}
                className="bg-white p-4 pb-8 shadow-md border border-stone-150/80 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
                onClick={() => setSelectedPhoto(photo)}
                style={{
                  boxShadow: "0 10px 25px -12px rgba(0,0,0,0.12), 0 4px 10px -5px rgba(0,0,0,0.05)"
                }}
              >
                {/* Polaroid pin head or tape effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-amber-200/40 border-b border-amber-350/15 -translate-y-1 transform rotate-1 shadow-sm font-mono text-[9px] text-center text-amber-900 pointer-events-none uppercase">
                  LADAKH
                </div>

                {/* Photo frame */}
                <div className="relative aspect-video overflow-hidden bg-stone-100 group cursor-pointer border border-stone-100 rounded-sm">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-500 scale-102 group-hover:scale-106"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/95 rounded-full p-2.5 shadow-md flex items-center gap-1">
                      <Eye className="w-4 h-4 text-amber-800" />
                      <span className="text-[10px] font-mono font-bold text-stone-800 pr-1">Chi Tiết</span>
                    </div>
                  </div>
                </div>

                {/* Handwritten descriptive text underneath polaroid */}
                <div className="mt-5 text-left pl-1">
                  <div className="flex items-center gap-2 text-stone-600 text-[10px] font-mono mb-1.5">
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-amber-700" />
                      {photo.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      <Calendar className="w-3 h-3 text-amber-700" />
                      {photo.date}
                    </span>
                  </div>
                  <p className="font-serif text-sm font-medium text-stone-800 leading-relaxed italic line-clamp-2">
                    "{photo.caption}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal (Full Screen View) */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              id="lightbox-backdrop"
              className="fixed inset-0 bg-stone-950/95 z-55 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
              onClick={() => setSelectedPhoto(null)}
            >
              <button
                id="close-lightbox"
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 bg-stone-900/50 rounded-full hover:bg-stone-800/80 transition-all"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Responsive Container */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: -15 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 flex-col md:flex-row relative"
                onClick={e => e.stopPropagation()} // stop close on container tap
              >
                {/* Photo Column */}
                <div className="md:col-span-7 bg-stone-950 aspect-video md:aspect-auto md:h-[500px]">
                  <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover md:object-contain"
                  />
                </div>

                {/* Text Description Column */}
                <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white text-stone-900 border-l border-stone-100">
                  <div>
                    {/* Category Label */}
                    <span className="text-[10px] font-mono tracking-widest text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200/50 font-bold uppercase block w-max mb-6">
                      {selectedPhoto.category === 'natural' && 'Cảnh sắc vĩ đại'}
                      {selectedPhoto.category === 'spiritual' && 'Dấu ấn tâm linh'}
                      {selectedPhoto.category === 'people' && 'Giao hòa đời thường'}
                      {selectedPhoto.category === 'moments' && 'Khoảnh khắc bất chợt'}
                    </span>

                    {/* Meta information details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2.5 text-xs text-stone-500 font-mono">
                        <MapPin className="w-4 h-4 text-amber-700" />
                        <div>
                          <span className="block text-[9px] uppercase text-stone-600">Tọa độ ghi ảnh</span>
                          <span className="font-semibold text-stone-800">{selectedPhoto.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-stone-500 font-mono">
                        <Calendar className="w-4 h-4 text-amber-700" />
                        <div>
                          <span className="block text-[9px] uppercase text-stone-600">Thời gian thực tế</span>
                          <span className="font-semibold text-stone-800">{selectedPhoto.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-px bg-stone-100 my-4"></div>

                    {/* Captions list */}
                    <h4 className="font-mono text-[9px] text-stone-600 uppercase tracking-widest block mb-2">Lời tự bạch</h4>
                    <p className="font-serif text-base text-stone-800 leading-relaxed font-semibold italic">
                      "{selectedPhoto.caption}"
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-600">
                    <div className="flex items-center gap-1">
                      <Camera className="w-4 h-4 text-stone-600" />
                      <span>Ống kính FIT Tour</span>
                    </div>
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="text-amber-800 font-bold cursor-pointer hover:underline"
                    >
                      Đóng Lại
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
