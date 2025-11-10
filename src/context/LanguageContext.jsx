import React, { createContext, useState, useContext } from 'react';
import { translations } from '../data/translations'; // Import file data

// 1. Tạo Context
const LanguageContext = createContext();

// 2. Tạo Provider (Component cha bao bọc)
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('vi'); // Ngôn ngữ mặc định là 'vi'

  // Hàm để chuyển đổi ngôn ngữ
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'vi' ? 'en' : 'vi'));
  };

  // Giá trị cung cấp cho các component con
  const value = {
    language,
    toggleLanguage,
    translations, // Truyền luôn data dịch
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Tạo một hook (để dễ sử dụng)
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}