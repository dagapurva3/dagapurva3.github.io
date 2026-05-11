import {
  mobile,
  backend,
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
  docker,
  java,
  creator,
  cpp,
  python,
  mysql,
  postgresql,
  flask,
  fastapi,
  kafka,
  aws,
  tensorflow,
  loadshare,
  uwaterloo,
  mnit,
  blueprint,
  mychoice,
  code,
  mlflow,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: creator
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Engineer",
    icon: creator,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [

  {
    name: "C++",
    icon: cpp,
    // position: [2, 0, 0],
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "React JS",
    icon: reactjs,
    // position: [0, 0, 0],
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "MySQL",
    icon: mysql
  },
  {
    name: "PostgreSQL",
    icon: postgresql
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Flask",
    icon: flask
  },
  {
    name: "FastAPI",
    icon: fastapi
  },
  {
    name: "Kafka",
    icon: kafka
  },
  {
    name: "AWS Services",
    icon: aws
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git
  },
  {
    name: "TensorFlow",
    icon: tensorflow
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "MLFlow",
    icon: mlflow,
  },
];

const projects = [
  {
    name: "AdmitIQ / KitesWay",
    description:
      "Production AI college-admissions platform at kitesway.com built with React 19, Django, and Google Gemini, delivering intelligent application guidance and automated document analysis for prospective students.",
    features: [],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: code,
    live_link: "https://www.kitesway.com/",
    source_code_link: "https://github.com/dagapurva3",
  },
  {
    name: "regnex",
    description:
      "Multi-agent financial sentiment and RAG system built with Agno, Gemini, LanceDB, and Financial PhraseBank, enabling real-time market intelligence and contextual investment insights.",
    features: [],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gemini",
        color: "green-text-gradient",
      },
      {
        name: "rag",
        color: "pink-text-gradient",
      },
      {
        name: "lancedb",
        color: "orange-text-gradient",
      },
    ],
    image: code,
    source_code_link: "https://github.com/nid-27/regnex",
  },
  {
    name: "HidLang",
    description:
      "AI-powered presentation analysis platform that delivers instant feedback on body language, speech quality, and professional presence through detailed PDF reports. Detects 17 body language cues with full speech transcription and real-time actionable insights.",
    features: [],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "orange-text-gradient",
      },
    ],
    image: code,
    live_link: "https://hidlang.com/",
    source_code_link: "https://github.com/dagapurva3",
  },
  {
    name: "ChainMind",
    description:
      "Built production-grade ML serving infrastructure with Weaviate vector database, enabling semantic search across 250+ electronics categories with 95%+ query accuracy. Architected complete RAG pipeline integrating local LLM (Llama3.2) with Express.js APIs and automated data migration, improving search relevance by 40%.",
    features: [],
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "weaviate",
        color: "pink-text-gradient",
      },
      {
        name: "llama3.2",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: code,
    source_code_link: "https://github.com/dagapurva3/ChainMind",
  },
  {
    name: "NasFlow",
    description:
      "Developed an automated Neural Architecture Search pipeline for image classification using custom CNNs and Transformer models, optimized across ImageNet subsets and a 120-class custom pet dataset with ONNX export and deployment. Integrated Optuna for hyperparameter tuning and MLflow/TensorBoard for live benchmarking, achieving 91% validation accuracy and reducing experimentation time by 30% with GPU-accelerated training.",
    features: [],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytorch",
        color: "green-text-gradient",
      },
      {
        name: "hugging-face",
        color: "pink-text-gradient",
      },
      {
        name: "optuna",
        color: "orange-text-gradient",
      },
      {
        name: "mlflow",
        color: "green-text-gradient",
      },
    ],
    image: code,
    source_code_link: "https://github.com/dagapurva3/NasFlow",
  },
  {
    name: "ClGanNet",
    description:
      "Devised a novel GAN variant to augment maize leaves, implementing a custom loss function for precise calculations, improving training dataset quality and reducing network size by 40%. Designed production-ready CNN achieving 99.04% testing accuracy for disease detection and published research in Signal Processing: Image Communication journal.",
    features: [],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gan",
        color: "green-text-gradient",
      },
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
      {
        name: "tensorflow",
        color: "orange-text-gradient",
      },
    ],
    image: code,
    source_code_link: "https://github.com/dagapurva3/ClGanNet",
    research_paper_link: "https://www.sciencedirect.com/science/article/abs/pii/S092359652300156X?dgcid=coauthorr",
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "MyChoice Financials (InsurTech Startup)",
    icon: mychoice,
    iconBg: "#E6DEDD",
    date: "September 2025 – Present",
    points: [
      "Architected Policy-Pilot, an AI-driven document validation service using Django, Celery, and Redis that parses complex insurance PDFs into structured data, reducing manual processing latency by 60%.",
      "Implemented Google Gemini \"Computer Use\" capabilities for automated broker form filling, utilizing vision-language models to navigate third-party portals and synchronize extracted policy data with 95% accuracy.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "University of Waterloo",
    icon: uwaterloo,
    iconBg: "#E6DEDD",
    date: "May 2025 – Present",
    points: [
      "ECE 108"
    ],
  },
  {
    title: "Volunteer Project Developer",
    company_name: "UW Blueprint",
    icon: blueprint,
    iconBg: "#E6DEDD",
    date: "January 2025 – Present",
    points: [
      "Designing and developing a class management platform for Sistema Toronto, enabling 50+ teachers to track absences,upload lesson plans, and claim substitute classes.",
"Enhancing teacher workflows with Next.js UI components and backend logic while automating class reminders via Google APIs and cron jobs, reducing missed updates by 40%."
    ],
  },
  {
    title: "Masters in Computer Engineering",
    company_name: "University of Waterloo",
    icon: uwaterloo,
    iconBg: "#E6DEDD",
    date: "September 2024 – August 2025",
    points: [
      "Tools and Methods of Intelligent systems",
      "Image Processing and Visual Communications",
      "Data and Knowledge Modelling",
      " Algorithms Design and Analysis",
      "Statistical signal processing",
      "Accounting and Financial Management",
      "Management and Leadership",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Loadshare Networks",
    icon: loadshare,
    iconBg: "#E6DEDD",
    date: "July 2022 – August 2024",
    points: [
      "Partnered with data teams to design and deploy cloud-based ML pipelines for time series anomaly detection, improving real-time fraud detection performance by 40%.",
      "Developed and deployed production-ready ML model serving APIs with built-in confidence scoring and automated CI/CD workflows, enhancing validation accuracy by 20%.",
      "Led migration to a microservices architecture, refactoring 65+ APIs using Java and Docker, resulting in a 35% reduction in system latency and overhead.",
      "Built scalable, cloud-native ML solutions for distributed order management, integrating automated training pipelines that boosted production throughput by 30%.",
      "Recognized with the Bar Raiser Award for delivering enterprise-grade ML infrastructure that exceeded KPIs by 15%, under tight deadlines and in close collaboration with cross-functional teams.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Loadshare Networks",
    icon: loadshare,
    iconBg: "#E6DEDD",
    date: "January 2022 – May 2022",
    points: [
      "Developed a Payment Monitoring System, resolving bugs for seamless functionality. Led Rewards module design in the Cohort Engine, boosting user engagement by 30%.",
      "Played a key role in developing the Reports Framework, enabling efficient data generation and analysis for decision-making.",
    ],
  },
  {
    title: "BTech, Computer Science and Engineering",
    company_name: "MNIT, Jaipur",
    icon: mnit,
    iconBg: "#E6DEDD",
    date: "August 2018 – May 2022",
    points: [
      "Computer Science and Engineering (CGPA: 8.48/10)",
    ],
  },
];


// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];
const heroTexts = [
  "Full Stack Development",
  500,
  "Machine Learning",
  500,
  "Backend Development",
  500,
  "Data Engineering",
  500,
  "Problem Solving",
  500,
  "Ironman",
  500,
  "Athlete",
  500,
  "Image Processing",
  500,
  "Computer Vision",
  500,
];
export {
  services,
  technologies,
  experiences,
  //  testimonials,
  projects,
  heroTexts
};
