
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  Sparkles, 
  Zap, 
  Calendar, 
  ChevronRight,
  Headphones
} from "lucide-react";
import { chatWithINFISAHA } from "@/ai/flows/ai-chatbot";

type Message = {
  role: "bot" | "user";
  content: string;
};

const QUICK_ACTIONS = [
  { label: "I want a website", icon: <Zap className="w-3 h-3" /> },
  { label: "AI automation", icon: <Bot className="w-3 h-3" /> },
  { label: "Show me demo", icon: <Calendar className="w-3 h-3" /> },
  { label: "Talk to expert", icon: <Headphones className="w-3 h-3" /> },
];

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi 👋 I'm INFISAHAI. How can I help upgrade your business with intelligent systems today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [leadCaptureStep, setLeadCaptureStep] = useState<null | 'name' | 'phone' | 'complete'>(null);
  const [leadData, setLeadData] = useState({ name: '', phone: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const userMsg = textOverride || input.trim();
    if (!userMsg || isLoading) return;

    if (!textOverride) setInput("");
    
    if (leadCaptureStep === 'name') {
      setLeadData(prev => ({ ...prev, name: userMsg }));
      setMessages(prev => [...prev, { role: "user", content: userMsg }]);
      setMessages(prev => [...prev, { role: "bot", content: "Great! And what is the best phone number to reach you at?" }]);
      setLeadCaptureStep('phone');
      return;
    }

    if (leadCaptureStep === 'phone') {
      setLeadData(prev => ({ ...prev, phone: userMsg }));
      setMessages(prev => [...prev, { role: "user", content: userMsg }]);
      setMessages(prev => [...prev, { role: "bot", content: "Perfect. One of our experts will contact you shortly to discuss your project. Is there anything else you'd like to know in the meantime?" }]);
      setLeadCaptureStep('complete');
      return;
    }

    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ 
        role: m.role === 'bot' ? 'model' as const : 'user' as const, 
        content: m.content 
      }));
      
      const response = await chatWithINFISAHA({ question: userMsg, history });
      
      setMessages(prev => [...prev, { role: "bot", content: response.answer }]);

      if (response.requiresLeadCapture && !leadCaptureStep) {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: "bot", content: "To get started, could I have your name please?" }]);
          setLeadCaptureStep('name');
        }, 1000);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "bot", content: "I'm having a slight technical glitch. Feel free to contact us via the form!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[350px] sm:w-[420px] h-[600px] glass rounded-3xl flex flex-col shadow-2xl border-primary/20 mb-6 overflow-hidden ring-1 ring-white/10"
          >
            <div className="p-5 bg-gradient-to-r from-primary to-accent text-primary-foreground flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">INFISAHAI</h4>
                  <span className="text-[10px] opacity-90 flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_rgba(165,243,212,0.8)]"></span>
                    Infinite Support Active
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/10 p-2 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide bg-background/40">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-none' 
                      : 'bg-muted/80 backdrop-blur-md text-foreground rounded-tl-none border border-white/5'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted/80 p-4 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-primary rounded-full"></motion.span>
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-primary rounded-full"></motion.span>
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-primary rounded-full"></motion.span>
                  </div>
                </div>
              )}
            </div>

            <AnimatePresence>
              {!isLoading && messages.length < 5 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 pb-2 flex flex-wrap gap-2"
                >
                  {QUICK_ACTIONS.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(action.label)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-primary/50 hover:bg-primary/10 transition-all group"
                    >
                      <span className="text-primary">{action.icon}</span>
                      {action.label}
                      <ChevronRight className="w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="p-4 border-t border-white/5 bg-background/60 backdrop-blur-md">
              <div className="flex gap-2 relative">
                <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={leadCaptureStep === 'name' ? "Enter your name..." : leadCaptureStep === 'phone' ? "Enter phone number..." : "Consult with INFISAHAI..."} 
                  className="bg-white/5 border-white/10 rounded-2xl h-12 pr-12 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                />
                <Button 
                  onClick={() => handleSend()} 
                  size="icon" 
                  className="rounded-xl h-10 w-10 absolute right-1 top-1 bg-primary hover:bg-primary/80 transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-[9px] text-center mt-3 text-muted-foreground uppercase tracking-[0.2em] flex items-center justify-center gap-2 font-bold">
                <Sparkles className="w-2.5 h-2.5 text-primary animate-pulse" /> 
                Next-Gen Automation Engine
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_rgba(0,199,255,0.4)] relative group overflow-hidden border border-white/20"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/40 rounded-full -z-10"
        />
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="flex flex-col items-center">
              <MessageSquare className="w-7 h-7" />
              <motion.div 
                animate={{ width: [4, 8, 4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1 bg-white/80 rounded-full mt-0.5"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
