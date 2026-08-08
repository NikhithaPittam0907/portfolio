import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; // Magnet pull factor
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-medium shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 border border-purple-400/30';
      case 'secondary':
        return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 border border-cyan-400/30';
      case 'outline':
        return 'bg-white/5 backdrop-blur-md text-white border border-white/20 hover:border-purple-400/60 hover:bg-white/10';
      case 'glass':
        return 'bg-white/10 backdrop-blur-xl text-purple-200 border border-purple-500/30 hover:border-cyan-400/60 hover:text-white';
      default:
        return '';
    }
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer font-heading tracking-wide ${getVariantStyles()} ${className}`}
    >
      {children}
    </motion.button>
  );
};
