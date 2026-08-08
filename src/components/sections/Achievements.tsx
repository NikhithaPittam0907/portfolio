import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  GraduationCap, 
  Code, 
  Award, 
  Code2, 
  Sparkles 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/personalData';
import { GlassCard } from '../ui/GlassCard';

export const Achievements: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7C3AED', '#06B6D4', '#3B82F6', '#F59E0B']
    });
  };

  const statItems = [
    {
      label: "Academic CGPA",
      value: PERSONAL_INFO.stats.cgpa,
      suffix: " / 10.0",
      description: "Saveetha Institute CSE (AI) - Top 2% Cohort",
      icon: <GraduationCap size={24} className="text-cyan-400" />,
      color: "from-cyan-500/20 to-purple-600/20"
    },
    {
      label: "Projects Completed",
      value: PERSONAL_INFO.stats.projectsCount,
      suffix: "",
      description: "AI, Agentic Systems, Full Stack, & Cyber Security",
      icon: <Code size={24} className="text-purple-400" />,
      color: "from-purple-600/20 to-blue-500/20"
    },
    {
      label: "LeetCode Solved",
      value: PERSONAL_INFO.stats.leetCodeSolved,
      suffix: "",
      description: "Data Structures & Algorithms in Java & Python",
      icon: <Code2 size={24} className="text-amber-400" />,
      color: "from-amber-500/20 to-orange-600/20"
    },
    {
      label: "Hackathons Won",
      value: PERSONAL_INFO.stats.hackathonsWon,
      suffix: "",
      description: "1st Place Winner for GPU Guard AI System",
      icon: <Trophy size={24} className="text-yellow-400" />,
      color: "from-yellow-500/20 to-purple-600/20"
    },
    {
      label: "Certifications",
      value: PERSONAL_INFO.stats.certificationsCount,
      suffix: "",
      description: "Oracle Java, Oracle DB SQL, NPTEL, DeepLearning.AI",
      icon: <Award size={24} className="text-emerald-400" />,
      color: "from-emerald-500/20 to-cyan-500/20"
    },
    {
      label: "GitHub Repositories",
      value: PERSONAL_INFO.stats.reposCount,
      suffix: "",
      description: "Open-source tools, agent graphs, & ML code",
      icon: <FaGithub size={24} className="text-blue-400" />,
      color: "from-blue-600/20 to-indigo-600/20"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-mono mb-4"
          >
            <Trophy size={14} />
            <span>TRACK RECORD & METRICS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Quantifiable Impact &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400">
              Milestones
            </span>
          </motion.h2>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statItems.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <GlassCard
                className="p-6 h-full flex flex-col justify-between group cursor-pointer"
                onClick={triggerConfetti}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${stat.color} border border-white/10 group-hover:scale-110 transition-transform`}>
                      {stat.icon}
                    </div>
                    <Sparkles size={16} className="text-slate-600 group-hover:text-yellow-400 transition-colors" />
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-base font-mono text-slate-400">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold font-heading text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-snug">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>Click card to celebrate 🎉</span>
                  <span>VERIFIED</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
