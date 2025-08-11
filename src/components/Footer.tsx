import { Brain, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {

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
        <div className="flex justify-center mb-12">
          {/* Brand Section */}
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/lovable-uploads/fd56076c-e39f-467b-9b21-4ba5e5b38c0d.png" alt="Belio AI Logo" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold gradient-text">Belio AI</span>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Transforming customer interactions with intelligent voice AI technology. 
              Natural conversations, seamless integration, powerful automation.
            </p>
            
            <div className="flex gap-4 justify-center">
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
