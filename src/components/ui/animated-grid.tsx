
"use client";

import { motion } from "framer-motion";

export const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Moving Light Beams */}
      <motion.div 
        animate={{ 
          x: ["-100%", "100%"],
          opacity: [0, 0.3, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12"
      />

      <motion.div 
        animate={{ 
          y: ["-100%", "100%"],
          opacity: [0, 0.2, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear",
          delay: 5
        }}
        className="absolute top-0 left-1/2 w-full h-1/4 bg-gradient-to-b from-transparent via-secondary/10 to-transparent skew-y-12"
      />
    </div>
  );
};
