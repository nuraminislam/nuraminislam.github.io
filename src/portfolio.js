
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // 
// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 3000
};


const illustration = {
  animated: true 
};


const greeting = {
  username: "Nur Amin",
  title: "Hi, I'm Nur Amin",
  subTitle: "A Professional Web Developer, E-commerce Manager, and Photographer based in Dhaka, Bangladesh. With experience developing over 300 websites, I specialize in crafting performant, elegant digital experiences using WordPress and WooCommerce. My background bridges technical implementation—from complex algorithms to custom CSS—with business growth and digital marketing.",
  FootersubTitle: "Crafting digital experiences with minimalist elegance.",
  
  displayGreeting: true 
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nuraminislam",
  linkedin: "https://www.linkedin.com/in/md-nur-amin-islam/",
  gmail: "nuraminn.work@gmail.com",
  facebook: "https://www.facebook.com/nuramin.co",
  instagram: "https://www.instagram.com/n_u_r_a_m_i_n/",
  whatsapp: "https://api.whatsapp.com/send?phone=8801925364920",
  discord: "https://discord.com/nuramin.io",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "BUILT WITH EVERYTHING YOU NEED FOR SUCCESS",
  subTitle: "BRIDGING TECHNICAL DEVELOPMENT WITH BUSINESS GROWTH",
  features: [
    {
      title: "WORDPRESS DEVELOPMENT",
      desc: "Developing high-performance, elegant e-commerce platforms using WordPress and WooCommerce.",
      icon: "fab fa-wordpress",
      color: "#FF69B4"
    },
    {
      title: "ELEMENTOR MASTERY",
      desc: "Writing precise, custom CSS and building robust interfaces with Elementor & Elementor Pro.",
      icon: "fas fa-layer-group",
      color: "#4CAF50"
    },
    {
      title: "ALGORITHMIC PROBLEM SOLVING",
      desc: "Implementing complex algorithmic solutions in C/C++ (Dynamic Programming, N-Queen, etc.).",
      icon: "fas fa-code",
      color: "#9C27B0"
    },
    {
      title: "DIGITAL MARKETING",
      desc: "Executing comprehensive digital marketing campaigns via Facebook Ads Manager.",
      icon: "fas fa-bullhorn",
      color: "#FF9800"
    },
    {
      title: "E-COMMERCE MANAGEMENT",
      desc: "Managing full-scale e-commerce operations from technical foundations to sales growth.",
      icon: "fas fa-shopping-cart",
      color: "#F44336"
    },
    {
      title: "FULLY RESPONSIVE DESIGN",
      desc: "Seamless experience across all devices with responsive layouts and fluid typography.",
      icon: "fas fa-expand-arrows-alt",
      color: "#00BCD4"
    },
    {
      title: "TAILORED STRATEGY",
      desc: "Customize layouts, content, and styles without technical skills holding you back.",
      icon: "fas fa-sliders-h",
      color: "#FFC107"
    },
    {
      title: "CLEAN UI & UX",
      desc: "Minimal interfaces designed for clarity, usability, and intense user focus.",
      icon: "fas fa-paint-brush",
      color: "#E91E63"
    }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Southeast University",
      logo: require("./assets/images/seu_logo.png"),
      subHeader: "B.Sc. in Computer Science & Engineering (CSE)",
      duration: "July 2024 - running",
    },
    {
      schoolName: "BIAM Model School And College, Bogura",
      logo: require("./assets/images/BiamLogo.jpg"),
      subHeader: "passed HSC-2022 in Science",
      duration: "August 2020 - November 2022",
    },
    {
      schoolName: "BIAM Model School And College, Bogura",
      logo: require("./assets/images/BiamLogo.jpg"),
      subHeader: "passed SSC-2020 in Science",
      duration: "January 2018 - January 2020",
    },
  ]
};


const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Web Development",
      progressPercentage: "95%" 
    },
    {
      Stack: "E-commerce Management",
      progressPercentage: "90%"
    },
    {
      Stack: "Algorithms & Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Digital Marketing",
      progressPercentage: "88%"
    }
  ],
  displayCodersrank: false  
};


