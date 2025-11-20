/* THAY THẾ TOÀN BỘ FILE NÀY */

import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaBullseye, FaUserAstronaut, FaStar } from 'react-icons/fa'; // Thêm icon
import './Introduction.css';
import { useLanguage } from '../context/LanguageContext';

function Introduction() {
  const { language, translations } = useLanguage();
  const introT = translations[language].introduction;

  // Animation
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 }
    }
  };

  return (
    <motion.section 
      id="introduction" 
      className="section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2>{introT.title}</h2>

        {/* === MỤC MỚI: HIGHLIGHTS === */}
        <div className="highlights-box">
          <h3><FaStar className="highlight-icon" /> {introT.highlights.title}</h3>
          <ul>
            {introT.highlights.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        {/* === HẾT MỤC HIGHLIGHTS === */}

        <div className="intro-grid">
          {/* Học vấn */}
          <div className="intro-card">
            <FaUniversity className="intro-icon" />
            <h3>{introT.education.title}</h3>
            <p>{introT.education.line1}</p>
            <p><strong>{introT.education.line2}</strong></p>
            <p><strong>{introT.education.line3}</strong></p>
          </div>

          {/* Mục tiêu */}
          <div className="intro-card">
            <FaBullseye className="intro-icon" />
            <h3>{introT.values.title}</h3>
            <p>{introT.values.line1}</p>
            <p>{introT.values.line2}</p>
            <p>{introT.values.line3}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Introduction;