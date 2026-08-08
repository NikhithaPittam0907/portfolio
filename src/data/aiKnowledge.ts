export interface AiFaq {
  keywords: string[];
  question: string;
  response: string;
  category: 'General' | 'Skills' | 'Projects' | 'Education' | 'Contact';
}

export const AI_FAQS: AiFaq[] = [
  {
    keywords: ["who", "about", "bio", "overview", "background", "summary"],
    question: "Who is Pittam Nikhitha?",
    category: "General",
    response: "Pittam Nikhitha is an ambitious AI Engineer, Machine Learning Enthusiast, and Software Developer currently pursuing a B.E. in Computer Science Engineering (AI) at Saveetha Institute of Medical and Technical Sciences with an impressive 9.2 CGPA. She specializes in Agentic AI, intrusion prevention systems, LLM RAG pipelines, and full-stack software development."
  },
  {
    keywords: ["why hire", "hire", "recruiter", "google", "microsoft", "amazon", "meta", "nvidia", "apple", "stripe", "strengths"],
    question: "Why should a top product company (like Google, Microsoft, Amazon, NVIDIA) hire Nikhitha?",
    category: "General",
    response: "Nikhitha combines strong computer science fundamentals (300+ LeetCode problems solved, 9.2 CGPA in CSE-AI) with practical, cutting-edge AI engineering experience. She won a 24-hour national hackathon for 'GPU Guard AI' (an agentic hardware sentinel), built deep learning DDoS mitigation tools, and completed internships at Infosys Springboard and Kaynes Technology. She is driven, fast-learning, and ready to ship production code."
  },
  {
    keywords: ["gpu guard", "gpu guard ai", "hackathon", "security project", "intrusion"],
    question: "Tell me about the GPU Guard AI project.",
    category: "Projects",
    response: "GPU Guard AI is an award-winning autonomous intrusion prevention system built in a 24-hour hackathon. It monitors CUDA hardware metrics and kernel syscalls via eBPF probes. Using a multi-agent reasoning graph (LangGraph + Llama-3), it detects zero-day GPU resource hijacking and automatically isolates malicious processes in under 8.5ms with 99.2% accuracy."
  },
  {
    keywords: ["projects", "flagship", "portfolio", "built", "work"],
    question: "What flagship projects has Nikhitha built?",
    category: "Projects",
    response: "Nikhitha has built 5 major production-grade projects: 1) GPU Guard AI (Agentic hardware sentinel), 2) LLM Autonomous Email Assistant (RAG workflow director), 3) AI-Based DDoS Detection (LSTM network security classifier with 99.4% accuracy), 4) Agentic AI Legal Assistance System (Multi-agent contract risk auditor), and 5) Pet Health Management System (Full-stack veterinary EHR & tele-consult portal)."
  },
  {
    keywords: ["skills", "languages", "tech stack", "python", "java", "react"],
    question: "What are Nikhitha's primary technical skills?",
    category: "Skills",
    response: "Nikhitha's core skills include: Programming (Python, Java, TypeScript, SQL, C, PHP), AI/ML (PyTorch, LangGraph, LLMs, RAG, Scikit-Learn, TensorFlow, NLP), Frontend (React 19, Tailwind CSS, HTML5, CSS3, Flutter), Backend (Node.js, Flask, REST APIs, MySQL), and Cloud/Tools (AWS, Azure, Git, GitHub, VS Code, Google Colab)."
  },
  {
    keywords: ["education", "cgpa", "college", "university", "degree", "grades", "gpa", "saveetha"],
    question: "What is Nikhitha's educational background?",
    category: "Education",
    response: "Nikhitha is pursuing her Bachelor of Engineering (B.E.) in Computer Science Engineering (Artificial Intelligence) at Saveetha Institute of Medical and Technical Sciences (SIMATS), maintaining a 9.2 / 10.0 CGPA. She ranks in the top 2% of her cohort."
  },
  {
    keywords: ["experience", "internship", "infosys", "kaynes", "work experience"],
    question: "What work experience does Nikhitha have?",
    category: "General",
    response: "Nikhitha has completed two impactful internships: 1) AI Intern at Infosys Springboard (developed NLP pipelines and PyTorch models with 96% accuracy), and 2) Quality Testing Intern at Kaynes Technology (developed automated Python hardware-software test suites and reduced defect turnaround time by 25%)."
  },
  {
    keywords: ["contact", "email", "reach", "hire her", "linkedin", "github"],
    question: "How can I contact or hire Pittam Nikhitha?",
    category: "Contact",
    response: "You can reach Nikhitha directly via email at nikhithareddypittam@gmail.com. You can also connect with her on LinkedIn (https://www.linkedin.com/in/pittamnikhitha/), view her LeetCode profile (https://leetcode.com/u/PittamNikhitha/), and view her open-source code on GitHub (https://github.com/NikhithaPittam0907)."
  }
];

export const INITIAL_AI_MESSAGES = [
  "Hello! I'm Nikhitha AI, an interactive digital assistant trained on Nikhitha's resume, technical portfolio, and engineering background.",
  "Ask me anything about her AI projects, computer science fundamentals, hackathon achievements, or technical skills!"
];
