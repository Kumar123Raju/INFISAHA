
"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Code2, BarChart3, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { SectionReveal } from "@/components/ui/section-reveal";

const services = [
  {
    title: "AI Implementation",
    description: "Deep integration of LLMs and neural networks tailored to your specific business data and requirements.",
    icon: <Cpu className="w-10 h-10 text-primary" />,
    features: ["Custom model training", "API integrations", "NLP solutions"]
  },
  {
    title: "Website to Automation Upgrade",
    description: "We don't just build sites; we build systems. Transforming presence into a self-managing revenue engine.",
    icon: <Monitor className="w-10 h-10 text-secondary" />,
    features: ["Automated booking", "Self-service portals", "Lead nurturing bots"]
  },
  {
    title: "Custom Software Development",
    description: "Bespoke software solutions built for performance, security, and extreme scalability from day one.",
    icon: <Code2 className="w-10 h-10 text-primary" />,
    features: ["React/Next.js experts", "Microservices", "Cloud native architecture"]
  },
  {
    title: "Dashboard & Analytics",
    description: "Intelligent data visualization that doesn't just show numbers, but provides actionable AI-driven insights.",
    icon: <BarChart3 className="w-10 h-10 text-secondary" />,
    features: ["Real-time tracking", "Predictive modeling", "Behavioral analytics"]
  }
];

export const Services = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container px-4 mx-auto">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to future-proof your business operations with the latest in artificial intelligence and modern web engineering.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="glass border-white/5 hover:border-primary/50 transition-colors duration-500 group relative overflow-hidden flex flex-col h-full glow-border hover:shadow-[0_0_30px_rgba(0,199,255,0.15)]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/20 transition-all"></div>
                  
                  <CardHeader>
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="mb-4 w-fit"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-bold mb-2 font-headline group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 mt-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="text-xs flex items-center gap-2 text-muted-foreground">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            className="w-1 h-1 bg-primary rounded-full"
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <button className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-3 h-3" />
                    </button>
                  </CardFooter>
                </Card>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
