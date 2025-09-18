import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Shield, Users, ArrowRight } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Feeling Overwhelmed?{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Get Support Now.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            When your family is in crisis, you don't have to face it alone. 
            Get immediate help, expert guidance, and caring community support.
          </p>

          {/* Primary CTA */}
          <div className="space-y-6">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate("/crisis/triage")}
              className="shadow-soft hover:shadow-emergency transition-all duration-300"
            >
              Help Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Free, confidential, and available 24/7
            </p>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center shadow-card hover:shadow-soft transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Safe & Secure</h3>
            <p className="text-muted-foreground text-sm">
              Your privacy is protected. Quick exit available anytime.
            </p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-soft transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Care</h3>
            <p className="text-muted-foreground text-sm">
              Licensed professionals and evidence-based support.
            </p>
          </Card>

          <Card className="p-6 text-center shadow-card hover:shadow-soft transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <p className="text-muted-foreground text-sm">
              Connect with families who understand your journey.
            </p>
          </Card>
        </div>
      </div>

      {/* Secondary CTA */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Already a member?
          </h2>
          <p className="text-muted-foreground mb-6">
            Access your personalized dashboard, community groups, and resources.
          </p>
          <Button 
            variant="calm" 
            size="lg"
            onClick={() => navigate("/login")}
          >
            Member Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;