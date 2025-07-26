import project1 from "../assets/projects/solarsys-project.png";
import project2 from "../assets/projects/aws-project.png";
import project3 from "../assets/projects/gen-ia-project.png";
import project4 from "../assets/projects/fruit-vision-project.png";
import project5 from "../assets/projects/livrili-project.png";
import project6 from "../assets/projects/fyninsync-project.png";

import certificate9 from "../assets/certificates/toeic.png";
import certificate1 from "../assets/certificates/docker.png";
import certificate2 from "../assets/certificates/ansible.png";
import certificate3 from "../assets/certificates/kubernetes.png";
import certificate4 from "../assets/certificates/linux.png";
import certificate5 from "../assets/certificates/machine_learning.png";
import certificate6 from "../assets/certificates/cloud.png";
import certificate7 from "../assets/certificates/CKA-certification.png";
import certificate8 from "../assets/certificates/Gitlab-CI-CD-certification.png";

import volunteering1 from "../assets/volunteering/ieee.jpg";
import volunteering2 from "../assets/volunteering/ils.jfif";
import volunteering5 from "../assets/volunteering/mts1.jfif";
import volunteering4 from "../assets/volunteering/tsyp11-1.jpg";
import volunteering3 from "../assets/volunteering/indabax.jpg";
import volunteering6 from "../assets/volunteering/mts2.jpg";
import volunteering7 from "../assets/volunteering/tsyp12.png";
import volunteering8 from "../assets/volunteering/indaba2.jfif";

export const HERO_CONTENT = `Motivated and forward-thinking ICT engineering graduate from the Higher School of Communication of Tunis (SUP’COM), with a strong interest in DevOps and cloud technologies. 
During my academic journey, I gained hands-on experience with automation, CI/CD pipelines, infrastructure as code, and containerization tools. 
I am proficient in Python and have worked on projects involving system integration and cloud deployment. 
My leadership roles have enhanced my teamwork, problem-solving, and project management abilities. 
Passionate about building scalable, reliable systems, I am eager to contribute to innovative DevOps initiatives that drive operational efficiency and technological progress.`;

export const ABOUT_TEXT = `A DevOps enthusiast with a strong passion for innovation and technological advancement. 
I combine technical curiosity with solid interpersonal skills, allowing me to collaborate effectively across teams. 
Committed to continuous learning, I embrace new challenges that foster both personal and professional growth, while maintaining a balanced and adaptable mindset in a fast-evolving tech environment. `;

