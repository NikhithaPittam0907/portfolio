export interface ResearchTopic {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  keyAreas: string[];
  publicationStatus?: string;
  abstractSnippet: string;
}

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI & Multi-Agent Orchestration",
    tagline: "Autonomous Reasoning Graphs & Cooperative Tool Use",
    iconName: "Bot",
    description: "Investigating stateful multi-agent workflows (LangGraph, AutoGen) to solve non-linear software engineering tasks and context-aware security monitoring.",
    keyAreas: ["Autonomous Decision Trees", "Human-in-the-Loop Safeguards", "Multi-Agent Consensus Protocols", "Tool Use & API Synthesizers"],
    abstractSnippet: "Exploring graph-based state machines for autonomous software agents to decompose complex, long-horizon developer workflows into deterministic execution sub-graphs with minimal error drift."
  },
  {
    id: "cyber-security",
    title: "AI in Cyber Security & Intrusion Prevention",
    tagline: "Real-time Anomaly Detection & Kernel Hardware Sentinel",
    iconName: "ShieldAlert",
    description: "Developing deep learning classifiers and hardware telemetry probes (eBPF, CUDA NVML) for immediate isolation of zero-day exploits and GPU resource hijacking.",
    keyAreas: ["GPU Payload Inspection", "Deep Learning DDoS Mitigation", "Behavioral Anomaly Detection", "Zero-Trust Kernel Probes"],
    abstractSnippet: "Formulating low-latency neural packet classification techniques capable of inline network stream inspection at 10+ Gbps speeds with sub-millisecond execution firewall rules."
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence & Neural Architectures",
    tagline: "Foundation Model Optimization & Machine Intelligence",
    iconName: "Brain",
    description: "Researching modern neural network architectures, attention mechanisms, transfer learning, and scalable representation learning models.",
    keyAreas: ["Attention Mechanisms", "Transformer Fine-Tuning", "Model Compression & Pruning", "Explainable AI (XAI)"],
    abstractSnippet: "Evaluating modern quantization and pruning techniques on edge hardware to maintain high neural inference accuracy while reducing VRAM footprint by up to 60%."
  },
  {
    id: "machine-learning",
    title: "Machine Learning & Statistical Pattern Recognition",
    tagline: "High-dimensional Feature Selection & Anomaly Models",
    iconName: "Sparkles",
    description: "Applying statistical learning theory, ensemble algorithms, and gradient boosted models to high-throughput tabular and time-series datasets.",
    keyAreas: ["Ensemble Learning", "Time-Series Forecasting", "Feature Engineering", "High-Dimensional Embeddings"],
    abstractSnippet: "Developing robust feature reduction pipelines for noisy time-series data to improve binary classification boundary stability in adversarial network environments."
  },
  {
    id: "large-language-models",
    title: "Large Language Models & RAG Systems",
    tagline: "Vector Embeddings & Hallucination Mitigation",
    iconName: "BookOpen",
    description: "Designing advanced Retrieval-Augmented Generation architectures combining vector database retrieval (ChromaDB/FAISS) with structured knowledge graph validation.",
    keyAreas: ["Hierarchical Chunking", "Semantic Search Optimization", "RERANKING Models", "Grounding & Fact Verification"],
    abstractSnippet: "Comparing dense vs sparse vector indexing techniques across unstructured technical documentation to achieve sub-second precise passage retrieval for enterprise query engines."
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Visual Intelligence",
    tagline: "Object Detection, Segmentation & Medical Imaging",
    iconName: "Eye",
    description: "Applying Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) to real-time object tracking, medical diagnosis imagery, and scene segmentation.",
    keyAreas: ["Vision Transformers", "CNN Feature Extractor", "Medical Image Processing", "Real-Time Object Tracking"],
    abstractSnippet: "Utilizing deep convolutional encoders for automated medical scan anomaly segmentation with enhanced gradient map interpretability for clinicians."
  },
  {
    id: "bioinformatics",
    title: "Bioinformatics & Computational Biology",
    tagline: "Genomic Sequence Mining & Protein Structure Analysis",
    iconName: "Dna",
    description: "Exploring machine learning algorithms for genomic sequence alignment, mutation pattern prediction, and computational protein interaction analysis.",
    keyAreas: ["Genomic Sequence Alignment", "Protein Structure Analysis", "Biomedical Data Mining", "AI-driven Drug Discovery"],
    abstractSnippet: "Leveraging sequence-to-sequence neural networks for rapid pattern identification in high-throughput DNA sequencing data."
  }
];
