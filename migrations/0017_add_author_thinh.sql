INSERT INTO User (id, username, email, password_hash, role, is_active, created_at)
VALUES (
  'thinh_quoc_tran',
  'tranthinh',
  'thinh.tran@fittour.com.vn',
  'pbkdf2:sha256:200000$dummy_hash_please_reset_password', 
  'AUTHOR',
  1,
  CURRENT_TIMESTAMP
);

INSERT INTO Snippet (slug, name, description, html_content, status, created_at, updated_at)
VALUES (
  'author-tran-quoc-thinh',
  'Author Snippet - Trần Quốc Thịnh',
  'Khối thông tin tác giả Trần Quốc Thịnh dùng để chèn cuối bài viết',
  '<div class="mt-10 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 not-prose shadow-sm relative overflow-hidden"><div class="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div><img src="https://media.fittour.vn/uploads/2024/05/trip-planner-tran-thinh.webp" alt="Trần Quốc Thịnh" class="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md border-4 border-white shrink-0 relative z-10" onerror="this.src=''https://media.fittour.vn/uploads/huynhhieutravel.webp''" /><div class="relative z-10 flex-1 text-center sm:text-left"><div class="flex items-center justify-center sm:justify-start gap-2 flex-wrap mb-3"><span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">PROJECT MANAGER | GUIDE</span><span class="bg-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">KINH NGHIỆM: 8 NĂM</span></div><div class="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 mb-3"><div class="text-xl font-bold text-slate-900">Trần Quốc Thịnh</div><a href="https://dulichcoguu.com/tran-quoc-thinh/" target="_blank" rel="noopener noreferrer" class="text-[13px] text-amber-600 font-bold hover:underline">Xem hồ sơ chuyên gia</a></div><p class="text-[14.5px] text-slate-600 leading-relaxed mb-0">Với vai trò là một người dẫn đường đầy nhiệt huyết, tôi có kinh nghiệm điều hành và dẫn dắt chuyên sâu các tuyến <strong>Trung Quốc, Đông Nam Á, Hàn Quốc, Nhật Bản, Đài Loan, Himalaya, Con đường tơ lụa, Ai Cập, Ấn Độ,...</strong> Những thông tin trong bài viết được đúc kết từ quá trình <strong>trực tiếp khảo sát và dẫn đoàn</strong> tại các vùng đất kỳ vĩ này. Hy vọng những <strong>kinh nghiệm chân thực</strong> này sẽ mang đến cho bạn hành trang vững chắc nhất!</p></div></div>',
  1,
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);
