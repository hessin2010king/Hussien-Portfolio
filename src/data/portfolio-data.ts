export interface Skill {
  name: string;
  level: number;
  category: 'Backend' | 'Frontend' | 'Development & Operations' | 'Personal Skills';
}

export interface Experience {
  company: string;
  logo?: string;
  position: string;
  duration: string;
  description: string;
  responsibilities: string[];
  website?: string;
  technologies: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
  githubBackend?: string;
  githubFrontend?: string;
}

export interface Education {
  institution: string;
  logo?: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const skills: Skill[] = [
  // Backend
  { name: "PHP", level: 90, category: "Backend" },
  { name: "Laravel", level: 95, category: "Backend" },
  { name: "MySQL", level: 85, category: "Backend" },
  { name: "Linux", level: 90, category: "Backend" },
  { name: "Object-Oriented Programming", level: 90, category: "Backend" },
  { name: "API Development", level: 85, category: "Backend" },
  { name: "Database Management", level: 80, category: "Backend" },
  { name: "Design Patterns", level: 60, category: "Backend" },
  { name: "SOLID Principles", level: 60, category: "Backend" },
  { name: "Security", level: 80, category: "Backend" },
  { name: "Performance Optimization", level: 85, category: "Backend" },
  

  // Frontend
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 75, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "Angular", level: 90, category: "Frontend" },
  { name: "React", level: 70, category: "Frontend" },
  { name: "Vue.js", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Bootstrap", level: 95, category: "Frontend" },
  { name: "jQuery", level: 80, category: "Frontend" },
  
  
  // Development & Operations
  { name: "Docker", level: 80, category: "Development & Operations" },
  { name: "CI/CD", level: 75, category: "Development & Operations" },
  { name: "Git", level: 90, category: "Development & Operations" },
  { name: "GitHub", level: 85, category: "Development & Operations" },
  { name: "Agile Methodologies", level: 70, category: "Development & Operations" },
  { name: "Jira", level: 85, category: "Development & Operations" },

  // Personal Skills
  { name: "Problem Solving", level: 90, category: "Personal Skills" },
  { name: "Communication", level: 90, category: "Personal Skills" },
  { name: "Teamwork", level: 95, category: "Personal Skills" },
  { name: "Time Management", level: 80, category: "Personal Skills" },
  { name: "Leadership", level: 85, category: "Personal Skills" }
];

export const experiences: Experience[] = [
  {
    company: "Dielegende",
    position: "Junior Full Stack Web Developer",
    duration: "10/2024 - Present",
    description: "As a Full Stack Developer, I specialize in Laravel (backend) and Angular (frontend), with a primary focus on building and optimizing dashboards and developing RESTful APIs for web and mobile applications.",
    responsibilities: [
      "Developing and maintaining admin dashboards using Laravel as the backend and Angular for the frontend.",
      "Building scalable RESTful APIs for mobile and web applications.",
      "Managing database architecture and optimization with MySQL.",
      "Ensuring secure authentication & authorization using JWT, Sanctum, and OAuth.",
      "Handling server-side logic, data processing, and performance optimization.",
      "Collaborating with frontend developers to ensure seamless UI/UX integration.",
      "Implementing best security practices for web and mobile applications."
    ],
    website: "www.dlegende.ne",
    technologies: ["Laravel", "Angular", "MySQL", "PHP", "Linux","TypeScript","Bootstrap","Tailwind CSS","JWT", "Sanctum", "OAuth"]
  },
    
  {
    company: "ITI Information Technology Institute, ( MCIT ) Ministry of Communications and Information",
    position: "Full Stack Web Developer | ITI Internship",
    duration: "05/2024 - 10/2024",
    description: "Completed an intensive full stack web development internship at ITI, gaining comprehensive experience in both backend and frontend technologies through hands on projects.",
    responsibilities: [
      "Built and optimized server side functions with PHP and Laravel, implementing scalable APIs and CRUD operations to support various applications.",
      "Developed responsive, interactive interfaces using HTML5, CSS3, JavaScript, TypeScript, and Angular, ensuring high standards in user experience and mobile responsiveness.",
      "Contributed to Eventoria, an event management system with multi role functionalities. Created an admin control panel with real time data features and map integrations for event route visualization.",
      "Used Git and GitHub for efficient team collaboration, following Agile methodologies to manage workflows and address project needs."
    ],
    website: "www.iti.gov.eg",
    technologies: ["PHP", "Laravel", "HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "Git", "GitHub", "Docker", "Axios", "JSON", "Linux"]
  },
  {
    company: "Long man company",
    position: "Data Entry Team Leader",
    duration: "Jun 2023 - Feb 2024",
    description: "I was a team leader for a data entry team in a company that provides data entry services to other companies.",
    responsibilities: [
      "Managed a team responsible for marketing exams for international schools in the UK and Australia",
      "Prepared and sent multiple reports daily, always reporting to the project manager",
      "Utilized monitoring tools to track team performance and solve issues as they arose",
      "Managed team scheduling and attendance to ensure efficient project execution"
    ],
    technologies: ["Leadership", "Team Management", "Communication", "Time Management", "Problem Solving"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Eventoria",
    description: "A comprehensive event management system with multi-role functionalities, real-time features.",
    longDescription: "Eventoria is a sophisticated event management platform that streamlines the process of organizing and managing events. The system features a powerful admin dashboard for event management, user control, and analytics. Key features include real-time bus tracking, interactive maps for event routes, multi-language support, and a comprehensive booking system. The platform is built with security and scalability in mind, implementing role-based access control and efficient data management practices.",
    thumbnail: "/Projects/eventoria/Eventoria mockup.jpeg",
    images: [
      "/Projects/eventoria/evenotria-landing-page.png",
      "/Projects/eventoria/dashboard-home.png",
      "/Projects/eventoria/dashboard-events.png",
      "/Projects/eventoria/dashboard-buses.png",
      "/Projects/eventoria/eventoria-bus-route.png",
      "/Projects/eventoria/eventoria-profile.png"
    ],
    technologies: ["Laravel", "Angular", "MySQL", "Google Maps API","OpenStreetMap API","Paymob API","JWT", "Bootstrap", "Docker"],
    githubBackend: "https://github.com/zeiadmagdy/Fianl-Backend",
    githubFrontend: "https://github.com/yasmineamr98/Final-Project",
    liveDemo: ""
  },
  {
    id: 2,
    name: "Clinico",
    description: "Modern medical clinic management system with appointment scheduling and patient records",
    longDescription: "Clinico is a comprehensive medical clinic management system designed to streamline healthcare operations. It features an intuitive appointment scheduling system, patient record management, and medical history tracking. The platform includes features for both medical staff and patients, with secure access to medical records and automated appointment reminders.",
    thumbnail: "/Projects/clinico/Clinico Mockup.png",
    images: [
      "/Projects/clinico/Clinico Full Page.png",
      "/Projects/clinico/Clinico part1.png",
      "/Projects/clinico/Clinico part2.png",
      "/Projects/clinico/Clinico part3.png"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    github: "https://github.com/hessin2010king/clinico",
    liveDemo: "https://clinico-two.vercel.app/"
  },
  {
    id: 3,
    name: "AngelEast",
    description: "Investment platform connecting startups with investors in the Middle East",
    longDescription: "AngelEast is a sophisticated platform designed to bridge the gap between startups and investors in the Middle East. The system features comprehensive dashboards for both investors and startups, with detailed insights, matching algorithms, and secure communication channels. The platform includes advanced analytics, document management, and automated matching based on investment criteria.",
    thumbnail: "/Projects/angeleast/angeleast-dashboard.png",
    images: [
      "/Projects/angeleast/angeleast-dashboard-login.png",
      "/Projects/angeleast/angeleast-dashboard-investors.png",
      "/Projects/angeleast/angeleast-dashboard-startups.png",
      "/Projects/angeleast/angeleast-dashboard-investors-insights.png",
      "/Projects/angeleast/angeleast-dashboard-startups-insights.png"
    ],
    technologies: ["Laravel", "Blades", "MySQL", "Chart.js", "Bootstrap", "JWT" , "jQuery", "TypeScript", "JSON", "Linux",],
    github: "",
    liveDemo: ""
  },
  {
    id: 4,
    name: "Restaurant Landing Page",
    description: "Modern and responsive landing page for a high-end restaurant",
    longDescription: "A beautifully designed landing page for a premium restaurant, featuring an elegant user interface with smooth animations and interactive elements. The page includes sections for featured dishes, menu highlights, customer testimonials, and a reservation system. The design emphasizes the restaurant's ambiance and culinary offerings through high-quality imagery and thoughtful typography.",
    thumbnail: "/Projects/restourant-landing-page/restourant-landing-page-mockup.jpeg",
    images: [
      "/Projects/restourant-landing-page/restourant-landing-page.png",
      "/Projects/restourant-landing-page/restourant-hero-section.png",
      "/Projects/restourant-landing-page/restourant-main-dish-menu-section.png",
      "/Projects/restourant-landing-page/restourant-featured-dishes-discount-section.png",
      "/Projects/restourant-landing-page/restourant-testimonials-section.png",
      "/Projects/restourant-landing-page/restourant-contact-footer-section.png"
    ],
    technologies: ["React","HTML5", "CSS3", "TypeScript", "Bootstrap", "Tailwind CSS"],
    github: "https://github.com/hessin2010king/landing-page-3",
    liveDemo: "https://chipper-banoffee-25152e.netlify.app/"
  },
  {
    id: 5,
    name: "Furniture Landing Page",
    description: "Elegant landing page for a luxury furniture brand with a modern minimalist design",
    longDescription: "A sophisticated landing page designed for a premium furniture brand, showcasing their collection through an immersive visual experience. The page features smooth scrolling animations, interactive product galleries, and a modern minimalist design that emphasizes the furniture's craftsmanship. The layout includes sections for featured collections, customer testimonials, and a contact form.",
    thumbnail: "/Projects/furniture-landing-page/furniture-landing-page-mockup.jpeg",
    images: [
      "/Projects/furniture-landing-page/furniture-landing-page.png",
      "/Projects/furniture-landing-page/furniture-hero-section.png",
      "/Projects/furniture-landing-page/furniture-our-projects-section.png",
      "/Projects/furniture-landing-page/furniture-contact-and-footer-section.png"
    ],
    technologies: ["Angular","HTML5", "CSS3", "TypeScript", "Bootstrap", "Tailwind CSS"],
    github: "https://github.com/hessin2010king/landing-page-2",
    liveDemo: "https://landing-page-2-test.netlify.app/"
  },
  {
    id: 6,
    name: "Clothes Landing Page",
    description: "Fashion-forward landing page for a clothing brand with a modern minimalist design",
    longDescription: "A trendy and dynamic landing page created for a contemporary clothing brand. The design incorporates modern web design principles with attention to typography, spacing, and visual hierarchy. Features include an interactive product showcase, category filtering, and seamless integration with social media. The page is fully responsive and optimized for all devices.",
    thumbnail: "/Projects/clothes-landing-page/clothes-landing-page-mockup.jpeg",
    images: [
      "/Projects/clothes-landing-page/Clothes-landing-page.png",
      "/Projects/clothes-landing-page/Clothes-hero-section.png",
      "/Projects/clothes-landing-page/Clothes-featured-section.png",
      "/Projects/clothes-landing-page/Clothes-ourmission-section.png",
      "/Projects/clothes-landing-page/Clothes-categories-section.png",
      "/Projects/clothes-landing-page/Clothes-contact-and-footer-section.png"
    ],
    technologies: ["Angular","HTML5", "CSS3", "TypeScript", "Bootstrap", "Tailwind CSS"],
    github: "https://github.com/hessin2010king/landingpage1",
    liveDemo: "https://landing-page-1-test.netlify.app/"
  }
];

export const education: Education[] = [
  {
    institution: "ITI | Information Technology Institute",
    degree: "Diploma",
    duration: "May 2024 - Oct 2024",
    description: "Graduated with honors. Specialized in software engineering and web development."
  },
  {
    institution: "Helwan University",
    degree: "Bachelor of Communications and Electronics Engineering",
    duration: "2014 - 2022",
    description: "Specialized in Electronics and Communications Engineering."
  }
];

export const certifications: Certification[] = [
  {
    title: "Full Stack Web Developer Diploma",
    issuer: "ITI | Information Technology Institute",
    date: "Oct 2024"
  },
  {
    title: "CCNA",
    issuer: "NTI | National Telecommunications Institute",
    date: "Sep 2023",
    description: "Certified Network Associate",
    link: "https://www.credly.com/badges/ae342af1-cc89-46db-b377-67220c455261/public_url"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/hussien-shokry",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/hessin2010king",
    icon: "github"
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/hessin.shokry",
    icon: "facebook"
  },
  {
    platform: "Twitter",
    url: "https://x.com/HessinShokry",
    icon: "twitter"
  },
  {
    platform: "Upwork",
    url: "https://www.upwork.com/freelancers/hussienshokry",
    icon: "upwork"
  }
];

export const personalInfo = {
  name: "Hussien Shokry Hussien",
  title: "Full-Stack Web Developer | ITI Graduate",
  location: "Cairo, Egypt",
  email: "hessinshokry3@gmail.com",
  phone: "+2001020973478",
  objectiveStatement: "As a skilled back-end/full-stack web developer with experience in the software development life cycle, I am actively seeking for a full-time position as a back-end or full-stack developer. I am confident that my technical expertise and passion for innovation will enable me to make significant contributions to your organization and drive continued success."
};
