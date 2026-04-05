
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry Sent",
        description: "Our AI specialists will contact you within 4 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-background/50 scroll-mt-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto glass rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border-white/10">
          <div className="w-full md:w-2/5 bg-primary p-12 text-primary-foreground relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-4xl font-bold mb-6 font-headline">Let's Build the Future</h2>
              <p className="mb-12 text-primary-foreground/80">
                Ready to upgrade your business? Book a free consultation with our expert team today.
              </p>

              <div className="space-y-6 mt-auto">
                <a href="mailto:hello@infisaha.com" className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello@infisaha.com</span>
                </a>
                <a href="tel:+918582084483" className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91 8582084483</span>
                </a>
                <a 
                  href="https://wa.me/918582084483" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span>WhatsApp Chat Available</span>
                </a>
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="w-full md:w-3/5 p-12 bg-background/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" required placeholder="john@company.com" className="bg-white/5 border-white/10 focus:border-primary/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 8582084483" className="bg-white/5 border-white/10 focus:border-primary/50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea id="message" required placeholder="Tell us about your automation goals..." className="min-h-[120px] bg-white/5 border-white/10 focus:border-primary/50" />
              </div>

              <Button type="submit" disabled={loading} className="w-full h-12 rounded-full font-bold text-base group">
                {loading ? "Processing..." : "Get Free Consultation"}
                {!loading && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </Button>
              
              <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest mt-4">
                No commitment required • AI-Powered Response
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
