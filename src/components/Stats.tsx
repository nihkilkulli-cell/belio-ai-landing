import { Globe, Users, Zap, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Global reach across multiple continents"
    },
    {
      icon: Users,
      number: "1M+",
      label: "Conversations Daily",
      description: "Processing millions of voice interactions"
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Enterprise-grade reliability and performance"
    },
    {
      icon: Award,
      number: "95%",
      label: "Customer Satisfaction",
      description: "Industry-leading satisfaction scores"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-secondary/5" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-hero opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Trusted by</span>
            <span className="block gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI voice technology powers conversations for businesses worldwide, 
            delivering exceptional results at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="ai-card p-8 rounded-2xl mb-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards Section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Industry Recognition
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "AI Excellence Award 2024",
              "Best Voice Technology",
              "Innovation Leader",
              "Top B2B Solution"
            ].map((award, index) => (
              <div key={index} className="text-sm font-medium px-6 py-3 rounded-lg ai-card">
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;