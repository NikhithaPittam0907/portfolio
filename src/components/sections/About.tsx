import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Cpu, 
  Code, 
  Briefcase, 
  Sparkles, 
  BookOpen, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../../data/personalData';
import { GlassCard } from '../ui/GlassCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4"
          >
            <Sparkles size={14} />
            <span>BACKGROUND & ACADEMICS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Engineering Intelligence with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Academic Excellence
            </span>
          </motion.h2>
        </div>

        {/* Quick Facts Grid (5 Top Metrics/Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {PERSONAL_INFO.quickFacts.map((fact, idx) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-5 h-full flex flex-col justify-between group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {fact.label}
                  </span>
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    {idx === 0 && <Cpu size={18} />}
                    {idx === 1 && <GraduationCap size={18} />}
                    {idx === 2 && <MapPin size={18} />}
                    {idx === 3 && <Code size={18} />}
                    {idx === 4 && <Briefcase size={18} />}
                  </div>
                </div>
                <div>
                  <div className="text-base font-bold font-heading text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {fact.value}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    {fact.detail}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Biography Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 relative">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <Terminal size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    Professional Biography
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    Pittam Nikhitha • AI Engineer & Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
                <p>
                  I am a passionate AI Engineer and Software Developer specializing in building high-performance machine learning models, multi-agent AI systems, and scalable backend infrastructure.
                </p>
                <p>
                  Currently pursuing my <strong className="text-white">B.E. in Computer Science Engineering (Artificial Intelligence)</strong> at <strong className="text-purple-300">Saveetha Institute of Medical and Technical Sciences (SIMATS)</strong>, I have maintained an outstanding academic record with a <strong className="text-cyan-300">9.2 CGPA</strong>.
                </p>
                <p>
                  My engineering philosophy centers around solving real-world, high-impact problems—ranging from real-time GPU hardware intrusion protection (<span className="text-purple-300 font-medium">GPU Guard AI</span>) to deep learning network security and autonomous agentic workflows.
                </p>
              </div>

              {/* Key Highlights Pills */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>Ranked Top 2% in Computer Science Cohort</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>24-Hour National AI Hackathon Winner</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>300+ LeetCode Problems Solved</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>Internships at Infosys & Kaynes Tech</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Education & Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {EDUCATION.map((edu) => (
              <GlassCard key={edu.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 border border-purple-500/40 text-purple-300">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-heading text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 px-3 mb-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
                  <span className="text-slate-400">CGPA:</span>
                  <span className="text-cyan-400 font-bold text-sm">{edu.score}</span>
                  <span className="text-slate-400">Period: {edu.period}</span>
                </div>

                <ul className="space-y-2 text-xs text-slate-300">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}

            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={18} className="text-cyan-400" />
                <h4 className="text-sm font-bold font-heading text-white uppercase tracking-wider">
                  Current Advanced Research & Learning
                </h4>
              </div>

              <div className="space-y-2.5">
                {PERSONAL_INFO.currentLearning.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
