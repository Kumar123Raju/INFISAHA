
"use client";

import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ 
  text, 
  speed = 50, 
  className = "",
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse border-r-2 border-primary ml-1">&nbsp;</span>
    </span>
  );
};
