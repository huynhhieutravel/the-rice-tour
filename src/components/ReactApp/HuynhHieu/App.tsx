import React from 'react';
import HeroSection from './sections/HeroSection';
import AuthorStorySection from './sections/AuthorStorySection';

const App: React.FC = () => {
  return (
    <div className="w-full bg-[#050a14] min-h-screen text-white font-sans overflow-x-hidden selection:bg-amber-500/30">
      <HeroSection />
      <AuthorStorySection />
    </div>
  );
};

export default App;
