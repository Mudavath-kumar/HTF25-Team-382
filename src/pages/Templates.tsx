import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Code2, Beaker, Network, Cpu, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Templates = () => {
  const navigate = useNavigate();

  const templates = [
    {
      id: "programming",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Programming Lab",
      description: "Perfect for coding experiments and algorithm implementations",
      color: "from-primary/20 to-primary/5",
      fields: {
        subject: "Programming",
        experimentTitle: "",
        experimentAim: "To implement and test [algorithm/concept]",
        theory: "Write about the theoretical concept, algorithm details, time complexity, and use cases.",
        tools: "Programming Language, IDE, Compiler",
      },
    },
    {
      id: "networking",
      icon: <Network className="w-8 h-8 text-secondary" />,
      title: "Computer Networks",
      description: "For network simulation and protocol experiments",
      color: "from-secondary/20 to-secondary/5",
      fields: {
        subject: "Computer Networks",
        experimentTitle: "",
        experimentAim: "To simulate and analyze [network protocol/concept]",
        theory: "Explain the networking concept, protocol specifications, OSI layer details, and practical applications.",
        tools: "Network Simulator (NS2/NS3/Packet Tracer), Wireshark",
      },
    },
    {
      id: "database",
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database Management",
      description: "SQL queries, database design, and management",
      color: "from-primary-glow/20 to-primary-glow/5",
      fields: {
        subject: "Database Management Systems",
        experimentTitle: "",
        experimentAim: "To design and implement [database concept]",
        theory: "Describe database concepts, normalization, ER diagrams, and SQL fundamentals.",
        tools: "MySQL/PostgreSQL, SQL Workbench, phpMyAdmin",
      },
    },
    {
      id: "hardware",
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      title: "Computer Hardware",
      description: "Digital electronics and hardware experiments",
      color: "from-secondary-glow/20 to-secondary-glow/5",
      fields: {
        subject: "Computer Hardware",
        experimentTitle: "",
        experimentAim: "To study and verify [hardware concept/circuit]",
        theory: "Explain the hardware component, circuit design, working principle, and applications.",
        tools: "Logic Gates, Breadboard, IC Chips, Multimeter",
      },
    },
    {
      id: "chemistry",
      icon: <Beaker className="w-8 h-8 text-primary" />,
      title: "Chemistry Lab",
      description: "Chemical reactions and analysis experiments",
      color: "from-primary/20 to-primary/5",
      fields: {
        subject: "Chemistry",
        experimentTitle: "",
        experimentAim: "To perform and analyze [chemical reaction/process]",
        theory: "Describe the chemical concepts, reaction mechanisms, formulas, and expected outcomes.",
        tools: "Beakers, Test Tubes, Chemicals, pH Meter, Burette",
      },
    },
    {
      id: "physics",
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Physics Lab",
      description: "Physics experiments and measurements",
      color: "from-secondary/20 to-secondary/5",
      fields: {
        subject: "Physics",
        experimentTitle: "",
        experimentAim: "To verify [physics law/principle]",
        theory: "Explain the physical concepts, laws, formulas, and theoretical basis of the experiment.",
        tools: "Apparatus, Measuring Instruments, Weights, Scales",
      },
    },
  ];

  const handleUseTemplate = (template: typeof templates[0]) => {
    // Store template data in sessionStorage to pre-fill the create form
    sessionStorage.setItem("templateData", JSON.stringify(template.fields));
    toast.success(`${template.title} template loaded!`);
    navigate("/create");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Lab Record Templates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with pre-configured templates for common lab experiments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <Card
                key={template.id}
                className="glass-card border-border/50 overflow-hidden hover:scale-105 smooth-transition hover:glow-primary group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-32 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 smooth-transition">
                    {template.icon}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {template.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {template.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Button
                      onClick={() => handleUseTemplate(template)}
                      className="w-full gradient-primary text-white"
                    >
                      Use This Template
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="glass-card border-border/50 p-8 mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
              How Templates Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <p className="text-foreground font-medium">Choose Template</p>
                <p className="text-sm text-muted-foreground">Select the template matching your experiment type</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <p className="text-foreground font-medium">Auto-Fill</p>
                <p className="text-sm text-muted-foreground">Template pre-fills relevant fields in the form</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <p className="text-foreground font-medium">Customize</p>
                <p className="text-sm text-muted-foreground">Add your specific experiment details</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Templates;
