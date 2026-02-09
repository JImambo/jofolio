// Mock data for portfolio

export const personalInfo = {
  name: "Jonathan Imambo",
  title: "Full-Stack Developer & Cyber Security Analyst",
  bio: "Passionate about building secure, scalable web applications and protecting digital assets. Specialized in modern web technologies and cybersecurity best practices.",
  email: "imambojonathan@gmail.com",
  phone: "+32 472 19 66 35",
  location: "Ans, Belgium",
  avatar: "https://shorturl.at/T6SG8",
  cvUrl: "/cv/Cv_Jonathan_Imambo.pdf",
  social: {
    github: "https://github.com/JImambo",
    linkedin: "https://www.linkedin.com/in/jonathan-imambo-19a647202",
    twitter: "https://x.com/j86349",
    email: "mailto:imambojonathan@gmail.com"
  }
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95, icon: "Code2" },
    { name: "Next.js", level: 90, icon: "Zap" },
    { name: "TypeScript", level: 88, icon: "FileCode" },
    { name: "Tailwind CSS", level: 92, icon: "Palette" },
    { name: "Vue.js", level: 80, icon: "Component" }
  ],
  backend: [
    { name: "Node.js", level: 93, icon: "Server" },
    { name: "Python/FastAPI", level: 90, icon: "Code" },
    { name: "PostgreSQL", level: 85, icon: "Database" },
    { name: "MongoDB", level: 88, icon: "DatabaseZap" },
    { name: "Redis", level: 82, icon: "Zap" }
  ],
  security: [
    { name: "Penetration Testing", level: 87, icon: "Shield" },
    { name: "OWASP Top 10", level: 92, icon: "ShieldAlert" },
    { name: "Network Security", level: 85, icon: "Network" },
    { name: "Cryptography", level: 80, icon: "Lock" },
    { name: "Security Audits", level: 88, icon: "SearchCheck" }
  ],
  tools: [
    { name: "Docker", level: 90, icon: "Container" },
    { name: "Git", level: 95, icon: "GitBranch" },
    { name: "AWS", level: 83, icon: "Cloud" },
    { name: "CI/CD", level: 87, icon: "Workflow" },
    { name: "Kubernetes", level: 78, icon: "Box" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "SecureBank Platform",
    description: "Full-stack banking application with end-to-end encryption, multi-factor authentication, and real-time fraud detection.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "JWT", "Encryption"],
    category: "Full-Stack",
    link: "https://github.com/alexdubois/securebank",
    demo: "https://securebank-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "VulnScanner Pro",
    description: "Automated vulnerability scanner for web applications. Detects SQL injection, XSS, CSRF, and other common security flaws.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    tags: ["Python", "Security", "FastAPI", "MongoDB", "Machine Learning"],
    category: "Security",
    link: "https://github.com/alexdubois/vulnscanner",
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description: "Real-time analytics dashboard for e-commerce platforms with inventory management, sales tracking, and customer insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Chart.js", "Redis", "Stripe"],
    category: "Full-Stack",
    link: "https://github.com/alexdubois/ecommerce-dash",
    demo: "https://ecom-dashboard-demo.com",
    featured: false
  },
  {
    id: 4,
    title: "Network Monitor",
    description: "Real-time network monitoring tool with intrusion detection system and automated threat response capabilities.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tags: ["Python", "Network Security", "Docker", "Grafana", "InfluxDB"],
    category: "Security",
    link: "https://github.com/alexdubois/netmonitor",
    demo: null,
    featured: true
  },
  {
    id: 5,
    title: "Task Management API",
    description: "RESTful API with authentication, role-based access control, and comprehensive security measures.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tags: ["Node.js", "Express", "JWT", "MongoDB", "Swagger"],
    category: "Backend",
    link: "https://github.com/alexdubois/task-api",
    demo: "https://api-docs.taskmanager.com",
    featured: false
  },
  {
    id: 6,
    title: "Password Manager",
    description: "Secure password manager with AES-256 encryption, zero-knowledge architecture, and cross-platform sync.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    tags: ["React", "Electron", "Cryptography", "SQLite", "C++"],
    category: "Security",
    link: "https://github.com/alexdubois/passmanager",
    demo: null,
    featured: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "CTO at TechVision",
    company: "TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    text: "Alexandre's expertise in both development and security is exceptional. He built our platform with security-first approach and delivered beyond expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Jean Dupont",
    role: "Founder & CEO",
    company: "SecureStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    text: "Working with Alexandre was a game-changer. His security audit revealed critical vulnerabilities we weren't aware of. Professional and thorough.",
    rating: 5
  },
  {
    id: 3,
    name: "Marie Laurent",
    role: "Product Manager",
    company: "FinanceApp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    text: "Alexandre delivered a robust full-stack solution with excellent documentation. His attention to security details is impressive.",
    rating: 5
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Understanding Zero Trust Architecture in Modern Web Applications",
    excerpt: "A deep dive into implementing zero trust security principles in web applications, covering authentication, authorization, and network segmentation.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
    category: "Security",
    date: "2025-01-15",
    readTime: "8 min read",
    slug: "zero-trust-architecture-web-apps",
    tags: ["Security", "Architecture", "Zero Trust"]
  },
  {
    id: 2,
    title: "Building Scalable APIs with FastAPI and PostgreSQL",
    excerpt: "Learn how to build high-performance, scalable APIs using FastAPI, PostgreSQL, and modern async patterns.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop",
    category: "Development",
    date: "2025-01-08",
    readTime: "6 min read",
    slug: "scalable-apis-fastapi-postgresql",
    tags: ["Python", "FastAPI", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Top 10 OWASP Vulnerabilities: Prevention Guide for 2025",
    excerpt: "An updated guide to preventing the most critical web application security risks according to OWASP, with practical code examples.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop",
    category: "Security",
    date: "2024-12-20",
    readTime: "10 min read",
    slug: "owasp-vulnerabilities-prevention-2025",
    tags: ["OWASP", "Security", "Web Development"]
  },
  {
    id: 4,
    title: "React Server Components: A Complete Guide",
    excerpt: "Explore the power of React Server Components and how they can improve performance and user experience in your Next.js applications.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    category: "Development",
    date: "2024-12-10",
    readTime: "7 min read",
    slug: "react-server-components-guide",
    tags: ["React", "Next.js", "Performance"]
  }
];

