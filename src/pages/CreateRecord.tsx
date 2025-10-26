import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, ChevronLeft, Check, User, TestTube, BookOpen, Code2, FileOutput, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const CreateRecord = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    subject: "",
    experimentTitle: "",
    experimentAim: "",
    theory: "",
    tools: "",
    code: "",
    output: "",
    conclusion: "",
  });

  // Load template data if available
  useEffect(() => {
    const templateData = sessionStorage.getItem("templateData");
    if (templateData) {
      const parsed = JSON.parse(templateData);
      setFormData((prev) => ({ ...prev, ...parsed }));
      sessionStorage.removeItem("templateData");
      toast.success("Template loaded!");
    }
  }, []);

  const steps = [
    { icon: <User className="w-5 h-5" />, title: "Student Info", fields: ["studentName", "rollNumber", "subject"] },
    { icon: <TestTube className="w-5 h-5" />, title: "Experiment", fields: ["experimentTitle", "experimentAim"] },
    { icon: <BookOpen className="w-5 h-5" />, title: "Theory", fields: ["theory", "tools"] },
    { icon: <Code2 className="w-5 h-5" />, title: "Code", fields: ["code"] },
    { icon: <FileOutput className="w-5 h-5" />, title: "Output", fields: ["output"] },
    { icon: <MessageSquare className="w-5 h-5" />, title: "Conclusion", fields: ["conclusion"] },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      toast.error("You must be logged in to create records");
      return;
    }

    try {
      const { error } = await supabase.from("lab_records").insert({
        user_id: user.id,
        student_name: formData.studentName,
        roll_number: formData.rollNumber,
        subject: formData.subject,
        experiment_title: formData.experimentTitle,
        experiment_aim: formData.experimentAim,
        theory: formData.theory,
        tools: formData.tools,
        code: formData.code,
        output: formData.output,
        conclusion: formData.conclusion,
      });

      if (error) throw error;

      toast.success("Lab record created successfully!");
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error creating record:", error);
      toast.error(error.message || "Failed to create lab record");
    }
  };

  const renderField = (field: string) => {
    const fieldLabels: Record<string, string> = {
      studentName: "Student Name",
      rollNumber: "Roll Number",
      subject: "Subject",
      experimentTitle: "Experiment Title",
      experimentAim: "Aim of the Experiment",
      theory: "Theory",
      tools: "Tools/Equipment Used",
      code: "Code",
      output: "Output/Results",
      conclusion: "Conclusion",
    };

    const isTextarea = ["experimentAim", "theory", "code", "output", "conclusion"].includes(field);

    return (
      <div key={field} className="space-y-2">
        <Label htmlFor={field} className="text-card-foreground font-medium">
          {fieldLabels[field]}
        </Label>
        {isTextarea ? (
          <Textarea
            id={field}
            value={formData[field as keyof typeof formData]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="glass-card border-border/50 focus:border-primary min-h-[150px] text-card-foreground"
            placeholder={`Enter ${fieldLabels[field].toLowerCase()}...`}
          />
        ) : (
          <Input
            id={field}
            value={formData[field as keyof typeof formData]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className="glass-card border-border/50 focus:border-primary text-card-foreground"
            placeholder={`Enter ${fieldLabels[field].toLowerCase()}...`}
          />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 space-y-2 animate-fade-up">
            <h1 className="text-4xl font-bold text-foreground">Create Lab Record</h1>
            <p className="text-muted-foreground">Fill in the details to generate your lab record</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Progress Sidebar */}
            <Card className="glass-card border-border/50 p-6 h-fit">
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-xl smooth-transition cursor-pointer ${
                      currentStep === index
                        ? "bg-primary/10 border border-primary/30"
                        : currentStep > index
                        ? "bg-primary/5"
                        : "opacity-50"
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        currentStep > index
                          ? "bg-primary text-white"
                          : currentStep === index
                          ? "gradient-primary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {currentStep > index ? <Check className="w-5 h-5" /> : step.icon}
                    </div>
                    <span className={`font-medium ${currentStep >= index ? "text-card-foreground" : "text-muted-foreground"}`}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Main Form */}
            <Card className="glass-card border-border/50 p-8 lg:col-span-3 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-card-foreground flex items-center space-x-2">
                    {steps[currentStep].icon}
                    <span>{steps[currentStep].title}</span>
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    Step {currentStep + 1} of {steps.length}
                  </span>
                </div>

                <div className="space-y-6">
                  {steps[currentStep].fields.map(renderField)}
                </div>

                <div className="flex justify-between pt-6 border-t border-border/50">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="glass-card border-border/50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep === steps.length - 1 ? (
                    <Button
                      onClick={handleSubmit}
                      className="gradient-primary text-white glow-primary"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Create Record
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNext}
                      className="gradient-primary text-white glow-primary"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecord;
