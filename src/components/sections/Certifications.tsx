import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Sparkles, 
  Database, 
  GraduationCap, 
  Cpu, 
  BarChart3 
} from 'lucide-react';
import { CERTIFICATIONS } from '../../data/certificationsData';
import { GlassCard } from '../ui/GlassCard';

export const Certifications: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award size={22} className="text-red-400" />;
      case 'Database': return <Database size={22} className="text-red-400" />;
      case 'GraduationCap': return <GraduationCap size={22} className="text-cyan-400" />;
      case 'Sparkles': return <Sparkles size={22} className="text-purple-400" />;
      case 'Cpu': return <Cpu size={22} className="text-blue-400" />;
      case 'BarChart3': return <BarChart3 size={22} className="text-emerald-400" />;
      default: return <Award size={22} className="text-purple-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4"
          >
            <Award size={14} />
            <span>VERIFIED PROFESSIONAL CERTIFICATIONS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Industry & Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
              Credentials
            </span>
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-emerald-500/40 transition-colors">
                      {getIcon(cert.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                      VERIFIED
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mb-2">
                    {cert.issuer} • {cert.issueDate}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mb-4">
                    ID: {cert.credentialId}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
