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
  pdfUrl?: string;
}

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "oracle-java",
    title: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle Corporation",
    issueDate: "July 2025",
    credentialId: "101984392OCPJSE17",
    iconName: "Award",
    badgeColor: "#F80000",
    skills: ["Java SE 17", "OOP Design", "Exception Handling", "Java Collections", "Multithreading", "Stream API"],
    verifyUrl: "/certificates/oracle-java-se-17-certificate.pdf",
    pdfUrl: "/certificates/oracle-java-se-17-certificate.pdf"
  },
  {
    id: "oracle-database",
    title: "Oracle Database SQL Certified Specialist",
    issuer: "Oracle Corporation",
    issueDate: "July 2025",
    credentialId: "101984392OCSSQL12C",
    iconName: "Database",
    badgeColor: "#F80000",
    skills: ["Relational Databases", "Complex SQL Queries", "DDL/DML", "Subqueries & Joins", "Indexing & Optimization"],
    verifyUrl: "/certificates/oracle-sql-specialist-certificate.pdf",
    pdfUrl: "/certificates/oracle-sql-specialist-certificate.pdf"
  },
  {
    id: "nptel-neural-networks",
    title: "NPTEL Elite Certification: Neural Networks for Computer Vision & NLP",
    issuer: "NPTEL / IIT Guwahati",
    issueDate: "Jan-Apr 2026",
    credentialId: "NPTEL26CS04S1450307182",
    iconName: "Sparkles",
    badgeColor: "#7C3AED",
    skills: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Deep Learning", "PyTorch/TensorFlow"],
    verifyUrl: "/certificates/neural-networks-nlp-certificate.pdf",
    pdfUrl: "/certificates/neural-networks-nlp-certificate.pdf"
  },
  {
    id: "nptel-iot",
    title: "NPTEL Elite Certification: Introduction to Internet of Things",
    issuer: "NPTEL / IIT Kharagpur",
    issueDate: "Jul-Oct 2025",
    credentialId: "NPTEL25CS147S1054006050",
    iconName: "Cpu",
    badgeColor: "#3B82F6",
    skills: ["Sensory Networks", "Microcontrollers", "MQTT Protocol", "IoT Architecture", "Embedded Systems"],
    verifyUrl: "/certificates/iot-certificate.pdf",
    pdfUrl: "/certificates/iot-certificate.pdf"
  },
  {
    id: "nptel-ml",
    title: "NPTEL National Certification: Introduction to Machine Learning",
    issuer: "NPTEL / IIT Madras",
    issueDate: "Jul-Oct 2025",
    credentialId: "NPTEL25CS91S354004755",
    iconName: "GraduationCap",
    badgeColor: "#06B6D4",
    skills: ["Supervised Learning", "Support Vector Machines", "Decision Trees", "Gradient Boosting", "Model Evaluation"],
    verifyUrl: "/certificates/machine-learning-certificate.pdf",
    pdfUrl: "/certificates/machine-learning-certificate.pdf"
  }
];
