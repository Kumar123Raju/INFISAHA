
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/ui/section-reveal";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "AI Engineer",
    description: "Specializes in deep learning and NLP integrations.",
    imageSeed: "ai-eng"
  },
  {
    name: "Sarah Chen",
    role: "Frontend Lead",
    description: "Master of fluid UI and high-performance React architectures.",
    imageSeed: "frontend-lead"
  },
  {
    name: "Marcus Thorne",
    role: "Backend Architect",
    description: "Building resilient and scalable cloud-native microservices.",
    imageSeed: "backend-arch"
  }
];

export const Team = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <SectionReveal className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
            The Experts
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collective of highly skilled engineers dedicated to pushing the boundaries of what's possible with automation.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <SectionReveal key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-6 border-white/5 hover:border-primary/50 transition-all duration-500 group glow-border"
              >
                <div className="aspect-square relative rounded-2xl overflow-hidden mb-6">
                  <Image 
                    src={`https://picsum.photos/seed/${member.imageSeed}/400/400`} 
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint="professional team member"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <h4 className="text-xl font-bold mb-1 font-headline group-hover:text-primary transition-colors">{member.name}</h4>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-none text-[10px]">
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
