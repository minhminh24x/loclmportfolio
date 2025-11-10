/* THAY THẾ TOÀN BỘ FILE NÀY */

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import './Hero.css';
import avatar from '../assets/avatar.png';
import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { language, translations } = useLanguage();
  const heroT = translations[language].hero;

  return (
    <section id="home" className="section hero-section">

      {/* === SỬA LỖI NỀN BỊ MỜ === */}
      {/* * Hiệu ứng nền được đưa ra ngoài, 
        * làm SIBLING (anh em) với hero-container.
        * Nó sẽ có z-index: 1 
      */}
      <div className="hero-background-gradient"></div>

      {/* * Container chứa nội dung sẽ có z-index: 2
        * và nằm TRÊN lớp nền.
      */}
      <div className="hero-container">
        
        {/* Cột 1: Text */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-headline">
            {heroT.greeting} <span className="hero-name">{heroT.name}</span>
          </h1>
          <h3 className="hero-subtitle">{heroT.subtitle}</h3>
          
          <TypeAnimation
            key={language}
            sequence={heroT.sequence}
            wrapper="h2"
            speed={50}
            className="hero-subheadline"
            repeat={Infinity}
          />
          <p className="hero-quote">
            {heroT.quote}
          </p>
          <a href="#what-i-done" className="hero-cta-button">
            {heroT.cta}
          </a>
        </motion.div>

        {/* Cột 2: Avatar */}
        <motion.div 
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
        >
          <img src={avatar} alt="Lê Minh Lộc" />
        </motion.div>
      </div>
      {/* === HẾT SỬA LỖI === */}

    </section>
  );
}

export default Hero;