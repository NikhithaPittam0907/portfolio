import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Sparkles, 
  Database, 
  GraduationCap, 
  Cpu, 
  BarChart3,
  X,
  FileText,
  Download
} from 'lucide-react';
import { CERTIFICATIONS, type Certificate } from '../../data/certificationsData';
import { GlassCard } from '../ui/GlassCard';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

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

  const handleVerifyClick = (e: React.MouseEvent, cert: Certificate) => {
    e.preventDefault();
    if (cert.pdfUrl) {
      setSelectedCert(cert);
    } else {
      window.open(cert.verifyUrl, '_blank', 'noopener,noreferrer');
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

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={(e) => handleVerifyClick(e, cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-emerald-300 transition-colors bg-white/5 hover:bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-white/10 hover:border-emerald-500/30"
                  >
                    <FileText size={13} className="text-emerald-400" />
                    <span>Verify Credential</span>
                  </button>

                  <a
                    href={cert.pdfUrl || cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Open PDF in new tab"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* PDF Modal Viewer */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-5xl h-[85vh] bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
                  <div className="flex items-center gap-3 pr-4 overflow-hidden">
                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                      {getIcon(selectedCert.iconName)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white truncate font-heading">
                        {selectedCert.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono truncate">
                        {selectedCert.issuer} • ID: {selectedCert.credentialId}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={selectedCert.pdfUrl || selectedCert.verifyUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      title="Download PDF"
                    >
                      <Download size={14} />
                      <span className="hidden sm:inline">Download</span>
                    </a>

                    <a
                      href={selectedCert.pdfUrl || selectedCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
                      title="Open in new tab"
                    >
                      <ExternalLink size={14} />
                      <span className="hidden sm:inline">Open in Tab</span>
                    </a>

                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                      aria-label="Close modal"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* PDF Viewer Body */}
                <div className="flex-1 w-full h-full bg-slate-950 relative overflow-hidden">
                  {selectedCert.pdfUrl ? (
                    <iframe
                      src={`${selectedCert.pdfUrl}#view=FitH`}
                      className="w-full h-full border-none"
                      title={selectedCert.title}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-400 p-6 text-center">
                      <FileText size={48} className="mb-4 text-emerald-400" />
                      <p className="text-base font-semibold text-white mb-2">Certificate PDF</p>
                      <p className="text-xs text-slate-400 mb-6">
                        Click below to verify credential on official website.
                      </p>
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs font-mono"
                      >
                        Verify Credential
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
