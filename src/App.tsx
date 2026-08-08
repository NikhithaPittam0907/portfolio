import React, { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { CommandPalette } from './components/navigation/CommandPalette';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Certifications } from './components/sections/Certifications';
import { GitHubDashboard } from './components/sections/GitHubDashboard';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/extra/Footer';
import { CursorGlow } from './components/ui/CursorGlow';
import { AiAssistantDrawer } from './components/extra/AiAssistantDrawer';
import { ResumeModal } from './components/extra/ResumeModal';
import { useLenis } from './hooks/useLenis';

export const App: React.FC = () => {
  // Initialize smooth scroll
  useLenis();

  // Modals state
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 font-sans selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden">
      {/* Custom Ambient Cursor Follower */}
      <CursorGlow />

      {/* Floating Navbar */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
        />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <GitHubDashboard />
        <Contact onOpenResumeModal={() => setResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <AiAssistantDrawer
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
