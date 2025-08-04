import { Brain, Zap, Shield, Globe, Cpu, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced NLP",
      description: "State-of-the-art natural language processing that understands context, intent, and emotion with human-like accuracy.",
      color: "ai-blue"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast voice recognition and response generation with sub-second latency for seamless conversations.",
      color: "ai-teal"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with GDPR, HIPAA, and SOC 2 standards to protect sensitive data.",
      color: "ai-purple"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Communicate in 50+ languages with native-level fluency and cultural context understanding.",
      color: "ai-green"
    },
    {
      icon: Cpu,
      title: "Custom Training",
      description: "AI models trained specifically for your industry, brand voice, and unique business requirements.",
      color: "ai-blue"
    },
    {
      icon: Headphones,
      title: "24/7 Availability",
      description: "Round-the-clock customer support with consistent quality and unlimited concurrent conversations.",
      color: "ai-teal"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ai-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ai-purple/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Built for</span>
            <span className="block gradient-text">Performance</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of voice AI technology designed to transform 
            how businesses communicate with their customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="ai-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:bg-${feature.color}/20 transition-colors`}>
                  <Icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="ai-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to experience the future?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of companies already using Belio AI to revolutionize their customer interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-accent text-background font-semibold rounded-lg hover:shadow-accent-glow transform hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-accent/20 text-accent hover:bg-accent/10 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;