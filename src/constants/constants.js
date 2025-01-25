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
  code,
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
    title: "Deep Learning Research",
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
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "ClGanNet",
    description:
      "  Developed a novel GAN variant to augment maize leaves, implementing a custom loss function for precise calculations, improving training dataset quality and reducing network size by 40%. Engineered a CNN for maize leaf disease detection, achieving a testing accuracy of 99.04%.",
    features: [],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "GAN",
        color: "green-text-gradient",
      },
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: code,
    source_code_link: "https://github.com/dagapurva3/ClGanNet",
    research_paper_link: "https://www.sciencedirect.com/science/article/abs/pii/S092359652300156X?dgcid=coauthorr",
  },
  {
    name: "Plant-Disease-Detection",
    description:
      "Developed a hybrid model for early plant disease identification, combining an Autoencoder and Convolutional Neural Network. Achieved the primary goal of reducing model parameters while maintaining accuracy above 97%.",
    features: [],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "autoencoder",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: code,
    source_code_link: "https://github.com/dagapurva3/Plant-disease-detection",
  },
  {
    name: "SportsCelebWebApp",
    description:
      "Developed a Flask web application that leverages machine learning and image processing to detect sports celebrities in user-provided images. Trained a Random Forest ML model on a diverse dataset, enabling accurate identification of celebrities with confidence scores and names in new uploads.",
    features: [],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: code,
    source_code_link: "https://github.com/dagapurva3/SportCelebWebApp",
  },
];

const experiences = [
  {
    title: "Masters in Computer Engineering",
    company_name: "University of Waterloo",
    icon: uwaterloo,
    iconBg: "#E6DEDD",
    date: "September 2024 – August 2025",
    points: [
      " Algorithms Design and Analysis",
      "Statistical signal processing",
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
      " Led migration of legacy codebase to a hexagonal OMS architecture, constituting 65+ APIs reducing build times, API response times, and database size by 35%.",
      "Built and scaled geocoding APIs, improving address validation accuracy through confidence scoring mechanisms.",
      "Developed efficient systems and products for cross-utilization of different internal products, increasing orders by 20%.",
      "Designed and implemented a low-cost data engineering infrastructure, building an end-to-end data pipeline and lakehouse system that improved data analysis efficiency.",
      "Awarded the Bar Raiser award for demonstrating exceptional dedication and perseverance, exceeding project goals and completing the project under tight deadlines.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: " Loadshare Networks",
    icon: loadshare,
    iconBg: "#E6DEDD",
    date: "January 2022 – May 2022",
    points: [
      "Developed a Payment Monitoring System, resolving bugs for seamless functionality. Led Rewards module design in the Cohort Engine, boosting user engagement by 30%.",
      "Played a key role in developing the Reports Framework, enabling efficient data generation and analysis for decision-making.",
    ],
  },
  {
    title: "BTech in Computer Science",
    company_name: "MNIT, Jaipur",
    icon: mnit,
    iconBg: "#E6DEDD",
    date: "August 2018 – May 2022",
    points: [
      // "Computer Science"
    ]
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
