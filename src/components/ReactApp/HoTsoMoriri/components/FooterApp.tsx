import { BookOpen } from 'lucide-react';

export default function FooterApp() {
  return (
    <footer className="bg-stone-950 text-white py-24 px-4 md:px-8 border-t border-amber-900/10 relative overflow-hidden">
      {/* Abstract light decoration */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <BookOpen className="w-10 h-10 text-amber-500 mx-auto mb-6 animate-pulse" />
        
        <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          Lưu ý thiết thực khi ngủ đêm tại hồ
        </h3>
        
        <p className="max-w-2xl mx-auto text-sm md:text-base font-serif italic text-stone-400 leading-relaxed mb-12 text-center">
          "Hãy giữ ấm tuyệt đối và luôn đi cùng hướng dẫn viên của FIT Tour để đảm bảo an toàn sức khỏe. Tso Moriri không chỉ là một điểm ngắm cảnh, đó là một hành trình vượt qua giới hạn bản thân để chạm đến vẻ đẹp siêu thực."
        </p>

        

      </div>
    </footer>
  );
}
