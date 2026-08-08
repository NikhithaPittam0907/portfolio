import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles
} from 'lucide-react';
import { AI_FAQS, INITIAL_AI_MESSAGES } from '../../data/aiKnowledge';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(
    INITIAL_AI_MESSAGES.map((msg) => ({ sender: 'ai', text: msg }))
  );
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const qLower = query.toLowerCase();
      let matched = AI_FAQS.find((faq) =>
        faq.keywords.some((kw) => qLower.includes(kw))
      );

      let responseText = matched
        ? matched.response
        : "Nikhitha is a skilled AI Engineer with a 9.2 CGPA at Saveetha Institute, experienced in Python, PyTorch, LangGraph, and full-stack software development. Ask me about her GPU Guard AI hackathon winner, DDoS detection project, or contact details!";

      setMessages((prev) => [...prev, { sender: 'ai', text: responseText }]);
      setIsTyping(false);
    }, 600);
  };

  const sampleChips = [
    "Tell me about GPU Guard AI",
    "Why hire Nikhitha for Google/SWE?",
    "What is her CGPA & College?",
    "List her key AI/ML skills"
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-[#050816]/70 backdrop-blur-md">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md bg-[#0b0f24] border-l border-white/15 shadow-2xl h-full flex flex-col glass-panel"
        >
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-lg">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold font-heading text-white flex items-center gap-1.5">
                  Nikhitha AI Assistant
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-[10px] font-mono text-cyan-400">
                  Recruiter Q&A Knowledge Engine
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0 text-xs">
                    <Bot size={14} />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[85%] ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium shadow-md'
                      : 'bg-white/5 border border-white/10 text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-xs text-slate-400 font-mono">
                <Bot size={14} className="text-purple-400 animate-spin" />
                <span>Nikhitha AI is searching knowledge base...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-white/10 bg-white/[0.01]">
            <div className="text-[10px] font-mono text-slate-400 mb-2 flex items-center gap-1">
              <Sparkles size={11} className="text-yellow-400" />
              Suggested Questions:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sampleChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 hover:border-purple-400 hover:text-white transition-all text-left"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/10 flex items-center gap-2 bg-white/[0.02]"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about Nikhitha..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md cursor-pointer"
            >
              <Send size={15} />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
