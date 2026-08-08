export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Agentic AI' | 'Cybersecurity' | 'AI/ML' | 'Full Stack';
  featured: boolean;
  badge?: string;
  overview: string;
  problemStatement: string;
  solution: string;
  architecture: {
    title: string;
    description: string;
    flowSteps: string[];
  };
  techStack: {
    category: string;
    items: string[];
  }[];
  keyFeatures: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  futureEnhancements: string[];
  githubUrl: string;
  liveDemoUrl: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: "gpu-guard-ai",
    title: "GPU Guard AI",
    subtitle: "Agentic AI Intrusion Prevention & Hardware Workload Sentinel",
    tagline: "Autonomous Agentic AI system protecting GPU infrastructure and detecting zero-day runtime exploits in real time.",
    category: "Agentic AI",
    featured: true,
    badge: "24-Hr Hackathon Winner",
    overview: "GPU Guard AI is an award-winning autonomous intrusion prevention system engineered during a 24-hour national hackathon. It combines CUDA hardware Telemetry, eBPF kernel event probes, and LLM-driven multi-agent decision engines to detect unauthorized GPU payload injections, rogue compute hijacking, and network anomaly vectors with sub-millisecond mitigation response times.",
    problemStatement: "With the rapid surge in cloud LLM deployments and AI clusters, cyber attackers increasingly target raw GPU hardware and CUDA memory space via kernel-level payload injections and compute theft (crypto-jacking/malicious model poisoning). Standard host IPS tools lack visibility into GPU VRAM execution structures.",
    solution: "GPU Guard AI deploys a lightweight host side Rust sensor coupled with an Agentic AI reasoning loop. The agent continuously monitors GPU memory utilization metrics, syscall patterns, and inbound packet signatures. Upon detecting an anomaly, autonomous micro-agents isolate the compromised process, quarantine the CUDA context, and output a human-readable forensic report.",
    architecture: {
      title: "Multi-Agent Hardware Monitoring Architecture",
      description: "A multi-layered event pipeline capturing system syscalls, CUDA API calls, and network telemetry into an AI agent reasoning graph.",
      flowSteps: [
        "NVIDIA NVML & eBPF Telemetry Probes extract real-time VRAM allocation & Kernel Syscalls",
        "Stream Engine pushes metrics into Kafka queue for low-latency anomaly scoring",
        "Agentic Reasoning Node (LangGraph + Llama 3) evaluates context against known vulnerability graph",
        "Autonomous Mitigation Agent fires signal to kill malicious PID & apply iptables quarantine",
        "Forensic Agent generates automated incident root-cause analysis on interactive Web Dashboard"
      ]
    },
    techStack: [
      { category: "Core AI / Agents", items: ["Python", "LangChain", "LangGraph", "Llama-3", "PyTorch"] },
      { category: "System & Infrastructure", items: ["CUDA", "C++", "eBPF", "Docker", "FastAPI"] },
      { category: "Frontend & Dashboard", items: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React"] }
    ],
    keyFeatures: [
      "Real-time CUDA VRAM injection and unauthorized kernel execution detection",
      "Sub-10ms automated process isolation and IP quarantine",
      "LangGraph multi-agent collaborative incident investigation",
      "Interactive 3D cluster topology dashboard with visual alert nodes",
      "Automated compliance audit report generation in Markdown / PDF"
    ],
    metrics: [
      { label: "Mitigation Time", value: "< 8.5 ms" },
      { label: "Anomaly Accuracy", value: "99.2%" },
      { label: "Overhead", value: "< 1.2% VRAM" }
    ],
    futureEnhancements: [
      "Hardware Enclave integration with AWS Nitro & NVIDIA Confidential Computing",
      "Reinforcement Learning (RLHF) agent training on simulated zero-day exploit payloads",
      "Multi-node Kubernetes DaemonSet operator for automated enterprise cluster deployment"
    ],
    githubUrl: "https://github.com/nikhitha-pittam/gpu-guard-ai",
    liveDemoUrl: "https://gpu-guard-ai.demo.dev",
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80", caption: "Live GPU Telemetry & Intrusion Alert Matrix" },
      { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80", caption: "LangGraph Agentic Decision Pipeline & Process Kill Trigger" }
    ]
  },
  {
    id: "llm-autonomous-email-assistant",
    title: "LLM Autonomous Email Assistant",
    subtitle: "Enterprise Agentic Workflow Automation & Smart Inbox Director",
    tagline: "Intelligent autonomous agent that analyzes, categorizes, prioritizes, and drafts context-aware responses for incoming emails.",
    category: "Agentic AI",
    featured: true,
    badge: "Flagship AI Project",
    overview: "An end-to-end autonomous email management platform powered by LLMs and LangChain workflows. The system ingests streams of inbound communication, performs semantic analysis, extracts action items, queries personal knowledge databases (RAG), and prepares ready-to-send draft replies while flagging high-priority action items.",
    problemStatement: "Executives and software engineering teams waste upwards of 2.5 hours daily sorting through cluttered email inboxes, responding to repetitive queries, and manually scheduling follow-up tasks across multiple platforms.",
    solution: "The LLM Autonomous Email Assistant leverages Retrieval-Augmented Generation (RAG) and zero-shot reasoning agents to understand sender intent, match context against user preferences, draft accurate replies, and automatically sync calendar invites via REST APIs.",
    architecture: {
      title: "RAG-Powered Agentic Email Processing Engine",
      description: "Decoupled webhooks, vector embedding storage, and LLM orchestration layer ensuring high privacy and zero hallucinatory replies.",
      flowSteps: [
        "Gmail / Outlook Webhook triggers event payload on new incoming email",
        "Text Preprocessor cleans HTML, extracts metadata & generates vector embeddings via OpenAI / Ollama",
        "Vector DB (ChromaDB) retrieves relevant past context, documents, and user tone guidelines",
        "Agentic Reasoning Engine grades priority (Low/Medium/Urgent) & drafts structured reply",
        "Human-in-the-Loop interface provides 1-click approval or auto-sending based on confidence score"
      ]
    },
    techStack: [
      { category: "AI & Vector Search", items: ["Python", "OpenAI API", "Ollama", "LangChain", "ChromaDB"] },
      { category: "Backend Services", items: ["Node.js", "Express", "Python FastAPI", "OAuth2", "Google APIs"] },
      { category: "Frontend Interface", items: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"] }
    ],
    keyFeatures: [
      "Semantic priority scoring and automatic inbox label categorization",
      "Context-aware draft generation matching user's custom communication tone",
      "RAG integration with personal documents (PDF, Notion, Markdown notes)",
      "Automated meeting scheduling & Google Calendar conflict resolution",
      "Strict data privacy mode with local LLM execution via Ollama"
    ],
    metrics: [
      { label: "Time Saved", value: "70% Daily" },
      { label: "Draft Accuracy", value: "95.8%" },
      { label: "Latency", value: "1.4 sec" }
    ],
    futureEnhancements: [
      "Multi-channel support including Slack, Microsoft Teams, and WhatsApp Webhooks",
      "Voice dictation and natural language voice response generation",
      "Autonomous follow-up tracker with sentiment decay alerts"
    ],
    githubUrl: "https://github.com/nikhitha-pittam/llm-email-assistant",
    liveDemoUrl: "https://email-ai-assistant.demo.dev",
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80", caption: "Inbox Director & Intelligent Categorization Dashboard" },
      { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", caption: "RAG Context Match & One-Click Approval View" }
    ]
  },
  {
    id: "ai-ddos-detection",
    title: "AI-Based DDoS Detection System",
    subtitle: "Real-Time Deep Learning Network Traffic Anomaly Mitigator",
    tagline: "High-throughput network traffic inspection platform using LSTM deep learning networks to detect and block DDoS floods.",
    category: "Cybersecurity",
    featured: true,
    badge: "Cybersecurity Specialization",
    overview: "A specialized network security system designed to defend enterprise cloud web services against volumetric and application-layer Distributed Denial of Service (DDoS) attacks. Built using real-time packet inspection (PCAP) and an ensemble model of Long Short-Term Memory (LSTM) recurrent neural networks and Random Forests.",
    problemStatement: "Traditional signature-based Firewalls and Web Application Firewalls (WAF) fail to catch zero-day application-layer (HTTP/2 Rapid Reset, SYN-UDP volumetric) DDoS attacks, leading to prolonged service outages and server infrastructure crash.",
    solution: "This project introduces a dynamic neural flow classifier that analyzes network packet timing, entropy, header flags, and request burst rates. When anomalous traffic spikes are detected, the system updates dynamic iptables rules and throttles offending IP subnets automatically.",
    architecture: {
      title: "Real-Time Packet Stream Pipeline",
      description: "Low-overhead PCAP extraction feeding into a high-speed inference pipeline with dynamic firewall rule injection.",
      flowSteps: [
        "Network Interface Controller captures raw PCAP packet stream using PyPcap / Scapy",
        "Feature Extractor computes 28 statistical parameters (Flow duration, Packet len variance, Inter-arrival time)",
        "LSTM + Random Forest Classifier performs real-time classification (Normal vs HTTP Flood / SYN Flood)",
        "Mitigation Handler issues dynamic IP ban commands to OS firewall (iptables / UFW)",
        "Telemetry UI updates live packets per second graph & mitigation log feed"
      ]
    },
    techStack: [
      { category: "Machine Learning & Security", items: ["Python", "TensorFlow / Keras", "Scikit-Learn", "Scapy", "Wireshark PCAP"] },
      { category: "Backend Infrastructure", items: ["Flask", "Socket.IO", "Redis Queue", "Linux iptables"] },
      { category: "Visual Analytics", items: ["React", "Chart.js", "Tailwind CSS", "Lucide React"] }
    ],
    keyFeatures: [
      "99.4% detection accuracy across CICDDoS2019 baseline benchmark datasets",
      "Sub-second alert trigger and dynamic firewall rule enforcement",
      "Support for UDP flood, ICMP flood, SYN flood, and HTTP Slowloris attack vectors",
      "Live throughput monitoring graph displaying gigabytes per second metrics",
      "Detailed PCAP packet export for forensic investigation"
    ],
    metrics: [
      { label: "Accuracy", value: "99.4%" },
      { label: "False Positive Rate", value: "< 0.08%" },
      { label: "Max Throughput", value: "10 Gbps" }
    ],
    futureEnhancements: [
      "Integration with eBPF/XDP for kernel-level packet drop without entering userspace",
      "Cloudflare API sync for edge-level IP blocking across distributed CDNs",
      "Adaptive self-learning autoencoders for zero-day flood pattern identification"
    ],
    githubUrl: "https://github.com/nikhitha-pittam/ai-ddos-detection",
    liveDemoUrl: "https://ddos-guard-ai.demo.dev",
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80", caption: "Live Traffic Packet Inspection & Anomaly Heatmap" }
    ]
  },
  {
    id: "agentic-legal-assistance",
    title: "Agentic AI Legal Assistance System",
    subtitle: "Multi-Agent Document Intelligence & Contract Risk Analyzer",
    tagline: "Autonomous multi-agent system analyzing complex legal contracts, flagging risky clauses, and summarizing precedent case law.",
    category: "Agentic AI",
    featured: true,
    badge: "NLP & Legal Tech",
    overview: "A specialized multi-agent AI framework engineered to streamline contract analysis, regulatory compliance checking, and legal research. Built with LangGraph orchestrating dedicated specialized agents (Clause Extractor, Risk Auditor, Precedent Finder, Summary Writer).",
    problemStatement: "Legal professionals and corporate teams spend dozens of hours manually reviewing 50+ page NDAs, SLAs, and commercial contracts, risking missed non-compete traps, harsh liability clauses, or non-compliant terminology.",
    solution: "The Agentic AI Legal Assistance System decomposes contract review into a cooperative graph of micro-agents. Each agent inspects specific contract dimensions, validates clauses against statutory standards, and provides a clear risk score (Green/Amber/Red) with recommended redline amendments.",
    architecture: {
      title: "LangGraph Multi-Agent Legal Processing Graph",
      description: "Cooperative state-graph execution ensuring deep clause cross-referencing and hallucination-free legal citations.",
      flowSteps: [
        "Document Parser ingests PDF / Word contract and extracts hierarchical clauses",
        "Clause Classification Agent labels terms (Indemnification, Termination, IP Rights, Liability)",
        "Risk Auditor Agent queries Legal Vector DB for non-standard or predatory terms",
        "Redline Generator Agent suggests alternative industry-standard phrasing",
        "Summary Director compiles comprehensive executive risk scorecard"
      ]
    },
    techStack: [
      { category: "Agentic AI & NLP", items: ["Python", "LangChain", "LangGraph", "ChromaDB", "PyPDF2"] },
      { category: "LLM Orchestration", items: ["Llama-3 70B", "OpenAI GPT-4o", "FAISS Vector Search"] },
      { category: "Web Interface", items: ["React 19", "TypeScript", "Tailwind CSS", "Lucide React"] }
    ],
    keyFeatures: [
      "Automated contract risk scoring with visual clause-level highlighting",
      "Instant redlining with legally vetted counter-proposal phrasing",
      "Semantic search across legal precedent databases and case law PDFs",
      "Multi-agent review trace visualization explaining reasoning steps",
      "Exportable summary reports in Word, PDF, and Markdown format"
    ],
    metrics: [
      { label: "Review Speedup", value: "85%" },
      { label: "Clause Precision", value: "97.1%" },
      { label: "Risk Recall", value: "98.9%" }
    ],
    futureEnhancements: [
      "Multilingual legal contract processing for international trade agreements",
      "Automated e-signature integration via DocuSign REST API",
      "Fine-tuned open-source legal LLM deployment for total data sovereignty"
    ],
    githubUrl: "https://github.com/nikhitha-pittam/agentic-legal-ai",
    liveDemoUrl: "https://legal-ai-agent.demo.dev",
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80", caption: "Contract Risk Analyzer & Clause Redline View" }
    ]
  },
  {
    id: "pet-health-management-system",
    title: "Pet Health Management System",
    subtitle: "AI-Powered Full Stack Veterinary Healthcare & Tele-Consult Portal",
    tagline: "Comprehensive pet wellness platform featuring AI symptom assessment, vet tele-consultation, and vaccination reminders.",
    category: "Full Stack",
    featured: true,
    badge: "Full-Stack Healthcare",
    overview: "A modern, full-stack pet healthcare application designed to connect pet owners with registered veterinarians, track vaccination schedules, analyze symptoms using an embedded AI diagnostic assistant, and manage electronic pet health records (EHR).",
    problemStatement: "Pet owners frequently struggle to track fragmented medical histories, miss critical vaccination dates, and experience panic when unexpected pet symptoms arise outside clinic hours.",
    solution: "The Pet Health Management System offers a single, intuitive portal. Pet parents can input symptoms for immediate AI triage advice, book online video consultations with licensed vets, maintain digital medical passports, and receive automated SMS/Email reminders.",
    architecture: {
      title: "Full Stack MERN / PERN Architecture",
      description: "Robust client-server architecture with real-time socket communication and automated notification cron services.",
      flowSteps: [
        "React Frontend delivers responsive SPA interface with glassmorphism UI",
        "Express / Node.js API layer routes requests, handles JWT auth, and manages DB transactions",
        "MongoDB / MySQL database stores pet profiles, medical history, and appointment slots",
        "AI Diagnostic Service queries medical decision model to produce preliminary health score",
        "Socket.IO & WebRTC enable live vet consultation video calls & chat"
      ]
    },
    techStack: [
      { category: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS", "Lucide React", "Framer Motion"] },
      { category: "Backend & Database", items: ["Node.js", "Express", "MongoDB", "MySQL", "JWT", "Socket.IO"] },
      { category: "Cloud & APIs", items: ["Firebase Auth", "Twilio SMS", "Cloudinary Media", "WebRTC"] }
    ],
    keyFeatures: [
      "AI-assisted pet symptom analyzer providing instant urgency scoring",
      "Interactive veterinarian appointment booking & calendar schedule selector",
      "Digital Pet Health Passport with downloadable PDF medical summary",
      "Automated vaccination & medication reminder notifications via SMS & Email",
      "Secure real-time video consultation portal using WebRTC"
    ],
    metrics: [
      { label: "Active Users", value: "1,200+" },
      { label: "Appointments", value: "3,500+" },
      { label: "Uptime", value: "99.9%" }
    ],
    futureEnhancements: [
      "Pet wearable IoT sensor integration for heart rate and daily activity tracking",
      "Computer Vision breed identification and skin allergy detection from photos",
      "E-commerce integration for vet-approved prescription food auto-refills"
    ],
    githubUrl: "https://github.com/nikhitha-pittam/pet-health-system",
    liveDemoUrl: "https://pet-health-portal.demo.dev",
    galleryImages: [
      { url: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80", caption: "Pet Health Dashboard & EHR Vaccination Tracker" }
    ]
  }
];
