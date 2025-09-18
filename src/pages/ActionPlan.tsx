import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Phone, 
  Users, 
  ArrowLeft, 
  Star,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";

interface Professional {
  name: string;
  title: string;
  specialty: string;
  rating: number;
  distance: string;
  availability: string;
  phone: string;
  reason: string;
}

const ActionPlan = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState<string[]>([]);

  useEffect(() => {
    const storedResponses = sessionStorage.getItem('triageResponses');
    if (storedResponses) {
      setResponses(JSON.parse(storedResponses));
    } else {
      navigate("/crisis/triage");
    }
  }, [navigate]);

  const planSteps = [
    "Take 5 deep breaths and find a quiet space",
    "Call one of the recommended professionals below",
    "Consider joining our support group meeting tonight at 7 PM"
  ];

  const professionals: Professional[] = [
    {
      name: "Dr. Sarah Chen",
      title: "Licensed Clinical Social Worker",
      specialty: "Family Crisis Intervention",
      rating: 4.9,
      distance: "2.3 miles",
      availability: "Available today",
      phone: "(555) 123-4567",
      reason: "Specializes in urgent family conflicts with 15+ years experience"
    },
    {
      name: "Michael Rodriguez, LMFT",
      title: "Licensed Marriage & Family Therapist",
      specialty: "Crisis Counseling",
      rating: 4.8,
      distance: "3.1 miles",
      availability: "Next appointment: Tomorrow 10 AM",
      phone: "(555) 234-5678",
      reason: "Expert in crisis de-escalation and immediate intervention strategies"
    },
    {
      name: "Crisis Support Center",
      title: "Community Mental Health Center",
      specialty: "24/7 Crisis Support",
      rating: 4.7,
      distance: "4.5 miles",
      availability: "Walk-ins accepted",
      phone: "(555) 345-6789",
      reason: "Immediate access to crisis counselors and emergency support services"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/crisis/triage")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Triage
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Your Personalized Action Plan
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here's your immediate support plan and recommended professionals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Plan for Tonight */}
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-success" />
              Plan for Tonight
            </h2>
            <div className="space-y-3">
              {planSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommended Professionals */}
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-bold text-foreground mb-6 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              Recommended Professionals
            </h2>
            <div className="space-y-4">
              {professionals.map((professional, index) => (
                <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{professional.name}</h3>
                      <p className="text-primary font-medium">{professional.title}</p>
                      <p className="text-muted-foreground text-sm">{professional.specialty}</p>
                    </div>
                    <Badge variant="secondary" className="flex items-center">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {professional.rating}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {professional.distance}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {professional.availability}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Why recommended:</strong> {professional.reason}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button variant="success" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Call {professional.phone}
                    </Button>
                    <Button variant="outline" size="sm">
                      Request Warm Handoff
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Community Support */}
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-accent" />
              Community Support
            </h2>
            <div className="bg-accent/20 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">
                Family Crisis Support Group - Tonight at 7 PM
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join other families navigating similar challenges in a safe, confidential online space.
              </p>
              <Button variant="calm">
                Join Support Group
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="p-6 shadow-card text-center">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Want More Ongoing Support?
            </h2>
            <p className="text-muted-foreground mb-6">
              Create a free FamilyNation account to access our full platform of resources, 
              communities, and personalized support.
            </p>
            <Button variant="hero" onClick={() => navigate("/register")}>
              Create Free Account
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;