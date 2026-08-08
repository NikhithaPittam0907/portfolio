import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltEffect?: boolean;
  glowColor?: 'purple' | 'cyan' | 'blue' | 'gradient';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  tiltEffect = true,
  glowColor = 'gradient',
  onClick,
}) => {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    if (!tiltEffect) return;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  const getGlowBorder = () => {
    switch (glowColor) {
      case 'purple':
        return 'hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(124,58,237,0.25)]';
      case 'cyan':
        return 'hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]';
      case 'blue':
        return 'hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]';
      case 'gradient':
      default:
        return 'hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]';
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transform, transition: 'transform 0.15s ease-out' }}
      className={`relative overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 ${getGlowBorder()} transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Radial Hover Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255, 255, 255, 0.08), transparent 70%)`,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
};
