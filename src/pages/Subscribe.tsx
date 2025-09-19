import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Subscribe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-calm">
      <div className="max-w-lg w-full px-6">
        <Card className="p-8 shadow-card text-center">
          <h1 className="text-2xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-muted-foreground mb-6">
            Subscription required for B2C users. ELDA users don’t need one.
          </p>

          <div className="space-y-4">
            <Card className="p-4">
              <h2 className="text-lg font-semibold">Monthly Plan</h2>
              <p className="text-muted-foreground">$9.99 / month</p>
              <Button variant="hero" className="mt-2 w-full">
                Subscribe Monthly
              </Button>
            </Card>

            <Card className="p-4">
              <h2 className="text-lg font-semibold">Annual Plan</h2>
              <p className="text-muted-foreground">$99.99 / year</p>
              <Button variant="hero" className="mt-2 w-full">
                Subscribe Annually
              </Button>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Subscribe;
