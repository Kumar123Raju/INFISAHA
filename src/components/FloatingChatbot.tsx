
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import { chatWithFutureForgeAI } from "@/ai/flows/ai-chatbot";

type Message = {
  role: "bot" | "user";
  content: string;
};

export const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi! I'm the FutureForge Assistant. How can I help upgrade your business with AI today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatWithFutureForgeAI({ question: userMsg });
      setMessages(prev => [...prev, { role: "bot", content: response.answer }]);
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
            className="w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl flex flex-col shadow-2xl border-primary/20 mb-6 overflow-hidden"
          >
            <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">FutureForge AI</h4>
                  <span className="text-[10px] opacity-70 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                    Active Agent
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-none' 
                      : 'bg-muted text-foreground rounded-tl-none border border-white/5'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/5">
              <div className="flex gap-2">
                <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services..." 
                  className="bg-white/5 border-white/10 rounded-xl h-10"
                />
                <Button onClick={handleSend} size="icon" className="rounded-xl h-10 w-10">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-[9px] text-center mt-3 text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-1">
                <Sparkles className="w-2 h-2 text-primary" /> Powered by FutureForge GenKit
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: isOpen ? "0 0 0px rgba(0,199,255,0)" : ["0 0 0px rgba(0,199,255,0)", "0 0 20px rgba(0,199,255,0.5)", "0 0 0px rgba(0,199,255,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl relative group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
