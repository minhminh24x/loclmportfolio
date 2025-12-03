import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Thêm import ProjectModal
import ProjectModal from './ProjectModal';
import { FaGithub, FaAward, FaUsers, FaInfoCircle, FaUserFriends, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import './WhatIDone.css';
import { useLanguage } from '../context/LanguageContext';

function WhatIDone() {
  const [activeTab, setActiveTab] = useState('projects');

  // === THÊM STATE CHO MODAL ===
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { language, translations } = useLanguage();
  const t = translations[language].whatIDone;

  const projects = t.projects;
  const certifications = t.certifications;
  const activities = t.activities;
  const badges = t.badges;

  // Hàm mở modal
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Đợi animation đóng xong mới clear data
  };

  // ... (Giữ nguyên các biến variants)
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 50, duration: 0.8 } }
  };
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

        {/* ... (Giữ nguyên phần Tab Navigation) ... */}
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
                  // === SỬA ĐỔI: Thêm onClick để mở Modal ===
                  <div
                    key={index}
                    className="project-entry clickable-project glass-card" // Thêm class để CSS cursor pointer
                    onClick={() => openModal(project)}
                  >
                    <h3>{project.title}</h3>
                    <ul className="project-tech-list">
                      {/* Chỉ hiện tối đa 4 công nghệ để gọn */}
                      {project.tech.slice(0, 4).map((techItem, i) => <li key={i}>{techItem}</li>)}
                      {project.tech.length > 4 && <li>+{project.tech.length - 4}</li>}
                    </ul>

                    <div className="project-details">
                      <div className="detail-item">
                        <FaInfoCircle className="detail-icon" />
                        <div>
                          <h4>{t.detailLabels.summary}</h4>
                          {/* Cắt bớt text nếu quá dài */}
                          <p className="line-clamp-2">{project.summary}</p>
                        </div>
                      </div>
                      {/* Ẩn bớt các chi tiết Team/Role ở đây cho gọn, 
                        để dành hiển thị trong Modal hoặc giữ nguyên tùy bạn. 
                        Ở đây tôi giữ nguyên nhưng bạn có thể bỏ bớt.
                      */}
                      <div className="detail-item">
                        <FaUserFriends className="detail-icon" />
                        <div>
                          <h4>{t.detailLabels.teamSize}</h4>
                          <p>{project.teamSize}</p>
                        </div>
                      </div>
                      <div className="detail-item">
                        <FaUserFriends className="detail-icon" />
                        <div>
                          <h4>{t.detailLabels.myRole}</h4>
                          <p>{project.myRole}</p>
                        </div>
                      </div>
                    </div>

                    <div className="click-hint">
                      (Nhấn để xem chi tiết)
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ... (Giữ nguyên Tab Certs và Activities) ... */}
            {activeTab === 'certs' && (
              <motion.div key="certs" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit">
                <div className="certs-grid">
                  {certifications.map((cert, index) => (
                    <motion.a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card" whileHover={{ scale: 1.03, y: -5 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                      <FaAward className="cert-icon" />
                      <div className="cert-info">
                        <h4>{cert.title}</h4>
                        <p>{cert.from} - <span>{cert.date}</span></p>
                        <p className="cert-desc">{cert.desc}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <motion.div className="badges-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: certifications.length * 0.1 }}>
                  <h3>{badges.title}</h3>
                  <p>{badges.desc}</p>
                  <a href={badges.link} className="badge-link-button" target="_blank" rel="noopener noreferrer">{badges.cta} <FaExternalLinkAlt /></a>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'activities' && (
              <motion.div key="activities" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit" className="activities-grid">
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

      {/* === ĐẶT MODAL Ở ĐÂY === */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />

    </motion.section>
  );
}

export default WhatIDone;