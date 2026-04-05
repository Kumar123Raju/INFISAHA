
"use client";

import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/ui/typing-effect";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(hsla(195,100%,50%,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full glass border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles className="w-4 h-4 text-secondary animate-glow-pulse" />
          <span className="text-xs font-medium tracking-wider uppercase text-secondary">
            AI-Driven Future is Here
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl font-headline">
          <TypingEffect 
            text="Transform Your Business" 
            speed={70} 
            className="block text-foreground"
          />
          <span className="block text-primary glow-cyan mt-2">with AI & Automation</span>
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          We build intelligent systems that work for you 24/7, turning static processes into dynamic ROI-generating engines.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold transition-all hover:scale-105 bg-primary text-primary-foreground">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold glass border-white/10 hover:bg-white/5">
            Book Demo
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};
