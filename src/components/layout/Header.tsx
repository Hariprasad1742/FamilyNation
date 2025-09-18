import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleExit = () => {
    window.location.href = "https://www.google.com/search?q=google.com";
  };

  return (
    <header className="bg-card border-b border-border shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-8 h-8 bg-gradient-hero rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-sm">FN</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">FamilyNation</h1>
          </div>

          {/* Simple Exit Button */}
          <Button 
            variant="ghost" 
            onClick={handleExit}
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            ✕
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;