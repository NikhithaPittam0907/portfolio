import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Bot, 
  Code2, 
  Sparkles, 
  Terminal 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../data/personalData';
import { HeroCanvas } from '../3d/HeroCanvas';
import { MagneticButton } from '../ui/MagneticButton';
import { GlassCard } from '../ui/GlassCard';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenAiAssistant }) => {
  const roles = [
    "AI Engineer",
    "Software Developer",
    "Machine Learning Specialist",
    "Agentic AI Developer",
    "Full Stack Developer"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* 3D Particle Canvas Background */}
      <HeroCanvas />

      {/* Ambient Radial Spotlight Blobs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none animate-aurora" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Unique Apple/Vercel Luxury Glass Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glowing Border Frame */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-purple-600 via-cyan-400 to-blue-600 opacity-60 blur-lg group-hover:opacity-100 transition duration-1000" />
              
              <GlassCard className="relative p-4 rounded-[30px] border border-white/15 bg-[#080c1d]/90 backdrop-blur-2xl shadow-2xl overflow-hidden">
                {/* Photo Frame Container */}
                <div className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden border border-white/10 bg-slate-900 shadow-inner">
                  <img
                    src="/nikhitha.jpg"
                    alt="Pittam Nikhitha"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{
                      objectPosition: 'center 38%',
                      transform: 'scale(1.18)'
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />

                  {/* Badge overlay at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/15 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-white text-sm">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-[11px] font-mono text-cyan-300">
                        Saveetha CSE (AI) • 9.2 CGPA
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Quick Profile Summary Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to SWE & AI Roles</span>
                  </div>
                  <span className="font-mono text-[11px] text-purple-300">
                    Nandyal, India
                  </span>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Right Column: Hero Information & Modern Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-purple-500/30 mb-6 backdrop-blur-md shadow-lg shadow-purple-500/10">
              <Sparkles size={14} className="text-purple-400" />
              <span className="text-xs font-mono text-cyan-300 font-medium">
                AI Engineer & Software Developer
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-mono text-purple-300 font-bold">
                CGPA 9.2
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl font-extrabold font-heading tracking-tight text-white mb-4 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-purple-300">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-10 sm:h-12 flex items-center gap-2 mb-6">
              <Terminal size={22} className="text-cyan-400" />
              <span className="text-xl sm:text-3xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400">
                {displayText}
              </span>
              <span className="w-0.5 h-7 sm:h-8 bg-cyan-400 animate-pulse" />
            </div>

            {/* Headline Quote */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-8 max-w-2xl">
              "{PERSONAL_INFO.headline}" Pursuing Computer Science Engineering (AI) at <strong className="text-white">Saveetha Institute</strong> with a <strong className="text-cyan-300">9.2 CGPA</strong>. Specialized in building autonomous multi-agent AI systems, real-time intrusion prevention (GPU Guard AI), and high-performance software.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <MagneticButton
                variant="primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </MagneticButton>

              <MagneticButton
                variant="glass"
                onClick={onOpenResumeModal}
              >
                <Download size={18} className="text-cyan-400" />
                <span>Download Resume</span>
              </MagneticButton>

              <MagneticButton
                variant="outline"
                onClick={onOpenAiAssistant}
              >
                <Bot size={18} className="text-purple-400" />
                <span>Ask Nikhitha AI</span>
              </MagneticButton>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:text-white text-slate-300 transition-all shadow-md group"
                title="GitHub Profile"
              >
                <FaGithub size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 text-slate-300 transition-all shadow-md group"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:text-amber-400 text-slate-300 transition-all shadow-md group"
                title="LeetCode Profile (300+ Solved)"
              >
                <Code2 size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
