import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FloatingShapes from "@/components/FloatingShapes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Beaker, Code2, FileText, Zap, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
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

      {/* Statistics Section */}
      <section className="py-24 relative bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "10K+", label: "Lab Records Created" },
              { number: "5K+", label: "Happy Students" },
              { number: "100+", label: "Universities" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4 animate-fade-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Loved by Students Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what students are saying about Aura Lab Scribe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Computer Science Student",
                text: "This tool saved me hours every week! The AI suggestions for theory and conclusions are incredibly helpful.",
                avatar: "👩‍💻"
              },
              {
                name: "Rajesh Kumar",
                role: "Engineering Student",
                text: "The export feature is amazing. My lab records look professional and are always properly formatted.",
                avatar: "👨‍🔬"
              },
              {
                name: "Emily Chen",
                role: "Physics Major",
                text: "I love how easy it is to create and manage all my lab records in one place. Highly recommend!",
                avatar: "👩‍🎓"
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="glass-card p-6 border-border/50 hover:border-primary/50 smooth-transition hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card p-12 border-primary/30 max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground">
              Ready to Transform Your Lab Work?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who are already creating professional lab records in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/auth">
                <Button
                  size="lg"
                  className="gradient-primary text-white glow-primary px-8 py-6 text-lg"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/help">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card border-border/50 px-8 py-6 text-lg"
                >
                  View Documentation
                </Button>
              </Link>
            </div>
          </Card>
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
