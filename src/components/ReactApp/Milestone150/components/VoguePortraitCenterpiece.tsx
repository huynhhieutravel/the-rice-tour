import React, { useState } from "react";

export default function VoguePortraitCenterpiece() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section
        id="vogue-portrait-centerpiece"
        className="relative bg-stone-950 py-28 px-4 md:px-8 overflow-hidden border-y border-stone-900 font-sans"
      >
        {" "}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-5 z-0">
          {" "}
          <span className="font-serif text-[18vw] font-bold text-white tracking-tighter uppercase whitespace-nowrap leading-none">
            CÔ MÂY U70
          </span>{" "}
        </div>{" "}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>{" "}
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-red-500/5 blur-3xl pointer-events-none"></div>{" "}
        <div className="max-w-6xl mx-auto relative z-10" id="portrait-wrapper">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16 pb-8 border-b border-stone-800">
            {" "}
            <div className="md:col-span-8">
              {" "}
              <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-bold block mb-3 flex items-center gap-2">
                THE EDITORIAL SPREAD / NHẬT KÝ HÀNH TRÌNH
              </span>{" "}
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-none tracking-tight">
                "Cuộc Đời Là Một Cuốn Phim, Tôi Từ Chối Làm Khán Giả"
              </h2>{" "}
            </div>{" "}
            <div className="md:col-span-4 flex md:justify-end gap-3">
              {" "}
              <button
                onClick={() => setActiveTab(0)}
                className={`portrait-tab-btn flex flex-col items-start px-4 py-2.5 rounded-lg border text-left transition-all duration-300 min-w-[90px] cursor-pointer ${activeTab === 0 ? "border-amber-500 bg-amber-500/10 text-white shadow-lg" : "border-stone-800 bg-stone-900/40 text-stone-400 hover:border-stone-700 hover:text-stone-300"}`}
              >
                {" "}
                <span className="font-mono text-xs font-bold block">
                  01
                </span>{" "}
                <span className="text-[10px] uppercase font-sans tracking-wider font-semibold active:text-amber-400">
                  {" "}
                  Cô Mây{" "}
                </span>{" "}
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`portrait-tab-btn flex flex-col items-start px-4 py-2.5 rounded-lg border text-left transition-all duration-300 min-w-[90px] cursor-pointer ${activeTab === 1 ? "border-amber-500 bg-amber-500/10 text-white shadow-lg" : "border-stone-800 bg-stone-900/40 text-stone-400 hover:border-stone-700 hover:text-stone-300"}`}
              >
                {" "}
                <span className="font-mono text-xs font-bold block">
                  02
                </span>{" "}
                <span className="text-[10px] uppercase font-sans tracking-wider font-semibold active:text-amber-400">
                  {" "}
                  Biker{" "}
                </span>{" "}
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={`portrait-tab-btn flex flex-col items-start px-4 py-2.5 rounded-lg border text-left transition-all duration-300 min-w-[90px] cursor-pointer ${activeTab === 2 ? "border-amber-500 bg-amber-500/10 text-white shadow-lg" : "border-stone-800 bg-stone-900/40 text-stone-400 hover:border-stone-700 hover:text-stone-300"}`}
              >
                {" "}
                <span className="font-mono text-xs font-bold block">
                  03
                </span>{" "}
                <span className="text-[10px] uppercase font-sans tracking-wider font-semibold active:text-amber-400">
                  {" "}
                  Bhutan{" "}
                </span>{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 items-center relative">
            {" "}
            <div
              className={`portrait-content-item col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 ${activeTab === 0 ? "opacity-100 z-10 pointer-events-auto scale-100" : "opacity-0 z-0 pointer-events-none scale-95"}`}
            >
              {" "}
              <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                {" "}
                <div className="space-y-1">
                  {" "}
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                    CHÂN DUNG KHẮC HỌA
                  </span>{" "}
                  <p className="font-serif text-2xl font-semibold text-white leading-tight">
                    {" "}
                    Cô Mây{" "}
                  </p>{" "}
                  <div className="h-0.5 w-12 bg-amber-500 mt-2"></div>{" "}
                </div>{" "}
                <div className="space-y-3 font-mono text-xs text-stone-400">
                  {" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Bộ sưu tập</span>{" "}
                    <span className="text-white font-bold">
                      Himalaya 2026
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Hình thái</span>{" "}
                    <span className="text-white font-semibold">
                      Tự truyện du ký
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Độ cao trung bình</span>{" "}
                    <span className="text-white font-semibold">
                      &gt; 3,500m
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Chuyên mục</span>{" "}
                    <span className="text-white font-semibold">
                      Nhật ký FIT Tour
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="bg-stone-900/60 border border-stone-800 p-4 rounded-xl font-mono text-xs text-stone-300 space-y-2">
                  {" "}
                  <div className="flex items-center gap-2 text-amber-500 font-bold text-[10px]">
                    {" "}
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                    BẢN ĐỒ TỌA ĐỘ
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-stone-400 text-[10px] uppercase block">
                      Himalaya GPS Point
                    </span>{" "}
                    <span className="text-white font-bold">
                      34.2787° N, 77.6047° E
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-stone-400 text-[10px] uppercase block">
                      Định danh
                    </span>{" "}
                    <span className="text-stone-300 italic">
                      Gió Lạnh Tuyết Trắng — 5,359m
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                {" "}
                <div
                  className="relative aspect-3/4 w-full max-w-[370px] bg-stone-900 border-4 border-amber-500/20 rounded-2xl shadow-2xl p-4 overflow-hidden group"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(218, 175, 90, 0.15)",
                  }}
                >
                  {" "}
                  <div className="absolute inset-2 border border-amber-500/30 rounded-xl z-20 pointer-events-none"></div>{" "}
                  <img
                    src="https://media.fittour.vn/uploads/trai-nghiem-choi-tuyet-khardungla-himalaya.webp"
                    alt="CÔ MÂY - U70 ĐI LADAKH"
                    referrerpolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 brightness-[85%] scale-102 group-hover:scale-105"
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent z-10"></div>{" "}
                  <div className="absolute top-6 left-6 z-20 text-white font-serif pointer-events-none">
                    {" "}
                    <span className="font-mono text-[8px] uppercase tracking-widest text-amber-400 block font-semibold">
                      FIT TOUR EXCLUSIVE
                    </span>{" "}
                    <h3 className="text-xl font-bold tracking-tight mt-0.5 drop-shadow">
                      DIARY
                    </h3>{" "}
                  </div>{" "}
                  <div className="absolute top-6 right-6 z-20 text-right font-mono text-[8px] text-white/70 pointer-events-none">
                    {" "}
                    <span>ISSUE 01</span>{" "}
                    <span className="block mt-0.5 text-amber-400 font-bold bg-amber-400/10 px-1 py-0.5 rounded border border-amber-400/20 uppercase">
                      {" "}
                      ACTIVE EXPLORER{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-6 inset-x-6 z-20 text-left pointer-events-none">
                    {" "}
                    <div className="flex items-center gap-1 text-[8px] text-amber-400 font-mono tracking-widest block mb-1">
                      {" "}
                      <span>PORTRAIT SPREAD</span> <span>•</span>{" "}
                      <span>STORY</span>{" "}
                    </div>{" "}
                    <h4 className="font-serif text-2xl font-bold leading-tight uppercase tracking-tight text-white drop-shadow-md">
                      {" "}
                      CÔ MÂY - U70 ĐI LADAKH{" "}
                    </h4>{" "}
                    <p className="font-sans text-[10px] text-stone-300 line-clamp-2 mt-1.5 italic font-medium leading-relaxed opacity-95">
                      "Ở độ cao nghẹt thở này, hơi thở tôi mỏng mảnh nhưng khát
                      khao của tôi lại dày dặn hơn bao giờ hết. Khi gió quất
                      lạnh buốt, tôi tự hào vì gối mình không quỵ ngã."
                    </p>{" "}
                  </div>{" "}
                  <a
                    href="/co-may"
                    aria-label="Đọc nhật ký hành trình Cô Mây"
                    className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]"
                  >
                    {" "}
                    <span className="px-6 py-3 border border-amber-500 text-amber-400 font-mono text-xs uppercase tracking-widest bg-stone-900/80 hover:bg-amber-500 hover:text-stone-900 transition-colors rounded-full font-bold">
                      Đọc Nhật Ký Hành Trình
                    </span>{" "}
                  </a>{" "}
                  <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-stone-900 to-black z-15"></div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-4 space-y-6 order-3">
                {" "}
                <div className="bg-stone-900/40 border border-stone-850 p-6 md:p-8 rounded-2xl relative">
                  {" "}
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-stone-400 font-bold block mb-4">
                    Trích Đoạn Hành Trình
                  </h4>{" "}
                  <div className="space-y-4">
                    {" "}
                    <p className="font-serif text-base sm:text-lg text-stone-200 leading-relaxed italic">
                      "Ở độ cao nghẹt thở này, hơi thở tôi mỏng mảnh nhưng khát
                      khao của tôi lại dày dặn hơn bao giờ hết. Khi gió quất
                      lạnh buốt, tôi tự hào vì gối mình không quỵ ngã."
                    </p>{" "}
                    <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
                      {" "}
                      <span className="text-stone-400">
                        Đọc toàn bộ bài viết
                      </span>{" "}
                      <a
                        href="/co-may"
                        aria-label="Đọc bài viết Cô Mây tại đây"
                        className="text-amber-500 hover:text-amber-400 underline font-bold block"
                      >
                        Tại đây
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 flex items-center justify-between">
                  {" "}
                  <div>
                    {" "}
                    <span className="font-mono text-[9px] text-stone-400 block">
                      SIGNATURE OF MEMORY
                    </span>{" "}
                    <span className="font-serif text-lg font-bold italic text-amber-400 font-medium tracking-wide">
                      {" "}
                      Cloudy May • 1958{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-[10px] font-mono text-stone-400 border border-stone-800/80 rounded px-2.5 py-1 text-center bg-stone-900">
                    {" "}
                    Phượt thủ 68 tuổi{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div
              className={`portrait-content-item col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 ${activeTab === 1 ? "opacity-100 z-10 pointer-events-auto scale-100" : "opacity-0 z-0 pointer-events-none scale-95"}`}
            >
              {" "}
              <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                {" "}
                <div className="space-y-1">
                  {" "}
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                    CHÂN DUNG KHẮC HỌA
                  </span>{" "}
                  <p className="font-serif text-2xl font-semibold text-white leading-tight">
                    {" "}
                    Biker{" "}
                  </p>{" "}
                  <div className="h-0.5 w-12 bg-amber-500 mt-2"></div>{" "}
                </div>{" "}
                <div className="space-y-3 font-mono text-xs text-stone-400">
                  {" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Bộ sưu tập</span>{" "}
                    <span className="text-white font-bold">
                      Himalaya 2026
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Hình thái</span>{" "}
                    <span className="text-white font-semibold">
                      Tự truyện du ký
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Độ cao trung bình</span>{" "}
                    <span className="text-white font-semibold">
                      &gt; 3,500m
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Chuyên mục</span>{" "}
                    <span className="text-white font-semibold">
                      Nhật ký FIT Tour
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="bg-stone-900/60 border border-stone-800 p-4 rounded-xl font-mono text-xs text-stone-300 space-y-2">
                  {" "}
                  <div className="flex items-center gap-2 text-amber-500 font-bold text-[10px]">
                    {" "}
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                    BẢN ĐỒ TỌA ĐỘ
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-stone-400 text-[10px] uppercase block">
                      Himalaya GPS Point
                    </span>{" "}
                    <span className="text-white font-bold">
                      34.0560° N, 77.6667° E
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-stone-400 text-[10px] uppercase block">
                      Định danh
                    </span>{" "}
                    <span className="text-stone-300 italic">
                      Cảm Xúc Himalayas
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                {" "}
                <div
                  className="relative aspect-3/4 w-full max-w-[370px] bg-stone-900 border-4 border-amber-500/20 rounded-2xl shadow-2xl p-4 overflow-hidden group"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(218, 175, 90, 0.15)",
                  }}
                >
                  {" "}
                  <div className="absolute inset-2 border border-amber-500/30 rounded-xl z-20 pointer-events-none"></div>{" "}
                  <img
                    src="https://media.fittour.vn/uploads/2024/01/nhat-ky-trai-nghiem-du-lich-himalaya-bang-xe-may.webp"
                    alt="LADAKH BẰNG XE MÁY"
                    referrerpolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 brightness-[85%] scale-102 group-hover:scale-105"
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent z-10"></div>{" "}
                  <div className="absolute top-6 left-6 z-20 text-white font-serif pointer-events-none">
                    {" "}
                    <span className="font-mono text-[8px] uppercase tracking-widest text-amber-400 block font-semibold">
                      FIT TOUR EXCLUSIVE
                    </span>{" "}
                    <h3 className="text-xl font-bold tracking-tight mt-0.5 drop-shadow">
                      DIARY
                    </h3>{" "}
                  </div>{" "}
                  <div className="absolute top-6 right-6 z-20 text-right font-mono text-[8px] text-white/70 pointer-events-none">
                    {" "}
                    <span>ISSUE 02</span>{" "}
                    <span className="block mt-0.5 text-amber-400 font-bold bg-amber-400/10 px-1 py-0.5 rounded border border-amber-400/20 uppercase">
                      {" "}
                      ADVENTURE SOUL{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-6 inset-x-6 z-20 text-left pointer-events-none">
                    {" "}
                    <div className="flex items-center gap-1 text-[8px] text-amber-400 font-mono tracking-widest block mb-1">
                      {" "}
                      <span>PORTRAIT SPREAD</span> <span>•</span>{" "}
                      <span>STORY</span>{" "}
                    </div>{" "}
                    <h4 className="font-serif text-2xl font-bold leading-tight uppercase tracking-tight text-white drop-shadow-md">
                      {" "}
                      LADAKH BẰNG XE MÁY{" "}
                    </h4>{" "}
                    <p className="font-sans text-[10px] text-stone-300 line-clamp-2 mt-1.5 italic font-medium leading-relaxed opacity-95">
                      "Nhật ký hành trình Himalaya bằng xe máy kể lại hành trình 8
                      ngày qua vùng đất thuộc dãy Himalayas này! Những hình ảnh
                      đặc biệt đầy ấn tượng."
                    </p>{" "}
                  </div>{" "}
                  <a
                    href="/nhat-ky-hanh-trinh-himalaya-bang-xe-may"
                    aria-label="Đọc nhật ký hành trình Biker"
                    className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]"
                  >
                    {" "}
                    <span className="px-6 py-3 border border-amber-500 text-amber-400 font-mono text-xs uppercase tracking-widest bg-stone-900/80 hover:bg-amber-500 hover:text-stone-900 transition-colors rounded-full font-bold">
                      Đọc Nhật Ký Hành Trình
                    </span>{" "}
                  </a>{" "}
                  <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-stone-900 to-black z-15"></div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-4 space-y-6 order-3">
                {" "}
                <div className="bg-stone-900/40 border border-stone-850 p-6 md:p-8 rounded-2xl relative">
                  {" "}
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-stone-400 font-bold block mb-4">
                    Trích Đoạn Hành Trình
                  </h4>{" "}
                  <div className="space-y-4">
                    {" "}
                    <p className="font-serif text-base sm:text-lg text-stone-200 leading-relaxed italic">
                      "Nhật ký hành trình Himalaya bằng xe máy kể lại hành trình 8
                      ngày qua vùng đất thuộc dãy Himalayas này! Những hình ảnh
                      đặc biệt đầy ấn tượng."
                    </p>{" "}
                    <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
                      {" "}
                      <span className="text-stone-400">
                        Đọc toàn bộ bài viết
                      </span>{" "}
                      <a
                        href="/nhat-ky-hanh-trinh-himalaya-bang-xe-may"
                        aria-label="Đọc bài viết Biker tại đây"
                        className="text-amber-500 hover:text-amber-400 underline font-bold block"
                      >
                        Tại đây
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 flex items-center justify-between">
                  {" "}
                  <div>
                    {" "}
                    <span className="font-mono text-[9px] text-stone-400 block">
                      SIGNATURE OF MEMORY
                    </span>{" "}
                    <span className="font-serif text-lg font-bold italic text-amber-400 font-medium tracking-wide">
                      {" "}
                      Hành Trình Xe Máy{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-[10px] font-mono text-stone-400 border border-stone-800/80 rounded px-2.5 py-1 text-center bg-stone-900">
                    {" "}
                    Câu chuyện Biker{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div
              className={`portrait-content-item col-start-1 row-start-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 ${activeTab === 2 ? "opacity-100 z-10 pointer-events-auto scale-100" : "opacity-0 z-0 pointer-events-none scale-95"}`}
            >
              {" "}
              <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                {" "}
                <div className="space-y-1">
                  {" "}
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                    CHÂN DUNG KHẮC HỌA
                  </span>{" "}
                  <p className="font-serif text-2xl font-semibold text-white leading-tight">
                    {" "}
                    Bhutan{" "}
                  </p>{" "}
                  <div className="h-0.5 w-12 bg-amber-500 mt-2"></div>{" "}
                </div>{" "}
                <div className="space-y-3 font-mono text-xs text-stone-400">
                  {" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Bộ sưu tập</span>{" "}
                    <span className="text-white font-bold">
                      Himalaya 2026
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Hình thái</span>{" "}
                    <span className="text-white font-semibold">
                      Tự truyện du ký
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Độ cao trung bình</span>{" "}
                    <span className="text-white font-semibold">
                      &gt; 3,500m
                    </span>{" "}
                  </div>{" "}
                  <div className="flex justify-between py-1.5 border-b border-stone-900">
                    {" "}
                    <span>Chuyên mục</span>{" "}
                    <span className="text-white font-semibold">
                      Nhật ký FIT Tour
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="bg-stone-900/60 border border-stone-800 p-4 rounded-xl font-mono text-xs text-stone-300 space-y-2">
                  {" "}
                  <div className="flex items-center gap-2 text-amber-500 font-bold text-[10px]">
                    {" "}
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                    BẢN ĐỒ TỌA ĐỘ
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-stone-400 text-[10px] uppercase block">
                      Himalaya GPS Point
                    </span>{" "}
                    <span className="text-white font-bold">
                      33.7225° N, 78.9158° E
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="text-stone-400 text-[10px] uppercase block">
                      Định danh
                    </span>{" "}
                    <span className="text-stone-300 italic">
                      Bhutan &amp; Nubra
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                {" "}
                <div
                  className="relative aspect-3/4 w-full max-w-[370px] bg-stone-900 border-4 border-amber-500/20 rounded-2xl shadow-2xl p-4 overflow-hidden group"
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(218, 175, 90, 0.15)",
                  }}
                >
                  {" "}
                  <div className="absolute inset-2 border border-amber-500/30 rounded-xl z-20 pointer-events-none"></div>{" "}
                  <img
                    src="https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-himalaya.webp"
                    alt="BẦU TRỜI GẦN MẶT ĐẤT"
                    referrerpolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 brightness-[85%] scale-102 group-hover:scale-105"
                  />{" "}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent z-10"></div>{" "}
                  <div className="absolute top-6 left-6 z-20 text-white font-serif pointer-events-none">
                    {" "}
                    <span className="font-mono text-[8px] uppercase tracking-widest text-amber-400 block font-semibold">
                      FIT TOUR EXCLUSIVE
                    </span>{" "}
                    <h3 className="text-xl font-bold tracking-tight mt-0.5 drop-shadow">
                      DIARY
                    </h3>{" "}
                  </div>{" "}
                  <div className="absolute top-6 right-6 z-20 text-right font-mono text-[8px] text-white/70 pointer-events-none">
                    {" "}
                    <span>ISSUE 03</span>{" "}
                    <span className="block mt-0.5 text-amber-400 font-bold bg-amber-400/10 px-1 py-0.5 rounded border border-amber-400/20 uppercase">
                      {" "}
                      THE STARGAZER{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="absolute bottom-6 inset-x-6 z-20 text-left pointer-events-none">
                    {" "}
                    <div className="flex items-center gap-1 text-[8px] text-amber-400 font-mono tracking-widest block mb-1">
                      {" "}
                      <span>PORTRAIT SPREAD</span> <span>•</span>{" "}
                      <span>STORY</span>{" "}
                    </div>{" "}
                    <h4 className="font-serif text-2xl font-bold leading-tight uppercase tracking-tight text-white drop-shadow-md">
                      {" "}
                      BẦU TRỜI GẦN MẶT ĐẤT{" "}
                    </h4>{" "}
                    <p className="font-sans text-[10px] text-stone-300 line-clamp-2 mt-1.5 italic font-medium leading-relaxed opacity-95">
                      "Khám phá Himalaya qua Bhutan, Nubra, những con đèo hùng vĩ
                      và các câu chuyện đời thường khiến hành trình ở lại rất
                      lâu trong ký ức."
                    </p>{" "}
                  </div>{" "}
                  <a
                    href="/nhat-ky-kham-pha-himalaya"
                    aria-label="Đọc nhật ký hành trình Bhutan"
                    className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]"
                  >
                    {" "}
                    <span className="px-6 py-3 border border-amber-500 text-amber-400 font-mono text-xs uppercase tracking-widest bg-stone-900/80 hover:bg-amber-500 hover:text-stone-900 transition-colors rounded-full font-bold">
                      Đọc Nhật Ký Hành Trình
                    </span>{" "}
                  </a>{" "}
                  <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-stone-900 to-black z-15"></div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-4 space-y-6 order-3">
                {" "}
                <div className="bg-stone-900/40 border border-stone-850 p-6 md:p-8 rounded-2xl relative">
                  {" "}
                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-stone-400 font-bold block mb-4">
                    Trích Đoạn Hành Trình
                  </h4>{" "}
                  <div className="space-y-4">
                    {" "}
                    <p className="font-serif text-base sm:text-lg text-stone-200 leading-relaxed italic">
                      "Khám phá Himalaya qua Bhutan, Nubra, những con đèo hùng vĩ
                      và các câu chuyện đời thường khiến hành trình ở lại rất
                      lâu trong ký ức."
                    </p>{" "}
                    <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
                      {" "}
                      <span className="text-stone-400">
                        Đọc toàn bộ bài viết
                      </span>{" "}
                      <a
                        href="/nhat-ky-kham-pha-himalaya"
                        aria-label="Đọc bài viết Bhutan tại đây"
                        className="text-amber-500 hover:text-amber-400 underline font-bold block"
                      >
                        Tại đây
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 flex items-center justify-between">
                  {" "}
                  <div>
                    {" "}
                    <span className="font-mono text-[9px] text-stone-400 block">
                      SIGNATURE OF MEMORY
                    </span>{" "}
                    <span className="font-serif text-lg font-bold italic text-amber-400 font-medium tracking-wide">
                      {" "}
                      Khám Phá Himalaya{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="text-[10px] font-mono text-stone-400 border border-stone-800/80 rounded px-2.5 py-1 text-center bg-stone-900">
                    {" "}
                    Ghi chép hành trình{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
}
