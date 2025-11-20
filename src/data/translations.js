
export const translations = {
  vi: {
    navbar: {
      intro: 'Tôi là ai',
      timeline: 'Lộ trình',
      whatIDo: 'Đang làm gì',
      whatIDone: 'Đã làm gì',
      whatIWillDo: 'Sẽ làm gì',
      skills: 'Kỹ năng',
      contact: 'Liên hệ',
    },
    hero: {
      greeting: '👋 Xin chào, tôi là',
      name: 'Lê Minh Lộc!',
      subtitle: 'DEVELOPER & TESTER',
      sequence: [
        'Backend Developer', 2000,
        'Web & System Developer', 2000,
        'Freelance Tester', 2000,
        'IoT & Game Enthusiast', 2000,
      ],
      quote: '“Code is the art of turning ideas into reality.”',
      cta: 'Xem các dự án của tôi',
    },
    introduction: {
      title: 'Tôi là ai?',
      // === ĐÃ KHÔI PHỤC HIGHLIGHTS ===
      highlights: {
        title: 'Điểm nhấn chuyên môn',
        items: [
          'Triển khai xác thực bảo mật cao: OAuth2/JWT, IAM API Key.',
          'Xử lý lỗi Backend chuyên sâu: Fix lỗi 401/403 Security, JWT claim, DB transaction & Dead-lock.',
          'Deploy thực tế: Docker hóa ứng dụng, Expose local server qua Cloudflare Tunnel.',
          'Tư duy Debug: Xử lý lỗi SSL Java, CORS, lỗi vòng lặp thư mục vô hạn.',
          'AI-Assisted Dev: Sử dụng AI để phân tích log, tạo test case và tối ưu truy vấn SQL phức tạp.'
        ]
      },
      education: {
        title: 'Học vấn',
        line1: 'Hiện đang là sinh viên năm 4',
        line2: 'Ngành: Kỹ thuật Phần mềm',
        line3: 'Tại: Đại học FPT Cần Thơ (2022 - 2026)',
      },
      goals: {
        title: 'Mục tiêu nghề nghiệp',
        line1: 'Ngắn hạn: Trở thành nhân viên chính thức sau 2-3 kỳ thực tập.',
        line2: 'Dài hạn: Phấn đấu trở thành Team Leader sau 3-4 năm làm việc.',
      },
      values: {
        title: 'Giá trị cốt lõi',
        line1: 'Chăm chỉ, kiên nhẫn, có trách nhiệm và làm việc tốt dưới áp lực.',
        line2: 'Kỹ năng làm việc nhóm, giao tiếp, thuyết trình tốt.',
        line3: 'Khả năng đọc hiểu tài liệu kỹ thuật tiếng Anh.',
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
      title: 'Tôi đang làm gì',
      backend: {
        title: 'Backend Development',
        desc: 'Tập trung phát triển kỹ năng Backend chuyên sâu với Java (Spring Boot), JSP/Servlet và các hệ quản trị CSDL như PostgreSQL & SQL Server.',
      },
      frontend: {
        title: 'Frontend & System',
        desc: 'Học và xây dựng frontend hiện đại với React + Vite. Tìm hiểu về Docker và các giải pháp deploy (Cloudflare Tunnel).',
      },
      tester: {
        title: 'Freelance Tester',
        desc: 'Làm việc tự do trên nền tảng TestIO. Đã đạt Cấp độ 3 (Silver Tester) với tỉ lệ chấp nhận lỗi trên 60%.',
      },
    },
    whatIDone: {
      title: 'Tôi đã làm gì',
      tabProjects: 'Dự án',
      tabCerts: 'Chứng chỉ',
      tabActivities: 'Hoạt động',
      githubLink: 'Xem trên GitHub',
      detailLabels: {
        summary: 'Tóm tắt',
        teamSize: 'Quy mô nhóm',
        myRole: 'Vai trò',
      },
      projects: [
        { 
          title: "Portfolio Cá Nhân (Trang web này)", 
          summary: "Chính là trang web bạn đang xem! Một trang portfolio động được xây dựng từ đầu để giới thiệu kỹ năng. Tích hợp đa ngôn ngữ, hiệu ứng 'hạt' (particles) và 'trượt' (scroll reveal).",
          teamSize: "2 Thành viên (Developer & AI Assistant)",
          myRole: "Developer chính, Thiết kế UI/UX, Tích hợp animation.",
          tech: ["React", "Vite", "Framer Motion", "react-tsparticles", "EmailJS"], 
          link: "https://github.com/minhminh24x/loclmportfolio" 
        },
        { 
          title: "Tai Loc Shop (E-commerce)", 
          summary: "Một nền tảng E-commerce fullstack hiện đại. Backend sử dụng Node.js, Express, Prisma. Frontend sử dụng React và TailwindCSS.",
          teamSize: "Dự án cá nhân (Đang phát triển)",
          myRole: "Fullstack Developer",
          tech: ["React", "Node.js", "Express", "Prisma", "TailwindCSS"], 
          link: "https://github.com/minhminh24x/tailocshop" 
        },
        { 
          title: "Medical Record System", 
          summary: "Hệ thống quản lý hồ sơ bệnh nhân cơ bản. Sử dụng Spring Boot cho backend API và PostgreSQL cho CSDL. Tích hợp JWT để xác thực.",
          teamSize: "6 thành viên (Làm tại FPT Software)",
          myRole: "Fullstack Developer",
          tech: ["Spring Boot", "PostgreSQL", "JWT"], 
          link: null
        },
        { 
          title: "Online Clothing Store (PenguinShop)", 
          summary: "Web bán hàng MVC (Java EE JSP/Servlet + SQL Server). Tích hợp đầy đủ các tính năng thương mại điện tử như giỏ hàng, voucher, checkout, và xuất Excel thống kê doanh thu.",
          teamSize: "5 thành viên (Đại học - Dự án nhóm)",
          myRole: "Backend Developer (Quản lý sản phẩm, Giỏ hàng).",
          tech: ["Java", "JSP/Servlet", "SQL Server", "MVC"], 
          link: "https://github.com/Nhatanhhhh/PenguinStore" 
        },
        { 
          title: "Minesweeper Game (Dò mìn)", 
          summary: "Trò chơi Dò mìn cổ điển được xây dựng bằng Java Swing. Đây là dự án nhóm tại trường đại học, bao gồm các chức năng chính của game.",
          teamSize: "4 Thành viên",
          myRole: "Team Leader, Xây dựng logic game (Board, Square), tích hợp các panel.",
          tech: ["Java", "Java Swing", "Ant"], 
          link: "https://github.com/minhminh24x/Minesweeper-Game" 
        },
        { 
          title: "WPF Patient Manager", 
          summary: "Ứng dụng desktop (Windows) để quản lý bệnh nhân. Xây dựng bằng C# (WPF) và kết nối CSDL qua Entity Framework Core.",
          teamSize: "Dự án cá nhân",
          myRole: "Desktop Developer",
          tech: ["C#", "WPF", "EF Core"], 
          link: null
        },
        { 
          title: "Smart Trash Can (Thùng rác thông minh)", 
          summary: "Dự án IoT đầu tay. Sử dụng cảm biến siêu âm để phát hiện vật thể, tự động mở nắp bằng động cơ servo và hiển thị trạng thái lên LCD.",
          teamSize: "5 thành viên (Đại học - Dự án nhóm)",
          myRole: "IoT Developer (Hardware & Software)",
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
          desc: "Hoàn thành khóa học về Nghiên cứu và Thiết kế UX."
        },
        { 
          title: "CertNexus Certified Ethical Emerging Technologist", 
          from: "Coursera", 
          date: "1/2025", 
          link: "https://coursera.org/share/6fc18172ffaa6af7c7ff60c39f07e886",
          desc: "Hiểu biết về các vấn đề đạo đức trong công nghệ mới nổi (AI, IoT...)."
        },
        { 
          title: "Software Development Lifecycle", 
          from: "Coursera", 
          date: "9/2024", 
          link: "https://coursera.org/share/d5370b0948f4e0b96bb08220c0fc658c",
          desc: "Nắm vững các quy trình trong vòng đời phát triển phần mềm."
        },
        { 
          title: "Web Design for Everybody: Basics", 
          from: "Coursera", 
          date: "5/2024", 
          link: "https://coursera.org/share/fdefe34c2e94ac09bdf0cac99cb6102f",
          desc: "Kiến thức cơ bản về HTML, CSS, và JavaScript."
        },
        { 
          title: "Software Engineer Intern Certificate", 
          from: "HackerRank", 
          date: "6/2024", 
          link: "https://www.hackerrank.com/certificates/9e9dda4bf87f",
          desc: "Đạt chứng nhận Kỹ sư phần mềm thực tập qua bài kiểm tra kỹ năng."
        },
        { 
          title: "Problem Solving (Intermediate) Certificate", 
          from: "HackerRank", 
          date: "5/2025",
          link: "https://www.hackerrank.com/certificates/98a168e94af3",
          desc: "Chứng nhận khả năng giải quyết vấn đề thuật toán mức trung cấp."
        }
      ],
      badges: {
        title: "Huy hiệu Kỹ năng HackerRank",
        desc: "Các huy hiệu kỹ năng (như Java, SQL) đã đạt được. Xem tất cả trên hồ sơ của tôi.",
        link: "https://www.hackerrank.com/loclm9824",
        cta: "Xem hồ sơ HackerRank"
      },
      activities: [
        { title: "Phó chủ tịch CLB VHC", desc: "Quản lý thông tin, hoạt động đối nội và giám sát thành viên.", date: "2023 - 2024" },
        { title: "Thành viên 'Con đường xanh'", desc: "Tham gia các hoạt động thiện nguyện: phát bánh mì, thả cá, làm công đức tại chùa.", date: "2022 - Hiện tại" }
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
      subtitle: 'Kỹ năng mềm',
      hardSkills: [
        { name: "Backend", skills: "Java Spring Boot, JSP/Servlet, REST API" },
        { name: "Frontend", skills: "React + Vite, HTML5, CSS3, JavaScript" },
        { name: "Database", skills: "PostgreSQL, SQL Server, MySQL" },
        { name: "System & Deploy", skills: "Docker, Cloudflare Tunnel, GitHub" },
        { name: "Desktop", skills: "C#, WPF, Entity Framework Core" },
        { name: "IoT", skills: "Arduino, Sensors, Motor Control" }
      ],
      softSkills: [
        { name: "Làm việc nhóm & Giao tiếp", desc: "Cởi mở, thuyết trình, và truyền tải thông tin hiệu quả." },
        { name: "Đọc hiểu & Phân tích", desc: "Đọc hiểu tài liệu tiếng Anh, phân tích và tổ chức nhiệm vụ." },
        { name: "Phẩm chất cá nhân", desc: "Chăm chỉ, kiên nhẫn, có trách nhiệm, làm việc dưới áp lực." }
      ],
    },
    contact: {
      title: 'Liên hệ',
      subtitle: 'Tôi luôn cởi mở để trao đổi về các cơ hội mới.',
      email: 'Email',
      github: 'GitHub',
      formTitle: "Gửi tin nhắn cho tôi",
      formName: "Họ và tên",
      formEmail: "Email của bạn",
      formSubject: "Tiêu đề",
      formMessage: "Nội dung tin nhắn...",
      formSend: "Gửi tin nhắn",
      formSending: "Đang gửi...",
      formSuccess: "Gửi thành công! Cảm ơn bạn.",
      formError: "Gửi thất bại. Vui lòng thử lại.",
    },
  },
  en: {
    navbar: {
      intro: 'About',
      timeline: 'Timeline',
      whatIDo: 'Doing',
      whatIDone: 'Done',
      whatIWillDo: 'Future',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: '👋 Hi, I\'m',
      name: 'Lê Minh Lộc!',
      subtitle: 'DEVELOPER & TESTER',
      sequence: [
        'Backend Developer', 2000,
        'Web & System Developer', 2000,
        'Freelance Tester', 2000,
        'IoT & Game Enthusiast', 2000,
      ],
      quote: '“Code is the art of turning ideas into reality.”',
      cta: 'View My Projects',
    },
    introduction: {
      title: 'About Me',
      // === KHÔI PHỤC HIGHLIGHTS (EN) ===
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
        line1: 'Currently a 4rd-year student',
        line2: 'Major: Software Engineering',
        line3: 'At: FPT University, Can Tho (2022 - 2026)',
      },
      goals: {
        title: 'Career Goals',
        line1: 'Short-term: Become a full-time employee after 2-3 internships.',
        line2: 'Long-term: Strive to become a Team Leader after 3-4 years.',
      },
      values: {
        title: 'Core Values',
        line1: 'Hard-working, detail-oriented, patient, and able to work under pressure.',
        line2: 'Strong teamwork, communication, and presentation skills.',
        line3: 'Proficient in reading and understanding English technical documents.',
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
      title: 'What I Do',
      backend: {
        title: 'Backend Development',
        desc: 'Focusing on advanced Backend skills with Java (Spring Boot), JSP/Servlet, and databases like PostgreSQL & SQL Server.',
      },
      frontend: {
        title: 'Frontend & System',
        desc: 'Learning and building modern frontends with React + Vite. Exploring Docker and deployment solutions (Cloudflare Tunnel).',
      },
      tester: {
        title: 'Freelance Tester',
        desc: 'Working as a freelancer on the TestIO Platform. Achieved Level 3 (Silver Tester) with over 60% bug acceptance rate.',
      },
    },
    whatIDone: {
      title: 'What I\'ve Done',
      tabProjects: 'Projects',
      tabCerts: 'Certifications',
      tabActivities: 'Activities',
      githubLink: 'View on GitHub',
      detailLabels: {
        summary: 'Summary',
        teamSize: 'Team Size',
        myRole: 'My Role',
      },
      projects: [
        { 
          title: "Personal Portfolio (This Website)", 
          summary: "The very site you are viewing! A dynamic portfolio built from scratch. Features multi-language, particle backgrounds, and scroll reveal animations.",
          teamSize: "2 Members (Developer & AI Assistant)",
          myRole: "Lead Developer, UI/UX Designer, Animation Integrator.",
          tech: ["React", "Vite", "Framer Motion", "react-tsparticles", "EmailJS"], 
          link: "https://github.com/minhminh24x/loclmportfolio" 
        },
        { 
          title: "Tai Loc Shop (E-commerce)", 
          summary: "A modern full-stack e-commerce platform. Backend uses Node.js, Express, and Prisma. Frontend is built with React and TailwindCSS.",
          teamSize: "Personal Project (In Development)",
          myRole: "Fullstack Developer",
          tech: ["React", "Node.js", "Express", "Prisma", "TailwindCSS"], 
          link: "https://github.com/minhminh24x/tailocshop" 
        },
        { 
          title: "Medical Record System", 
          summary: "A basic patient record management system. Uses Spring Boot for the backend API and PostgreSQL for the database. Integrated JWT for authentication.",
          teamSize: "6 Members (FPT Software Internship)",
          myRole: "Fullstack Developer",
          tech: ["Spring Boot", "PostgreSQL", "JWT"], 
          link: null
        },
        { 
          title: "Online Clothing Store (PenguinShop)", 
          summary: "E-commerce MVC web (Java EE JSP/Servlet + SQL Server). Features a complete e-commerce pipeline including cart, vouchers, checkout, and revenue export to Excel.",
          teamSize: "5 Members (University Group Project)",
          myRole: "Backend Developer (Product & Cart Management).",
          tech: ["Java", "JSP/Servlet", "SQL Server", "MVC"], 
          link: "https://github.com/Nhatanhhhh/PenguinStore" 
        },
        { 
          title: "Minesweeper Game", 
          summary: "A classic Minesweeper game built with Java Swing. This was a university group project, featuring core game functionalities.",
          teamSize: "4 Members",
          myRole: "Team Leader, Built game logic (Board, Square), Integrated panels.",
          tech: ["Java", "Java Swing", "Ant"], 
          link: "https://github.com/minhminh24x/Minesweeper-Game" 
        },
        { 
          title: "WPF Patient Manager", 
          summary: "A Windows desktop application for managing patients. Built with C# (WPF) and connected to SQL Server via Entity Framework Core.",
          teamSize: "Personal Project",
          myRole: "Desktop Developer",
          tech: ["C#", "WPF", "EF Core"], 
          link: null
        },
        { 
          title: "Smart Trash Can", 
          summary: "My first IoT project. Uses an ultrasonic sensor to detect objects, automatically opens the lid with a servo motor, and displays status on an LCD.",
          teamSize: "5 Members (University Group Project)",
          myRole: "IoT Developer (Hardware & Software)",
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
          desc: "Completed coursework on UX Research and Design principles."
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
          desc: "Mastery of the processes involved in the software dev lifecycle."
        },
        { 
          title: "Web Design for Everybody: Basics of Web Development & Coding", 
          from: "Coursera", 
          date: "5/2024", 
          link: "https://coursera.org/share/fdefe34c2e94ac09bdf0cac99cb6102f",
          desc: "Fundamental knowledge of HTML, CSS, and JavaScript."
        },
        { 
          title: "Software Engineer Intern Certificate", 
          from: "HackerRank", 
          date: "6/2024", 
          link: "https://www.hackerrank.com/certificates/9e9dda4bf87f",
          desc: "Achieved Software Engineer Intern certification via skills assessment."
        },
        { 
          title: "Problem Solving (Intermediate) Certificate", 
          from: "HackerRank", 
          date: "5/2024", 
          link: "https://www.hackerrank.com/certificates/98a168e94af3",
          desc: "Certified intermediate-level algorithmic problem-solving skills."
        }
      ],
      badges: {
        title: "HackerRank Skill Badges",
        desc: "Various skill badges (like Java, SQL) earned. View all on my profile.",
        link: "https://www.hackerrank.com/loclm9824",
        cta: "View HackerRank Profile"
      },
      activities: [
        { title: "Vice President - VHC Club", desc: "Managed internal information, activities, and supervised members.", date: "2023 - 2024" },
        { title: "Member - 'Con đường xanh'", desc: "Participated in charity events: distributing bread, releasing fish, and volunteer work at temples.", date: "2022 - Present" }
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
      subtitle: 'Soft Skills',
      hardSkills: [
        { name: "Backend", skills: "Java Spring Boot, JSP/Servlet, REST API" },
        { name: "Frontend", skills: "React + Vite, HTML5, CSS3, JavaScript" },
        { name: "Database", skills: "PostgreSQL, SQL Server, MySQL" },
        { name: "System & Deploy", skills: "Docker, Cloudflare Tunnel, GitHub" },
        { name: "Desktop", skills: "C#, WPF, Entity Framework Core" },
        { name: "IoT", skills: "Arduino, Sensors, Motor Control" }
      ],
      softSkills: [
        { name: "Teamwork & Communication", desc: "Open, strong presentation skills, and effective information conveyance." },
        { name: "Comprehension & Analysis", desc: "Proficient in reading English documents, task analysis, and organization." },
        { name: "Personal Attributes", desc: "Hard-working, patient, responsible, and performs well under pressure." }
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'I\'m always open to discussing new opportunities.',
      email: 'Email',
      github: 'GitHub',
      formTitle: "Get in Touch",
      formName: "Your Name",
      formEmail: "Your Email",
      formSubject: "Subject",
      formMessage: "Your message...",
      formSend: "Send Message",
      formSending: "Sending...",
      formSuccess: "Success! Thank you.",
      formError: "Failed to send. Please try again.",
    },
  },
};
