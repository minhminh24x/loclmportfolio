/* THAY THẾ TOÀN BỘ FILE NÀY */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaReact, FaDocker, FaDatabase, FaDesktop, FaRobot, 
  FaGitAlt, FaTerminal, FaTasks 
} from 'react-icons/fa'; // Đã thêm icon mới: Git, Terminal
import './Skills.css';
import { useLanguage } from '../context/LanguageContext';

function Skills() {
  const { language, translations } = useLanguage();
  const t = translations[language].skills;
  
  const hardSkills = t.hardSkills;
  
  // === KHẮC PHỤC LỖI TẠI ĐÂY ===
  // Code cũ gọi t.softSkills -> Code mới gọi t.tools
  // Thêm "|| []" để nếu dữ liệu chưa kịp tải thì không bị crash
  const tools = t.tools || []; 

  const hardSkillIcons = [
    <FaJava />, <FaReact />, <FaDatabase />, <FaDocker />, <FaDesktop />, <FaRobot />
  ];

  // Bộ icon mới khớp với 3 mục: Version Control, Tools, Workflow
  const toolIcons = [<FaGitAlt />, <FaTerminal />, <FaTasks />];

  // Hiệu ứng cho TOÀN BỘ SECTION
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 }, // Trượt từ trái
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 }
    }
  };

  // Hiệu ứng cho card con
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section 
      id="skills" 
      className="section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container"> 
        
        {/* Kỹ năng cứng */}
        <motion.div 
          transition={{ staggerChildren: 0.1 }}
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>{t.title}</h2>
          <div className="skills-grid">
            {hardSkills.map((cat, index) => (
              <motion.div 
                key={index} 
                className="skill-card"
                variants={cardVariants}
              >
                <div className="skill-icon">{hardSkillIcons[index]}</div>
                <h3>{cat.name}</h3>
                <p>{cat.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
      
      {/* === PHẦN MỚI: Tools & Workflow (Thay cho Soft Skills cũ) === */}
      <div className="container">
        <motion.div
            transition={{ staggerChildren: 0.1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="skills-subtitle">{t.subtitle}</h2>
            <div className="skills-grid soft-skills-grid">
              {/* Lặp qua mảng 'tools' thay vì 'softSkills' */}
              {tools.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="skill-card soft-skill-card"
                  variants={cardVariants}
                >
                  <div className="skill-icon">{toolIcons[index]}</div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;