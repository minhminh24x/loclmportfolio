import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

// Component liên hệ
function Contact() {
  const socialLinks = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/minhminh24x/" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/minhminh24x/" },
    { icon: <FaDiscord />, href: "https://discord.gg/mygPAYUC" },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <h2>Liên hệ với mình</h2>
        <p>
          Nếu bạn hứng thú với các dự án, đừng ngần ngại kết nối với mình!
        </p>
        <motion.div 
          className="social-icons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: 'var(--color-red-accent)' }} // Hiệu ứng "ngầu"
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        
        <footer className="footer-text">
          © {new Date().getFullYear()} Lê Minh Lộc. All rights reserved.
        </footer>
      </div>
    </section>
  );
}

export default Contact;