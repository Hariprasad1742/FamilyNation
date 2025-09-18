import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HazelChat from "@/components/chat/HazelChat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CrisisTriage = () => {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleTriageComplete = (responses: string[]) => {
    // Store responses for the action plan page
    sessionStorage.setItem('triageResponses', JSON.stringify(responses));
    navigate("/crisis/action-plan");
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Emergency Support Triage
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'll ask you a few quick questions to understand your situation and 
            connect you with the right support immediately. This will take about 60 seconds.
          </p>
        </div>

        {/* Chat Interface */}
        <HazelChat onComplete={handleTriageComplete} isMemberVersion={false} />

        {/* Crisis Resources */}
        <div className="mt-8 p-4 bg-card rounded-lg border border-border shadow-card max-w-2xl mx-auto">
          <h3 className="font-semibold text-sm text-foreground mb-2">
            If you're in immediate danger:
          </h3>
          <div className="space-y-2 text-sm">
            <p>• Call 911 for emergency services</p>
            <p>• Call 988 for Suicide & Crisis Lifeline</p>
            <p>• Text "HELLO" to 741741 for Crisis Text Line</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisTriage;