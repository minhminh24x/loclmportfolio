/* THAY THẾ TOÀN BỘ FILE NÀY */

export const translations = {
  vi: {
    navbar: {
      intro: 'Giới thiệu',
      timeline: 'Lộ trình',
      whatIDo: 'Chuyên môn',
      whatIDone: 'Dự án',
      whatIWillDo: 'Định hướng',
      skills: 'Kỹ năng',
      contact: 'Liên hệ',
    },
    hero: {
      greeting: '👋 Xin chào, tôi là',
      name: 'Lê Minh Lộc!',
      subtitle: 'BACKEND DEVELOPER & TESTER',
      sequence: [
        'Backend Developer (Java/Spring)', 2000,
        'System Optimization Enthusiast', 2000,
        'Freelance Tester (TestIO)', 2000,
        'IoT & Automation Lover', 2000,
      ],
      quote: '“Code không chỉ chạy được, mà còn phải bảo mật, tối ưu và dễ bảo trì.”',
      cta: 'Xem năng lực thực chiến',
    },
    introduction: {
      title: 'Tổng quan năng lực',
      highlights: {
        title: 'Điểm nhấn chuyên môn (Highlights)',
        items: [
          'Triển khai xác thực bảo mật cao: OAuth2/JWT, IAM API Key.',
          'Xử lý lỗi Backend chuyên sâu: Fix lỗi 401/403 Security, JWT claim, DB transaction & Dead-lock.',
          'Deploy thực tế: Docker hóa ứng dụng, Expose local server qua Cloudflare Tunnel.',
          'Tư duy Debug: Xử lý lỗi SSL Java, CORS, lỗi vòng lặp thư mục vô hạn (Infinite Directory Loop).',
          'AI-Assisted Dev: Sử dụng AI để phân tích log, tạo test case và tối ưu truy vấn SQL phức tạp.'
        ]
      },
      education: {
        title: 'Học vấn',
        line1: 'Đại học FPT Cần Thơ (2022 - 2026)',
        line2: 'Chuyên ngành: Kỹ thuật Phần mềm',
        line3: 'Định hướng: Backend System & Security',
      },
      values: {
        title: 'Phong cách làm việc',
        line1: 'Problem Solver: Không chỉ code feature, tôi tập trung sửa lỗi tận gốc.',
        line2: 'AI Collaboration: Tận dụng AI để tăng tốc độ coding và document lên 200%.',
        line3: 'Resilience: Kiên nhẫn với các lỗi khó (Legacy code, Environment config).',
      },
    },
    timeline: {
      title: 'Lộ trình phát triển',
      steps: [
        { year: '2025', title: 'Professionalization', desc: 'React + Vite, Node.js + Prisma, System Design, .NET EF Core, Advanced IoT.' },
        { year: '2024', title: 'Backend Deep Dive', desc: 'Spring Boot, PostgreSQL, JWT Security, Docker, Cloudflare Tunnel.' },
        { year: '2023', title: 'Web Core & DB', desc: 'Java Swing, JSP/Servlet, SQL Server, MVC Architecture.' },
        { year: '2022', title: 'Foundations', desc: 'Nhập môn lập trình: C++, Java OOP, HTML/CSS cơ bản.' },
      ]
    },
    whatIDo: {
      title: 'Lĩnh vực chuyên môn',
      backend: {
        title: 'Backend & Security',
        desc: 'Xây dựng RESTful API chuẩn mực với Spring Boot. Xử lý Idempotency, Validation, DTO. Tối ưu query SQL Server/PostgreSQL.',
      },
      frontend: {
        title: 'System & Deploy',
        desc: 'Triển khai Docker, cấu hình CI/CD cơ bản (GitHub Actions). Hiểu sâu về HTTP Status (401 vs 403, 500).',
      },
      tester: {
        title: 'Testing & Debugging',
        desc: 'Silver Tester trên TestIO. Soi lỗi UI/UX và logic nghiệp vụ. Sử dụng Postman/Swagger thành thạo.',
      },
    },
    whatIDone: {
      title: 'Dự án & Thành tựu',
      tabProjects: 'Dự án',
      tabCerts: 'Chứng chỉ',
      tabActivities: 'Hoạt động',
      githubLink: 'Source Code',
      detailLabels: {
        summary: 'Mô tả kỹ thuật',
        teamSize: 'Quy mô',
        myRole: 'Vai trò & Tech Stack',
      },
      projects: [
        { 
          title: "Portfolio (This Site)", 
          summary: "Trang web bạn đang xem. Tối ưu hiệu năng React, tích hợp đa ngôn ngữ Context API, xử lý form không cần Backend server (EmailJS).",
          teamSize: "2 Thành viên (Developer & AI Assistant)",
          myRole: "Frontend & Deployment",
          tech: ["React", "Vite", "Framer Motion", "react-tsparticles", "EmailJS"], 
          link: "https://github.com/minhminh24x/loclmportfolio" 
        },
        { 
          title: "Tai Loc Shop (E-commerce)", 
          summary: "Hệ thống E-commerce Fullstack. Áp dụng JWT cho Auth, Prisma ORM quản lý DB. Tự xử lý các vấn đề về Transaction và Race Conditions.",
          teamSize: "Dự án cá nhân (Đang phát triển)",
          myRole: "Fullstack Developer (Node.js, Express, React, Prisma, Tailwind).",
          tech: ["React", "Node.js", "Express", "Prisma", "TailwindCSS"], 
          link: "https://github.com/minhminh24x/tailocshop" 
        },
        { 
          title: "Medical Record System", 
          summary: "Hệ thống quản lý bệnh án (FPT Software Internship). Xử lý bảo mật API với Spring Security, phân quyền Role-based chặt chẽ.",
          teamSize: "6 thành viên",
          myRole: "Backend Developer (Spring Boot, PostgreSQL, JWT).",
          tech: ["Spring Boot", "PostgreSQL", "JWT"], 
          link: null
        },
        { 
          title: "Online Clothing Store (PenguinShop)", 
          summary: "Dự án MVC thuần Java. Tự viết connection pool, xử lý Session/Cookie thủ công để hiểu rõ bản chất Web Server.",
          teamSize: "5 thành viên (Đại học)",
          myRole: "Backend Core (Quản lý sản phẩm, Giỏ hàng, Thống kê doanh thu).",
          tech: ["Java", "JSP/Servlet", "SQL Server", "MVC"], 
          link: "https://github.com/Nhatanhhhh/PenguinStore" 
        },
        { 
          title: "Minesweeper Game (Dò mìn)", 
          summary: "Game logic thuật toán phức tạp (Loang, Cắm cờ) xây dựng bằng Java Swing. Quản lý trạng thái game (State Management) thủ công.",
          teamSize: "4 Thành viên",
          myRole: "Team Leader, Logic Developer.",
          tech: ["Java", "Java Swing", "Ant"], 
          link: "https://github.com/minhminh24x/Minesweeper-Game" 
        },
        { 
          title: "WPF Patient Manager", 
          summary: "Ứng dụng Desktop quản lý bệnh nhân. Sử dụng Entity Framework Core để tương tác CSDL, mô hình MVVM.",
          teamSize: "Dự án cá nhân",
          myRole: "Desktop Developer",
          tech: ["C#", "WPF", "EF Core"], 
          link: null
        },
        { 
          title: "Smart Trash Can (IoT)", 
          summary: "Hệ thống nhúng xử lý tín hiệu cảm biến siêu âm thời gian thực, điều khiển động cơ Servo đóng mở tự động.",
          teamSize: "5 thành viên",
          myRole: "IoT Developer (C++ & Circuit Design).",
          tech: ["Arduino", "C++", "Sensors"], 
          link: null
        },
      ],
      certifications: [
        { 
          title: "User Experience Research and Design", 
          from: "Coursera", 
          date: "8/2025", 
          link: "https://coursera.org/share/01a219e75434229132e21f4449d1a480",
          desc: "User-centric design thinking."
        },
        { 
          title: "CertNexus Certified Ethical Emerging Technologist", 
          from: "Coursera", 
          date: "1/2025", 
          link: "https://coursera.org/share/6fc18172ffaa6af7c7ff60c39f07e886",
          desc: "Understanding of ethical issues in emerging tech (AI, IoT...)."
        },
        { 
          title: "Software Development Lifecycle", 
          from: "Coursera", 
          date: "9/2024", 
          link: "https://coursera.org/share/d5370b0948f4e0b96bb08220c0fc658c",
          desc: "Deep dive into SDLC processes (Agile, Waterfall)."
        },
        { 
          title: "Web Design for Everybody: Basics", 
          from: "Coursera", 
          date: "5/2024", 
          link: "https://coursera.org/share/fdefe34c2e94ac09bdf0cac99cb6102f",
          desc: "Fundamental knowledge of DOM, CSS OM."
        },
        { 
          title: "Software Engineer Intern Certificate", 
          from: "HackerRank", 
          date: "6/2024", 
          link: "https://www.hackerrank.com/certificates/9e9dda4bf87f",
          desc: "Practical coding skills certification."
        },
        { 
          title: "Problem Solving (Intermediate) Certificate", 
          from: "HackerRank", 
          date: "5/2024",
          link: "https://www.hackerrank.com/certificates/98a168e94af3",
          desc: "Intermediate-level algorithmic problem-solving skills."
        }
      ],
      badges: {
        title: "Thành tích học tập & Huy hiệu",
        desc: "100+ bài LeetCode/HackerRank. Đã xử lý 50+ phiên debug lỗi backend thực tế.",
        link: "https://www.hackerrank.com/loclm9824",
        cta: "HackerRank Profile"
      },
      activities: [
        { title: "TestIO Freelance Tester", desc: "Đạt Level 3 (Silver). Phát hiện các lỗi Edge Case hiếm gặp.", date: "2023 - Hiện tại" },
        { title: "CLB VHC & Con Đường Xanh", desc: "Rèn luyện kỹ năng mềm, quản lý đội nhóm và trách nhiệm xã hội.", date: "2022 - 2024" }
      ],
    },
    whatIWillDo: {
      title: 'Định hướng tương lai',
      systemDesign: {
        title: 'System Design',
        desc: 'Nghiên cứu sâu về Thiết kế Hệ thống và RESTful API Architecture để xây dựng các backend mạnh mẽ, có khả năng mở rộng.',
      },
      crossPlatform: {
        title: 'Cross-platform Knowledge',
        desc: 'Tìm hiểu và làm chủ Entity Framework Core (C#) để mở rộng kỹ năng sang hệ sinh thái .NET.',
      },
      iot: {
        title: 'IoT Integration',
        desc: 'Kết hợp thế mạnh phần mềm (Web/System) và phần cứng (Arduino) để tạo ra các dự án IoT có tính tương tác thực tế cao.',
      },
      leadership: {
        title: 'Leadership',
        desc: 'Phấn đấu, học hỏi kỹ năng quản lý và chuyên môn để đạt mục tiêu trở thành Team Leader sau 3-4 năm.',
      },
    },
    skills: {
      title: 'Kỹ năng chuyên môn',
      subtitle: 'Công cụ & Quy trình (Workflow)',
      hardSkills: [
        { name: "Backend", skills: "Java Spring Boot, JSP/Servlet, REST API" },
        { name: "Frontend", skills: "React + Vite, HTML5, CSS3, JavaScript" },
        { name: "Database", skills: "PostgreSQL, SQL Server, MySQL (Query Opt)" },
        { name: "Security", skills: "JWT, OAuth2, IAM Key, Spring Security" },
        { name: "System", skills: "Docker, Cloudflare Tunnel, REST API Design" },
        { name: "Testing", skills: "Postman, Swagger, Manual Testing" }
      ],
      // ĐÃ ĐỔI TÊN: tools (trước là softSkills)
      tools: [
        { name: "Version Control", desc: "Git, GitHub (Branching Strategy, Pull Requests)." },
        { name: "Tools", desc: "IntelliJ IDEA, VS Code, SSMS, pgAdmin, Docker Desktop." },
        { name: "Workflow", desc: "Agile/Scrum basics, Debugging (Breakpoints, Logs)." }
      ],
    },
    contact: {
      title: 'Liên hệ',
      subtitle: 'Sẵn sàng trao đổi về cơ hội Backend/Fullstack.',
      email: 'Email',
      github: 'GitHub',
      formTitle: "Gửi tin nhắn",
      formName: "Tên của bạn",
      formEmail: "Email",
      formSubject: "Tiêu đề",
      formMessage: "Nội dung...",
      formSend: "Gửi đi",
      formSending: "Đang gửi...",
      formSuccess: "Đã gửi thành công!",
      formError: "Lỗi, vui lòng thử lại.",
    },
  },
  en: {
    navbar: {
      intro: 'About',
      timeline: 'Timeline',
      whatIDo: 'Expertise',
      whatIDone: 'Projects',
      whatIWillDo: 'Future',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: '👋 Hi, I\'m',
      name: 'Lê Minh Lộc!',
      subtitle: 'BACKEND DEVELOPER & TESTER',
      sequence: [
        'Backend Developer (Java/Spring)', 2000,
        'System Optimization Enthusiast', 2000,
        'Freelance Tester (TestIO)', 2000,
        'IoT & Automation Lover', 2000,
      ],
      quote: '“Code works is not enough. It must be secure, optimized, and maintainable.”',
      cta: 'View Real-world Skills',
    },
    introduction: {
      title: 'Competency Overview',
      highlights: {
        title: 'Professional Highlights',
        items: [
          'Integrated secure auth: OAuth2/JWT, IAM API Key.',
          'Deep Backend Debugging: Fixed 401/403 Security, JWT claims, DB transactions & Dead-locks.',
          'Real Deployment: Dockerizing apps, Exposing local server via Cloudflare Tunnel.',
          'Debugging Mindset: Fixed Java SSL, CORS, Windows Infinite Directory Loop errors.',
          'AI-Assisted Dev: Leveraging AI for log analysis, test generation, and SQL optimization.'
        ]
      },
      education: {
        title: 'Education',
        line1: 'FPT University Can Tho (2022 - 2026)',
        line2: 'Major: Software Engineering',
        line3: 'Focus: Backend System & Security',
      },
      values: {
        title: 'Work Style',
        line1: 'Problem Solver: I focus on fixing root causes, not just patching bugs.',
        line2: 'AI Collaboration: Using AI to boost coding & documentation speed by 200%.',
        line3: 'Resilience: Patient with hard bugs (Legacy code, Config issues).',
      },
    },
    timeline: {
      title: 'Growth Timeline',
      steps: [
        { year: '2025', title: 'Professionalization', desc: 'React + Vite, Node.js + Prisma, System Design, .NET EF Core, Advanced IoT.' },
        { year: '2024', title: 'Backend Deep Dive', desc: 'Spring Boot, PostgreSQL, JWT Security, Docker, Cloudflare Tunnel.' },
        { year: '2023', title: 'Web Core & DB', desc: 'Java Swing, JSP/Servlet, SQL Server, MVC Architecture.' },
        { year: '2022', title: 'Foundations', desc: 'Intro to programming: C++, Java OOP, Basic HTML/CSS.' },
      ]
    },
    whatIDo: {
      title: 'Areas of Expertise',
      backend: {
        title: 'Backend & Security',
        desc: 'Building standard RESTful APIs with Spring Boot. Handling Idempotency, Validation, DTOs. Optimizing SQL Server/PostgreSQL queries.',
      },
      frontend: {
        title: 'System & Deploy',
        desc: 'Docker deployment, Basic CI/CD (GitHub Actions). Deep understanding of HTTP Status (401 vs 403, 500).',
      },
      tester: {
        title: 'Testing & Debugging',
        desc: 'Silver Tester on TestIO. Spotting UI/UX & Business Logic bugs. Proficient in Postman/Swagger.',
      },
    },
    whatIDone: {
      title: 'Projects & Achievements',
      tabProjects: 'Projects',
      tabCerts: 'Certifications',
      tabActivities: 'Activities',
      githubLink: 'Source Code',
      detailLabels: {
        summary: 'Tech Description',
        teamSize: 'Team Size',
        myRole: 'Role & Stack',
      },
      projects: [
        { 
          title: "Portfolio (This Site)", 
          summary: "Personal showcase. React performance optimization, Context API for I18n, Serverless form handling.",
          teamSize: "2 Members (Developer & AI Assistant)",
          myRole: "Frontend & Deployment",
          tech: ["React", "Vite", "Framer Motion", "react-tsparticles", "EmailJS"], 
          link: "https://github.com/minhminh24x/loclmportfolio" 
        },
        { 
          title: "Tai Loc Shop (E-commerce)", 
          summary: "Fullstack E-commerce. Applied JWT for Auth, Prisma ORM. Handled Transactions and Race Conditions manually.",
          teamSize: "Personal",
          myRole: "Fullstack (Node.js, Express, React, Prisma, Tailwind).",
          tech: ["React", "Node.js", "Express", "Prisma", "TailwindCSS"], 
          link: "https://github.com/minhminh24x/tailocshop" 
        },
        { 
          title: "Medical Record System", 
          summary: "Patient Management (FPT Software Internship). API Security with Spring Security, strict Role-based Access Control.",
          teamSize: "6 Members",
          myRole: "Backend Dev (Spring Boot, PostgreSQL, JWT).",
          tech: ["Spring Boot", "PostgreSQL", "Security"], 
          link: null
        },
        { 
          title: "Online Clothing Store (PenguinShop)", 
          summary: "Pure Java MVC Project. Wrote manual connection pool, handled Session/Cookie manually to understand Web Server core.",
          teamSize: "5 Members",
          myRole: "Backend Core (Cart Logic, SQL Queries, Reporting).",
          tech: ["Java Servlet", "SQL Server", "MVC"], 
          link: "https://github.com/Nhatanhhhh/PenguinStore" 
        },
        { 
          title: "Minesweeper Game", 
          summary: "A classic Minesweeper game built with Java Swing. Complex algorithms (Flood fill, Flagging) and manual State Management.",
          teamSize: "4 Members",
          myRole: "Team Leader, Logic Developer.",
          tech: ["Java", "Java Swing", "Ant"], 
          link: "https://github.com/minhminh24x/Minesweeper-Game" 
        },
        { 
          title: "WPF Patient Manager", 
          summary: "Windows desktop app. MVVM architecture, Entity Framework Core for database interaction.",
          teamSize: "Personal",
          myRole: "Desktop Developer",
          tech: ["C#", "WPF", "EF Core"], 
          link: null
        },
        { 
          title: "Smart Trash Can (IoT)", 
          summary: "Embedded system handling real-time ultrasonic sensor signals to control Servo motors automatically.",
          teamSize: "5 Members",
          myRole: "IoT Developer (C++ & Circuit Design).",
          tech: ["Arduino", "C++", "Sensors"], 
          link: null
        },
      ],
      certifications: [
        { 
          title: "User Experience Research and Design", 
          from: "Coursera", 
          date: "8/2025", 
          link: "https://coursera.org/share/01a219e75434229132e21f4449d1a480",
          desc: "User-centric design thinking."
        },
        { 
          title: "CertNexus Certified Ethical Emerging Technologist", 
          from: "Coursera", 
          date: "1/2025", 
          link: "https://coursera.org/share/6fc18172ffaa6af7c7ff60c39f07e886",
          desc: "Understanding of ethical issues in emerging tech (AI, IoT...)."
        },
        { 
          title: "Software Development Lifecycle", 
          from: "Coursera", 
          date: "9/2024", 
          link: "https://coursera.org/share/d5370b0948f4e0b96bb08220c0fc658c",
          desc: "Deep dive into SDLC processes (Agile, Waterfall)."
        },
        { 
          title: "Web Design for Everybody: Basics", 
          from: "Coursera", 
          date: "5/2024", 
          link: "https://coursera.org/share/fdefe34c2e94ac09bdf0cac99cb6102f",
          desc: "Fundamental knowledge of DOM, CSS OM."
        },
        { 
          title: "Software Engineer Intern Certificate", 
          from: "HackerRank", 
          date: "6/2024", 
          link: "https://www.hackerrank.com/certificates/9e9dda4bf87f",
          desc: "Practical coding skills certification."
        },
        { 
          title: "Problem Solving (Intermediate) Certificate", 
          from: "HackerRank", 
          date: "5/2024",
          link: "https://www.hackerrank.com/certificates/98a168e94af3",
          desc: "Intermediate-level algorithmic problem-solving skills."
        }
      ],
      badges: {
        title: "Learning Stats",
        desc: "100+ LeetCode/HackerRank problems. 50+ real-world backend debugging sessions.",
        link: "https://www.hackerrank.com/loclm9824",
        cta: "HackerRank Profile"
      },
      activities: [
        { title: "TestIO Freelance Tester", desc: "Level 3 (Silver). Detected rare Edge Case bugs.", date: "2023 - Present" },
        { title: "VHC Club & Green Path", desc: "Soft skills, team management & social responsibility.", date: "2022 - 2024" }
      ],
    },
    whatIWillDo: {
      title: 'Future Direction',
      systemDesign: {
        title: 'System Design',
        desc: 'Deep dive into System Design and RESTful API Architecture to build robust, scalable backend systems.',
      },
      crossPlatform: {
        title: 'Cross-platform Knowledge',
        desc: 'Learn and master Entity Framework Core (C#) to expand skills into the .NET ecosystem.',
      },
      iot: {
        title: 'IoT Integration',
        desc: 'Combine software (Web/System) and hardware (Arduino) strengths to create high-impact, real-world IoT projects.',
      },
      leadership: {
        title: 'Leadership',
        desc: 'Strive to learn management and technical skills to achieve the goal of becoming a Team Leader in 3-4 years.',
      },
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Tools & Workflow',
      hardSkills: [
        { name: "Backend", skills: "Java Spring Boot, JSP/Servlet, REST API" },
        { name: "Frontend", skills: "React + Vite, HTML5, CSS3, JavaScript" },
        { name: "Database", skills: "PostgreSQL, SQL Server, MySQL (Query Opt)" },
        { name: "Security", skills: "JWT, OAuth2, IAM Key, Spring Security" },
        { name: "System", skills: "Docker, Cloudflare Tunnel, REST API Design" },
        { name: "Testing", skills: "Postman, Swagger, Manual Testing" }
      ],
      // ĐÃ ĐỔI TÊN: tools
      tools: [
        { name: "Version Control", desc: "Git, GitHub (Branching Strategy, Pull Requests)." },
        { name: "Tools", desc: "IntelliJ IDEA, VS Code, SSMS, pgAdmin, Docker Desktop." },
        { name: "Workflow", desc: "Agile/Scrum basics, Debugging (Breakpoints, Logs)." }
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Open for Backend/Fullstack opportunities.',
      email: 'Email',
      github: 'GitHub',
      formTitle: "Send Message",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message...",
      formSend: "Send",
      formSending: "Sending...",
      formSuccess: "Sent successfully!",
      formError: "Error, please try again.",
    },
  },
};