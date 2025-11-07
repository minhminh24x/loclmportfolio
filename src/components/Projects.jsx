import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

// Component hiển thị các dự án nổi bật
function Projects() {
  
  const featuredProjects = [
    {
      title: "TailocShop",
      desc: "Web bán hàng MVC (JSP + Servlet + SQL Server) với giỏ hàng, voucher, checkout, và xuất Excel.",
      tech: ["Java", "JSP/Servlet", "SQL Server"]
    },
    {
      title: "Medical Record System",
      desc: "Hệ thống quản lý hồ sơ bệnh nhân (Spring Boot + PostgreSQL + JWT Authentication).",
      tech: ["Spring Boot", "PostgreSQL", "JWT"]
    },
    {
      title: "WPF Patient Manager",
      desc: "Ứng dụng desktop quản lý bệnh nhân (C# + Entity Framework Core + SQL Server).",
      tech: ["C#", "WPF", "EF Core"]
    },
    {
      title: "Smart Trash Can",
      desc: "Dự án Arduino sử dụng cảm biến, LCD và hệ thống mở nắp tự động.",
      tech: ["Arduino", "C++", "IoT"]
    }
  ];

  // Hiệu ứng cho card dự án
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Dự án nổi bật</h2>
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={projectVariants}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <ul className="project-tech-list">
                  {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
              <div className="project-links">
                {/* Giả sử bạn có link GitHub, nếu không có thể ẩn đi */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Xem trên GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;