import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileText, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab-notebook.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Hero Image Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <img 
          src={heroImage} 
          alt="Futuristic lab notebook" 
          className="w-full h-full object-cover opacity-30 blur-sm"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float opacity-20">
          <FileText className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
          <Sparkles className="w-16 h-16 text-secondary" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Zap className="w-14 h-14 text-primary" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full border border-primary/30 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI-Powered Lab Documentation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-foreground mb-2">Automated Laboratory</span>
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Record Generator
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Generate standardized, export-ready lab records in seconds. Your personal AI assistant that builds professional laboratory documentation for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/auth">
              <Button
                size="lg"
                className="group relative px-8 py-6 text-lg font-semibold rounded-2xl gradient-primary text-white border-0 hover:scale-105 smooth-transition glow-primary"
              >
                <span className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 smooth-transition" />
                </span>
              </Button>
            </Link>
            <Link to="/help">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold rounded-2xl glass-card border-primary/30 hover:border-primary hover:glow-primary smooth-transition"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            {[
              "📊 Smart Templates",
              "🚀 Instant Export",
              "🎯 AI Assistance",
              "☁️ Cloud Sync"
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card px-4 py-2 rounded-full border border-border/50 text-sm font-medium text-foreground hover:border-primary/50 smooth-transition hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroSection;
