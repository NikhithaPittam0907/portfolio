import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  FileText, 
  Bot, 
  Mail, 
  Code, 
  ExternalLink, 
  X, 
  Sparkles, 
  Layers, 
  Award, 
  GraduationCap 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PROJECTS } from '../../data/projectsData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAiAssistant: () => void;
  onOpenResumeModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenAiAssistant,
  onOpenResumeModal,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'resume',
      title: 'View & Download Resume',
      category: 'Actions',
      icon: <FileText className="text-purple-400" size={16} />,
      handler: () => {
        onClose();
        onOpenResumeModal();
      },
    },
    {
      id: 'ai-assistant',
      title: 'Ask Nikhitha AI Assistant',
      category: 'Actions',
      icon: <Bot className="text-cyan-400" size={16} />,
      handler: () => {
        onClose();
        onOpenAiAssistant();
      },
    },
    {
      id: 'copy-email',
      title: 'Copy Email Address (nikhithareddypittam@gmail.com)',
      category: 'Contact',
      icon: <Mail className="text-blue-400" size={16} />,
      handler: () => {
        navigator.clipboard.writeText('nikhithareddypittam@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      category: 'Social',
      icon: <FaGithub className="text-slate-300" size={16} />,
      handler: () => {
        window.open('https://github.com/NikhithaPittam0907', '_blank');
        onClose();
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      icon: <FaLinkedin className="text-blue-400" size={16} />,
      handler: () => {
        window.open('https://www.linkedin.com/in/pittamnikhitha/', '_blank');
        onClose();
      },
    },
    { id: 'sec-about', title: 'Jump to About Section', category: 'Navigation', icon: <GraduationCap className="text-purple-400" size={16} />, handler: () => jumpTo('about') },
    { id: 'sec-experience', title: 'Jump to Experience Section', category: 'Navigation', icon: <Layers className="text-cyan-400" size={16} />, handler: () => jumpTo('experience') },
    { id: 'sec-projects', title: 'Jump to Projects Section', category: 'Navigation', icon: <Code className="text-indigo-400" size={16} />, handler: () => jumpTo('projects') },
    { id: 'sec-skills', title: 'Jump to Skills Section', category: 'Navigation', icon: <Sparkles className="text-yellow-400" size={16} />, handler: () => jumpTo('skills') },
    { id: 'sec-certifications', title: 'Jump to Certifications', category: 'Navigation', icon: <Award className="text-emerald-400" size={16} />, handler: () => jumpTo('certifications') },
  ];

  PROJECTS.forEach((p) => {
    actions.push({
      id: `proj-${p.id}`,
      title: `Project: ${p.title} (${p.category})`,
      category: 'Projects',
      icon: <Code className="text-cyan-400" size={16} />,
      handler: () => {
        onClose();
        jumpTo('projects');
      },
    });
  });

  const jumpTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#050816]/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-2xl bg-[#0b0f24] border border-white/15 rounded-2xl shadow-2xl overflow-hidden glass-panel"
        >
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
            <Search className="text-purple-400" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, section, or project name..."
              className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none font-sans text-sm"
              autoFocus
            />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                ESC to close
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto p-2 space-y-1">
            {copied && (
              <div className="p-2.5 mb-2 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs font-mono flex items-center gap-2">
                <Sparkles size={14} /> Email copied to clipboard!
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-sm">
                No matching command found for "<span className="text-purple-300">{query}</span>"
              </div>
            ) : (
              filtered.map((action) => (
                <button
                  key={action.id}
                  onClick={action.handler}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-white/10 text-left transition-colors duration-150 group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/40">
                      {action.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-slate-200 group-hover:text-white">
                        {action.title}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {action.category}
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={14} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
                </button>
              ))
            )}
          </div>

          <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/10 bg-white/[0.02] text-[11px] font-mono text-slate-400">
            <span>Pittam Nikhitha Portfolio Navigation</span>
            <div className="flex items-center gap-2">
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-slate-300">↵ Enter</kbd>
              <span>to select</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
