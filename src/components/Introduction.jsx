import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaFlagCheckered, FaGem, FaStar, FaTools, FaBrain } from 'react-icons/fa';
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

        {/* ĐÃ XÓA PHẦN HIGHLIGHTS-BOX TRÙNG LẶP Ở ĐÂY */}

        <div className="intro-grid">

          {/* Card 1: Điểm nhấn chuyên môn (Highlights) */}
          <motion.div className="intro-card highlight-card glass-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaStar className="intro-icon" />
            </div>
            <h3>{introT.highlights?.title}</h3>
            <ul className="intro-list">
              {introT.highlights?.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Giải quyết vấn đề (Problem Solving - NEW) */}
          <motion.div className="intro-card glass-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaTools className="intro-icon" />
            </div>
            <h3>{introT.problemSolving?.title || "Problem Solving"}</h3>
            <ul className="intro-list">
              {introT.problemSolving?.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: AI Collaboration (NEW) */}
          <motion.div className="intro-card ai-card glass-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaBrain className="intro-icon" />
            </div>
            <h3>{introT.aiAssisted?.title}</h3>
            <p className="intro-desc">{introT.aiAssisted?.desc}</p>
          </motion.div>

          {/* Card 4: Học vấn */}
          <motion.div className="intro-card glass-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaUniversity className="intro-icon" />
            </div>
            <h3>{introT.education.title}</h3>
            <div className="intro-content-block">
              <p>{introT.education.line1}</p>
              <p className="highlight-text">{introT.education.line2}</p>
              <p>{introT.education.line3}</p>
            </div>
          </motion.div>

          {/* Card 5: Mục tiêu */}
          <motion.div className="intro-card glass-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaFlagCheckered className="intro-icon" />
            </div>
            <h3>{introT.goals.title}</h3>
            <div className="intro-content-block align-left">
              <p> <strong>Short-term:</strong><br /> {introT.goals.line1}</p>
              <p> <strong>Long-term:</strong><br /> {introT.goals.line2}</p>
            </div>
          </motion.div>

          {/* Card 6: Giá trị */}
          <motion.div className="intro-card glass-card" variants={cardVariants}>
            <div className="card-icon-wrapper">
              <FaGem className="intro-icon" />
            </div>
            <h3>{introT.values.title}</h3>
            <div className="intro-content-block align-left">
              <p> {introT.values.line1}</p>
              <p> {introT.values.line2}</p>
              <p> {introT.values.line3}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}


export default Introduction;
