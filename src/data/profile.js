/**
 * Apni saari personal details yahi file mein update karein.
 * Poora portfolio isi se data leta hai.
 */
export const profile = {
  name: "Sanjana Gupta",
  initials: "SG",
  title: "Software Developer",
  subtitle: "Computer Science Student",

  typewriterRoles: [
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "UI designer",
    "Java Developer",
  ],

  heroTagline: "Welcome to my portfolio",
  heroBio:
    "Aspiring Software Developer with hands-on experience in Java, React, Spring Boot, figma ,python, C and MySQL through academic and personal projects. Strong in Data Structures & Algorithms, problem-solving, and building efficient software solutions while continuously learning new technologies.",

  aboutIntro:
  "A passionate Computer Science graduate with a strong interest in software development, problem-solving, and building practical applications.",
  aboutParagraphs: [
  "I am Sanjana Gupta, a Computer Science graduate with a strong interest in software development, frontend engineering,web developer,java developer and problem-solving.",

  "My technical skills include Java, Spring Boot, React, MySQL, HTML, CSS, and JavaScript. I enjoy building practical applications, improving my Data Structures & Algorithms knowledge, and applying modern development practices to create reliable and scalable software solutions."
],
  education: {
    degree: "B.Tech — Computer Science Engineering",
    cgpa: "8.5",
    subjects: "Data Structures & Algorithms, DBMS, OOPs, Operating Systems",
  },

  contact: {
    email: "sanjanagupta886060@gmail.com", // ← apna email yahan likhein
    phone: "+91 9580435819", // ← apna phone yahan likhein
    location: "Uttar Pradesh, India",
  },

  social: {
    github: "https://github.com/Sanjanagupta96", // ← apna GitHub link
    linkedin: "https://www.linkedin.com/in/sanjana-gupta-1359a629a/", // ← apna LinkedIn link
   
    Leetcode: "https://leetcode.com/u/sanjanagupta8860/", // ← apna LeetCode link
    GeeksforGeeks: "https://www.geeksforgeeks.org/profile/sanjanagup23f1", // ← apna 
    // GeeksforGeeks link
    GeeeksforGeeks: "https://www.geeksforgeeks.org/profile/sanjanaguj9u7", // ← apna GeeksforGeeks link
  },

  resumeFile: "/Sanjana resume.pdf", // public folder mein resume rakhein

  skills: [
    {
      title: "Programming & Languages",
      description: "Core languages for logic, automation, and backend systems.",
      color: "purple",
      items: [ "Java", "C", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Web & Full Stack",
      description: "Building responsive UIs and reliable server-side APIs.",
      color: "blue",
      items: ["HTML5/CSS3", 
    "React", "Bootstrap",
    "Java (OOP)", 
    
    "JDBC / JSP", 
    "DBMS (SQL)", 
    "REST APIs","Python", ],
    },
    {
      title: "Databases & Tools",
      description: "Data storage, version control, and development workflow.",
      color: "cyan",
      items: ["MySQL", "Git", "GitHub", "Postman", "VS Code","Eclipse","Figma","XAMPP","IntelliJ IDEA"],
    },
  ],

  projects: [
    {
      title: "Student Performance Tracker",
      description:
        "A web application to track and analyze student academic performance with dashboards and reports.",
      tech: ["Java", "Servlets","JSP", "MySQL", "react","HTML","CSS"],
      github: "https://github.com/Sanjanagupta96/Student-Performance-Tracker", // ← apna repo link
      live: null,
    },
    {
      title: "Nagar Nigam Problem Tracking System",
      description:
        "Citizen complaint management system for municipal issues with status tracking and admin panel.",
      tech: ["Java","Servlets","JSP", "MySQL", "React",
        "Bootstrap","HTML","CSS"
      ],
      github: "https://github.com/Sanjanagupta96/Nagar-Nigam-Tracking-System", // ← apna repo link
      live: null,
    },
   {
  title: "Abhyantra - Women's Safety Platform",
  description:
    "A women’s safety application designed to provide emergency assistance, incident reporting, and location-based support. The platform enables users to raise safety alerts, track reported incidents, and helps authorities respond efficiently through a centralized management system.",
  tech: [
    "Java",
    "Servlets",
    "JSP",
    "MySQL",
    "React",
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript"
  ],
  github: "https://github.com/your-username/abhyantra",
  live: null,
},
{
  title: "Flipkart Clone",
  description:
    "A responsive e-commerce website inspired by Flipkart, featuring a modern user interface, product listings, navigation menu, promotional banners, and mobile-friendly design.",
  tech: [
    "HTML",
    "CSS",
    "Bootstrap"
  ],
  github: "https://github.com/Sanjanagupta96/FlipkartCLone",
  live: null,
},

  ],

  internships: [
   {
  title: "AI Azure Intern",
  org: "Edunet Foundation",
  period: " 13th May 2025 to 13th June 2025",
  description:
    "Gained hands-on experience with Microsoft Azure AI services, developed AI-powered solutions, and explored machine learning and computer vision technologies.",
  certificate: "/edunet.pdf",
},
{
  title: "Python Developer Intern",
  org: "VoalteCodes",
  period: "Apr 2025 - May 2025",
  description:
    "Developed a Student Performance Tracker web application using Python, Flask, and MySQL with features for student management, grade tracking, and performance analysis.",
  certificate: "/VoaltOfCodes.pdf",
},
{
  title: "Innovation & Design Thinking Program",
  org: "Era Foundation (Kalam Pragati), AKTU Lucknow",
  period: "Mar 2025 - Jun 2025",
  description:
    "Applied innovation and design thinking principles to develop a Nagar Nigam Problem Tracking System, enhancing citizen complaint management and issue resolution workflows. Also completed Python for Data Science and Advanced Figma workshops.",
  certificate: "/Innovation & Design Thinking _ Sanjana Gupta.pdf",
  certificate: "/PythonForDataScience.pdf",
  certificate: "/AdvanceFigma.pdf",
},
{
  title: "Web Technology Workshop",
  org: "Softpro India Computer Technologies Pvt. Ltd.",
  period: "Dec 2024",
  description:
    "Built a responsive Flipkart Clone using HTML, CSS, and Bootstrap while learning modern frontend development practices.",
  certificate: "/softpro.jpg",
},

{
  title: "GeeksforGeeks Certificate of Excellence",
 
 org: "GeeksforGeeks",
  description:
    "Advance JAVA Course.",
  certificate: "/AdvanceJava.PDF",

},
{
  title: "NPTEL Verified Certificate",
 org: "Conducted by IIT Madras",

  description:"Introduction to Machine Learning.",
  certificate: "/Nptel.pdf",
},

  ],
};
