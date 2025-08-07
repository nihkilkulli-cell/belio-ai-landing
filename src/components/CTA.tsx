import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Calendar } from "lucide-react";
import bgImage from "@/assets/ai-network-bg.jpg";

const CTA = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/10 backdrop-blur-sm">
            <Mic className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Ready to Transform Your Business?</span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Start Your</span>
              <span className="block gradient-text">AI Journey</span>
              <span className="block text-foreground">Today</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join the voice AI revolution. Experience the power of Belio AI with our 
              free demo and see how we can transform your customer interactions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="cta" size="xl" className="group">
              <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Try Live Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ai" 
              size="xl" 
              onClick={() => window.open('https://calendly.com/abishai-belio', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </Button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Free 30-Day Trial",
                description: "No credit card required. Full access to all features."
              },
              {
                title: "Expert Support",
                description: "Dedicated team to help you get started and optimize results."
              },
              {
                title: "Custom Integration",
                description: "Seamless integration with your existing systems and workflows."
              }
            ].map((feature, index) => (
              <div key={index} className="ai-card p-6 rounded-xl text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="pt-12 border-t border-border/20">
            <p className="text-muted-foreground mb-4">
              Have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a href="mailto:hello@belio.ai" className="text-accent hover:text-accent/80 transition-colors">
                abishai@belio.ai
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              {/*   <a href="tel:+1-555-BELIO-AI" className="text-accent hover:text-accent/80 transition-colors">
               +1 (555) BELIO-AI
                </a>
              <span className="hidden sm:block text-muted-foreground">•</span>   */}
              <span className="text-muted-foreground">Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
