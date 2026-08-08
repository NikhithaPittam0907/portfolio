import React from 'react';
import { 
  ArrowUp, 
  Code2, 
  Mail 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../data/personalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#03050f] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Attribution */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="font-heading font-extrabold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-full bg-purple-500/10">
                AI Engineer
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Designed & Engineered with precision by Pittam Nikhitha • B.E CSE (AI) CGPA 9.2
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:text-white text-slate-400 transition-colors"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 text-slate-400 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 hover:text-amber-400 text-slate-400 transition-colors"
              title="LeetCode"
            >
              <Code2 size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:text-blue-400 text-slate-400 transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-white text-xs font-mono transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Pittam Nikhitha. All rights reserved. Built with React 19, TypeScript, Tailwind CSS, & Framer Motion.
        </div>
      </div>
    </footer>
  );
};
