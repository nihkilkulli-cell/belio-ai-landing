import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Services",
    href: "#services"
  }, {
    name: "Pricing",
    href: "#pricing"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/fd56076c-e39f-467b-9b21-4ba5e5b38c0d.png" alt="Belio AI Logo" className="w-10 h-10 object-contain ml-2" />
            <span className="text-2xl font-bold gradient-text">Belio AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium">
                {item.name}
              </a>)}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/20">
            <div className="px-6 py-4 space-y-4">
              {navItems.map(item => <a key={item.name} href={item.href} className="block text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>)}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;