export const experiences = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "CyberTech Solutions",
    location: "Paris, France",
    period: "2022 - Present",
    description: "Leading development of secure enterprise applications and conducting security audits for clients.",
    achievements: [
      "Architected and deployed 5+ enterprise-level applications",
      "Reduced security vulnerabilities by 85% through comprehensive audits",
      "Mentored junior developers on secure coding practices"
    ]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "WebSecure Inc.",
    location: "Lyon, France",
    period: "2020 - 2022",
    description: "Developed full-stack web applications with focus on security and performance optimization.",
    achievements: [
      "Built RESTful APIs handling 1M+ requests daily",
      "Implemented OAuth2 and JWT authentication systems",
      "Improved application performance by 60%"
    ]
  }
];

// Form submission handler (mock)
export const handleContactSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted (mock):', formData);
      localStorage.setItem('contactForm_' + Date.now(), JSON.stringify(formData));
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
};

// Blog article save (mock)
export const saveBlogArticle = (article) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const articles = JSON.parse(localStorage.getItem('blogArticles') || '[]');
      const newArticle = {
        ...article,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      };
      articles.push(newArticle);
      localStorage.setItem('blogArticles', JSON.stringify(articles));
      resolve({ success: true, article: newArticle });
    }, 800);
  });
};

export const categories = ['All', 'Full-Stack', 'Security', 'Backend', 'Frontend'];