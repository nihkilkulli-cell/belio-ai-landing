import { Button } from "@/components/ui/button";
import { Mic, Play, Zap, Brain, MessageSquare } from "lucide-react";
import heroImage from "@/assets/voice-ai-hero.jpg";
import { useState } from "react";
import DemoRequestForm from "./DemoRequestForm";

const Hero = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-blue/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-teal/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main Hero Content */}
        <div className="space-y-8">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
            <Brain className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Advanced Voice AI Solutions</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Turn Conversations Into Customers — Powered by </span>
              <span className="gradient-text">Voice AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Inbound & Outbound Voice Agents + Chatbots to Automate Sales, Support, and Lead Generation 24/7.
            </p>
          </div>

          {/* Hero Image/Microphone */}
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-48 md:h-48 mx-auto relative">
              <img 
                src={heroImage} 
                alt="Belio AI Voice Technology" 
                className="w-full h-full object-cover rounded-full floating-animation ai-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-accent/20 pulse-glow" />
              <Button 
                size="icon" 
                variant="hero" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
                onClick={() => {
                  // Add voice demo functionality here
                }}
              >
                <Mic className="w-8 h-8" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Click to experience our AI voice assistant
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="group" onClick={() => setShowDemoForm(true)}>
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start My Free Demo
            </Button>
            <Button variant="ai" size="xl">
              <MessageSquare className="w-5 h-5" />
              Schedule Consultation
            </Button>
          </div>

        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full opacity-60 animate-bounce delay-300" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-ai-blue rounded-full opacity-40 animate-bounce delay-700" />
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-ai-teal rounded-full opacity-50 animate-bounce delay-500" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-ai-purple rounded-full opacity-70 animate-bounce delay-1000" />

      {/* Demo Request Form Modal */}
      <DemoRequestForm 
        isOpen={showDemoForm} 
        onClose={() => setShowDemoForm(false)} 
      />
    </section>
  );
};

export default Hero;