
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Zap, LayoutDashboard, Database, Bot } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";

const showcaseItems = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "AI Chatbots",
    description: "24/7 intelligent customer engagement that learns from your data.",
    badge: "Most Popular"
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-secondary" />,
    title: "Smart Dashboards",
    description: "Visualize insights with predictive analytics that guide decisions.",
    badge: "Enterprise"
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Automation Systems",
    description: "Seamless workflows that handle repetitive tasks automatically.",
    badge: "ROI Focused"
  }
];

export const AiShowcase = () => {
  return (
    <section id="vision" className="py-24 bg-background/50 relative overflow-hidden scroll-mt-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <SectionReveal className="w-full lg:w-1/2" direction="right">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-1 rounded-full">
              Intelligence at Scale
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline">
              Redefining Business <br />
              <span className="text-secondary glow-mint">Efficiency through AI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Static websites are a thing of the past. INFISAHA AI upgrades your digital presence into a proactive asset that communicates, analyzes, and executes without manual intervention.
            </p>

            <div className="grid gap-6">
              {showcaseItems.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mt-1 p-3 rounded-xl glass border-white/5 group-hover:border-primary/50 transition-colors"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70">{item.badge}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="w-full lg:w-1/2 relative" direction="left">
            <div className="relative glass rounded-3xl p-4 overflow-hidden glow-border shadow-[0_0_50px_rgba(0,199,255,0.1)]">
              {/* Fake Chatbot UI Preview */}
              <div className="bg-background/80 rounded-2xl border border-white/5 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">INFISAHA AI Assistant</h5>
                      <span className="text-[10px] text-primary flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        Active Now
                      </span>
                    </div>
                  </div>
                  <Database className="w-5 h-5 text-muted-foreground" />
                </div>

                <div className="space-y-4 mb-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0"></div>
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none text-xs max-w-[80%]">
                      Hello! I noticed your booking rates are up 20% this month. Would you like me to automate the follow-up emails?
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex gap-2 flex-row-reverse"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex-shrink-0"></div>
                    <div className="bg-primary/20 p-3 rounded-2xl rounded-tr-none text-xs max-w-[80%]">
                      Yes, please integrate that with our CRM and notify the clinic manager.
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5 }}
                    className="flex gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0"></div>
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none text-xs max-w-[80%] border-l-2 border-primary">
                      Workflow initiated. 45 automated emails scheduled. Manager notified. ⚡
                    </div>
                  </motion.div>
                </div>

                <div className="flex gap-2 items-center p-2 rounded-xl glass border-white/5">
                  <div className="flex-1 text-[10px] text-muted-foreground pl-2">Type your command...</div>
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                    <Zap className="w-4 h-4 text-background" />
                  </div>
                </div>
              </div>

              {/* Automation Flow Visual Effect */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-48 h-48 blur-2xl bg-secondary/30 rounded-full -z-10"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
