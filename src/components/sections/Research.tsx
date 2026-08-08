import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Bot, 
  ShieldAlert, 
  Brain, 
  Sparkles, 
  Eye, 
  Dna
} from 'lucide-react';
import { RESEARCH_TOPICS } from '../../data/researchData';
import { GlassCard } from '../ui/GlassCard';

export const Research: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot size={22} className="text-purple-400" />;
      case 'ShieldAlert': return <ShieldAlert size={22} className="text-cyan-400" />;
      case 'Brain': return <Brain size={22} className="text-blue-400" />;
      case 'Sparkles': return <Sparkles size={22} className="text-yellow-400" />;
      case 'BookOpen': return <BookOpen size={22} className="text-emerald-400" />;
      case 'Eye': return <Eye size={22} className="text-pink-400" />;
      case 'Dna': return <Dna size={22} className="text-red-400" />;
      default: return <BookOpen size={22} className="text-purple-400" />;
    }
  };

  return (
    <section id="research" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4"
          >
            <BookOpen size={14} />
            <span>RESEARCH INTERESTS & PAPERS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Advancing the Frontier of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Computational Intelligence
            </span>
          </motion.h2>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_TOPICS.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/40 transition-colors">
                      {getIcon(topic.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded">
                      RESEARCH AREA 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {topic.tagline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {topic.description}
                  </p>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-4 text-[11px] text-slate-400 italic">
                    "{topic.abstractSnippet}"
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {topic.keyAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
