
"use client";

import { Shield, Clock, Rocket, Headset } from "lucide-react";

const reasons = [
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Reliable Systems",
    description: "Our architectures are built for 99.99% uptime with robust error handling and self-healing AI agents."
  },
  {
    icon: <Clock className="w-12 h-12 text-secondary" />,
    title: "Cost Efficient",
    description: "Automate repetitive labor and reduce operational overhead by up to 40% in the first quarter."
  },
  {
    icon: <Rocket className="w-12 h-12 text-primary" />,
    title: "Scalable Solutions",
    description: "Grow from 100 to 100,000+ users seamlessly with our elastic cloud-native infrastructure."
  },
  {
    icon: <Headset className="w-12 h-12 text-secondary" />,
    title: "Always Support",
    description: "24/7 technical monitoring and dedicated account managers who speak both business and code."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Why FutureForge AI?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just deliver software; we deliver a partnership dedicated to your growth through technical excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="p-4 rounded-2xl glass relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {reason.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">{reason.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
