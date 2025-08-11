import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Play, MessageSquare } from "lucide-react";
import { DemoRequestForm } from "./DemoRequestForm";
import voiceAiHero from "../assets/voice-ai-hero.jpg";
const Contact = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="relative py-24 overflow-hidden" style={{
    backgroundImage: `url(${voiceAiHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80 backdrop-blur-sm"></div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Book a free consultation or send us a message. We'll help you transform your customer service with AI.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              variant="cta" 
              size="xl" 
              className="group"
              onClick={() => setShowDemoForm(true)}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start My Free Demo
            </Button>
            <Button 
              variant="ai" 
              size="xl"
              onClick={() => window.open('https://calendly.com/abishai-belio/new-meeting', '_blank')}
            >
              <MessageSquare className="w-5 h-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Form */}
          

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            <div className="ai-card p-8 rounded-2xl backdrop-blur-lg bg-background/80">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-blue/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">abishai@belio.ai</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-teal/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-ai-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Schedule a Call</h4>
                    <p className="text-muted-foreground">Free 30-minute consultation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ai-purple/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-ai-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Toronto, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-xl backdrop-blur-sm">
                <div className="w-2 h-2 bg-ai-blue rounded-full"></div>
                <span className="text-foreground font-medium">24/7 Availability</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-xl backdrop-blur-sm">
                <div className="w-2 h-2 bg-ai-teal rounded-full"></div>
                <span className="text-foreground font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-xl backdrop-blur-sm">
                <div className="w-2 h-2 bg-ai-purple rounded-full"></div>
                <span className="text-foreground font-medium">30-Day Trial</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-xl backdrop-blur-sm">
                <div className="w-2 h-2 bg-ai-coral rounded-full"></div>
                <span className="text-foreground font-medium">Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DemoRequestForm 
        open={showDemoForm} 
        onOpenChange={setShowDemoForm} 
      />
    </section>;
};
export default Contact;