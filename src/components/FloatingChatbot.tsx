
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";
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
      {isOpen ? (
        <div className="w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl flex flex-col shadow-2xl animate-in zoom-in-95 fade-in duration-300 border-primary/20">
          <div className="p-4 bg-primary text-primary-foreground rounded-t-3xl flex items-center justify-between">
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
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-tr-none' 
                    : 'bg-muted text-foreground rounded-tl-none border border-white/5'
                }`}>
                  {msg.content}
                </div>
              </div>
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
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float group"
        >
          <MessageSquare className="w-6 h-6 group-hover:hidden" />
          <Sparkles className="w-6 h-6 hidden group-hover:block animate-spin" style={{ animationDuration: '3s' }} />
        </button>
      )}
    </div>
  );
};
