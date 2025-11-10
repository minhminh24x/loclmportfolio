import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LanguageProvider } from './context/LanguageContext' // <-- IMPORT MỚI

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BỌC APP TRONG PROVIDER */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)