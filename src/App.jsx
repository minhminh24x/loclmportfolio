import React, { Suspense, lazy, useEffect } from 'react'; // Import Suspense và lazy
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import ParticlesBackground from './layout/ParticlesBackground';
import BackToTop from './components/BackToTop';
import { useLanguage } from './context/LanguageContext';

// Lazy load các component nặng phía dưới
const Introduction = lazy(() => import('./components/Introduction'));
const Timeline = lazy(() => import('./components/Timeline'));
const WhatIDo = lazy(() => import('./components/WhatIDo'));
const WhatIDone = lazy(() => import('./components/WhatIDone'));
const WhatIWillDo = lazy(() => import('./components/WhatIWillDo'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

// Component hiển thị khi đang tải (Loading Spinner đơn giản)
const LoadingFallback = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#DC143C',
    fontSize: '1.5rem'
  }}>
    Loading...
  </div>
);

function App() {
  const { language } = useLanguage();

  // === THÊM: Hiệu ứng đổi tiêu đề tab trình duyệt ===
  useEffect(() => {
    if (language === 'vi') {
      document.title = "Lê Minh Lộc | Backend Developer";
    } else {
      document.title = "Le Minh Loc | Backend Developer";
    }
  }, [language]);
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <Hero />

      {/* Bọc các component lazy trong Suspense */}
      <Suspense fallback={<LoadingFallback />}>
        <Introduction />
        <Timeline />
        <WhatIDo />
        <WhatIDone />
        <WhatIWillDo />
        <Skills />
        <Contact />
      </Suspense>
      <BackToTop />

    </div>
  );
}

export default App;