/* THAY THẾ TOÀN BỘ FILE NÀY */

import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline'; // <-- Import mới
import WhatIDo from './components/WhatIDo';
import WhatIDone from './components/WhatIDone';
import WhatIWillDo from './components/WhatIWillDo';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticlesBackground from './layout/ParticlesBackground';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Introduction />
      <Timeline /> {/* <-- Vị trí mới: Sau Intro để kể chuyện lịch sử */}
      <WhatIDo />
      <WhatIDone />
      <WhatIWillDo />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;