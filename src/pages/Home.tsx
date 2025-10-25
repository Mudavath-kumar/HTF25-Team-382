import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { Card } from "@/components/ui/card";
import { Beaker, Code2, FileText, Zap, CheckCircle2, Sparkles } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Smart Templates",
      description: "Pre-built templates for common lab experiments. Just fill in your data and go.",
    },
    {
      icon: <Beaker className="w-8 h-8 text-secondary" />,
      title: "Experiment Library",
      description: "Access a comprehensive library of experiment formats and guidelines.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Code Formatting",
      description: "Automatically format and beautify your code snippets with syntax highlighting.",
    },
    {
      icon: <Zap className="w-8 h-8 text-secondary" />,
      title: "Instant Export",
      description: "Export to PDF or Word format with professional styling in one click.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "AI Suggestions",
      description: "Get intelligent suggestions for theory, conclusions, and observations.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
      title: "Auto-Save",
      description: "Never lose your work with automatic cloud synchronization.",
    },
  ];

  const steps = [
    { number: "01", title: "Fill the Form", desc: "Enter your experiment details in our guided wizard" },
    { number: "02", title: "Preview", desc: "Review your record with live 3D preview" },
    { number: "03", title: "Export", desc: "Download as PDF or Word with one click" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create perfect lab records in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card p-6 border-border/50 hover:border-primary/50 smooth-transition hover:scale-105 hover:glow-primary cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to perfect lab documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-card p-8 rounded-2xl border-border/50 hover:border-primary/50 smooth-transition hover:glow-primary text-center space-y-4">
                  <div className="text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Aura Lab Scribe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
