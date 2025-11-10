import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import WhatIDo from './components/WhatIDo';
import WhatIDone from './components/WhatIDone';
import WhatIWillDo from './components/WhatIWillDo';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticlesBackground from './layout/ParticlesBackground';

// ĐÃ XÓA: Preloader, AppCursor, AnimatePresence

function App() {
  // ĐÃ XÓA: State isLoading và useEffect
  
  return (
    <div>
      {/* ĐÃ XÓA: AppCursor */}
      <ParticlesBackground />
      
      {/* ĐÃ XÓA: Logic AnimatePresence và isLoading */}
      <Navbar />
      <Hero />
      <Introduction />
      <WhatIDo />
      <WhatIDone />
      <WhatIWillDo />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;