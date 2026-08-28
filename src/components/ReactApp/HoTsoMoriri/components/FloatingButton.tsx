import { motion } from 'motion/react';

export default function FloatingButton() {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0, margin: "-50% 0px 0px 0px" }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Cuộn lên đầu trang"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 bg-amber-500 text-stone-900 rounded-full shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:scale-110 transition-all border border-amber-300 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" /></svg>
    </motion.button>
  );
}
