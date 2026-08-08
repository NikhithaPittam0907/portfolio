import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Sparkles, 
  ArrowRight, 
  Eye
} from 'lucide-react';
import { PROJECTS } from '../../data/projectsData';
import type { Project } from '../../data/projectsData';
import { GlassCard } from '../ui/GlassCard';
import { ProjectModal } from '../extra/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Agentic AI', 'Cybersecurity', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4"
          >
            <Code size={14} />
            <span>FEATURED ENGINEERING PORTFOLIO</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Production-Grade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              AI & Software Systems
            </span>
          </motion.h2>
          <p className="mt-3 text-slate-400 text-sm max-w-xl mx-auto">
            Click any project to explore full system architecture, code walkthroughs, metrics, and problem-solution deep dives.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold shadow-lg shadow-purple-600/30 border border-purple-400/40'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                className="h-full flex flex-col justify-between p-6 group"
                onClick={() => setActiveProject(project)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
                        <Sparkles size={10} /> {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 mb-6 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="grid grid-cols-3 gap-1.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 mb-6 text-center">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-[9px] font-mono text-slate-400 truncate uppercase">
                          {m.label}
                        </div>
                        <div className="text-xs font-bold font-heading text-cyan-300">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack[0].items.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 group-hover:text-purple-300 transition-colors flex items-center gap-1.5 font-medium">
                      <Eye size={14} className="text-purple-400" />
                      View Deep Dive & Architecture
                    </span>
                    <ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
