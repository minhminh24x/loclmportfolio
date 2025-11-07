import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import './Hero.css';

// Component Hero - Giới thiệu ban đầu
function Hero() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-container">
        {/* Hiệu ứng fade in */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-headline">
            👋 Xin chào, mình là <span className="hero-name">Lê Minh Lộc</span>!
          </h1>
          
          {/* Hiệu ứng gõ chữ */}
          <TypeAnimation
            sequence={[
              'Backend Developer',
              2000,
              'Web & System Developer',
              2000,
              'IoT & Game Enthusiast',
              2000,
            ]}
            wrapper="h3"
            speed={50}
            className="hero-subheadline"
            repeat={Infinity}
          />
          <p className="hero-quote">
            “Code is the art of turning ideas into reality.”
          </p>
          <a href="#projects" className="hero-cta-button">
            Xem dự án của mình
          </a>
        </motion.div>
      </div>
      {/* Đường chéo chia vùng sáng/tối */}
      <div className="hero-diagonal-split"></div>
    </section>
  );
}

export default Hero;