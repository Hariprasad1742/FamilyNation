import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For prototype, just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-calm flex items-center justify-center">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <Card className="p-8 shadow-card">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Sign in to access your FamilyNation account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <Button variant="link" className="text-sm">
                Forgot your password?
              </Button>
              
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  Don't have an account?
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/register")}
                  className="w-full"
                >
                  Create Free Account
                </Button>
              </div>
            </div>
          </Card>

          {/* Crisis Access */}
          <Card className="mt-6 p-4 shadow-card border-emergency/20">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Need immediate help?
              </p>
              <Button 
                variant="emergency" 
                size="sm"
                onClick={() => navigate("/crisis/triage")}
              >
                Get Help Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;