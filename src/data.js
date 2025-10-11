// Portfolio data - Easy to modify and expand
export const portfolioData = {
  personal: {
    name: "Hi ! I'm Sufyan",
    title: "Computer Science Student & Backend Developer",
    email: "sufyanshaik608@gmail.com",
    bio: "Computer Science student with strong backend development experience building scalable full-stack applications,RESTful APIs, and AI-integrated systems. Proficient in Node.js, TypeScript, and modern web frameworks, with expertise in designing secure microservices and cloud-based solutions. A blockchain enthusiast with expertise in Solidity and smart contract development.",
    github: "crumbs1505",
    linkedin: "sufyanshaik03"
  },
  
  skills: {
    languages: ["TypeScript", "Python", "Java", "SQL", "Solidity"],
    frameworks: ["Node.js", "Vue.js", "React", "REST APIs", "Express.js"],
    technologies: ["AWS", "Microsoft Azure", "Docker", "Git", "Oracle Cloud"]
  },
  
  experience: [
    {
      title: "Blockchain Developer Intern",
      company: "Cero Hero (Remote, Finland)",
      dates: "May 2025 – Present",
      description: [
        "Developed backend microservices using Node.js and TypeScript, integrating Privado ID SDK for DID creation and verifiable credential issuance",
        "Collaborated with international partners like Polygon to streamline ZKP-based identity flows",
        "Created technical architecture diagrams using StarUML for cross-functional alignment"
      ]
    }
  ],
  
  projects: [
    {
      title: "SafeSpace",
      description: "An AI-powered platform for neighborhood safety insights. Created frontend components in React and TypeScript with interactive map visualizations and integrated a backend Random Forest model.",
      tech: ["React", "TypeScript", "Python", "Selenium"],
      github: "crumbs1505/safespace",
      image: null // Add image path here when available
    },
    {
      title: "Playlistr",
      description: "An AI-based music recommendation system that generates personalized Spotify playlists using the Gemini API. Features Spotify API integration for OAuth authentication and a modular frontend built in Vue.js.",
      tech: ["Vue.js", "JavaScript", "Gemini API", "Spotify API"],
      github: "crumbs1505/playlistr",
      image: null // Add image path here when available
    }
  ],
  
  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
    { name: "Azure AI Fundamentals", issuer: "Microsoft" },
    { name: "Oracle Cloud Infrastructure 2025", issuer: "Oracle" },
    { name: "Certified AI Foundations Associate", issuer: "Oracle" },
    { name: "Building LLM Applications with Prompt Engineering", issuer: "NVIDIA" }
  ],
  
  awards: [
    { name: "1st Place, Area D4 Humorous & Evaluation Speech Contest", year: "2024" },
    { name: "1st Place, Area D5 Humorous Speech Contest", year: "2023" },
    { name: "Area Support Champion Award", issuer: "Toastmasters International", year: "2024" }
  ]
}
