
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/ui/typing-effect";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedGrid } from "@/components/ui/animated-grid";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <AnimatedGrid />
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full glass border-primary/20"
        >
          <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
          <span className="text-xs font-medium tracking-wider uppercase text-secondary">
            AI-Driven Future is Here
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl font-headline"
        >
          <TypingEffect 
            text="Transform Your Business" 
            speed={70} 
            className="block text-foreground"
          />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="block text-primary glow-cyan mt-2"
          >
            with AI & Automation
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-muted-foreground"
        >
          We build intelligent systems that work for you 24/7, turning static processes into dynamic ROI-generating engines.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 h-12 text-base font-semibold transition-all hover:scale-105 bg-primary text-primary-foreground relative group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8 h-12 text-base font-semibold glass border-white/10 hover:bg-white/5 transition-all hover:scale-105"
          >
            Book Demo
          </Button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