const workExperiences = {
  display: true,
  title: "EXPERTISE",
  subtitle: "Your Vision, My Expertise — Together, I bring ideas to life with tailored solutions that deliver real results. Let's build something amazing.",
  experience: [
    {
      id: "01",
      title: "Web Design & Development",
      desc: "End-to-end creation of highly responsive and aesthetically pleasing websites. I focus on writing clean, scalable code and crafting intuitive user interfaces that deliver exceptional digital experiences.",
      image: require("./assets/images/web_design_dev.png")
    },
    {
      id: "02",
      title: "Elementor Mastery",
      desc: "Expert-level proficiency in building dynamic, pixel-perfect layouts using Elementor. I transform complex design requirements into lightning-fast, fully customized WordPress solutions without writing manual boilerplate code.",
      image: require("./assets/images/elementor_mastery.png")
    },
    {
      id: "03",
      title: "Algorithmic Problem Solving",
      desc: "Strong analytical mindset dedicated to untangling complex technical challenges. I implement efficient algorithms and data structures to optimize backend performance, reduce load times, and ensure seamless scalability.",
      image: require("./assets/images/algorithmic_solving.png")
    },
    {
      id: "04",
      title: "Digital Marketing",
      desc: "Executing data-driven marketing campaigns to maximize reach and conversion. I leverage SEO, social media strategies, and analytics to elevate brand presence and drive targeted traffic to your digital platforms.",
      image: require("./assets/images/digital_marketing.png")
    },
    {
      id: "05",
      title: "E-Commerce Management",
      desc: "Comprehensive management of online retail ecosystems. From inventory synchronization to seamless checkout flows, I oversee the entire technical and strategic pipeline to ensure sustainable revenue growth.",
      image: require("./assets/images/ecommerce_management.png")
    }
  ]
};


const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big project

const bigProjects = {
  title: "Key Projects",
  subtitle: "HIGHLIGHTS FROM OVER 300 SUCCESSFUL WEBSITE BUILDS",
  projects: [
    {
      image: require("./assets/images/cloud1.png"),
      projectName: "Ornalika",
      projectDesc: "My primary e-commerce jewelry brand. I built the complete WordPress/WooCommerce site, designed the logo, and managed full-scale marketing.",
      footerLink: [
        {
          name: "Visit Ornalika",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/socialEngi.png"),
      projectName: "girlssroomm.com",
      projectDesc: "Custom e-commerce jewelry platform tailored for a seamless user experience, which I developed and currently manage.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://girlssroomm.com/"
        }
      ]
    },
    {
      image: require("./assets/images/cloud1.png"),
      projectName: "nextorybd.com",
      projectDesc: "Comprehensive LMS built with Tutor LMS & Elementor, featuring complex course grids, display conditions, and custom student registrations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nextorybd.com/"
        }
      ]
    }
  ],
  display: false
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi just inbox me",
  number: "01925364920",
  email_address: "nuraminn.work@gmail.com",
  display: true 
};

const journeyInfo = {
  title: "My Journey",
  subtitle: "From Backbencher to Developer & Founder",
  display: true,
  milestones: [
    {
      title: "Embarking on Web Development",
      year: "2021",
      desc: "I began my professional journey into web development, focusing deeply on front-end technologies and WordPress. Driven by a passion for clean design, I started taking on my first freelance projects and learning how to translate client visions into functional code."
    },
    {
      title: "Scaling Freelance Operations",
      year: "2022",
      desc: "My freelance career accelerated rapidly as I focused on delivering high-quality, performant, and elegant digital experiences. Over this period, I successfully developed and launched over 300+ websites for a diverse range of global clients, mastering complex custom requirements and responsive design."
    },
    {
      title: "Expanding into E-commerce",
      year: "2023",
      desc: "Realizing the power of online retail, I shifted my focus toward specialized e-commerce development. I took on the role of Web Developer and Manager for girlssroomm.com, where I built and customized a seamless jewelry platform tailored for an optimal user shopping experience."
    },
    {
      title: "Founding Ornalika",
      year: "2024",
      desc: "Leveraging my extensive background in web development and e-commerce management, I founded my own primary jewelry brand, Ornalika. I took full ownership of the project—from building the robust WooCommerce platform to designing the brand logo and executing the initial marketing strategies."
    },
    {
      title: "Driving Digital Growth",
      year: "Present",
      desc: "Today, I operate as both a Founder and E-commerce Manager. I currently oversee multiple successful e-commerce platforms, executing full-scale digital marketing campaigns, and continuously pushing the boundaries of modern web design and algorithms to drive sustainable business growth."
    }
  ]
};

