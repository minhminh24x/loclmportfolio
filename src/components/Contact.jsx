/* THAY THẾ TOÀN BỘ FILE NÀY */

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaFacebook, FaLinkedin, FaEnvelope, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { language, translations } = useLanguage();
  const t = translations[language].contact;
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Hiệu ứng cho TOÀN BỘ SECTION
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50, duration: 0.8 }
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/minhminh24x/" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/minhminh24x/" },
    { icon: <FaDiscord />, href: "https://discord.gg/mygPAYUC" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    // *** NHỚ THAY THẾ CÁC KHÓA CỦA BẠN VÀO ĐÂY ***
    emailjs.sendForm(
      'YOUR_SERVICE_ID',  // <-- Sửa thành ID Dịch vụ của bạn
      'YOUR_TEMPLATE_ID', // <-- Sửa thành ID Template của bạn
      form.current, 
      'YOUR_USER_ID'        // <-- Sửa thành Public Key (User ID) của bạn
    )
      .then((result) => {
          console.log(result.text);
          setIsLoading(false);
          setIsSuccess(true);
          e.target.reset(); // Xóa form
      }, (error) => {
          console.log(error.text);
          setIsLoading(false);
          setIsError(true);
      });
  };

  return (
    <motion.section 
      id="contact" 
      className="section contact-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container contact-container">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
        
        {/* Bố cục 2 cột */}
        <div className="contact-wrapper">

          {/* === CỘT 1 (BÊN TRÁI): GỒM INFO + SOCIAL === */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Thẻ Email */}
            <div className="contact-info-item">
              <FaEnvelope className="contact-info-icon" />
              <div> {/* Thêm 1 div bọc text để xử lý overflow */}
                <h4>{t.email}</h4>
                <a href="mailto:loclm9824@gmail.com">loclm9824@gmail.com</a>
              </div>
            </div>
            
            {/* Thẻ GitHub */}
            <div className="contact-info-item">
              <FaGithub className="contact-info-icon" />
              <div> {/* Thêm 1 div bọc text */}
                <h4>{t.github}</h4>
                <a href="https://github.com/minhminh24x" target="_blank" rel="noopener noreferrer">
                  minhminh24x
                </a>
              </div>
            </div>

            {/* Icon Social (Vẫn nằm trong Cột 1) */}
            <motion.div 
              className="social-icons-vertical"
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
                  whileHover={{ scale: 1.2, color: 'var(--color-red-accent)' }} 
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          {/* === HẾT CỘT 1 === */}


          {/* === CỘT 2 (BÊN PHẢI): GỒM EMAILJS FORM === */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>{t.formTitle}</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input type="text" name="from_name" className="form-input" placeholder=" " required />
                <label className="form-label">{t.formName}</label>
              </div>
              <div className="form-group">
                <input type="email" name="from_email" className="form-input" placeholder=" " required />
                <label className="form-label">{t.formEmail}</label>
              </div>
              <div className="form-group">
                <input type="text" name="subject" className="form-input" placeholder=" " required />
                <label className="form-label">{t.formSubject}</label>
              </div>
              <div className="form-group">
                <textarea name="message" className="form-input" rows="5" placeholder=" " required></textarea>
                <label className="form-label">{t.formMessage}</label>
              </div>
              
              <button 
                type="submit" 
                className={`submit-button ${isLoading ? 'loading' : ''} ${isSuccess ? 'success' : ''} ${isError ? 'error' : ''}`}
                disabled={isLoading}
              >
                {isSuccess ? t.formSuccess : (
                  isError ? t.formError : (
                    isLoading ? t.formSending : t.formSend
                  )
                )}
                {!isSuccess && !isError && <FaPaperPlane className="send-icon" />}
              </button>
            </form>
          </motion.div>
          {/* === HẾT CỘT 2 === */}

        </div>
        
        <footer className="footer-text">
          © {new Date().getFullYear()} Lê Minh Lộc. All rights reserved.
        </footer>
      </div>
    </motion.section>
  );
}

export default Contact;