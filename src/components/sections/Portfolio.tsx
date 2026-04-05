
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionReveal } from "@/components/ui/section-reveal";

const demos = [
  {
    id: 'clinic-demo',
    title: "VitalsFlow Clinic Booking",
    category: "Healthcare Automation",
    description: "An AI-managed patient booking system that reduced appointment overhead by 65%. Features automated triage and follow-ups.",
    features: ["Smart Scheduling", "Automated Billing", "AI Triage Bot"]
  },
  {
    id: 'admin-demo',
    title: "Nexus Admin Dashboard",
    category: "SaaS Enterprise",
    description: "A centralized command center for data-heavy enterprises, providing real-time AI insights and predictive market analysis.",
    features: ["Real-time Data", "Predictive ROI", "Access Control"]
  }
];

export const Portfolio = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <SectionReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Built for Performance</h2>
            <p className="text-muted-foreground">
              See how we've helped industries upgrade their manual processes into high-speed digital workflows.
            </p>
          </div>
          <Button variant="outline" className="glass border-white/10 hover:border-primary/50 transition-colors">
            View Full Portfolio
          </Button>
        </SectionReveal>

        <div className="grid gap-16">
          {demos.map((demo, index) => {
            const imageData = PlaceHolderImages.find(img => img.id === demo.id);
            return (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 group`}>
                <SectionReveal className="w-full lg:w-3/5" direction={index % 2 === 1 ? "left" : "right"}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-3xl glass border-white/10 glow-border group-hover:border-primary/30 transition-all duration-700"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image 
                        src={imageData?.imageUrl || ""} 
                        alt={demo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        data-ai-hint={imageData?.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                    </div>
                  </motion.div>
                </SectionReveal>

                <SectionReveal className="w-full lg:w-2/5" direction={index % 2 === 1 ? "right" : "left"}>
                  <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary border-none">
                    {demo.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 font-headline">{demo.title}</h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {demo.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {demo.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button className="rounded-full px-8 group relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                      View Interactive Demo
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </SectionReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
