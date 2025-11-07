import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Component hiển thị thông tin về bản thân
function About() {
  
  // Hàm tạo hiệu ứng cho từng item
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Hiệu ứng xuất hiện lần lượt
        duration: 0.5,
      },
    }),
  };

  const aboutData = {
    doing: [
      "Tập trung phát triển Backend với Java (Spring Boot), JSP/Servlet.",
      "Học React + Vite để xây dựng frontend hiện đại.",
      "Tìm hiểu về Docker, Cloudflare Tunnel, và API Deployment."
    ],
    willDo: [
      "Nghiên cứu sâu về System Design và RESTful API Architecture.",
      "Tìm hiểu Entity Framework Core (C#).",
      "Kết hợp phần mềm và phần cứng cho các dự án IoT thực tế."
    ]
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2>Về bản thân mình</h2>
        <div className="about-content">
          
          {/* Cột: Tôi đang làm gì */}
          <motion.div 
            className="about-column"
            initial="hidden"
            whileInView="visible" // Kích hoạt khi cuộn tới
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Tôi đang làm gì</h3>
            <ul>
              {aboutData.doing.map((item, index) => (
                <motion.li key={index} custom={index} variants={itemVariants}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Cột: Tôi sẽ làm gì */}
          <motion.div 
            className="about-column"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Tôi sẽ làm gì</h3>
            <ul>
              {aboutData.willDo.map((item, index) => (
                <motion.li key={index} custom={index} variants={itemVariants}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;