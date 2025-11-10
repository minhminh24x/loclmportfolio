import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaReact, FaDocker, FaDatabase, FaDesktop, FaRobot, FaComments, FaUsers, FaTasks
} from 'react-icons/fa';
import './Skills.css';
import { useLanguage } from '../context/LanguageContext';
// ĐÃ XÓA: LogoCube và Suspense

function Skills() {
  const { language, translations } = useLanguage();
  const t = translations[language].skills;
  const hardSkills = t.hardSkills;
  const softSkills = t.softSkills;

  const hardSkillIcons = [
    <FaJava />, <FaReact />, <FaDatabase />, <FaDocker />, <FaDesktop />, <FaRobot />
  ];
  const softSkillIcons = [<FaUsers />, <FaComments />, <FaTasks />];

  // Hiệu ứng cho TOÀN BỘ SECTION
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 }, // Trượt từ trái
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 }
    }
  };

  // Hiệu ứng cho card con (vẫn giữ lại)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    // "Nguyên 1 phần" trượt vào đây
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
          // Hiệu ứng Stagger (xuất hiện lần lượt) cho các card con
          transition={{ staggerChildren: 0.1 }}
          initial="hidden" // Đặt lại initial/animate cho card con
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

        {/* Cột 3D đã bị XÓA */}

      </div>
      
      {/* Kỹ năng mềm (vẫn ở dưới) */}
      <div className="container">
        <motion.div
            // Hiệu ứng Stagger
            transition={{ staggerChildren: 0.1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="skills-subtitle">{t.subtitle}</h2>
            <div className="skills-grid soft-skills-grid">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-card soft-skill-card"
                  variants={cardVariants}
                >
                  <div className="skill-icon">{softSkillIcons[index]}</div>
                  <h3>{skill.name}</h3>
                  <p>{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;