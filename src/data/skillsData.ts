export interface SkillItem {
  name: string;
  level: number; // 0-100
  iconName: string; // Lucide / Icon key
  category: 'Programming' | 'Frontend' | 'Backend' | 'Databases' | 'Cloud' | 'AI / Machine Learning' | 'Dev Tools';
  description: string;
}

export const SKILL_CATEGORIES = [
  'All',
  'AI / Machine Learning',
  'Programming',
  'Frontend',
  'Backend',
  'Databases',
  'Cloud',
  'Dev Tools'
] as const;

export const SKILLS: SkillItem[] = [
  // AI / Machine Learning
  { name: "Machine Learning", level: 95, iconName: "BrainCircuit", category: "AI / Machine Learning", description: "Supervised/Unsupervised learning, Scikit-Learn, Feature Engineering, Model Optimization" },
  { name: "Deep Learning", level: 92, iconName: "Cpu", category: "AI / Machine Learning", description: "PyTorch, TensorFlow, Neural Networks, CNNs, LSTMs, Optimization" },
  { name: "Generative AI", level: 94, iconName: "Sparkles", category: "AI / Machine Learning", description: "RAG Architecture, Vector DBs, Prompt Engineering, Fine-tuning" },
  { name: "NLP", level: 90, iconName: "MessageSquare", category: "AI / Machine Learning", description: "Transformer Models, NLTK, spaCy, Tokenization, Sentiment Analysis" },
  { name: "LangGraph & Agents", level: 93, iconName: "Workflow", category: "AI / Machine Learning", description: "Multi-Agent Orchestration, Tool Calling, Stateful AI Graphs" },
  { name: "LLMs", level: 95, iconName: "Bot", category: "AI / Machine Learning", description: "Llama 3, GPT-4, Ollama, LangChain, HuggingFace Transformers" },

  // Programming
  { name: "Python", level: 96, iconName: "Terminal", category: "Programming", description: "Advanced Data Structures, AsyncIO, PyTorch, Pandas, FastAPI, Automation" },
  { name: "Java", level: 92, iconName: "Code2", category: "Programming", description: "OOP, Data Structures & Algorithms, Multithreading, JVM Concepts" },
  { name: "TypeScript", level: 90, iconName: "FileCode", category: "Programming", description: "Strict Typing, Generics, Modern Async JS, Interface Architectures" },
  { name: "JavaScript", level: 92, iconName: "FileJson", category: "Programming", description: "ES6+, DOM Manipulation, Event Loops, Functional Programming" },
  { name: "SQL", level: 88, iconName: "Database", category: "Programming", description: "Complex Queries, Joins, Indexing, Query Optimization, MySQL" },
  { name: "PHP", level: 82, iconName: "Server", category: "Programming", description: "Server-side scripting, MVC pattern, REST Integration" },
  { name: "C", level: 85, iconName: "Binary", category: "Programming", description: "Pointers, Memory Management, Embedded Concepts, Systems Code" },

  // Frontend
  { name: "React 19", level: 94, iconName: "Atom", category: "Frontend", description: "Hooks, Context, State Management, Custom Hooks, Performance Tuning" },
  { name: "Tailwind CSS", level: 96, iconName: "Palette", category: "Frontend", description: "Custom Design Tokens, Responsive Layouts, Glassmorphism, Animations" },
  { name: "HTML5 & CSS3", level: 95, iconName: "Layout", category: "Frontend", description: "Semantic Markup, Flexbox, CSS Grid, Custom Properties, Animations" },
  { name: "Flutter", level: 80, iconName: "Smartphone", category: "Frontend", description: "Cross-platform Mobile Development, Widget State Management" },

  // Backend
  { name: "Node.js", level: 88, iconName: "Layers", category: "Backend", description: "Express APIs, Asynchronous I/O, JWT Auth, Microservices" },
  { name: "Flask", level: 90, iconName: "FlaskConical", category: "Backend", description: "Micro-framework APIs, PyTorch Model Serving, CORS, Routing" },
  { name: "REST APIs", level: 95, iconName: "Network", category: "Backend", description: "API Architecture, Swagger Docs, Postman Testing, Rate Limiting" },

  // Databases
  { name: "MySQL", level: 88, iconName: "DatabaseBackup", category: "Databases", description: "Relational Schema Design, Stored Procedures, ACID Transactions" },
  { name: "ChromaDB / FAISS", level: 90, iconName: "Search", category: "Databases", description: "Vector Embeddings, Similarity Search, HNSW Indexing for AI RAG" },

  // Cloud
  { name: "AWS", level: 85, iconName: "Cloud", category: "Cloud", description: "EC2, S3, Lambda, IAM, SageMaker deployment fundamentals" },
  { name: "Azure", level: 82, iconName: "CloudSun", category: "Cloud", description: "Azure Cognitive Services, Virtual Machines, Cloud Storage" },

  // Dev Tools
  { name: "Git & GitHub", level: 94, iconName: "GitBranch", category: "Dev Tools", description: "Version Control, Branching Workflows, Actions CI/CD, PR Audits" },
  { name: "VS Code", level: 96, iconName: "Code", category: "Dev Tools", description: "Power User, Debugging, Custom Snippets, Extension Workflows" },
  { name: "Google Colab", level: 92, iconName: "BookOpen", category: "Dev Tools", description: "GPU/TPU Accelerators, Jupyter Notebooks, PyTorch Model Experiments" }
];
