import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaBullseye, FaUserFriends } from 'react-icons/fa';
import './Introduction.css';
import { useLanguage } from '../context/LanguageContext';

function Introduction() {
  const { language, translations } = useLanguage();
  const introT = translations[language].introduction;

  // Hiệu ứng cho TOÀN BỘ SECTION
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 }, // Trượt từ trái
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
      viewport={{ once: true, amount: 0.2 }} // Chạy 1 lần khi 20% section hiện ra
    >
      <div className="container">
        <h2>{introT.title}</h2>
        <div className="intro-grid">
          {/* Thẻ Học Vấn (đã bỏ motion) */}
          <div className="intro-card">
            <FaUniversity className="intro-icon" />
            <h3>{introT.education.title}</h3>
            <p>{introT.education.line1}</p>
            <p><strong>{introT.education.line2}</strong></p>
            <p><strong>{introT.education.line3}</strong></p>
          </div>

          {/* Thẻ Mục Tiêu (đã bỏ motion) */}
          <div className="intro-card">
            <FaBullseye className="intro-icon" />
            <h3>{introT.goals.title}</h3>
            <p><strong>{introT.goals.line1}</strong></p>
            <p><strong>{introT.goals.line2}</strong></p>
          </div>

          {/* Thẻ Kỹ năng mềm (đã bỏ motion) */}
          <div className="intro-card">
            <FaUserFriends className="intro-icon" />
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