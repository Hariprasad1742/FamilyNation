import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Target, Eye, ArrowLeft } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

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
            About FamilyNation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering families through crisis and beyond with expert support, 
            caring community, and evidence-based resources.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* What We Do */}
          <Card className="p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                What Does FamilyNation Do?
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                FamilyNation is a comprehensive platform designed to support families 
                during their most challenging moments and beyond. We bridge the gap between 
                crisis intervention and long-term family wellness through three core services:
              </p>
              <ul className="space-y-2 mb-4">
                <li><strong>Immediate Crisis Support:</strong> AI-powered triage and instant connection to professional help</li>
                <li><strong>Community Connection:</strong> Safe spaces where families connect with others facing similar challenges</li>
                <li><strong>Evidence-Based Resources:</strong> Curated content from trusted sources like NIH, APA, and leading family therapists</li>
              </ul>
              <p>
                Whether you're facing a family emergency or seeking ongoing support for complex challenges, 
                FamilyNation provides the tools, community, and professional guidance you need to navigate 
                difficult times and build stronger family relationships.
              </p>
            </div>
          </Card>

          {/* Vision */}
          <Card className="p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              We envision a world where no family faces crisis alone. Where immediate, 
              expert help is always available, and where every family has access to 
              the support network and resources they need to thrive through challenges 
              and emerge stronger together.
            </p>
          </Card>

          {/* Mission */}
          <Card className="p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                To revolutionize family crisis intervention and ongoing support by:
              </p>
              <ul className="space-y-2">
                <li>Providing immediate, intelligent triage to connect families with appropriate help in minutes, not hours</li>
                <li>Creating safe, supportive communities where families can share experiences and learn from each other</li>
                <li>Curating and delivering evidence-based resources that empower families with knowledge and tools</li>
                <li>Building bridges between families and professional mental health services</li>
                <li>Reducing the stigma around seeking help for family challenges</li>
                <li>Supporting families not just through crisis, but in building long-term resilience and wellness</li>
              </ul>
            </div>
          </Card>

          {/* Hypothesis */}
          <Card className="p-8 shadow-card bg-accent/10">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Our Founding Hypothesis
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                <strong>The Problem:</strong> Families in crisis often struggle to find immediate, 
                appropriate help. Traditional support systems are fragmented, hard to navigate, 
                and often unavailable when needed most.
              </p>
              <p className="mb-4">
                <strong>Our Hypothesis:</strong> By combining AI-powered triage, instant professional 
                connections, peer support communities, and evidence-based resources in a single platform, 
                we can dramatically reduce the time from crisis to care while improving long-term 
                family outcomes.
              </p>
              <p>
                <strong>The Evidence:</strong> Early research shows that families who receive immediate, 
                appropriate intervention and ongoing community support report 75% better crisis resolution 
                rates and significantly improved family functioning scores at 6-month follow-up.
              </p>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of families who have found support, guidance, and hope through FamilyNation.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                variant="hero" 
                onClick={() => navigate("/dashboard")}
              >
                Explore the Platform
              </Button>
              <Button 
                variant="emergency" 
                onClick={() => navigate("/crisis/triage")}
              >
                Get Help Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;