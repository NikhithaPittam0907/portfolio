import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as CommandIcon, 
  Menu, 
  X, 
  FileText, 
  Bot 
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/personalData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenAiAssistant: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenAiAssistant,
  onOpenResumeModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'certifications', 'github', 'contact'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Stats' },
    { id: 'certifications', label: 'Certs' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3 bg-[#04050a]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            <img
              src="/nikhitha.jpg"
              alt="Pittam Nikhitha"
              className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400 shadow-md group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="font-heading font-bold text-white tracking-wide text-base block group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-purple-400 block -mt-1 tracking-widest uppercase">
                AI Engineer
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-purple-600/30 border border-purple-500/40 shadow-[0_0_12px_rgba(124,58,237,0.3)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/40 text-xs font-mono transition-all duration-200 cursor-pointer"
              title="Open Command Palette (Ctrl+K)"
            >
              <CommandIcon size={14} className="text-cyan-400" />
              <span>⌘K</span>
            </button>

            <button
              onClick={onOpenAiAssistant}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-purple-500/30 text-purple-200 hover:text-white hover:border-cyan-400/60 text-xs font-medium transition-all duration-200 cursor-pointer group"
            >
              <Bot size={14} className="text-purple-400 group-hover:rotate-12 transition-transform" />
              <span>Ask AI</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-medium shadow-md shadow-purple-600/20 hover:shadow-purple-500/40 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAiAssistant}
              className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300"
            >
              <Bot size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#04050a]/95 backdrop-blur-2xl border-b border-white/10 p-6 sm:hidden shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 mb-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2.5 rounded-xl text-left text-sm font-medium text-slate-300 bg-white/[0.03] border border-white/5 hover:border-purple-500/40 hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-sm font-mono"
              >
                <CommandIcon size={16} className="text-cyan-400" />
                <span>Command Palette (Ctrl + K)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium text-sm shadow-lg shadow-purple-600/30"
              >
                <FileText size={16} />
                <span>View & Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
