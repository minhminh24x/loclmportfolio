import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaBug } from 'react-icons/fa';
import './WhatIDo.css';
import { useLanguage } from '../context/LanguageContext';

function WhatIDo() {
  const { language, translations } = useLanguage();
  const t = translations[language].whatIDo;

  // Hiệu ứng cho TOÀN BỘ SECTION
  const sectionVariants = {
    hidden: { opacity: 0, x: 100 }, // Trượt từ phải
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 }
    }
  };
  
  return (
    <motion.section 
      id="what-i-do" 
      className="section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2>{t.title}</h2>
        <div className="what-i-do-content">
        
          {/* Cột 1 (đã bỏ motion) */}
          <div className="focus-card">
            <div className="focus-icon"><FaJava /></div>
            <div className="focus-text">
              <h3>{t.backend.title}</h3>
              <p>{t.backend.desc}</p>
            </div>
          </div>

          {/* Cột 2 (đã bỏ motion) */}
          <div className="focus-card">
            <div className="focus-icon"><FaReact /></div>
            <div className="focus-text">
              <h3>{t.frontend.title}</h3>
              <p>{t.frontend.desc}</p>
            </div>
          </div>

          {/* Cột 3 (đã bỏ motion) */}
          <div className="focus-card">
            <div className="focus-icon"><FaBug /></div>
            <div className="focus-text">
              <h3>{t.tester.title}</h3>
              <p>{t.tester.desc}</p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export default WhatIDo;