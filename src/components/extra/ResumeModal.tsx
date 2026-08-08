import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION } from '../../data/personalData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintDownload = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#050816]/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0b0f24] border border-white/15 rounded-3xl shadow-2xl overflow-hidden glass-panel max-h-[90vh] flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <img
                src="/nikhitha.jpg"
                alt="Pittam Nikhitha"
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400"
              />
              <div>
                <h3 className="text-lg font-bold font-heading text-white">
                  Curriculum Vitae / Resume
                </h3>
                <p className="text-xs font-mono text-cyan-400">
                  Pittam Nikhitha • B.E. CSE (AI) • 9.2 CGPA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrintDownload}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors cursor-pointer"
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="p-8 overflow-y-auto space-y-6 flex-1 text-slate-200 text-xs sm:text-sm font-sans">
            <div className="border-b border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-cyan-400 font-semibold text-xs mt-0.5">
                  {PERSONAL_INFO.headline}
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Nandyal, India • {PERSONAL_INFO.email}
                </p>
                <p className="text-slate-400 text-[11px] font-mono mt-1">
                  GitHub: NikhithaPittam0907 • LinkedIn: pittamnikhitha • LeetCode: PittamNikhitha
                </p>
              </div>

              <div className="text-right font-mono text-xs text-purple-300 bg-purple-500/10 border border-purple-500/30 p-3 rounded-xl">
                <div>CGPA: 9.2 / 10.0</div>
                <div className="text-[10px] text-slate-400">Saveetha Institute</div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold font-heading text-purple-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-1">
                Education
              </h2>
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex justify-between font-bold text-white text-xs">
                    <span>{edu.degree}</span>
                    <span>{edu.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400">{edu.institution} — CGPA {edu.score}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-sm font-bold font-heading text-purple-400 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">
                Professional Internships
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between font-bold text-white text-xs">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="font-mono text-slate-400">{exp.period}</span>
                    </div>
                    <ul className="mt-1.5 space-y-1 text-xs text-slate-300">
                      {exp.description.map((d, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold font-heading text-purple-400 uppercase tracking-wider mb-3 border-b border-white/10 pb-1">
                Flagship Projects
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-white">GPU Guard AI (Hackathon Winner):</span>
                  <span className="text-slate-300 ml-1">Agentic AI Intrusion Prevention System using LangGraph & eBPF with sub-8.5ms response time.</span>
                </div>
                <div>
                  <span className="font-bold text-white">LLM Autonomous Email Assistant:</span>
                  <span className="text-slate-300 ml-1">Enterprise RAG inbox manager drafting context-aware replies via ChromaDB & Ollama.</span>
                </div>
                <div>
                  <span className="font-bold text-white">AI DDoS Detection System:</span>
                  <span className="text-slate-300 ml-1">Deep Learning network traffic packet inspector achieving 99.4% classification accuracy.</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold font-heading text-purple-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><strong className="text-white">Languages:</strong> Python, Java, TypeScript, SQL, C, PHP</div>
                <div><strong className="text-white">AI / ML:</strong> PyTorch, LangGraph, LLMs, RAG, Scikit-Learn, TensorFlow</div>
                <div><strong className="text-white">Web Stack:</strong> React 19, Tailwind CSS, Node.js, Flask, REST APIs</div>
                <div><strong className="text-white">Databases & Tools:</strong> MySQL, ChromaDB, AWS, Git, VS Code</div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Pittam_Nikhitha_Resume_2026.pdf</span>
            <button
              onClick={handlePrintDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold font-heading shadow-lg shadow-purple-600/30 cursor-pointer"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
