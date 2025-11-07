import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaReact, FaNodeJs, FaDocker, FaDatabase, FaCogs, FaDesktop, FaRobot 
} from 'react-icons/fa';
import './Skills.css';

// Component hiển thị các kỹ năng
function Skills() {
  
  const skillCategories = [
    { name: "Backend", icon: <FaJava />, skills: "Java Spring Boot, JSP/Servlet, REST API" },
    { name: "Frontend", icon: <FaReact />, skills: "React + Vite, HTML5, CSS3, JavaScript" },
    { name: "Database", icon: <FaDatabase />, skills: "PostgreSQL, SQL Server, MySQL" },
    { name: "System & Deploy", icon: <FaDocker />, skills: "Docker, Cloudflare Tunnel, GitHub" },
    { name: "Desktop", icon: <FaDesktop />, skills: "C#, WPF, Entity Framework Core" },
    { name: "IoT", icon: <FaRobot />, skills: "Arduino, Sensors, Motor Control" }
  ];

  // Hiệu ứng "ngầu" cho thẻ skill
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        type: "spring", // Hiệu ứng nảy
        stiffness: 100
      }
    })
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Kỹ năng chính</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'var(--color-red-accent)',
                boxShadow: '0 0 15px var(--color-red-accent)' 
              }} // Hiệu ứng khi hover
            >
              <div className="skill-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.skills}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;