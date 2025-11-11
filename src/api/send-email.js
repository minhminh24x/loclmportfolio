// api/send-email.js

// Import 'fetch' (có sẵn trong Vercel)
import fetch from 'node-fetch';

export default async function handler(req, res) {
  // 1. Chỉ cho phép phương thức POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 2. Lấy các biến môi trường (đã giấu an toàn)
  const serviceID = process.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  // 3. Lấy data từ React gửi lên (tên, email, tin nhắn...)
  const templateParams = req.body;

  // 4. Gọi API của EmailJS từ backend
  // (Chúng ta KHÔNG dùng 'emailjs-com' ở đây, mà gọi API trực tiếp)
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        private_key: privateKey, // <-- Dùng khóa bí mật
        template_params: templateParams,
      }),
    });

    if (response.ok) {
      // 5. Gửi thành công về cho React
      res.status(200).json({ message: 'Email sent successfully!' });
    } else {
      // 6. Gửi lỗi về cho React
      const errorText = await response.text();
      res.status(500).json({ message: `EmailJS error: ${errorText}` });
    }
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
}