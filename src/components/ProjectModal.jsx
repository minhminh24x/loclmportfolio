import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaLaptopCode, FaStar, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectModal.css';
// 1. Import hook ngôn ngữ
import { useLanguage } from '../context/LanguageContext';

const ProjectModal = ({ isOpen, onClose, project }) => {
    // 2. Lấy dữ liệu dịch
    const { language, translations } = useLanguage();
    const tModal = translations[language].projectModal;

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        },
        exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.2 } }
    };

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="modal-header">
                            <button className="close-button" onClick={onClose} title={tModal.close}>
                                <FaTimes />
                            </button>
                            <div className="modal-cover-placeholder">
                                <FaLaptopCode />
                            </div>
                        </div>

                        {/* Body */}
                        <div className="modal-body">
                            <h2>{project.title}</h2>

                            <div className="modal-section">
                                {/* SỬA: Dùng biến tModal.overview thay vì text cứng */}
                                <h4><FaStar /> {tModal.overview}</h4>
                                <p className="modal-desc">
                                    {project.longDescription || project.summary}
                                </p>
                            </div>

                            {project.features && (
                                <div className="modal-section">
                                    {/* SỬA: Dùng biến tModal.features */}
                                    <h4><FaCheckCircle /> {tModal.features}</h4>
                                    <ul className="modal-features">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}><FaCheckCircle className="feature-icon" /> {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="modal-section">
                                {/* SỬA: Dùng biến tModal.techStack */}
                                <h4><FaLaptopCode /> {tModal.techStack}</h4>
                                <div className="modal-tags">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="modal-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        {(project.link || project.demoLink) && (
                            <div className="modal-footer">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn github">
                                        {/* SỬA: Dùng tModal.sourceCode */}
                                        <FaGithub /> {tModal.sourceCode}
                                    </a>
                                )}

                                {project.demoLink && (
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="modal-link-btn demo">
                                        {/* SỬA: Dùng tModal.liveDemo */}
                                        <FaExternalLinkAlt /> {tModal.liveDemo}
                                    </a>
                                )}
                            </div>
                        )}

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;