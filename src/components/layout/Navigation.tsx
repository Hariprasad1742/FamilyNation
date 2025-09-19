import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const navItems = [
    {
      label: "About Us",
      href: "/about",
      children: [
        { label: "What We Do", href: "/about#what-we-do" },
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

  // Scroll-to-hash with retries (useful when navigating to a page + hash)
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 10;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts <= maxAttempts) {
        setTimeout(tryScroll, 100);
      }
    };
    // Give the router a tick to render the new route, then start attempts
    setTimeout(tryScroll, 0);
  }, [location.key, location.hash, location.pathname]);

  // Close dropdown on outside click and on Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!navRef.current) return;
      const target = e.target as Node;
      if (!navRef.current.contains(target)) {
        setOpenItem(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenItem(null);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Parent button behavior:
  // - If item has children: toggle dropdown (useful on mobile & desktop)
  // - If no children: navigate directly
  const handleParentClick = (item: typeof navItems[number]) => {
    if (item.children && item.children.length > 0) {
      setOpenItem((prev) => (prev === item.label ? null : item.label));
    } else {
      navigate(item.href);
      setOpenItem(null);
    }
  };

  // Child click:
  // - If on same base path, attempt immediate scroll, otherwise navigate to base#hash
  const handleChildClick = (childHref: string) => {
    const [base, hash] = childHref.split("#");
    if (hash) {
      if (location.pathname === base) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // element not present yet — set the hash so the scroll-effect (above) will retry
          navigate(childHref);
        }
      } else {
        // navigate to the page + hash — effect will handle scrolling retries
        navigate(childHref);
      }
    } else {
      navigate(childHref);
    }
    setOpenItem(null);
  };

  return (
    <nav ref={navRef} className="bg-card border-b border-border shadow-card relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenItem(item.label)}
                onMouseLeave={() => setOpenItem((prev) => (prev === item.label ? null : prev))}
              >
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleParentClick(item)}
                  aria-expanded={openItem === item.label}
                  className="flex items-center gap-1 text-base font-medium"
                >
                  {item.label}
                  {item.children.length > 0 && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>

                {item.children.length > 0 && openItem === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg z-50 min-w-[16rem]"
                    role="menu"
                    aria-label={`${item.label} submenu`}
                  >
                    <div className="py-2">
                      {/* Optional top-level link to navigate to the section page itself */}
                      <button
                        onClick={() => {
                          navigate(item.href);
                          setOpenItem(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {item.label}
                      </button>

                      <div className="border-t border-border/60 my-1" />

                      {item.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => handleChildClick(child.href)}
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
