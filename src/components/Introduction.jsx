import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaFlagCheckered, FaGem, FaStar } from 'react-icons/fa'; // Thêm icon FaStar
import './Introduction.css';
import { useLanguage } from '../context/LanguageContext';

function Introduction() {
  const { language, translations } = useLanguage();
  const introT = translations[language].introduction;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
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
        <div className="highlights-box">
          <h3><FaStar className="highlight-icon" /> {introT.highlights.title}</h3>
          <ul>
            {introT.highlights.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="intro-grid">

          {/* Card 1: Điểm nhấn chuyên môn (Highlights) - QUAN TRỌNG */}
          <motion.div className="intro-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaStar className="intro-icon" />
            </div>
            <h3>{introT.highlights?.title || "Highlights"}</h3>
            <ul style={{ textAlign: 'left', paddingLeft: '20px', marginTop: '15px', color: 'var(--color-text-secondary)' }}>
              {introT.highlights?.items.map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Học vấn */}
          <motion.div className="intro-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaUniversity className="intro-icon" />
            </div>
            <h3>{introT.education.title}</h3>
            <div style={{ marginTop: '15px' }}>
              <p>{introT.education.line1}</p>
              <p><strong>{introT.education.line2}</strong></p>
              <p>{introT.education.line3}</p>
            </div>
          </motion.div>

          {/* Card 3: Mục tiêu */}
          <motion.div className="intro-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaFlagCheckered className="intro-icon" />
            </div>
            <h3>{introT.goals.title}</h3>
            <div style={{ marginTop: '15px', textAlign: 'left' }}>
              <p>🚀 <strong>Short-term:</strong><br /> {introT.goals.line1}</p>
              <p>🎯 <strong>Long-term:</strong><br /> {introT.goals.line2}</p>
            </div>
          </motion.div>

          {/* Card 4: Giá trị */}
          <motion.div className="intro-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaGem className="intro-icon" />
            </div>
            <h3>{introT.values.title}</h3>
            <div style={{ marginTop: '15px' }}>
              <p>✔️ {introT.values.line1}</p>
              <p>✔️ {introT.values.line2}</p>
              <p>✔️ {introT.values.line3}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default Introduction;