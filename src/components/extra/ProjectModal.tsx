import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Sparkles, 
  AlertTriangle, 
  ShieldCheck,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import type { Project } from '../../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#050816]/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0b0f24] border border-white/15 rounded-3xl shadow-2xl overflow-hidden glass-panel max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
                  <Sparkles size={12} /> {project.badge}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mb-2">
                {project.title}
              </h2>
              <p className="text-base text-cyan-400 font-medium">
                {project.subtitle}
              </p>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-lg sm:text-2xl font-bold font-heading text-cyan-300 mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 font-bold font-heading text-sm mb-3">
                  <AlertTriangle size={18} />
                  <span>PROBLEM STATEMENT</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-bold font-heading text-sm mb-3">
                  <ShieldCheck size={18} />
                  <span>ENGINEERING SOLUTION</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 text-purple-400 font-bold font-heading text-sm mb-2">
                <Layers size={18} />
                <span>SYSTEM ARCHITECTURE PIPELINE</span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                {project.architecture.description}
              </p>
              <div className="space-y-2">
                {project.architecture.flowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3 text-xs text-slate-200"
                  >
                    <span className="px-2 py-0.5 rounded bg-purple-600/30 text-purple-300 font-mono text-[10px] font-bold">
                      STEP {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-base font-bold font-heading text-white mb-4 flex items-center gap-2">
                <Zap size={18} className="text-cyan-400" />
                Key Engineering Highlights & Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Matrix */}
            <div>
              <h3 className="text-base font-bold font-heading text-white mb-4">
                Tech Stack & Libraries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.techStack.map((group, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-2 font-semibold">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Enhancements */}
            <div>
              <h3 className="text-base font-bold font-heading text-white mb-3 flex items-center gap-2">
                <TrendingUp size={18} className="text-purple-400" />
                Future Roadmap & Optimizations
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.futureEnhancements.map((enh, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRight size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{enh}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="flex items-center justify-between p-6 border-t border-white/10 bg-white/[0.02]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-medium transition-all"
            >
              <FaGithub size={16} />
              <span>Source Repository</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-medium shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all"
            >
              <ExternalLink size={16} />
              <span>Live Demonstration</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
