import { Phone, PhoneCall, MessageCircle, Zap, Shield, Headphones } from "lucide-react";
const Services = () => {
  const services = [{
    icon: PhoneCall,
    title: "Inbound Voice Agent",
    description: "Respond faster, cut costs, and improve customer experience with our Virtual Concierge. It handles inbound queries instantly and accurately anytime, lowering operational load, boosting satisfaction, and increasing conversions.",
    color: "ai-blue",
    features: ["24/7 instant response to customer inquiries", "Accurate and context-aware understanding", "Reduced wait times and operational costs", "Seamless integration with existing CRM systems", "Improved customer satisfaction and retention"]
  }, {
    icon: Phone,
    title: "Outbound Voice Agent",
    description: "Reignite interest and create new opportunities. Our Voice AI Agents support your outbound strategy by reaching out to dormant leads and opening the door to meaningful sales conversations with consistent and easy follow-ups.",
    color: "ai-teal",
    features: ["Automated outreach to dormant or cold leads", "Personalized and natural conversations", "Consistent follow-ups to maximize conversions", "Data-driven targeting for optimal results", "Easy campaign management and analytics"]
  }, {
    icon: MessageCircle,
    title: "Chatbot Services",
    description: "Enhance engagement with smart chatbots that provide real-time support, qualify leads, and streamline communication across platforms, making every interaction efficient and on brand.",
    color: "ai-purple",
    features: ["Multichannel chatbot integration (website, social, messaging apps)", "Lead qualification and data capture", "Natural language processing for smooth conversations", "Easy customization to match your brand voice", "Analytics and performance tracking"]
  }];
  return <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ai-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ai-purple/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Conversation AI</span>
            <span className="block gradient-text">Development</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming your business with intelligent Voice AI solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} className="ai-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:bg-${service.color}/20 transition-colors`}>
                  <Icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}`} />
                        {feature}
                      </li>)}
                  </ul>
                </div>
              </div>;
        })}
        </div>

        {/* Additional Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-center gap-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/20">
            <Shield className="w-8 h-8 text-ai-blue" />
            <div>
              <h4 className="font-semibold text-foreground">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground">Bank-grade encryption & compliance</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/20">
            <Headphones className="w-8 h-8 text-ai-teal" />
            <div>
              <h4 className="font-semibold text-foreground">Custom Training</h4>
              <p className="text-sm text-muted-foreground">AI tailored to your business needs</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/20">
            <Zap className="w-8 h-8 text-ai-purple" />
            <div>
              <h4 className="font-semibold text-foreground">Real-time Processing</h4>
              <p className="text-sm text-muted-foreground">Sub-second response times</p>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default Services;