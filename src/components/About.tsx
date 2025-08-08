const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            About Us
          </h1>
           <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Seamless. Smart. Scalable.
          </h2>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
          <p>
            Belio AI helps service businesses work smarter, not harder.
          </p>
          
          <p>
           We build AI-powered voice agents that answer calls, qualify leads, and book appointments 24/7 so you never miss a customer.
          </p>

          <p>
            We believe the future of customer service is continuous, intelligent, and personalized. With Belio AI, your business remains available to customers around the clock without increasing your team’s workload.
          </p>

          <p>
            Founded in Canada, Belio AI serves clients across North America, helping them turn missed calls into booked appointments and happy customers.
          </p>
        </div>
        <div className="my-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Our mission</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="ai-card text-center p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-ai-blue/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-ai-blue/20 transition-colors">
                  <svg className="w-8 h-8 text-ai-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Save Time</h4>
                <p className="text-muted-foreground leading-relaxed">Handle repetitive calls and admin tasks automatically</p>
              </div>

              <div className="ai-card text-center p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-ai-teal/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-ai-teal/20 transition-colors">
                  <svg className="w-8 h-8 text-ai-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Increase Revenue</h4>
                <p className="text-muted-foreground leading-relaxed">Capture more qualified leads around the clock</p>
              </div>

              <div className="ai-card text-center p-8 rounded-2xl group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-ai-purple/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-ai-purple/20 transition-colors">
                  <svg className="w-8 h-8 text-ai-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Improve Experience</h4>
                <p className="text-muted-foreground leading-relaxed">Fast, friendly, human-like conversations</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;