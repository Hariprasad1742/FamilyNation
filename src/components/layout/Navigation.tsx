import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    {
      label: "About Us",
      href: "/about",
      children: [
        { label: "What Does FamilyNation Do", href: "/about#what-we-do" },
        { label: "Our Vision", href: "/about#vision" },
        { label: "Our Mission", href: "/about#mission" },
        { label: "Our Founding Hypothesis", href: "/about#hypothesis" }
      ]
    },
    {
      label: "What You Get",
      href: "/benefits",
      children: [
        { label: "What Do You Get From Us?", href: "/benefits#what-you-get" },
        { label: "How Are We Different?", href: "/benefits#different" },
        { label: "Why Us? Why Now?", href: "/benefits#why-us" }
      ]
    },
    {
      label: "Contact Us",
      href: "/contact",
      children: []
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-card border-b border-border shadow-card relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate(item.href)}
                  className="flex items-center gap-1 text-base font-medium"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>
                
                {item.children.length > 0 && hoveredItem === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-50 min-w-64">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => navigate(child.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;