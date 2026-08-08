import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {/* Ambient radial glow backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(124, 58, 237, 0.08), rgba(6, 182, 212, 0.03), transparent 80%)`,
        }}
      />
      {/* Precision cursor dot follower */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-75 ease-out hidden md:block ${
          isHovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-cyan-400/20 border border-cyan-400/60 blur-[1px]'
            : 'w-4 h-4 -ml-2 -mt-2 bg-purple-500/40 border border-purple-400/80'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
};
