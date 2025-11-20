import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaStar, FaCode } from 'react-icons/fa';
import './Timeline.css';
import { useLanguage } from '../context/LanguageContext';

function Timeline() {
  const { language, translations } = useLanguage();
  const t = translations[language].timeline;
  const ref = useRef(null);

  // Theo dõi tiến trình cuộn CHỈ TRONG section này
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  // Làm mượt chuyển động của thanh line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hàm chọn icon ngẫu nhiên hoặc theo logic (tùy bạn chỉnh)
  const getIcon = (index) => {
    if (index === 0) return <FaStar />; // Mới nhất
    if (index === t.steps.length - 1) return <FaGraduationCap />; // Cũ nhất (thường là học vấn)
    return index % 2 === 0 ? <FaCode /> : <FaBriefcase />;
  };

  return (
    <section id="timeline" className="section timeline-section" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.title}
        </motion.h2>

        <div className="timeline-wrapper">
          {/* Đường kẻ dọc màu xám (Nền) */}
          <div className="timeline-line-bg"></div>

          {/* Đường kẻ dọc màu ĐỎ (Chạy theo cuộn) */}
          <motion.div 
            className="timeline-line-progress"
            style={{ scaleY: scaleY }} 
          />

          {/* Danh sách các mốc */}
          <div className="timeline-items">
            {t.steps.map((step, index) => (
              <div key={index} className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`}>
                
                {/* Nội dung Card */}
                <motion.div 
                  className="timeline-content"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="timeline-year">{step.year}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>

                {/* Icon tròn ở giữa */}
                <div className="timeline-icon-wrapper">
                  <div className="timeline-icon">
                    {getIcon(index)}
                  </div>
                </div>

                {/* Spacer để giữ bố cục grid (phần trống đối diện) */}
                <div className="timeline-spacer"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;