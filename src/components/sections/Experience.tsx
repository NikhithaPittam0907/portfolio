import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { EXPERIENCES } from '../../data/personalData';
import { GlassCard } from '../ui/GlassCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4"
          >
            <Briefcase size={14} />
            <span>INDUSTRY EXPERIENCE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Hands-on Engineering at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Industry Leaders
            </span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-blue-600 opacity-30 -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-[#050816] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    <Building2 size={18} />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0">
                    <GlassCard className="p-6 relative group">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wide">
                            {exp.type}
                          </span>
                          <h3 className="text-xl font-bold font-heading text-white mt-1 group-hover:text-cyan-300 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5 mt-0.5">
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                            <Calendar size={13} className="text-purple-400" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Chips */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 hover:border-cyan-400/40 hover:text-white transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
