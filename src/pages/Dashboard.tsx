import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Heart, 
  Users, 
  BookOpen, 
  Calendar,
  MessageSquare,
  UserCheck,
  Headphones,
  FileText,
  ArrowRight,
  AlertCircle
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Groups",
      description: "Join specialized support communities for families facing similar challenges",
      icon: Users,
      href: "/groups",
      color: "bg-accent"
    },
    {
      title: "Discussions",
      description: "Engage in meaningful conversations with other families and experts",
      icon: MessageSquare,
      href: "/discussions",
      color: "bg-secondary"
    },
    {
      title: "The FamilyNation Community",
      description: "Connect with our broader network of families and professionals",
      icon: Heart,
      href: "/community",
      color: "bg-primary/10"
    },
    {
      title: "Connect With A Professional",
      description: "Get matched with licensed therapists, counselors, and family specialists",
      icon: UserCheck,
      href: "/professionals",
      color: "bg-success/10"
    },
    {
      title: "Podcasts",
      description: "Listen to expert insights, family stories, and professional guidance",
      icon: Headphones,
      href: "/podcasts",
      color: "bg-accent/10"
    },
    {
      title: "Webinars",
      description: "Attend live educational sessions and access recorded presentations",
      icon: Calendar,
      href: "/webinars",
      color: "bg-secondary/10"
    },
    {
      title: "Research Resources",
      description: "Access evidence-based research, studies, and professional publications",
      icon: FileText,
      href: "/resources",
      color: "bg-primary/20"
    }
  ];

  const recentActivity = [
    {
      title: "New: Teen Substance Abuse Support Group",
      description: "Weekly meetings starting this Thursday",
      time: "2 hours ago",
      badge: "New"
    },
    {
      title: "Webinar: Dealing with Bullying",
      description: "Recording now available",
      time: "1 day ago",
      badge: "Recording"
    },
    {
      title: "Research Update: Family Therapy Effectiveness",
      description: "NIH study results published",
      time: "3 days ago",
      badge: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to Your Family Support Hub
          </h1>
          <p className="text-muted-foreground">
            Your personalized dashboard for resources, community, and professional support.
          </p>
        </div>

        {/* Emergency Access - Center of Attention */}
        <Card className="mb-12 p-8 border-emergency/20 shadow-emergency bg-gradient-to-r from-emergency/5 to-emergency/10">
          <div className="text-center">
            <div className="w-16 h-16 bg-emergency rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-bold text-2xl text-foreground mb-2">
              Need Help Right Now?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Get immediate support and personalized recommendations from our AI assistant
            </p>
            <Button 
              variant="emergency"
              size="lg"
              onClick={() => navigate("/crisis/triage")}
              className="px-8 py-3 text-lg font-semibold"
            >
              We Need Help Now!
            </Button>
          </div>
        </Card>

        <div>
          {/* Main Content */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">
                What would you like to do today?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Card 
                      key={index}
                      className="p-6 shadow-card hover:shadow-soft transition-all cursor-pointer"
                      onClick={() => navigate(action.href)}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {action.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {action.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Featured Resources */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">
                Featured Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 shadow-card">
                  <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Family Crisis Handbook
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Evidence-based strategies for navigating family challenges
                  </p>
                  <Button variant="outline" size="sm">
                    Download PDF
                  </Button>
                </Card>

                <Card className="p-6 shadow-card">
                  <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Upcoming Events
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Workshops, support groups, and educational sessions
                  </p>
                  <Button variant="outline" size="sm">
                    View Calendar
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;