import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  Shield, 
  Users, 
  Brain,
  CheckCircle,
  Star,
  Zap,
  Heart
} from "lucide-react";

const Benefits = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Clock,
      title: "Immediate Support",
      description: "Get help in minutes, not days. Our AI triage connects you with the right support instantly.",
      highlight: "60-second response time"
    },
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Intelligent system that understands your specific situation and matches you with optimal resources.",
      highlight: "Personalized recommendations"
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "Join families facing similar challenges in safe, moderated support groups.",
      highlight: "24/7 peer support"
    },
    {
      icon: Shield,
      title: "Professional Network",
      description: "Access to vetted, licensed professionals specializing in family crisis intervention.",
      highlight: "Verified experts only"
    }
  ];

  const differentiators = [
    {
      feature: "Crisis Response Time",
      us: "60 seconds",
      others: "24-72 hours",
      advantage: "120x faster"
    },
    {
      feature: "Professional Matching",
      us: "AI-powered personalization",
      others: "Generic directories",
      advantage: "Precision targeting"
    },
    {
      feature: "Community Support",
      us: "Integrated peer groups",
      others: "Isolated resources",
      advantage: "Holistic approach"
    },
    {
      feature: "Resource Quality",
      us: "Evidence-based curation",
      others: "Mixed quality content",
      advantage: "Scientific backing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            What Do You Get From FamilyNation?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just resources – a complete support ecosystem designed 
            specifically for families in crisis and recovery.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Core Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Your Complete Support System
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-6 shadow-card hover:shadow-soft transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {benefit.description}
                        </p>
                        <Badge variant="secondary" className="bg-accent text-accent-foreground">
                          {benefit.highlight}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* How We're Different */}
          <Card className="p-8 shadow-card">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How Are We Different From Others?
              </h2>
              <p className="text-muted-foreground">
                See how FamilyNation compares to traditional support options
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-semibold text-foreground">Feature</th>
                    <th className="text-center py-3 font-semibold text-primary">FamilyNation</th>
                    <th className="text-center py-3 font-semibold text-muted-foreground">Traditional Options</th>
                    <th className="text-center py-3 font-semibold text-success">Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {differentiators.map((diff, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 font-medium text-foreground">{diff.feature}</td>
                      <td className="py-4 text-center">
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                          {diff.us}
                        </Badge>
                      </td>
                      <td className="py-4 text-center text-muted-foreground">{diff.others}</td>
                      <td className="py-4 text-center">
                        <Badge variant="default" className="bg-success text-success-foreground">
                          {diff.advantage}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Why Us Why Now */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Why Us?</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Built by families, for families</h3>
                    <p className="text-sm text-muted-foreground">Our founders experienced family crisis firsthand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Evidence-based approach</h3>
                    <p className="text-sm text-muted-foreground">Every resource backed by research and clinical evidence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Professional partnerships</h3>
                    <p className="text-sm text-muted-foreground">Vetted network of licensed mental health experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Technology that cares</h3>
                    <p className="text-sm text-muted-foreground">AI designed for empathy, not efficiency alone</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Why Now?</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Mental health crisis</h3>
                    <p className="text-sm text-muted-foreground">Family challenges at all-time highs post-pandemic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">System gaps</h3>
                    <p className="text-sm text-muted-foreground">Traditional services overwhelmed and fragmented</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Technology readiness</h3>
                    <p className="text-sm text-muted-foreground">AI and digital health tools finally mature enough</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Reduced stigma</h3>
                    <p className="text-sm text-muted-foreground">Families more open to seeking digital support</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center py-8">
            <Card className="p-8 shadow-card bg-gradient-hero text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="mb-6 opacity-90">
                Join thousands of families who have found the support they needed, 
                exactly when they needed it.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                >
                  Explore Platform
                </Button>
                <Button 
                  variant="emergency" 
                  size="lg"
                  onClick={() => navigate("/crisis/triage")}
                >
                  Get Help Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;