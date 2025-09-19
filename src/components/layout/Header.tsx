import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

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

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  
  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // 300ms delay before hiding
  };
  
  const handleExit = () => {
    //window.location.href = com/search?q=google.com";
  };

  const isActive = (href: string) => location.pathname === href;

  const handleNavigationWithScroll = (href: string) => {
    const [path, hash] = href.split('#');
    
    // First navigate to the page
    navigate(path);
    
    // Then scroll to the section if there's a hash
    if (hash) {
      // Wait for navigation to complete and DOM to update
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-card border-b border-border shadow-card">
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/tree.jpg" alt="Logo" className="w-10 h-10 mr-3 rounded-lg object-cover" />
          </div>

          {/* Simple Exit Button */}
         <Button 
  variant="ghost" 
  onClick={handleExit}
  size="sm"
  className="text-red-500 hover:text-red-700"
>
  ✕
</Button>


        </div>
        {/* Navigation */}
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleNavigationWithScroll(item.href)}
                  className="flex items-center gap-1 text-base font-medium"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>
                {item.children.length > 0 && hoveredItem === item.label && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-50 min-w-64"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
                    <div className="py-2">
                      {item.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => handleNavigationWithScroll(child.href)}
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
    </header>
  );
};

export default Header;