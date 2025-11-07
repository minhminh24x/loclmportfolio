import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Component điều hướng, đổi màu khi cuộn
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Hàm xử lý khi cuộn trang
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Lê Minh Lộc
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-links">Giới thiệu</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links">Kỹ năng</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links">Dự án</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Liên hệ</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;