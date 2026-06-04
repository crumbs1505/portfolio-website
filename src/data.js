/**
 * @fileoverview This file contains the central data object for the portfolio.
 * It is designed to be easily configurable, allowing for quick updates to the portfolio's content.
 */
export const portfolioData = {
  personal: {
    name: "Sufyan",
    fullName: "Sufyan Shaik",
    title: "Blockchain & Backend Engineer",
    bioShort: "Specializing in Decentralized Identity Systems, Smart Contract Development & Scalable Microservices.",
    bio: "Computer Science student at VIT with a proven track record of delivering production-grade systems. I architected a W3C-compliant DID system with on-chain verification and designed multiple high-scale microservices, including a partner marketplace and a geospatial green-commute tracking engine. I bridge complex blockchain infrastructure with efficient, end-to-end backend solutions.",
    email: "sufyanshaik.dev@gmail.com",
    location: "Dubai , United Arab Emirates",
    github: "crumbs1505",
    linkedin: "sufyanshaik03"
  },
  
  skills: {
    languages: ["TypeScript / JavaScript", "Python", "Java / SQL"],
    frameworks: ["Node.js / Express", "Next.js / React", "Vue.js", "FastAPI", "Microservices"],
    blockchain: ["Solidity", "Hardhat", "Foundry", "Ether.js"],
    cloudDevops: ["AWS", "Azure", "Docker", "Git", "Oracle OCI"]
  },
  
  experience: [
    {
      company: "Cero Hero",
      title: "Blockchain & Backend Engineer (Remote, Finland)",
      dates: "Jan 2026 - Present",
      description: [
        "Architected Cero ID: a W3C-compliant decentralized identity system on Algorand using IPFS for document storage.",
        "Designed a gasless custodial bridge using Azure Key Vault for secure mnemonic encryption and atomic group transactions.",
        "Built an asynchronous issuance pipeline using BullMQ, Redis, and Prisma to manage DID and VC lifecycles.",
        "Architected a high-scale partner marketplace ecosystem for sustainable commerce.",
        "Developed a geospatial green-commute tracking engine integrated with Google Maps API.",
        "Implemented a Gemini AI-powered pipeline for automated vegan product verification.",
        "Managed Docker-based cloud infrastructure on Azure, including production smart contract operations."
      ],
      tags: ["W3C DID", "Algorand AVM", "Azure Key Vault", "BullMQ", "Prisma", "Docker"]
    },
    {
      company: "Cero Hero",
      title: "Blockchain Developer Intern (Remote, Finland)",
      dates: "May 2025 – Dec 2025",
      description: [
        "Researched W3C DID Core 1.0 and Verifiable Credentials Data Model 1.1 specifications to assist system design of did:cero:algo identity platform.",
        "Studied Algorand AVM box storage and sponsored transaction models, contributing to identity flow architecture documentation."
      ],
      tags: ["W3C DID", "Algorand AVM", "Identity Flow", "Specs"]
    }
  ],
  
  education: {
    school: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science with Specialization in Blockchain Technology",
    cgpa: "8.48 / 10.00"
  },
  
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Azure AI Fundamentals",
    "OCI 2025 Certified AI Foundations Associate",
    "Building LLM Apps with Prompt Engineering - NVIDIA"
  ],
  
  awards: [
    {
      name: "1st Place, Area D4 Humorous & Evaluation Speech Contest",
      issuer: "Toastmasters International",
      year: "2024"
    },
    {
      name: "1st Place, Area D5 Humorous Speech Contest",
      issuer: "Toastmasters International",
      year: "2023"
    },
    {
      name: "Area Support Champion Award",
      issuer: "Toastmasters International - Area D4, District 120",
      year: "2024"
    }
  ],
  
  projects: [
    {
      title: "Associate Lane",
      tag: "FREELANCE (PAID)",
      description: "Delivered end-to-end next-generation curriculum tracker. Leverages Vercel AI SDK to automate study schedules and content mapping for IB students.",
      tech: ["Next.js 15", "AI SDK", "PostgreSQL"],
      link: "https://www.associatelane.com",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-n-JmCfMGaylvJf2DPhGOjXkTt_XqXSGpq4_EqxG9C3zanSaUN6oj83vWXJ9A1yvG8h5-zGvKP0Sl6F2EPMvg-RwO2xmwyhqOrrj1yw8FIX-Ql1Jr1hgQgXNNiXdIb7VCTb5kbddSZ44yUQnEyRbk4jswrTd3SNkXCA_Fa4JJYKrGj5SiZcuH0zjdv9OhhVf5uEtlkzTrVq02XlDKMqIonBL6fL0li6O3y_9fwuSuB3PyIw7rVsDUoSrLBQEUM84NjkQVO2RA_4M"
    },
    {
      title: "Goal Seeker",
      tag: "Freelance (Paid) ",
      description: "Delivered end-to-end AI-powered fitness tracking application. Integrates Gemini Pro for personalized routine generation and Supabase for real-time data persistence.",
      tech: ["React 18", "Supabase", "Gemini API"],
      link: "https://goalseeker.vercel.app/",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgDlqW9hsifnMaU06AWr3F0uh8qxzffYgzccabDXQ4ma3SQzpy_HnoF_016_1_eUJCLU4njcCueY23-f3x5Wc70AwmdjKOQs29zV3oVKHgWl26GihgA3lSENFbwh-78QuWSyWlKDP82Kg_-YMOVPdY9ixh4wOI6GVyUZcDHqLVYof0aK3dP6_7Jo30IS2mcSQj8RR5UA5InG1nPS9ncmkppcuKrrLKDwNzOG5IR_Gt8PdkOP7UiFtV8g9VnpUzKCi2B2Ekyn7zr68"
    }
  ]
}
