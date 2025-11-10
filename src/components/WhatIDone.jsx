/* THAY THẾ TOÀN BỘ FILE NÀY */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaAward, FaUsers, FaInfoCircle, FaUserFriends, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa'; // Thêm icon
import './WhatIDone.css';
import { useLanguage } from '../context/LanguageContext';

function WhatIDone() {
  const [activeTab, setActiveTab] = useState('projects');
  const { language, translations } = useLanguage();
  const t = translations[language].whatIDone;

  const projects = t.projects;
  const certifications = t.certifications;
  const activities = t.activities;
  const badges = t.badges; // Lấy data badges

  // Hiệu ứng cho TOÀN BỘ SECTION
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 }
    }
  };

  // Hiệu ứng cho NỘI DUNG TAB
  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <motion.section 
      id="what-i-done" 
      className="section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <h2>{t.title}</h2>
        
        {/* Thanh điều hướng Tab */}
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaGithub /> {t.tabProjects}
          </button>
          <button 
            className={`tab-button ${activeTab === 'certs' ? 'active' : ''}`}
            onClick={() => setActiveTab('certs')}
          >
            <FaAward /> {t.tabCerts}
          </button>
          <button 
            className={`tab-button ${activeTab === 'activities' ? 'active' : ''}`}
            onClick={() => setActiveTab('activities')}
          >
            <FaUsers /> {t.tabActivities}
          </button>
        </div>

        {/* Nội dung Tab */}
        <div className="tab-content">
          <AnimatePresence mode="wait">
            {/* Tab Dự án */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="projects-container"
              >
                {projects.map((project, index) => (
                  <div key={index} className="project-entry"> 
                    <h3>{project.title}</h3>
                    <ul className="project-tech-list">
                      {project.tech.map((techItem, i) => <li key={i}>{techItem}</li>)}
                    </ul>
                    <div className="project-details">
                      <div className="detail-item">
                        <FaInfoCircle className="detail-icon" />
                        <div>
                          <h4>{t.detailLabels.summary}</h4>
                          <p>{project.summary}</p>
                        </div>
                      </div>
                      <div className="detail-item">
                        <FaUserFriends className="detail-icon" />
                        <div>
                          <h4>{t.detailLabels.teamSize}</h4>
                          <p>{project.teamSize}</p>
                        </div>
                      </div>
                      <div className="detail-item">
                        <FaLaptopCode className="detail-icon" />
                        <div>
                          <h4>{t.detailLabels.myRole}</h4>
                          <p>{project.myRole}</p>
                        </div>
                      </div>
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-github-link">
                        <FaGithub /> {t.githubLink}
                      </a>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* === TAB CHỨNG CHỈ (ĐÃ CẬP NHẬT) === */}
            {activeTab === 'certs' && (
              <motion.div
                key="certs"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Lưới chứng chỉ */}
                <div className="certs-grid">
                  {certifications.map((cert, index) => (
                    // Thẻ <a> bọc bên ngoài
                    <motion.a 
                      key={index} 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-card" // Dùng class cũ
                      whileHover={{ scale: 1.03, y: -5 }}
                      // Thêm hiệu ứng xuất hiện
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <FaAward className="cert-icon" />
                      <div className="cert-info">
                        <h4>{cert.title}</h4>
                        <p>{cert.from} - <span>{cert.date}</span></p>
                        {/* Chú thích ngắn gọn (MỚI) */}
                        <p className="cert-desc">{cert.desc}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Mục Huy hiệu (MỚI) */}
                <motion.div 
                  className="badges-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: certifications.length * 0.1 }}
                >
                  <h3>{badges.title}</h3>
                  <p>{badges.desc}</p>
                  <a href={badges.link} className="badge-link-button" target="_blank" rel="noopener noreferrer">
                    {badges.cta} <FaExternalLinkAlt />
                  </a>
                </motion.div>

              </motion.div>
            )}
            {/* === HẾT TAB CHỨNG CHỈ === */}


            {/* Tab Hoạt động */}
            {activeTab === 'activities' && (
              <motion.div
                key="activities"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="activities-grid"
              >
                {activities.map((activity, index) => (
                  <div key={index} className="activity-card">
                    <h4>{activity.title}</h4>
                    <p className="date">{activity.date}</p>
                    <p>{activity.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default WhatIDone;