export const EXPERIENCES = [
  {
    year: "February 2025 - June 2025",
    role: "End-of-Studies - DevOps/GitOps - Intern",
    company: "KPIT",
    description: `Built an Android Virtual Machine using AOSP to simulate in-vehicle environments. Established gRPC-based communication between the virtual machine and the host system. Developed a real-time vehicle diagnostic interface using a Kotlin-based Android app and a cross-platform Qt application with QML and C++ for live data visualization. Automated the software delivery pipeline using GitLab CI/CD, Docker, and Kubernetes. Implemented GitOps principles with Argo CD for declarative, version-controlled deployments.`,
    technologies: ["DevOps", "GitOps", "Android VM" , "Linux", "Kotlin", "C++", "Python", "QML", "AOPS", "gRPC", "Docker", "GitLab CI/CD","Kubernetes", "Argo CD"],
  },
  {
    year: " September 2024 - January 2025",
    role: "Generative AI Intern",
    company: "EY Tunisia",
    description: `Developed an LLM-based schema optimization tool that enhances the creation of DDL structures and SQL queries using open-source models. Utilized Starcoder 3B for SQL query optimization and Llama 3.2B for generating SQL context, enabling efficient and intelligent database design.`,
    technologies: ["Python", "HuggingFace", "LangChain", "Pytorch", "StarCoder2-3B", "Llama3.2-3B-Instruct", "LLM", "DDL", "SAS", "SQL", "Transformers"],
  },
  {
    year: "June 2024 - August 2024",
    role: "Data Engineering & Cloud Intern",
    company: "OliveSoft",
    description: `Completed a Data Engineering and Cloud internship, focusing on the automation of employee onboarding and offboarding processes. 
    Used Boomi Atmosphere to integrate multiple platforms, including Microsoft Azure, Atlassian, and BoondManager, enabling seamless API-based data exchange. 
    Automated user account creation by linking Azure with Atlassian and implemented account provisioning on BoondManager Sandbox through REST API calls.`,
    technologies: ["Boomi Atmosphere", "Microsoft Azure", "Atlassian", "BoondManager", "Groovy", "API REST", "Postman"],
  },
  {
    year: " July 2023 - August 2023",
    role: "  Software Engineering Intern",
    company: "Primatec Engineering",
    description: `Completed a Software Engineering internship, focusing on data modeling for Jenkins using UML diagrams. 
    Designed class, use case, and sequence diagrams with PowerDesigner and SSMS to represent Jenkins workflows. 
    Utilized Python to extract data and generate corresponding SQL tables, contributing to structured data analysis and system understanding.`,
    technologies: ["Jenkins", "PowerDesigner", "SSMS", "SQL", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Solar System DevOps Automation",
    image: project1,
    description:
      "An enhancement of a full-stack Solar System project (HTML, Express.js, MongoDB) focused on automating and optimizing development and deployment. Integrated a full GitLab CI/CD pipeline with automated testing, Dockerization, Kubernetes deployment, and vulnerability scanning to ensure reliable and secure delivery across environments.",
    github: "https://github.com/faraheloumi/CI-CD-Pipeline-Azure-Kubernetes-For-Solar-System-Application",
    date: "December 2024",
  },
  {
    title: "Real-Time Water Quality Monitoring and Prediction",
    image: project2,
    description:
      "A real-time water quality monitoring system built using AWS services. Utilizes Kinesis Data Streams, Lambda, and S3 for real-time ingestion and processing, and SageMaker for water quality forecasting. Data is visualized on Grafana dashboards, with Redshift, Athena, and Glue used for analytics and cataloging. Includes natural language interaction via an integrated LLM and secured API access through Ngrok.",
    github: "https://github.com/faraheloumi/AWS-MLOPS-WATER-QUALITY-INDEX-FORECAST-VISUALIZE-GRAFANA-GENAI-GPT2",
    date: "October 2024 - January 2025",
  },

  {
    title: "LLM-based Schema Optimization Tool",
    image: project3,
    description:
      "A tool that leverages open-source large language models to optimize the creation of DDL structures and SQL queries. Uses Llama 3.2B to generate SQL context and Starcoder 3B to enhance query performance, streamlining intelligent database design.",
    github: "https://github.com/faraheloumi/DATA-DEFINITION-LANGUAGE-OPTIMIZATION-GENAI-LANGCHAIN",
    date: " September 2024- January 2025",
  },

  {
    title: "Fruit Vision – MLOps Project",
    image: project4,
    description:
      "An end-to-end fruit detection system that uses a Detectron2 model to identify and count various fruit types. Integrated with a Flutter mobile app for real-time predictions via FastAPI, backed by Firebase authentication and MongoDB for data storage. Deployed on Microsoft Azure using Docker and Terraform for efficient cloud resource management.",
    github: "https://github.com/faraheloumi/FruitVision-AI-Powered-Fruit-Counting-Classification-with-Docker-Containerization-and-Terraform",
    date: "January 2024 - June 2024",
  },
  {
    title: "Full-Stack E-commerce Platform",
    image: project5,
    description:
      "A simple e-commerce web application built with Angular 17 for the frontend and Spring Boot for the backend, using PostgreSQL as the database. Features include product browsing, cart management, order tracking, buyer-seller chat, and user account storage for faster checkout.",
    github: "https://github.com/faraheloumi/Livrili",
    date: "January 2024 - March 2024",
  },
  {
    title: "Stock and Cryptocurrency Tracker App",
    image: project6,
    description:
      "A mobile application designed to track stocks, exchange rates, and cryptocurrencies, providing a user-friendly platform for both experienced investors and beginners to stay informed and make smart financial decisions.",
    github: "https://github.com/faraheloumi/FinanSync",
    date: "April 2024 - July 2024",
  },  
];

export const CONTACT = {
  address: "Tunis, Tunisia",
  phoneNo: "+216 58 141 788 ",
  email: "farah.elloumi@supcom.tn",
};

export const CERTIFICATES = [
    {
    title: "Test of English for International Communication (TOEIC) Certification - 765/990",
    date: "July 14, 2025",
    issuer: "Educational Testing Service (ETS)",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    image: certificate9,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    date: "November 03, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://www.credly.com/badges/84cf4b42-2fc4-44e8-9db6-618d6e436ce5/linked_in_profile",
    image: certificate6,
  },
  {
    title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    date: "October 19, 2024",
    issuer: "Amazon Web Services (AWS)",
    description:
      "Earners of this badge have completed the AWS Academy Machine Learning Foundations course.",
    credlyLink: "https://www.credly.com/badges/ea624abd-d57e-4f72-958d-626242f1af80/linked_in_profile",
    image: certificate5,
  },

  {
    title: "Docker Training Course for the Absolute Beginner",
    date: "May 31, 2024",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/2DEF43B7FD3C-2DEF3DC131E0-2DEF3D84EC94",
    image: certificate1,
  },

  {
    title: "GitLab CI/CD certification",
    date: "February 16, 2025",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/d6d907ab-9866-43d1-958e-1ed3e6dc732b",
    image: certificate8,
  },

  {
    title: "CKA certification course",
    date: "February 16, 2025",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/76f7932f-542a-440d-974a-4c7714941533",
    image: certificate7,
  },

  {
    title: "Learning Linux Basics Course & Labs",
    date: "September 18, 2024",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/31b49397-bd2b-4185-a2cc-17a2a5932eea",
    image: certificate4,
  },

  {
    title: "Learn Ansible Basics",
    date: "September 21, 2024",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/184955ac-d215-425e-abe1-816f8a450041",
    image: certificate2,
  },
  {
    title: "Kubernetes for the Absolute Beginners",
    date: "September 20, 2024",
    issuer: "KodeKloud",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course.",
    credlyLink: "https://learn.kodekloud.com/user/certificate/37fab153-3031-4795-ad1f-5e3723ece30c",
    image: certificate3,
  },

];

export const events = [
  {
    title: "Community Manager - IEEE SUP'COM Student Branch",
    description: "As the Community Manager of IEEE SUP'COM SB, I was responsible for coordinating internal communication, managing events, and promoting the branch’s activities. I collaborated with the executive team and various committees to ensure efficient project execution and active member engagement. I also designed visual content for social media and event promotion using tools like Photoshop and Illustrator, helping to strengthen the branch’s digital presence.",
    date: "May 2023 - July 2024",
    image: volunteering1,
  },
  {
    title: "HR Manager - IndabaX Tunisia 2023",
    description: "As the HR Manager of IndabaX Tunisia 2023, I was responsible for overseeing volunteer coordination, managing internal communication, and ensuring smooth collaboration between teams. I contributed to creating a positive and efficient work environment throughout the event planning process. I also supported event logistics and helped foster an engaging experience for the AI and ML community in Tunisia.",
    date: "Feb 2023 - May 2023",
    image: volunteering3,
  },

  {
    title: "Primary Organizer - IndabaX Tunisia 2024",
    description: "Led the organization and coordination of the event, overseeing the Marketing & Communication team and ensuring alignment with the event’s strategic goals.",
    date: "Feb 2024 - May 2024",
    image: volunteering8,
  },
  {
    title: "IEEE Tunisian Student & Young Professional Congress, 11th Edition",
    description: "Representing IEEE SUPCOM SB, I participated in the 11th edition of TSYP as a Community Manager. I was also responsible for the STAR Challenge, where our team secured 1th place among 10+ Student Branches.",
    date: "December 18-19-20, 2023",
    image: volunteering7,
  },
  {
    title: "IEEE Tunisian Student & Young Professional Congress, 10th Edition",
    description: "During the 10th edition of TSYP, I actively contributed to multiple challenges, including supporting the development of the STAR Program and HAC Challenge.",
    date: "December 19-20-21, 2022",
    image: volunteering4,
  },
  {
    title: "Metaverse Tunisian Summit 2.0 - Booth & Media Member",
    description: "I was responsible for planning and executing event logistics while also handling media coverage. I ensured effective event promotion, engaged the audience through digital channels, and helped create a strong presence for the summit in the tech community.",
    date: "November 24-25-26, 2023",
    image: volunteering6,
  },
  {
    title: "Metaverse Tunisian Summit 1.0 - Logistics Member",
    description: "As a logistics team member, I played a crucial role in ensuring the smooth execution of the event. I coordinated venue setup, managed schedules, and provided on-site support to enhance the overall experience for participants and speakers.",
    date: "November 25-26-27, 2022",
    image: volunteering5,
  },
  {
    title: "IEEE Wie International Leadership Summit Tunisia 2022 - Logistics Member",
    description: "As a logistics team member, I played a crucial role in ensuring the smooth execution of the event. I coordinated venue setup, managed schedules, and provided on-site support to enhance the overall experience for participants and speakers.",
    date: "November 5 & 6, 2022",
    image: volunteering2,
  },

];