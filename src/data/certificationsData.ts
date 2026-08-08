export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  iconName: string;
  badgeColor: string;
  skills: string[];
  verifyUrl: string;
}

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "oracle-java",
    title: "Oracle Certified Associate, Java SE Programmer",
    issuer: "Oracle Corporation",
    issueDate: "2024",
    credentialId: "OCA-JAVA-SE-8921",
    iconName: "Award",
    badgeColor: "#F80000",
    skills: ["Java SE", "OOP Design", "Exception Handling", "Java Collections", "Multithreading"],
    verifyUrl: "https://education.oracle.com/verify"
  },
  {
    id: "oracle-database",
    title: "Oracle Database SQL Certified Associate",
    issuer: "Oracle Corporation",
    issueDate: "2024",
    credentialId: "ORA-DB-SQL-4402",
    iconName: "Database",
    badgeColor: "#F80000",
    skills: ["Relational Databases", "Complex SQL Queries", "DDL/DML", "Subqueries & Joins", "Indexing"],
    verifyUrl: "https://education.oracle.com/verify"
  },
  {
    id: "nptel-ml",
    title: "NPTEL National Certification: Machine Learning",
    issuer: "NPTEL / IIT Kharagpur",
    issueDate: "2024",
    credentialId: "NPTEL24CS55S12",
    iconName: "GraduationCap",
    badgeColor: "#06B6D4",
    skills: ["Supervised Learning", "Support Vector Machines", "Neural Networks", "Gradient Boosting"],
    verifyUrl: "https://nptel.ac.in/noc"
  },
  {
    id: "generative-ai",
    title: "Generative AI & Large Language Model Engineering",
    issuer: "DeepLearning.AI",
    issueDate: "2024",
    credentialId: "DL-GENAI-9012",
    iconName: "Sparkles",
    badgeColor: "#7C3AED",
    skills: ["RAG Architecture", "Prompt Engineering", "LangChain", "Vector Indexing", "LLM Fine-Tuning"],
    verifyUrl: "https://coursera.org/verify"
  },
  {
    id: "iot-specialization",
    title: "Internet of Things (IoT) & Embedded Systems",
    issuer: "NPTEL / University Specialization",
    issueDate: "2023",
    credentialId: "IOT-SPEC-3109",
    iconName: "Cpu",
    badgeColor: "#3B82F6",
    skills: ["Sensory Networks", "Microcontrollers", "MQTT Protocol", "Embedded C/Python", "IoT Security"],
    verifyUrl: "https://nptel.ac.in/noc"
  },
  {
    id: "data-science",
    title: "Advanced Data Science & Predictive Analytics",
    issuer: "IBM / NPTEL",
    issueDate: "2023",
    credentialId: "IBM-DS-7781",
    iconName: "BarChart3",
    badgeColor: "#10B981",
    skills: ["Pandas & NumPy", "Data Visualization", "Statistical Analysis", "Predictive Modeling"],
    verifyUrl: "https://ibm.com/training/badges"
  }
];
