/* THAY THẾ TOÀN BỘ FILE NÀY */

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaFacebook, FaLinkedin, FaEnvelope, FaGithub, FaPaperPlane } from 'react-icons/fa';
// ĐÃ XÓA: import emailjs from 'emailjs-com';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { language, translations } = useLanguage();
  const t = translations[language].contact;
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // ... (Phần code hiệu ứng và socialLinks giữ nguyên) ...
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

  // === HÀM SENDEMAIL ĐÃ ĐƯỢC THAY THẾ HOÀN TOÀN ===
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    // 1. Lấy dữ liệu từ form
    const formData = new FormData(form.current);
    const templateParams = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      // 2. Gọi đến backend function của CHÍNH BẠN
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      });

      if (response.ok) {
        // 3. Backend báo thành công
        setIsLoading(false);
        setIsSuccess(true);
        e.target.reset(); // Xóa form
      } else {
        // 4. Backend báo lỗi
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      // 5. Lỗi mạng hoặc server sập
      console.error('Fetch error:', error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  // === HẾT HÀM SENDEMAIL MỚI ===

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
        
        <div className="contact-wrapper">
          {/* Cột 1 (Info) - Không thay đổi */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-info-item">
              <FaEnvelope className="contact-info-icon" />
              <div>
                <h4>{t.email}</h4>
                <a href="mailto:loclm9824@gmail.com">loclm9824@gmail.com</a>
              </div>
            </div>
            <div className="contact-info-item">
              <FaGithub className="contact-info-icon" />
              <div>
                <h4>{t.github}</h4>
                <a href="https://github.com/minhminh24x" target="_blank" rel="noopener noreferrer">
                  minhminh24x
                </a>
              </div>
            </div>
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

          {/* Cột 2 (Form) - Chỉ thay đổi hàm 'onSubmit' */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3>{t.formTitle}</h3>
            {/* *** QUAN TRỌNG: 
              Bỏ 'emailjs.sendForm' và thay bằng 'sendEmail' của React 
            */}
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

        </div>
        
        <footer className="footer-text">
          © {new Date().getFullYear()} Lê Minh Lộc. All rights reserved.
        </footer>
      </div>
    </motion.section>
  );
}

export default Contact;