import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import CrisisTriage from "./pages/CrisisTriage";
import ActionPlan from "./pages/ActionPlan";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const showNavigation = !location.pathname.startsWith("/crisis") && 
                         !location.pathname.startsWith("/login") &&
                         location.pathname !== "/landing";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landing" element={<Index />} />
        <Route path="/crisis/triage" element={<CrisisTriage />} />
        <Route path="/crisis/action-plan" element={<ActionPlan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/groups" element={<Dashboard />} />
        <Route path="/discussions" element={<Dashboard />} />
        <Route path="/professionals" element={<Dashboard />} />
        <Route path="/podcasts" element={<Dashboard />} />
        <Route path="/resources" element={<Dashboard />} />
        <Route path="/events" element={<Dashboard />} />
        <Route path="/community" element={<Dashboard />} />
        <Route path="/webinars" element={<Dashboard />} />
        <Route path="/contact" element={<Dashboard />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
