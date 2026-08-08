export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-Time' | 'Research';
  description: string[];
  skills: string[];
  logoIcon: string;
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export interface QuickFact {
  label: string;
  value: string;
  icon: string;
  detail: string;
}

export const PERSONAL_INFO = {
  name: "Pittam Nikhitha",
  title: "AI Engineer & Software Developer",
  headline: "Building AI-powered Software that solves real-world problems.",
  subheading: "AI Engineer | Software Developer | Machine Learning Enthusiast | Full Stack Developer",
  location: "Nandyal, India",
  email: "nikhithareddypittam@gmail.com",
  cgpa: "9.2 / 10.0",
  university: "Saveetha Institute of Medical and Technical Sciences (SIMATS)",
  degree: "B.E. Computer Science Engineering (Artificial Intelligence)",
  avatarUrl: "/nikhitha.jpg",
  github: "https://github.com/NikhithaPittam0907",
  linkedin: "https://www.linkedin.com/in/pittamnikhitha/",
  leetcode: "https://leetcode.com/u/PittamNikhitha/",
  bio: `I am a forward-thinking AI Engineer and Software Developer specializing in building high-performance machine learning models, multi-agent AI systems, and robust full-stack software architectures. Currently pursuing my B.E. in Computer Science Engineering (AI) with a stellar 9.2 CGPA at Saveetha Institute of Medical and Technical Sciences. 

My work spans autonomous agent design, real-time intrusion prevention (GPU Guard AI), deep learning DDoS mitigation, and intelligent automated workflows. Having interned at Kaynes Technology and Infosys Springboard, I bring strong computer science fundamentals (Java, Python, Data Structures & Algorithms, DBMS) combined with modern AI frameworks (LangGraph, PyTorch, LLMs) to engineer solutions that scale seamlessly in production.`,
  
  stats: {
    cgpa: "9.2",
    projectsCount: "15+",
    certificationsCount: "10+",
    hackathonsWon: "3+",
    reposCount: "25+",
    leetCodeSolved: "300+",
  },

  quickFacts: [
    { label: "Current Focus", value: "Agentic AI & Systems", icon: "Cpu", detail: "Multi-Agent Workflows, RAG Architecture, CUDA Optimization" },
    { label: "Education", value: "B.E. CSE (AI) - 9.2 CGPA", icon: "GraduationCap", detail: "Saveetha Institute of Medical and Technical Sciences" },
    { label: "Location", value: "Nandyal / Remote", icon: "MapPin", detail: "Open to global relocation & top tech opportunities" },
    { label: "Coding Expertise", value: "300+ LeetCode Solved", icon: "Code", detail: "Strong DSA in Java & Python" },
    { label: "Target Roles", value: "AI Engineer / SWE", icon: "Briefcase", detail: "Targeting top product-based software teams" },
  ] as QuickFact[],

  currentLearning: [
    "Advanced Multi-Agent Orchestration with LangGraph & AutoGen",
    "GPU Accelerated Inference Optimization (TensorRT & Triton)",
    "Distributed Systems Architecture & Microservices in Go/Python",
    "Zero-Knowledge Proofs in AI Security & Confidential Computing"
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "infosys-springboard",
    role: "AI Intern",
    company: "Infosys Springboard",
    location: "Virtual / Remote",
    period: "Nov 2024 - Feb 2025",
    type: "Internship",
    description: [
      "Architected intelligent Natural Language Processing (NLP) pipelines for automated document categorization and contextual summarization.",
      "Engineered machine learning classification models using PyTorch and Scikit-Learn with model accuracy exceeding 96%.",
      "Integrated AI workflows with RESTful backend APIs built on Flask and Python, optimizing payload latency by 35%.",
      "Participated in agile sprints, technical design reviews, and automated integration testing."
    ],
    skills: ["Python", "Machine Learning", "NLP", "Flask", "REST APIs", "PyTorch", "Git"],
    logoIcon: "Sparkles",
    featured: true
  },
  {
    id: "kaynes-tech",
    role: "Quality Testing Intern",
    company: "Kaynes Technology",
    location: "India",
    period: "May 2024 - Jul 2024",
    type: "Internship",
    description: [
      "Executed comprehensive hardware-software quality assurance test suites for embedded electronic assemblies and software controllers.",
      "Developed automated Python test scripts to validate communication protocols and diagnostic metrics.",
      "Documented defect reports, conducted regression testing, and reduced bug turnaround time by 25%.",
      "Collaborated with cross-functional engineering teams to ensure compliance with strict industry quality standards."
    ],
    skills: ["Python", "Automated Testing", "Software Quality Assurance", "CI/CD", "Defect Tracking", "Bug Reporting"],
    logoIcon: "CheckCircle2",
    featured: true
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "simats-degree",
    degree: "B.E. Computer Science Engineering (Artificial Intelligence)",
    institution: "Saveetha Institute of Medical and Technical Sciences (SIMATS)",
    location: "Chennai / Tamil Nadu, India",
    period: "2023 - 2027 (Expected)",
    score: "9.2 / 10.0",
    scoreLabel: "CGPA",
    highlights: [
      "Ranked in top 2% of academic cohort with CGPA 9.2.",
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Machine Learning, Operating Systems, Database Management Systems, Computer Networks.",
      "Lead Developer & Research Contributor in campus AI lab projects.",
      "Winner of 24-Hour National AI Hackathon for GPU Guard AI project."
    ]
  }
];
