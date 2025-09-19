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
            What You'll Get
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support and resources designed specifically for families in crisis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">

          {/* 1. What Do You Get From Us? */}
          <div id="what-you-get">
            <Card className="p-8 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What Do You Get From Us?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                        <p className="text-sm text-primary mt-1">{benefit.highlight}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* 2. How Are We Different? */}
          <div id="different">
            <Card className="p-8 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                How Are We Different?
              </h2>
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
          </div>

          {/* 3. Why Us? Why Now? */}
          <div id="why-us">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Why Us */}
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

              {/* Why Now */}
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Benefits;
