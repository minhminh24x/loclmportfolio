import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';
import { useLanguage } from '../context/LanguageContext';

function Timeline() {
  const { language, translations } = useLanguage();
  const t = translations[language].timeline;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.section 
      id="timeline" 
      className="section timeline-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2>{t.title}</h2>
        <div className="timeline-wrapper">
          {t.steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{step.year}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Timeline;