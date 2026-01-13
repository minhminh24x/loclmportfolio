/* src/data/translations.js */

export const translations = {
  vi: {
    navbar: {
      intro: 'Tôi Là Ai',
      timeline: 'Lộ trình',
      whatIDo: 'Đang Làm Gì',
      whatIDone: 'Đã Làm Gì',
      whatIWillDo: 'Sẽ Làm Gì',
      skills: 'Kỹ năng',
      contact: 'Liên hệ',
    },
    projectModal: {
      overview: "Tổng quan & Thách thức",
      features: "Tính năng nổi bật",
      techStack: "Công nghệ sử dụng",
      sourceCode: "Mã nguồn",
      liveDemo: "Xem Demo",
      close: "Đóng"
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
      downloadCV: 'Tải CV của tôi',
    },
    introduction: {
      title: 'Tổng quan năng lực',

      // MỤC 1: Điểm nhấn chuyên môn (Professional Highlights)
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

      // MỤC 2: Xử lý vấn đề thực tế (Real-World Problem Solving)
      problemSolving: {
        title: 'Xử lý vấn đề thực tế',
        items: [
          'Sửa lỗi 401 Unauthorized khi tích hợp API với IAM.',
          'Sửa lỗi 403 Forbidden khi Spring Security chặn role không đúng.',
          'Khắc phục lỗi 500 Internal Server Error trong các service liên quan đến JWT & UUID.',
          'Xử lý lỗi Infinity Folder Loop trên Windows khi xoá thư mục bị Recursive Build.',
          'Debug lỗi SSL, Certpath, database constraint, foreign key, và dead-lock.'
        ]
      },

      // MỤC 5: Hợp tác với AI (AI Assisted Development)
      aiAssisted: {
        title: 'AI Collaboration',
        desc: 'Tôi làm việc song song với AI để tăng tốc độ code: từ phân tích log, thiết kế hệ thống, tạo test case, viết docs, đến tối ưu các query phức tạp.'
      },

      education: {
        title: 'Học vấn',
        line1: 'Đại học FPT Cần Thơ (2022 - 2026)',
        line2: 'Chuyên ngành: Kỹ thuật Phần mềm',
        line3: 'Định hướng: Backend System & Security',
      },
      goals: {
        title: 'Mục tiêu nghề nghiệp',
        line1: 'Ngắn hạn: Trở thành nhân viên chính thức sau 2-3 kỳ thực tập.',
        line2: 'Dài hạn: Phấn đấu trở thành Team Leader sau 3-4 năm làm việc.',
      },
      values: {
        title: 'Phong cách làm việc',
        line1: 'Problem Solver: Tập trung sửa lỗi tận gốc (Root Cause Analysis).',
        line2: 'Resilience: Kiên nhẫn với các lỗi khó (Legacy code, Config issues).',
        line3: 'Communication: Trình bày vấn đề kỹ thuật rõ ràng, mạch lạc.',
      },
    },

    // MỤC 7: Tech Stack Timeline (Lộ trình kỹ năng)
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
          summary: "Trang web bạn đang xem. Tối ưu hiệu năng React, tích hợp đa ngôn ngữ Context API.",
          longDescription: "Đây không chỉ là một trang tĩnh. Tôi đã xây dựng nó như một ứng dụng React hoàn chỉnh với tư duy về Performance và Scalability. Thách thức lớn nhất là xử lý Multi-language mà không làm trang bị giật (flicker), và tích hợp EmailJS để gửi form không cần Backend server riêng.",
          features: [
            "Tối ưu render với React.lazy và Suspense.",
            "Quản lý Global State cho ngôn ngữ bằng Context API.",
            "Animation mượt mà đạt 60FPS với Framer Motion."
          ],
          teamSize: "2 Thành viên (Developer & AI Assistant)",
          myRole: "Frontend & Deployment",
          tech: ["React", "Vite", "Framer Motion", "EmailJS"],
          link: "https://github.com/minhminh24x/loclmportfolio",
          demoLink: "https://loclmportfolio.vercel.app/"
        },
        {
          title: "Tai Loc Shop (E-commerce)",
          summary: "Hệ thống E-commerce Fullstack. Áp dụng JWT cho Auth, Prisma ORM quản lý DB.",
          longDescription: "Một hệ thống thương mại điện tử đầy đủ chức năng. Tôi tập trung giải quyết vấn đề 'Race Condition' khi đặt hàng và quản lý phiên đăng nhập an toàn với JWT (Access Token + Refresh Token). Database được thiết kế chuẩn hóa để truy vấn nhanh.",
          features: [
            "Authentication bảo mật 2 lớp (JWT).",
            "Giỏ hàng đồng bộ Real-time.",
            "Admin Dashboard thống kê doanh thu."
          ],
          teamSize: "Dự án cá nhân",
          myRole: "Fullstack Developer",
          tech: ["React", "Node.js", "Express", "Prisma", "TailwindCSS"],
          link: "https://github.com/minhminh24x/tailocshop",
          demoLink: "https://tailocshop.vercel.app/" 
        },
       {
  title: "Medical Record System (F-Laboratory)",
  summary: "Phát triển Backend module quản lý Bệnh nhân và Bệnh án. Cấu hình bảo mật Service và tích hợp xác thực với hệ thống IAM.",
  longDescription: "Trong kiến trúc Microservices của dự án, tôi chịu trách nhiệm phát triển Service quản lý nghiệp vụ cốt lõi. Cụ thể, tôi xây dựng các API cho chức năng quản lý Bệnh nhân (Patient) và Hồ sơ bệnh án (Medical Record). Ngoài ra, tôi thực hiện cấu hình Spring Security để bảo vệ Service, đồng thời triển khai cơ chế giao tiếp và xác thực người dùng thông qua việc kết nối chặt chẽ với API IAM (Identity & Access Management).",
  features: [
    "RESTful API quản lý vòng đời hồ sơ Bệnh nhân (Patient) và Bệnh án (Medical Record).",
    "Cấu hình Spring Security Filter Chain cho Microservice.",
    "Tích hợp JWT và giao tiếp xác thực với IAM Service (Service-to-Service communication).",
    "Xử lý nghiệp vụ và lưu trữ dữ liệu y tế trên PostgreSQL."
  ],
  teamSize: "6 thành viên",
  myRole: "Backend Developer (Spring Boot, PostgreSQL, Security, Microservices).",
  tech: ["Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Microservices"],
  link: "https://github.com/HungPoris/F_Laboratory",
  demolink: "https://web.flaboratory.cloud/login"
} link: null
        },
        {
          title: "Online Clothing Store (PenguinShop)",
          summary: "Dự án MVC thuần Java. Tự viết connection pool, xử lý Session thủ công.",
          longDescription: "Dự án Web MVC thuần được xây dựng từ con số 0 (scratch) để thấu hiểu bản chất Web Server. Thay vì dùng Framework, tôi tự triển khai Connection Pool thủ công để tối ưu kết nối CSDL và xử lý Session/Cookie trực tiếp để quản lý giỏ hàng, giúp hiểu sâu về vòng đời Request-Response.",
          features: [
            "Mô hình MVC (Model-View-Controller) chuẩn mực với Servlet & JSP.",
            "Tự xây dựng JDBC Connection Pool (Không dùng Hibernate).",
            "Quản lý State (Session/Cookie) thủ công cho Authentication."
          ],
          teamSize: "5 thành viên (Đại học)",
          myRole: "Backend Core (Quản lý sản phẩm, Giỏ hàng, Thống kê).",
          tech: ["Java", "JSP/Servlet", "SQL Server", "MVC"],
          link: "https://github.com/Nhatanhhhh/PenguinStore"
        },
        {
          title: "Minesweeper Game (Dò mìn)",
          summary: "Game thuật toán phức tạp (Loang, Cắm cờ) với Java Swing. Quản lý State thủ công.",
          longDescription: "Tái hiện tựa game kinh điển với cấu trúc dữ liệu Đồ thị (Graph), coi mỗi ô là một đỉnh. Tôi áp dụng thuật toán Loang (Flood Fill) sử dụng BFS/DFS đệ quy để mở rộng các ô trống thông minh mà không gây tràn bộ nhớ (Stack Overflow). Giao diện được tùy biến hoàn toàn (Custom UI).",
          features: [
            "Thuật toán BFS/DFS đệ quy xử lý logic 'Loang' (Flood Fill).",
            "Quản lý Game State (Play, Win, Lose) và Timer thời gian thực.",
            "Giao diện Custom Swing với xử lý sự kiện chuột (Left/Right Click)."
          ],
          teamSize: "4 Thành viên",
          myRole: "Team Leader, Logic Developer.",
          tech: ["Java", "Java Swing", "Ant"],
          link: "https://github.com/minhminh24x/Minesweeper-Game"
        },
        {
          title: "WPF Patient Manager",
          summary: "Ứng dụng Desktop quản lý bệnh nhân. Mô hình MVVM, Entity Framework Core.",
          longDescription: "Ứng dụng Desktop quản lý phòng khám sử dụng kiến trúc MVVM để tách biệt giao diện và logic. Tích hợp Entity Framework Core giúp thao tác database an toàn, tránh SQL Injection và dễ dàng bảo trì.",
          features: [
            "Kiến trúc MVVM (Model-View-ViewModel) chuẩn thiết kế.",
            "Entity Framework Core (ORM) tương tác CSDL.",
            "Data Binding hai chiều (Two-way binding) mạnh mẽ của WPF."
          ],
          teamSize: "Dự án cá nhân",
          myRole: "Desktop Developer",
          tech: ["C#", "WPF", "EF Core"],
          link: null
        },
        {
          title: "Smart Trash Can (IoT)",
          summary: "Hệ thống nhúng xử lý tín hiệu cảm biến siêu âm, điều khiển Servo tự động.",
          longDescription: "Dự án IoT thực tế kết hợp phần cứng và phần mềm. Sử dụng C++ trên nền tảng Arduino để xử lý tín hiệu Analog từ cảm biến siêu âm, tính toán khoảng cách và điều khiển động cơ Servo đóng mở nắp thùng rác tự động với độ trễ thấp.",
          features: [
            "Xử lý tín hiệu thời gian thực (Real-time Signal Processing).",
            "Lập trình ngắt (Interrupt) và điều khiển động cơ Servo.",
            "Tối ưu code C++ cho vi điều khiển bộ nhớ thấp."
          ],
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
          desc: "Ethical issues in emerging tech (AI, IoT)."
        },
        {
          title: "Software Development Lifecycle",
          from: "Coursera",
          date: "9/2024",
          link: "https://coursera.org/share/d5370b0948f4e0b96bb08220c0fc658c",
          desc: "SDLC processes (Agile, Waterfall)."
        },
        {
          title: "Web Design for Everybody: Basics",
          from: "Coursera",
          date: "5/2024",
          link: "https://coursera.org/share/fdefe34c2e94ac09bdf0cac99cb6102f",
          desc: "HTML, CSS, JS fundamentals."
        },
        {
          title: "Software Engineer Intern Certificate",
          from: "HackerRank",
          date: "6/2024",
          link: "https://www.hackerrank.com/certificates/9e9dda4bf87f",
          desc: "Practical coding skills certification."
        },
        {
          title: "Problem Solving (Intermediate)",
          from: "HackerRank",
          date: "5/2024",
          link: "https://www.hackerrank.com/certificates/98a168e94af3",
          desc: "Algorithmic problem-solving skills."
        }
      ],
      // MỤC 6: Learning Streak
      badges: {
        title: "Thành tựu & Học tập liên tục",
        desc: "100+ bài LeetCode/HackerRank. 50+ phiên debug thực tế. Thực chiến dự án FPT Software.",
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
        { name: "Database", skills: "PostgreSQL, SQL Server, MySQL" },
        { name: "Security", skills: "JWT, OAuth2, IAM Key, Spring Security" },
        { name: "System", skills: "Docker, Cloudflare Tunnel, GitHub Actions" },
        { name: "Desktop & IoT", skills: "C#, WPF, Arduino, Sensors" }
      ],
      // MỤC 3: Tools & Workflow
      tools: [
        { name: "Version Control", desc: "Git, GitHub (Branching Strategy, Pull Requests)." },
        { name: "Dev Tools", desc: "IntelliJ, VS Code, SSMS, pgAdmin, Postman, Swagger." },
        { name: "Workflow", desc: "Agile/Scrum, Debugging (Breakpoints, Logs), CI/CD basic." }
      ],
      // MỤC 4: Specialized Interests (Điểm mạnh kỹ thuật) -> Hiển thị ở phần Skills
      specialized: {
        title: "Sở trường kỹ thuật",
        items: [
          "Thiết kế hệ thống (System Design) mức Beginner-Intermediate.",
          "Tối ưu Database (Normalization, Indexing).",
          "Tư duy API chuyên nghiệp (Idempotency, Validation, DTO).",
          "Kỹ năng Debugging mạnh mẽ trên nhiều môi trường."
        ]
      },
      softSkills: [
        { name: "Làm việc nhóm & Giao tiếp", desc: "Cởi mở, thuyết trình, và truyền tải thông tin hiệu quả." },
        { name: "Đọc hiểu & Phân tích", desc: "Đọc hiểu tài liệu tiếng Anh, phân tích và tổ chức nhiệm vụ." },
        { name: "Phẩm chất cá nhân", desc: "Chăm chỉ, kiên nhẫn, có trách nhiệm, làm việc dưới áp lực." }
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
    projectModal: {
      overview: "Overview & Challenges",
      features: "Key Features",
      techStack: "Technologies Used",
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
      close: "Close"
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
      downloadCV: 'Download Resume',
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
      problemSolving: {
        title: 'Real-World Problem Solving',
        items: [
          'Fixing 401 Unauthorized during IAM API key validation.',
          'Resolving 403 Forbidden caused by Spring Security misconfiguration.',
          'Fixing 500 Internal Server Error tied to JWT parsing and UUID handling.',
          'Debugging Windows infinite recursive folders caused by misbuilt packages.',
          'SSL certificate errors, database constraint conflicts, and transaction bugs.'
        ]
      },
      aiAssisted: {
        title: 'AI Collaboration',
        desc: 'I work collaboratively with AI tools to accelerate development—debugging issues, designing systems, generating test cases, and building complex backend features.'
      },
      education: {
        title: 'Education',
        line1: 'FPT University Can Tho (2022 - 2026)',
        line2: 'Major: Software Engineering',
        line3: 'Focus: Backend System & Security',
      },
      goals: {
        title: 'Career Goals',
        line1: 'Short-term: Become a full-time employee after 2-3 internships.',
        line2: 'Long-term: Strive to become a Team Leader after 3-4 years.',
      },
      values: {
        title: 'Work Style',
        line1: 'Problem Solver: I focus on fixing root causes, not just patching bugs.',
        line2: 'Resilience: Patient with hard bugs (Legacy code, Config issues).',
        line3: 'Communication: Clear and effective technical communication.',
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
          summary: "Personal showcase. React performance optimization, Context API for I18n.",
          longDescription: "This is not just a static site. I built it as a full-featured React application with a mindset on Performance and Scalability. The biggest challenge was handling Multi-language support without flickering, and integrating EmailJS for serverless form handling.",
          features: [
            "Optimized rendering with React.lazy and Suspense.",
            "Global State Management for language via Context API.",
            "Smooth animations hitting 60FPS with Framer Motion."
          ],
          teamSize: "2 Members (Developer & AI Assistant)",
          myRole: "Frontend & Deployment",
          tech: ["React", "Vite", "Framer Motion", "EmailJS"],
          link: "https://github.com/minhminh24x/loclmportfolio",
          demoLink: "https://loclmportfolio.vercel.app/"
        },
        {
          title: "Tai Loc Shop (E-commerce)",
          summary: "Fullstack E-commerce. Applied JWT for Auth, Prisma ORM. Handled Transactions manually.",
          longDescription: "A fully functional e-commerce system. I focused on solving 'Race Conditions' in order placement and secure session management using JWT (Access Token + Refresh Token). The database is normalized for fast queries.",
          features: [
            "Two-layer Security Authentication (JWT).",
            "Real-time Cart Synchronization.",
            "Admin Dashboard for revenue statistics."
          ],
          teamSize: "Personal",
          myRole: "Fullstack (Node.js, Express, React, Prisma).",
          tech: ["React", "Node.js", "Express", "Prisma", "TailwindCSS"],
          link: "https://github.com/minhminh24x/tailocshop",
          demoLink: "https://tailocshop.vercel.app/"
        },
        {
  title: "Medical Record System (F-Laboratory)",
  summary: "Backend development for Patient & Medical Record modules. Service Security configuration and IAM integration.",
  longDescription: "Responsible for the core business services within a Microservices architecture. I developed RESTful APIs for Patient and Medical Record management. Furthermore, I implemented service-level security using Spring Security and established secure Service-to-Service communication/authentication by integrating with the IAM (Identity & Access Management) API.",
  features: [
    "RESTful APIs for Patient and Medical Record lifecycle management.",
    "Spring Security Filter Chain configuration for Microservices.",
    "JWT integration and IAM Service authentication (Service-to-Service).",
    "Business logic processing and medical data storage with PostgreSQL."
  ],
  teamSize: "6 Members",
  myRole: "Backend Developer (Spring Boot, PostgreSQL, Security, Microservices).",
  tech: ["Spring Boot", "PostgreSQL", "Spring Security", "JWT", "Microservices"],
  link: "https://github.com/HungPoris/F_Laboratory",
  demolink: "https://web.flaboratory.cloud/login"
}
        {
          title: "Online Clothing Store (PenguinShop)",
          summary: "Pure Java MVC Project. Manual Connection Pool & Session handling.",
          longDescription: "A pure Java Web MVC project built from scratch to deeply understand Web Server internals. Instead of relying on heavy frameworks, I implemented a manual JDBC Connection Pool to manage database connections efficiently. Session and Cookie mechanisms were handled natively to manage Shopping Carts and Auth.",
          features: [
            "Standard MVC (Model-View-Controller) with JSP/Servlet.",
            "Custom-built JDBC Connection Pool (Performance Optimization).",
            "Native State Management (Session/Cookie) for Shopping Cart."
          ],
          teamSize: "5 Members",
          myRole: "Backend Core (Cart Logic, SQL Queries, Reporting).",
          tech: ["Java Servlet", "SQL Server", "MVC"],
          link: "https://github.com/Nhatanhhhh/PenguinStore"
        },
        {
          title: "Minesweeper Game",
          summary: "Classic Minesweeper with Java Swing. Complex Graph algorithms & manual State Management.",
          longDescription: "A robust recreation of the classic Minesweeper using Java Swing. The technical highlight is treating the grid as a Graph Data Structure. The Flood Fill algorithm (using optimized BFS/DFS) instantly reveals safe areas without causing Stack Overflow. The UI is fully customized with custom assets.",
          features: [
            "Recursive BFS/DFS algorithm for 'Flood Fill' mechanics.",
            "Precise Game State Management (Play, Win, Lose, Timer).",
            "Custom Swing GUI with complex Mouse Event handling."
          ],
          teamSize: "4 Members",
          myRole: "Team Leader, Logic Developer.",
          tech: ["Java", "Java Swing", "Ant"],
          link: "https://github.com/minhminh24x/Minesweeper-Game"
        },
        {
          title: "WPF Patient Manager",
          summary: "Windows desktop app. MVVM architecture, Entity Framework Core.",
          longDescription: "A desktop application for clinic management. I utilized the MVVM pattern to separate the UI from business logic, ensuring testability. Entity Framework Core was used for ORM, allowing efficient database interactions without writing raw SQL.",
          features: [
            "Standard MVVM (Model-View-ViewModel) Architecture.",
            "Entity Framework Core (ORM) for Database Interaction.",
            "Robust Two-way Data Binding in WPF."
          ],
          teamSize: "Personal",
          myRole: "Desktop Developer",
          tech: ["C#", "WPF", "EF Core"],
          link: null
        },
        {
          title: "Smart Trash Can (IoT)",
          summary: "Embedded system with Real-time Sensor processing & Servo control.",
          longDescription: "An automation project combining hardware and software. Written in C++ on Arduino to process Analog signals from ultrasonic sensors, calculate distance, and control Servo motors to automatically open the lid with low latency.",
          features: [
            "Real-time Signal Processing.",
            "Interrupt Handling & Servo Motor Control.",
            "Optimized C++ code for low-memory microcontrollers."
          ],
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
          desc: "Ethical issues in emerging tech (AI, IoT)."
        },
        {
          title: "Software Development Lifecycle",
          from: "Coursera",
          date: "9/2024",
          link: "https://coursera.org/share/d5370b0948f4e0b96bb08220c0fc658c",
          desc: "SDLC processes (Agile, Waterfall)."
        },
        {
          title: "Web Design for Everybody: Basics",
          from: "Coursera",
          date: "5/2024",
          link: "https://coursera.org/share/fdefe34c2e94ac09bdf0cac99cb6102f",
          desc: "HTML, CSS, JS fundamentals."
        },
        {
          title: "Software Engineer Intern Certificate",
          from: "HackerRank",
          date: "6/2024",
          link: "https://www.hackerrank.com/certificates/9e9dda4bf87f",
          desc: "Practical coding skills certification."
        },
        {
          title: "Problem Solving (Intermediate)",
          from: "HackerRank",
          date: "5/2024",
          link: "https://www.hackerrank.com/certificates/98a168e94af3",
          desc: "Algorithmic problem-solving skills."
        }
      ],
      badges: {
        title: "Learning Streak & Achievements",
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
        { name: "Database", skills: "PostgreSQL, SQL Server, MySQL" },
        { name: "Security", skills: "JWT, OAuth2, IAM Key, Spring Security" },
        { name: "System", skills: "Docker, Cloudflare Tunnel, GitHub Actions" },
        { name: "Desktop & IoT", skills: "C#, WPF, Arduino, Sensors" }
      ],
      tools: [
        { name: "Version Control", desc: "Git, GitHub (Branching Strategy, Pull Requests)." },
        { name: "Dev Tools", desc: "IntelliJ, VS Code, SSMS, pgAdmin, Postman, Swagger." },
        { name: "Workflow", desc: "Agile/Scrum basics, Debugging (Breakpoints, Logs)." }
      ],
      specialized: {
        title: "Specialized Interests",
        items: [
          "System Design (Beginner-Intermediate).",
          "Database Optimization (Normalization, Indexing).",
          "Professional API Design (Idempotency, Validation, DTO).",
          "Strong Debugging Mindset."
        ]
      },
      softSkills: [
        { name: "Teamwork & Communication", desc: "Open, strong presentation skills, and effective information conveyance." },
        { name: "Comprehension & Analysis", desc: "Proficient in reading English documents, task analysis, and organization." },
        { name: "Personal Attributes", desc: "Hard-working, patient, responsible, and performs well under pressure." }
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

