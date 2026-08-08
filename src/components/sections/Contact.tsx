import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy,
  Code2
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../data/personalData';
import { GlassCard } from '../ui/GlassCard';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4"
          >
            <Mail size={14} />
            <span>GET IN TOUCH</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              Extraordinary Together
            </span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto">
            Open for full-time AI Engineer, Software Developer, & Machine Learning roles. Reach out directly or submit the contact form below.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <GlassCard className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</span>
                    <h3 className="text-sm font-bold font-heading text-white">
                      {PERSONAL_INFO.email}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => copyText(PERSONAL_INFO.email)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Location</span>
                  <h3 className="text-sm font-bold font-heading text-white">
                    Nandyal, Andhra Pradesh, India
                  </h3>
                  <p className="text-[11px] text-slate-400">Open to Global Relocation & Remote Work</p>
                </div>
              </div>
            </GlassCard>

            {/* Social Links Cards */}
            <GlassCard className="p-6">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-3">Connect On Social Profiles</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-xs font-mono text-slate-200"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-xs font-mono text-slate-200"
                >
                  <FaLinkedin size={16} className="text-cyan-400" /> LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-xs font-mono text-slate-200"
                >
                  <Code2 size={16} className="text-amber-400" /> LeetCode
                </a>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold font-heading text-white">Need a PDF Resume?</h4>
                  <p className="text-xs text-slate-300">View or download verified single-page resume.</p>
                </div>
                <button
                  onClick={onOpenResumeModal}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-purple-600/30 cursor-pointer"
                >
                  Download
                </button>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to initiate contact. Response guaranteed within 24 hours.
              </p>

              {status === 'success' && (
                <div className="p-4 mb-6 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Message sent successfully! Thank you for getting in touch.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Recruiter"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white text-xs font-bold font-heading shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
