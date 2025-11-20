import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaLaptopCode, FaStar, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectModal.css';

// Component nhận vào: isOpen (trạng thái mở), onClose (hàm đóng), project (dữ liệu)
const ProjectModal = ({ isOpen, onClose, project }) => {

    // Variants cho hiệu ứng Overlay (Nền tối)
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    // Variants cho Modal chính (Phóng to từ giữa)
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
                    onClick={onClose} // Bấm ra ngoài thì đóng
                >
                    <motion.div
                        className="modal-content"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()} // Bấm vào nội dung không đóng
                    >

                        {/* Header: Nút đóng & Ảnh Cover (Placeholder) */}
                        <div className="modal-header">
                            <button className="close-button" onClick={onClose}>
                                <FaTimes />
                            </button>
                            <div className="modal-cover-placeholder">
                                <FaLaptopCode />
                            </div>
                        </div>

                        {/* Body: Nội dung chi tiết */}
                        <div className="modal-body">
                            <h2>{project.title}</h2>

                            <div className="modal-section">
                                <h4><FaStar /> Tổng quan & Thách thức</h4>
                                {/* Dùng nội dung mới thêm, nếu không có thì dùng summary cũ */}
                                <p className="modal-desc">
                                    {project.longDescription || project.summary}
                                </p>
                            </div>

                            {project.features && (
                                <div className="modal-section">
                                    <h4><FaCheckCircle /> Tính năng nổi bật</h4>
                                    <ul className="modal-features">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}><FaCheckCircle className="feature-icon" /> {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="modal-section">
                                <h4><FaLaptopCode /> Công nghệ sử dụng</h4>
                                <div className="modal-tags">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="modal-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer: Link GitHub */}
                        {project.link && (
                            <div className="modal-footer">
                                {/* Nút Source Code (GitHub) */}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn github">
                                        <FaGithub /> Source Code
                                    </a>
                                )}

                                {/* Nút Live Demo (Web) - Chỉ hiện nếu có demoLink */}
                                {project.demoLink && (
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="modal-link-btn demo">
                                        <FaExternalLinkAlt /> Live Demo
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