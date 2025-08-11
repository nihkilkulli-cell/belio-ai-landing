import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DemoRequestForm } from "@/components/DemoRequestForm";

const Pricing = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleGetStarted = (service: string) => {
    setSelectedService(service);
    setIsDemoFormOpen(true);
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Pricing Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the package that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="ai-card p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Custom Support Package</CardTitle>
              <div className="text-4xl font-bold gradient-text mb-4">$199<span className="text-lg text-muted-foreground"> / month</span></div>
              <p className="text-muted-foreground">Ideal for businesses requiring ongoing voice agent management, monitoring, and improvements.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Monthly recommendations & reports
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  3 monthly voice agent upgrades
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Top-tier reliability improvements
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Ongoing development team support
                </li>
              </ul>
              <p className="text-sm text-muted-foreground/80 mt-4 italic">Pricing may vary for complex projects.</p>
              <Button className="w-full mt-8" onClick={() => handleGetStarted("Custom Support Package")}>Get Started</Button>
            </CardContent>
          </Card>

          <Card className="ai-card p-8 rounded-2xl border-2 border-ai-blue hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-ai-blue to-ai-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Custom Voice Agent</CardTitle>
              <div className="text-4xl font-bold gradient-text mb-4">$1500<span className="text-lg text-muted-foreground"> USD</span></div>
              <p className="text-muted-foreground">Ideal for businesses looking to deploy a single Voice AI Agent on one dedicated phone line.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Voice agent pilot testing & deployment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom dashboard for call metrics tracking
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Call flow design (up to 4 call pathways)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom API integrations (up to 2)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Knowledge base optimization (up to 50 pages)
                </li>
              </ul>
              <p className="text-sm text-muted-foreground/80 mt-4 italic">Pricing may vary for complex projects.</p>
              <Button className="w-full mt-8" onClick={() => handleGetStarted("Custom Voice Agent")}>Get Started</Button>
            </CardContent>
          </Card>

          <Card className="ai-card p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Custom Chatbot</CardTitle>
              <div className="text-4xl font-bold gradient-text mb-4">$750<span className="text-lg text-muted-foreground"> USD</span></div>
              <p className="text-muted-foreground">Perfect for businesses wanting a tailored chatbot solution to engage customers effectively.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom chatbot design & deployment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Multichannel integration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lead qualification & data capture
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Performance analytics & optimization
                </li>
              </ul>
              <p className="text-sm text-muted-foreground/80 mt-4 italic">Pricing may vary based on complexity.</p>
              <Button className="w-full mt-8" onClick={() => handleGetStarted("Custom Chatbot")}>Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <DemoRequestForm
        open={isDemoFormOpen}
        onOpenChange={setIsDemoFormOpen}
        preselectedService={selectedService}
      />
    </section>
  );
};

export default Pricing;