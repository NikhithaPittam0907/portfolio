import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Terminal, 
  Code2, 
  Cpu, 
  Database, 
  Cloud, 
  Layers, 
  Search,
  Bot,
  BrainCircuit,
  MessageSquare,
  Workflow,
  FileCode,
  FileJson,
  Server,
  Binary,
  Atom,
  Palette,
  Layout,
  Smartphone,
  FlaskConical,
  Network,
  DatabaseBackup,
  CloudSun,
  GitBranch,
  Code,
  BookOpen
} from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES } from '../../data/skillsData';
import { GlassCard } from '../ui/GlassCard';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit size={20} className="text-purple-400" />;
      case 'Cpu': return <Cpu size={20} className="text-cyan-400" />;
      case 'Sparkles': return <Sparkles size={20} className="text-yellow-400" />;
      case 'MessageSquare': return <MessageSquare size={20} className="text-emerald-400" />;
      case 'Workflow': return <Workflow size={20} className="text-indigo-400" />;
      case 'Bot': return <Bot size={20} className="text-pink-400" />;
      case 'Terminal': return <Terminal size={20} className="text-cyan-400" />;
      case 'Code2': return <Code2 size={20} className="text-red-400" />;
      case 'FileCode': return <FileCode size={20} className="text-blue-400" />;
      case 'FileJson': return <FileJson size={20} className="text-amber-400" />;
      case 'Database': return <Database size={20} className="text-purple-400" />;
      case 'Server': return <Server size={20} className="text-indigo-400" />;
      case 'Binary': return <Binary size={20} className="text-slate-300" />;
      case 'Atom': return <Atom size={20} className="text-cyan-400" />;
      case 'Palette': return <Palette size={20} className="text-sky-400" />;
      case 'Layout': return <Layout size={20} className="text-orange-400" />;
      case 'Smartphone': return <Smartphone size={20} className="text-blue-400" />;
      case 'Layers': return <Layers size={20} className="text-emerald-400" />;
      case 'FlaskConical': return <FlaskConical size={20} className="text-teal-400" />;
      case 'Network': return <Network size={20} className="text-purple-400" />;
      case 'DatabaseBackup': return <DatabaseBackup size={20} className="text-blue-400" />;
      case 'Search': return <Search size={20} className="text-cyan-400" />;
      case 'Cloud': return <Cloud size={20} className="text-amber-400" />;
      case 'CloudSun': return <CloudSun size={20} className="text-blue-400" />;
      case 'GitBranch': return <GitBranch size={20} className="text-red-400" />;
      case 'Code': return <Code size={20} className="text-blue-400" />;
      case 'BookOpen': return <BookOpen size={20} className="text-orange-400" />;
      default: return <Code2 size={20} className="text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4"
          >
            <Sparkles size={14} />
            <span>TECHNICAL CAPABILITIES & PROFICIENCY</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Comprehensive Tech Stack &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400">
              AI Expertise
            </span>
          </motion.h2>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-purple-600/30 border border-purple-500/50 text-white font-bold shadow-md shadow-purple-500/20'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skill (e.g. Python, PyTorch)..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <GlassCard className="p-4 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                      {renderIcon(skill.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-sm font-bold font-heading text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-snug mb-3">
                    {skill.description}
                  </p>
                </div>

                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
