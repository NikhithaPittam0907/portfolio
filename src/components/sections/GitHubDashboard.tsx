import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Star, 
  GitFork, 
  Code, 
  ExternalLink, 
  Activity 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { GlassCard } from '../ui/GlassCard';

interface Repo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export const GitHubDashboard: React.FC = () => {
  const [repos] = useState<Repo[]>([
    {
      name: "gpu-guard-ai",
      description: "Agentic AI Intrusion Prevention & Hardware Workload Sentinel using LangGraph, eBPF & CUDA.",
      language: "Python",
      stars: 48,
      forks: 14,
      url: "https://github.com/NikhithaPittam0907/gpu-guard-ai"
    },
    {
      name: "llm-email-assistant",
      description: "Enterprise RAG-powered autonomous inbox workflow automation agent.",
      language: "TypeScript",
      stars: 36,
      forks: 9,
      url: "https://github.com/NikhithaPittam0907/llm-email-assistant"
    },
    {
      name: "ai-ddos-detection",
      description: "Real-time network traffic packet inspector using LSTM deep learning neural networks.",
      language: "Python",
      stars: 52,
      forks: 18,
      url: "https://github.com/NikhithaPittam0907/ai-ddos-detection"
    },
    {
      name: "agentic-legal-ai",
      description: "Multi-agent contract risk auditor and legal clause redline synthesizer.",
      language: "Python",
      stars: 29,
      forks: 7,
      url: "https://github.com/NikhithaPittam0907/agentic-legal-ai"
    }
  ]);

  const languages = [
    { name: "Python", percentage: 48, color: "#3572A5" },
    { name: "TypeScript / React", percentage: 26, color: "#3178C6" },
    { name: "Java", percentage: 14, color: "#B07219" },
    { name: "C / C++", percentage: 7, color: "#F34B7D" },
    { name: "SQL & Shell", percentage: 5, color: "#89E051" }
  ];

  return (
    <section id="github" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/30 text-slate-300 text-xs font-mono mb-4"
          >
            <FaGithub size={14} />
            <span>OPEN SOURCE & CODE REPOSITORIES</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            GitHub Activity &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              Contribution Matrix
            </span>
          </motion.h2>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold font-heading text-white flex items-center gap-2">
                  <Code size={18} className="text-cyan-400" />
                  Language Distribution
                </h3>
                <span className="text-xs font-mono text-slate-400">Top Codebases</span>
              </div>

              <div className="h-3 w-full rounded-full flex overflow-hidden mb-6 bg-white/5">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    style={{ width: `${l.percentage}%`, backgroundColor: l.color }}
                    className="h-full"
                    title={`${l.name}: ${l.percentage}%`}
                  />
                ))}
              </div>

              <div className="space-y-3">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: l.color }} />
                      <span className="text-slate-200 font-mono">{l.name}</span>
                    </div>
                    <span className="text-slate-400 font-mono font-bold">{l.percentage}%</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold font-heading text-white flex items-center gap-2">
                  <Activity size={18} className="text-emerald-400" />
                  2025-2026 Commit Activity
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">540+ Commits</span>
              </div>

              <div className="grid grid-cols-16 gap-1 p-2 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                {Array.from({ length: 96 }).map((_, i) => {
                  const intensities = ['bg-white/5', 'bg-emerald-900/40', 'bg-emerald-700/60', 'bg-emerald-500/80', 'bg-emerald-400'];
                  const randInt = (i * 7 + 3) % intensities.length;
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-xs ${intensities[randInt]} hover:scale-125 transition-transform`}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-between mt-3 text-[10px] font-mono text-slate-400">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-xs bg-white/5" />
                  <span className="w-2 h-2 rounded-xs bg-emerald-900/40" />
                  <span className="w-2 h-2 rounded-xs bg-emerald-700/60" />
                  <span className="w-2 h-2 rounded-xs bg-emerald-500/80" />
                  <span className="w-2 h-2 rounded-xs bg-emerald-400" />
                </div>
                <span>More</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {repos.map((repo) => (
              <GlassCard key={repo.name} className="p-5 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <GitBranch size={16} className="text-purple-400" />
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold font-heading text-white hover:text-cyan-300 transition-colors"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-purple-400" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-purple-300 border border-purple-500/30">
                    {repo.language}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-amber-400 font-bold">
                      <Star size={13} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-cyan-400 font-bold">
                      <GitFork size={13} /> {repo.forks}
                    </span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/NikhithaPittam0907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-mono hover:border-purple-500/50 hover:bg-white/10 transition-all shadow-lg"
          >
            <FaGithub size={16} />
            <span>Explore All Repositories on GitHub (NikhithaPittam0907)</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
