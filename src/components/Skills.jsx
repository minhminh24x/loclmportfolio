import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaReact, FaDocker, FaDatabase, FaDesktop, FaRobot, 
  FaGitAlt, FaTerminal, FaTasks, FaLightbulb, FaCheckCircle, FaUsers, FaBookOpen, FaHeart 
} from 'react-icons/fa';
import './Skills.css';
import { useLanguage } from '../context/LanguageContext';

function Skills() {
  const { language, translations } = useLanguage();
  const t = translations[language].skills;
  
  const hardSkills = t.hardSkills;
  const tools = t.tools || [];
  const specialized = t.specialized; // Lấy dữ liệu Specialized
  const softSkills = t.softSkills || []; // Lấy dữ liệu Soft Skills

  const hardSkillIcons = [
    <FaJava />, <FaReact />, <FaDatabase />, <FaDocker />, <FaDesktop />, <FaRobot />
  ];

  const toolIcons = [<FaGitAlt />, <FaTerminal />, <FaTasks />];
  
  // Icon cho Soft Skills
  const softSkillIcons = [<FaUsers />, <FaBookOpen />, <FaHeart />];

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 }
    }
  };

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
        
        {/* 1. Hard Skills */}
        <motion.div transition={{ staggerChildren: 0.1 }}>
          <h2>{t.title}</h2>
          <div className="skills-grid">
            {hardSkills.map((cat, index) => (
              <motion.div key={index} className="skill-card" variants={cardVariants}>
                <div className="skill-icon">{hardSkillIcons[index] || <FaLightbulb />}</div>
                <h3>{cat.name}</h3>
                <p>{cat.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2. Tools & Workflow */}
        <motion.div transition={{ staggerChildren: 0.1 }} style={{marginTop: '60px'}}>
          <h2 className="skills-subtitle">{t.subtitle}</h2>
          <div className="skills-grid soft-skills-grid">
            {tools.map((item, index) => (
              <motion.div key={index} className="skill-card tool-card" variants={cardVariants}>
                <div className="skill-icon small-icon">{toolIcons[index] || <FaLightbulb />}</div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. Specialized & Soft Skills (Layout 2 cột) */}
        <div className="advanced-skills-wrapper">
          
          {/* Cột Trái: Specialized Interests (Dạng danh sách) */}
          <motion.div className="specialized-col" variants={cardVariants}>
             <h3><FaLightbulb className="section-icon"/> {specialized?.title}</h3>
             <ul className="specialized-list">
               {specialized?.items.map((item, idx) => (
                 <li key={idx}><FaCheckCircle className="check-icon"/> {item}</li>
               ))}
             </ul>
          </motion.div>

          {/* Cột Phải: Soft Skills (Dạng Grid nhỏ) */}
          <motion.div className="soft-skills-col">
             {softSkills.map((skill, index) => (
               <motion.div key={index} className="soft-skill-item" variants={cardVariants}>
                 <div className="ss-icon">{softSkillIcons[index] || <FaUsers />}</div>
                 <div className="ss-content">
                    <h4>{skill.name}</h4>
                    <p>{skill.desc}</p>
                 </div>
               </motion.div>
             ))}
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}

export default Skills;