import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="ai-card p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Starter</CardTitle>
              <div className="text-4xl font-bold gradient-text mb-4">$299<span className="text-lg text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground">Perfect for small businesses</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 500 calls/month
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic AI voice agent
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email support
                </li>
              </ul>
              <Button className="w-full mt-8">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="ai-card p-8 rounded-2xl border-2 border-ai-blue hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-ai-blue to-ai-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Professional</CardTitle>
              <div className="text-4xl font-bold gradient-text mb-4">$599<span className="text-lg text-muted-foreground">/month</span></div>
              <p className="text-muted-foreground">For growing businesses</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 2,000 calls/month
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced AI voice agent
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Calendar integrations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <Button className="w-full mt-8">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="ai-card p-8 rounded-2xl border-2 hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">Enterprise</CardTitle>
              <div className="text-4xl font-bold gradient-text mb-4">Custom</div>
              <p className="text-muted-foreground">For large organizations</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited calls
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom AI training
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API access
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-ai-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated support
                </li>
              </ul>
              <Button className="w-full mt-8">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;