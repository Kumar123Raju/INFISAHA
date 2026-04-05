
import { Hero } from "@/components/sections/Hero";
import { AiShowcase } from "@/components/sections/AiShowcase";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ContactForm } from "@/components/sections/ContactForm";
import { Founder } from "@/components/sections/Founder";
import { Team } from "@/components/sections/Team";
import { FloatingChatbot } from "@/components/FloatingChatbot";
import { Toaster } from "@/components/ui/toaster";
import { AnimatedLogo } from "@/components/AnimatedLogo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="container px-4 mx-auto h-20 flex items-center justify-between">
          <AnimatedLogo showText size={45} />
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Vision</a>
            <a href="#" className="hover:text-primary transition-colors">Solutions</a>
            <a href="#" className="hover:text-primary transition-colors">Founder</a>
            <a href="#" className="hover:text-primary transition-colors">Team</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <button className="px-6 py-2 rounded-full border border-primary/50 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Book Demo
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <AiShowcase />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Founder />
        <Team />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <AnimatedLogo showText size={35} />
            
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 INFISAHA Systems. Infinite Support. Intelligent Systems.<br />
              <span className="text-[10px] uppercase tracking-widest">Built with trust and reliability.</span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <FloatingChatbot />
      <Toaster />
    </div>
  );
}
