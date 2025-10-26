import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Brain, Sparkles, Loader2, Copy, Download } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const AIAssistant = () => {
  const [prompt, setPrompt] = useState("");
  const [assistantType, setAssistantType] = useState<"theory" | "conclusion" | "improve" | "suggest">("theory");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const assistantTypes = [
    {
      id: "theory" as const,
      title: "Generate Theory",
      description: "Get comprehensive theoretical explanations for your experiment",
      icon: "📚",
      placeholder: "Enter the experiment title or topic...",
    },
    {
      id: "conclusion" as const,
      title: "Write Conclusion",
      description: "Generate insightful conclusions based on your experiment",
      icon: "✍️",
      placeholder: "Describe your experiment and key findings...",
    },
    {
      id: "improve" as const,
      title: "Improve Content",
      description: "Enhance and refine your existing lab report content",
      icon: "✨",
      placeholder: "Paste your content to improve...",
    },
    {
      id: "suggest" as const,
      title: "Get Suggestions",
      description: "Receive helpful suggestions and ideas for your lab work",
      icon: "💡",
      placeholder: "What do you need help with?",
    },
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const { data, error } = await supabase.functions.invoke("ai-assistant", {
        body: { type: assistantType, prompt },
      });

      if (error) throw error;

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setResponse(data.text);
      toast.success("Content generated successfully!");
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to generate content");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4 animate-fade-up">
            <div className="flex items-center justify-center space-x-2">
              <Brain className="w-12 h-12 text-primary animate-pulse-glow" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Assistant
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Powered by advanced AI to help you create better lab reports
            </p>
          </div>

          {/* Assistant Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {assistantTypes.map((type, index) => (
              <Card
                key={type.id}
                onClick={() => setAssistantType(type.id)}
                className={`glass-card p-6 cursor-pointer smooth-transition hover:scale-105 ${
                  assistantType === type.id
                    ? "border-primary/50 glow-primary bg-primary/5"
                    : "border-border/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </Card>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <Card className="glass-card border-border/50 p-6 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">Your Input</h2>
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <Textarea
                  placeholder={assistantTypes.find(t => t.id === assistantType)?.placeholder}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[300px] bg-background/50 border-border/50 focus:border-primary text-foreground resize-none"
                />
                <Button
                  onClick={handleGenerate}
                  disabled={loading || !prompt.trim()}
                  className="w-full gradient-primary text-white glow-primary"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Generate with AI
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Output Section */}
            <Card className="glass-card border-border/50 p-6 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">AI Response</h2>
                  {response && (
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={copyToClipboard}
                        className="glass-card border-border/50"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
                <div className="min-h-[300px] bg-background/50 border border-border/50 rounded-lg p-4">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center h-[300px] space-y-4">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                      <p className="text-muted-foreground">Generating content...</p>
                    </div>
                  ) : response ? (
                    <div className="text-foreground whitespace-pre-wrap leading-relaxed">
                      {response}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[300px]">
                      <p className="text-muted-foreground">AI response will appear here...</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="glass-card border-border/50 p-6 mt-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">💡 Tips for Best Results</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Be specific about your experiment topic and objectives</li>
              <li>• Include relevant context like experiment type, tools used, and observations</li>
              <li>• For conclusions, mention key findings and data points</li>
              <li>• Review and personalize the AI-generated content before using it</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