const processInfo = {
  title: "PROCESS",
  display: true,
  image: require("./assets/images/cloud1.png"), // Using existing placeholder asset
  steps: [
    {
      id: "01",
      title: "ONBOARDING",
      desc: "I start by getting to know you and your project requirements. We'll set up clear communication channels, align on expectations, and ensure I have everything needed to kick off the project smoothly."
    },
    {
      id: "02",
      title: "DISCOVERY & STRATEGY",
      desc: "I dive deep into understanding your brand, target audience, and core objectives. Based on these insights, I craft a tailored roadmap that aligns our creative vision with your measurable business goals."
    },
    {
      id: "03",
      title: "DESIGN & DEVELOP",
      desc: "I bring your ideas to life through thoughtful design and clean, scalable code. My focus is on creating a seamless, beautiful user experience while ensuring the underlying architecture is robust and performant."
    },
    {
      id: "04",
      title: "DELIVERY",
      desc: "I execute a rigorous quality check before launching your project to the world. Upon handoff, I ensure you have everything you need to confidently manage your new platform and drive long-term growth."
    }
  ]
};

const contactCTAInfo = {
  display: true,
  titleFirst: "Let's bring your",
  titleSecond: "vision to life",
  subtitle: "Share your ideas, and I'll turn them into clear, functional, and visually refined digital experiences",
  btn1Text: "Contact Now →",
  btn1Link: "https://calendly.com/nuraminislam/30min",
  btn2Text: "Schedule a Call 📞",
  btn2Link: "https://calendly.com/nuraminislam/30min",
  images: [
    require("./assets/images/cta_1.png"),
    require("./assets/images/cta_2.png"),
    require("./assets/images/cta_3.png"),
    require("./assets/images/cta_4.png")
  ]
};

const megaFooterInfo = {
  profilePic: require("./assets/images/my_photo.jpg"),
  bio: "As a Full Time Marketer, Mentor & Developer having a vast amount of work Experience, I can understand your pain point and give it a proper solution.",
  address: "Aftab Nagar, Badda, Dhaka, Dhaka Division, Bangladesh.",
  contactEmail: "nuraminn.work@gmail.com",
  contactPhone: "+880 1925364920",
  paymentIcons: require("./assets/images/payment_methods.png"),
  pagesColumn1: [
    { name: "My Journey", link: "#" },
    { name: "Case Studies", link: "#" },
    { name: "Free Tools", link: "#" },
    { name: "Contact", link: "#contact" }
  ],
  pagesColumn2: [
    { name: "Courses", link: "#" },
    { name: "Service", link: "#" },
    { name: "Mini Shop", link: "#" },
    { name: "Brand Deals", link: "#" }
  ],
  legalPages: [
    { name: "Sitemap", link: "#" },
    { name: "Privacy Policy", link: "#" },
    { name: "Terms & Condition", link: "#" },
    { name: "Payment & Refund Policy", link: "#" }
  ],
  copyrightText: "Copyright 2026 All Rights Reserved",
  developerText: "Designed & Developed by Web Makeer"
};

const techStackGrid = {
  display: true,
  title: "TECHNICAL STACK",
  subtitle: "Technologies I Work With",
  description: "Full-stack expertise across modern development, AI, and cloud infrastructure.",
  cards: [
    {
      title: "Frontend Development",
      tags: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Development",
      tags: ["Node.js", "Express.js", "Java", "Python", "REST APIs", "JWT Auth", "MySQL", "MongoDB"]
    },
    {
      title: "AI & Machine Learning",
      tags: ["Machine Learning", "NLP", "Generative AI", "LLMs", "Computer Vision", "Prompt Engineering"]
    },
    {
      title: "Tools & Cloud",
      tags: ["Git", "GitHub", "Docker", "Postman", "Linux", "CI/CD", "AWS", "Figma"]
    }
  ]
};

