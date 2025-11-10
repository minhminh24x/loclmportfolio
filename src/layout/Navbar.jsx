import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();
  const navT = translations[language].navbar;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Lê Minh Lộc
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#introduction" className="nav-links">{navT.intro}</a>
          </li>
          <li className="nav-item">
            <a href="#what-i-do" className="nav-links">{navT.whatIDo}</a>
          </li>
          <li className="nav-item">
            <a href="#what-i-done" className="nav-links">{navT.whatIDone}</a>
          </li>
          <li className="nav-item">
            <a href="#what-i-will-do" className="nav-links">{navT.whatIWillDo}</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links">{navT.skills}</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">{navT.contact}</a>
          </li>

          {/* === NÚT GẠT NGÔN NGỮ MỚI === */}
          <li className="nav-item lang-switch-container">
            <span className={`lang-label ${language === 'vi' ? 'active' : ''}`}>VI</span>
            <label className="lang-switch">
              <input 
                type="checkbox" 
                checked={language === 'en'} 
                onChange={toggleLanguage} 
              />
              <span className="slider round"></span>
            </label>
            <span className={`lang-label ${language === 'en' ? 'active' : ''}`}>EN</span>
          </li>
          {/* === HẾT NÚT GẠT MỚI === */}
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;