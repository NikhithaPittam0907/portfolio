import React, { useState, useEffect } from 'react';

export const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 750); // Finish exit
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div id="splash" className={fadeOut ? 'out' : ''}>
      <div className="splash-inner">
        <span className="sword sleft">PITTAM</span>
        <span className="sword sright"> NIKHITHA</span>
        <div className="sbar" />
      </div>
    </div>
  );
};
