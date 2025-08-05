import { Brain, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "API Docs", href: "#" },
        { name: "Integrations", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Developer Guide", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Security", href: "#" },
        { name: "GDPR", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Github, href: "#", name: "GitHub" },
    { icon: Mail, href: "mailto:abishai@belio.ai", name: "Email" }
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-lg border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Brain className="w-6 h-6 text-background" />
              </div>
              <span className="text-2xl font-bold gradient-text">Belio AI</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming customer interactions with intelligent voice AI technology. 
              Natural conversations, seamless integration, powerful automation.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted/10 hover:bg-accent/20 flex items-center justify-center group transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="ai-card p-8 rounded-2xl mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay ahead of the curve
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on voice AI technology and industry insights.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
              />
              <button className="px-6 py-3 bg-gradient-accent text-background font-semibold rounded-lg hover:shadow-accent-glow transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Belio AI. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Made with AI ❤️</span>
            <span>•</span>
            <span>Powered by Advanced Machine Learning</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