const featuredWork = {
  display: true,
  title: "Featured Work",
  subtitle: "Projects That Define My",
  highlight: "Journey",
  description: "A curated portfolio of production-grade platforms, full-stack microservices, and AI models built for scale and speed.",
  projects: [
    {
      category: "AI • NLP • LLM",
      title: "PolicyGuard AI",
      desc: "An AI-powered policy analysis platform that processes documents, extracts risk models, and provides intelligent pipeline Q&A using LLMs.",
      tags: ["React", "Python", "LLMs", "NLP"],
      link: "#"
    },
    {
      category: "PERFORMANCE • FINANCE",
      title: "Virtualized Financial Grid",
      desc: "High-Performance financial grid rendering 1,000,000 rows with custom manual virtualization, built for sub-millisecond updates.",
      tags: ["React", "Vite", "Vanilla CSS", "Nginx"],
      link: "#"
    },
    {
      category: "SAAS • SECURITY • ISOLATION",
      title: "Multi-Tenant SaaS Platform",
      desc: "Scalable multi-tenant architecture with robust JWT authentication, fine-grained role-based access control (RBAC), and tenant isolation.",
      tags: ["Node.js", "JWT", "Docker", "PostgreSQL"],
      link: "#"
    },
    {
      category: "REAL-TIME • WEBRTC",
      title: "WebRTC Video Chat App",
      desc: "Low-latency video streaming and real-time chat application implementing fully localized signaling loops over Next.js.",
      tags: ["Next.js", "TypeScript", "WebRTC", "Socket.io"],
      link: "#"
    },
    {
      category: "BACKEND ARCHITECTURE",
      title: "Distributed URL Shortener",
      desc: "A highly available and scalable distributed URL shortener designed to resolve path transformations with minimum latency.",
      tags: ["JavaScript", "Redis", "Scalable", "Express"],
      link: "#"
    },
    {
      category: "FULL STACK • MICROSERVICES",
      title: "Payment Gateway System",
      desc: "Secure core UPI and card payment gateway framework engine equipped with robust ACID transaction state-machine management.",
      tags: ["Node.js", "React", "Docker", "PostgreSQL"],
      link: "#"
    }
  ]
};

const clientsInfo = {
  display: true,
  clients: [
    { name: "Lendorse", icon: "fas fa-leaf" },
    { name: "Tempo Music School", icon: "fas fa-music" },
    { name: "Araglen House", icon: "fas fa-home" },
    { name: "IQ Branding Solutions", icon: "fas fa-bolt" },
    { name: "THE FAMILY EDIT", icon: "fas fa-users" },
    { name: "Pro Cast Angling", icon: "fas fa-fish" },
    { name: "Zahir Kebab", icon: "fas fa-utensils" },
    { name: "Arbor Dog Daycare", icon: "fas fa-dog" },
    { name: "Positive Attitude Aviation", icon: "fas fa-plane" },
    { name: "Jim Katz Family Law", icon: "fas fa-gavel" },
    { name: "Able Tool", icon: "fas fa-wrench" },
    { name: "Rivore", icon: "fas fa-gem" },
    { name: "Instasd", icon: "fas fa-camera" },
    { name: "Pro Roofers Galway", icon: "fas fa-hammer" },
    { name: "The Aristocrats", icon: "fas fa-crown" },
    { name: "VPS Web Server", icon: "fas fa-server" },
    { name: "Hostinger", icon: "fas fa-server" },
    { name: "Notion", icon: "fas fa-book" },
    { name: "Aquaholic Tourist Caravan", icon: "fas fa-caravan" },
    { name: "Miriam Simon", icon: "fas fa-user" },
    { name: "Book Extraordinary", icon: "fas fa-book-open" },
    { name: "Evisas", icon: "fas fa-passport" },
    { name: "Flexfumes", icon: "fas fa-wind" },
    { name: "Office Suites", icon: "fas fa-building" },
    { name: "Bigstyle", icon: "fas fa-tshirt" },
    { name: "Dampmaster", icon: "fas fa-tint" },
    { name: "The Napco", icon: "fas fa-box" },
    { name: "Filament", icon: "fas fa-lightbulb" },
    { name: "MMK Electricians", icon: "fas fa-plug" },
    { name: "FMCO", icon: "fas fa-briefcase" }
  ]
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  journeyInfo,
  processInfo,
  contactCTAInfo,
  megaFooterInfo,
  techStackGrid,
  featuredWork,
  clientsInfo
};
