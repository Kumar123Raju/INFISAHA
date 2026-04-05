
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const AnimatedLogo = ({ className, size = 40, showText = false }: AnimatedLogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <motion.div 
        style={{ width: size, height: size }}
        className="relative flex items-center justify-center"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(0,199,255,0.5)]"
        >
          {/* Infinity Loop */}
          <motion.path
            d="M30 50C30 40 45 40 50 50C55 60 70 60 70 50C70 40 55 40 50 50C45 60 30 60 30 50Z"
            stroke="url(#logo-gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Trishul (Trident) */}
          <motion.path
            d="M50 25V75 M40 35C40 35 45 45 50 45C55 45 60 35 60 35"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-primary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <motion.path
            d="M50 20L47 27H53L50 20Z"
            fill="currentColor"
            className="text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          />

          {/* Handshake Center Piece */}
          <motion.circle
            cx="50"
            cy="50"
            r="12"
            fill="hsl(var(--background))"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          />
          <motion.path
            d="M44 50H56 M47 47L53 53 M47 53L53 47"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          />

          <defs>
            <linearGradient id="logo-gradient" x1="30" y1="50" x2="70" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--primary))" />
              <stop offset="1" stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Ambient Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10"
        />
      </motion.div>

      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col"
        >
          <span className="text-xl font-bold font-headline tracking-tighter leading-none">
            INFISAHA
          </span>
          <span className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
            Infinite Support
          </span>
        </motion.div>
      )}
    </div>
  );
};
