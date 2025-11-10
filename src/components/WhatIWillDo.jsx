import React from 'react';
import { motion } from 'framer-motion';
import { FaBroadcastTower, FaCodeBranch, FaUsersCog, FaProjectDiagram } from 'react-icons/fa';
import './WhatIWillDo.css';
import { useLanguage } from '../context/LanguageContext';

function WhatIWillDo() {
  const { language, translations } = useLanguage();
  const t = translations[language].whatIWillDo;

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
      id="what-i-will-do" 
      className="section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2>{t.title}</h2>
        <div className="future-grid">
          {/* Thẻ 1 (đã bỏ motion) */}
          <div className="future-card">
            <FaProjectDiagram className="future-icon" />
            <h3>{t.systemDesign.title}</h3>
            <p>{t.systemDesign.desc}</p>
          </div>

          {/* Thẻ 2 (đã bỏ motion) */}
          <div className="future-card">
            <FaCodeBranch className="future-icon" />
            <h3>{t.crossPlatform.title}</h3>
            <p>{t.crossPlatform.desc}</p>
          </div>

          {/* Thẻ 3 (đã bỏ motion) */}
          <div className="future-card">
            <FaBroadcastTower className="future-icon" />
            <h3>{t.iot.title}</h3>
            <p>{t.iot.desc}</p>
          </div>

          {/* Thẻ 4 (đã bỏ motion) */}
          <div className="future-card">
            <FaUsersCog className="future-icon" />
            <h3>{t.leadership.title}</h3>
            <p>{t.leadership.desc}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default WhatIWillDo;