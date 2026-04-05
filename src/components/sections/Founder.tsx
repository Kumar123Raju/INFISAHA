
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Quote, Github, Linkedin, Mail } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const Founder = () => {
  const founderImg = PlaceHolderImages.find(img => img.id === 'founder-photo');

  return (
    <section id="founder" className="py-24 relative overflow-hidden bg-background/30 scroll-mt-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <SectionReveal className="w-full lg:w-1/2 relative" direction="right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative glass rounded-[2.5rem] p-4 border-white/10 overflow-hidden glow-border">
                <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden">
                  <Image 
                    src={founderImg?.imageUrl || "https://picsum.photos/seed/raju-kumar/600/750"} 
                    alt="Raju Kumar - Founder of INFISAHAI"
                    fill
                    className="object-cover"
                    data-ai-hint="professional software engineer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass p-4 rounded-2xl border-white/10 backdrop-blur-md">
                    <h4 className="font-bold text-xl mb-1">Raju Kumar</h4>
                    <p className="text-primary text-sm font-medium">Founder & Software Engineer</p>
                    <p className="text-muted-foreground text-xs mt-1">MCA, NIT Jamshedpur</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="w-full lg:w-1/2" direction="left">
            <Badge variant="outline" className="mb-6 text-primary border-primary/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
              Visionary Leadership
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-headline leading-tight">
              Driven by <span className="text-primary glow-cyan">Trust</span>,<br />
              Defined by <span className="text-secondary glow-mint">Excellence</span>
            </h2>
            
            <div className="relative mb-10">
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-primary/10 -z-10" />
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "Raju Kumar is a passionate software developer and founder of INFISAHAI, with a strong background in building scalable systems and modern web applications. With a Master's degree in Computer Applications from NIT Jamshedpur, he focuses on helping businesses transform through AI, automation, and reliable technology solutions."
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <h4 className="text-xl font-bold font-headline flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span> Our Vision
              </h4>
              <p className="text-muted-foreground">
                "His vision is to create intelligent systems that businesses can trust — systems that work continuously, efficiently, and help companies grow in the digital era."
              </p>
            </div>

            <div className="flex gap-4">
              <button className="p-3 rounded-full glass border-white/10 hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full glass border-white/10 hover:bg-primary hover:text-primary-foreground transition-all">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full glass border-white/10 hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
