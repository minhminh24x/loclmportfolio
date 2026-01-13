<h1 align="center">
  Lê Minh Lộc - Portfolio Cá Nhân
</h1>

<p align="center">
  Đây là mã nguồn cho trang portfolio cá nhân của tôi (Lê Minh Lộc), được xây dựng bằng React, Vite, và Framer Motion.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-E100C3?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

## 🚀 Tính năng nổi bật

Trang web này không chỉ là một trang HTML/CSS tĩnh. Nó là một ứng dụng React đầy đủ với các tính năng:

* ** Hiệu ứng "Oách":** Tích hợp `react-tsparticles` cho nền hạt (particles) di chuyển và `framer-motion` cho TOÀN BỘ hiệu ứng động.
* ** Scroll Reveal:** "Nguyên 1 phần" (sections) sẽ trượt vào mượt mà khi người dùng cuộn trang (sử dụng `whileInView` của Framer Motion).
* ** Đa ngôn ngữ (VI/EN):** Hỗ trợ chuyển đổi ngôn ngữ tức thì bằng `React Context` mà không cần tải lại trang.
* ** Contact Form "Không Backend":** Tích hợp **EmailJS** cho phép khách truy cập gửi email trực tiếp từ trang web mà không cần server.
* ** Responsive Design:** Tự động co giãn trên mọi thiết bị từ Desktop đến Mobile (sử dụng `flex-wrap` và `grid-template-columns`).
* ** Theme Đen-Đỏ:** Một theme "ngầu" với tông màu Đen-Đỏ (Dark Mode) nhất quán.

## 🛠 Công nghệ sử dụng

* **Frontend:** React 18, Vite
* **Animation:** Framer Motion
* **Hiệu ứng nền:** `react-tsparticles`
* **Styling:** CSS thuần (với CSS Variables cho theme)
* **Quản lý State:** React Context (cho Ngôn ngữ)
* **Form:** EmailJS
* **Icons:** `react-icons`

## ⚙️ Cài đặt và Chạy (Local)

1.  **Clone repository:**
    ```bash
    git clone [https://github.com/minhminh24x/loclmportfolio.git](https://github.com/minhminh24x/loclmportfolio.git)
    cd loclmportfolio
    ```

2.  **Cài đặt thư viện:**
    ```bash
    npm install
    ```

3.  **Lấy khóa API (Bắt buộc cho Contact Form):**
    * Đăng ký tài khoản tại [EmailJS.com](https://www.emailjs.com/).
    * Lấy 3 khóa của bạn: `SERVICE_ID`, `TEMPLATE_ID`, và `USER_ID`.
    * Mở file `src/components/Contact.jsx` và điền 3 khóa này vào hàm `sendEmail`.

4.  **Chạy dự án:**
    ```bash
    npm run dev
    ```

## 🚀 Triển khai (Deploy)

Dự án này được tối ưu để deploy lên **Vercel**:

1.  Push code của bạn lên GitHub.
2.  Import dự án vào Vercel từ repo GitHub.
3.  Vercel sẽ tự động nhận diện đây là dự án **Vite**.
4.  Nhấn **Deploy**. Mọi thứ sẽ tự động chạy! (File `vercel.json` đã được cấu hình sẵn).

## 📞 Liên hệ

* **Lê Minh Lộc**
* **Email:** loclm9824@gmail.com
* **LinkedIn:** https://www.linkedin.com/in/minhminh24x/
