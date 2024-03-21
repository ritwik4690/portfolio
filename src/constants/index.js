import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    python,
    nextjs,
    cpp,
    java,
    bootstrap,
    meta,
    amazon,
    ncsu,
    marketingmatch,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    wolfmedia,
    socialhelper,
    salary
  } from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Three JS",
      icon: threejs,
    }

  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "North Carolina State University",
      icon: ncsu,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      points: [
        "Spearheaded the development of a graph editor for Probabilistic Risk Analysis (PRA) software for the Nuclear Eng. Dept.",
        "Enabled users to log in, create, edit, and delete and store intricate graphs, leading to a 30% increase in user engagement.",
        "Redesigned the software with React.js, Typescript on the front-end, Nest.js, and MongoDB on the back-end contributing to a 25% improvement in the efficiency and accuracy of systems’ analysis of nuclear events.",
        "Performed E2E and component testing for the front-end using Cypress & Playwright and the back-end testing using Jest."
      ],
    },
    {
      title: "Software Dev Engineer Intern",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Developed a leave audit history difference viewer with React.js, enabling efficient comparison amongst different leave request versions, leading to a 70% decrease in audit version comparison times.",
        "Parsed complex JSON Logic leave eligibility rules and stored them in a tree data structure in Java, incorporating evaluation outcomes for each rule condition resulting in an 85% reduction in rule interpretation times for case managers.",
        "Modified the existing API to include this model and built a recursive component in React.js to render it, leading to improved employee experience for more than 500k employees.",
        "Simplified complex JSON Logic leave eligibility rules by storing them in a tree data structure in Java, incorporating evaluation outcomes for each rule condition.",
        "Reduced the average time per case by 40%, increasing case manager efficiency & promoting potential headcount savings.",
        "Maintained 97% line coverage and 100% branch coverage by writing unit tests with JUnit and Mockito."
      ],
    },
    {
      title: "Research Assistant",
      company_name: "North Carolina State University",
      icon: ncsu,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Nov 2022",
      points: [
        "Researched software, libraries, and packages to implement emotion detection using MobileNetV2, DeepFace, and FER, as well as attention analysis using OpenFace and Dlib library.",
        "Automated analysis of these algorithms on system performance by logging metrics like CPU utilization, power consumption, memory & storage into CSV files utilizing Python scripts reducing manual workloads by 40%.",
        "Generated graphical reports in Excel to facilitate visualization and interpretation which helped navigate future research.",
      ],
    },
    {
      title: "Full stack Developer Intern",
      company_name: "Marketing Match",
      icon: marketingmatch,
      iconBg: "#121214",
      date: "Jun 2021 - Sep 2021",
      points: [
        "Incorporated the agile methodology to single-handedly build the front-end, integrate a payment gateway & a content management system into a website using Next.js, Node.js and Contentful CMS for a travel agency.",
        "Integrated a payment gateway & content management system, streamlining their business & increasing revenue by 40%.",
        "Deployed 10+ websites for various clients using Firbase & Vercel, integrating Google analytics to track user engagement.",
        "Participated in daily meetings with other stakeholders twice a day and provided reports based on the project’s progress. Built the company website and designed multiple landing pages for the clients.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "The Social Helper",
      description:
        "A web application built for an NGO where the elderly people can connect with the volunteers of the NGO near them.",
      tags: [
        {
          name: "html/css",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: socialhelper,
      source_code_link: "https://github.com/ritwik4690/the-social-helper-og",
    },
    {
      name: "WolfMedia",
      description:
        "A Database application for a media streaming service to manage artists, songs, record lables, podcasts, and albums.",
      tags: [
        {
          name: "springboot",
          color: "blue-text-gradient",
        },
        {
          name: "jpa",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: wolfmedia,
      source_code_link: "https://github.com/ritwik4690/WolfMedia",
    },
    {
      name: "Salary Predictor",
      description:
        "An application that predicts the salary of a data scientist based on the years of experience, location, and other factors.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: salary,
      source_code_link: "https://github.com/ritwik4690/DS-Salary-Prediction",
    },
  ];
  
export { services, technologies, experiences, testimonials, projects };
  