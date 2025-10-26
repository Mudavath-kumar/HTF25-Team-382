import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, BookOpen, Zap, FileText, Download, Settings } from "lucide-react";

const Help = () => {
  const helpTopics = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Getting Started",
      description: "Learn the basics of creating your first lab record",
      faqs: [
        {
          question: "How do I create a new lab record?",
          answer: "Click the 'Create New Record' button on the home page or dashboard. You'll be guided through a step-by-step wizard to fill in all the necessary details including student information, experiment details, theory, code, and conclusions.",
        },
        {
          question: "Can I save my progress while creating a record?",
          answer: "Yes! The app automatically saves your progress as you move through each step. You can close the browser and come back later to continue from where you left off.",
        },
        {
          question: "What information do I need to provide?",
          answer: "You'll need to provide: Student name, Roll number, Subject, Experiment title, Aim, Theory, Tools/Equipment used, Code (if applicable), Output/Results, and Conclusion.",
        },
      ],
    },
    {
      icon: <FileText className="w-6 h-6 text-secondary" />,
      title: "Managing Records",
      description: "Tips for organizing and editing your lab records",
      faqs: [
        {
          question: "How do I view my saved records?",
          answer: "Navigate to 'My Records' from the navigation menu. You'll see all your saved records displayed as cards with preview information.",
        },
        {
          question: "Can I edit a record after creating it?",
          answer: "Yes! Click the edit icon on any record card in your dashboard to modify the contents. All changes are saved automatically.",
        },
        {
          question: "How do I delete a record?",
          answer: "Click the delete icon (trash bin) on the record card. You'll be asked to confirm the deletion before the record is permanently removed.",
        },
      ],
    },
    {
      icon: <Download className="w-6 h-6 text-primary" />,
      title: "Exporting Records",
      description: "Learn how to export your records in different formats",
      faqs: [
        {
          question: "What export formats are available?",
          answer: "You can export your lab records in PDF and Microsoft Word (DOCX) formats. Both formats maintain professional styling and formatting.",
        },
        {
          question: "How do I export a record?",
          answer: "Click the 'Export' button on any record card or in the preview page. Choose your preferred format (PDF or Word) and the download will start automatically.",
        },
        {
          question: "Can I customize the export format?",
          answer: "Yes! Go to Settings to choose your default export format and customize options like including images, code formatting, and watermarks.",
        },
      ],
    },
    {
      icon: <Settings className="w-6 h-6 text-secondary" />,
      title: "Settings & Customization",
      description: "Personalize your experience",
      faqs: [
        {
          question: "How do I change the theme?",
          answer: "Click the moon/sun icon in the navigation bar to toggle between light and dark modes. Your preference is saved automatically.",
        },
        {
          question: "Can I change the font or template style?",
          answer: "Yes! Go to Settings and you can customize the template style (Classic, Modern, Futuristic), font family, font size, and various appearance options.",
        },
        {
          question: "What happens if I reset app data?",
          answer: "Resetting app data will delete all your saved records and restore settings to default. This action cannot be undone, so use it carefully.",
        },
      ],
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Tips & Tricks",
      description: "Get the most out of Aura Lab Scribe",
      faqs: [
        {
          question: "Are there any keyboard shortcuts?",
          answer: "While filling the form, use Tab to move between fields quickly. Use Enter to proceed to the next step when you're on a button.",
        },
        {
          question: "How can I search for a specific record?",
          answer: "Use the search bar at the top of the 'My Records' page. You can search by experiment title, subject name, or student name.",
        },
        {
          question: "Is my data secure?",
          answer: "All your data is stored locally in your browser. No information is sent to external servers, ensuring complete privacy and security.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 space-y-4 animate-fade-up">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto animate-pulse-glow">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions and learn how to make the most of Aura Lab Scribe
            </p>
          </div>

          <div className="space-y-6">
            {helpTopics.map((topic, topicIndex) => (
              <Card
                key={topicIndex}
                className="glass-card border-border/50 p-6 animate-fade-up"
                style={{ animationDelay: `${topicIndex * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      {topic.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-card-foreground">{topic.title}</h2>
                      <p className="text-muted-foreground mt-1">{topic.description}</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-2">
                    {topic.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${topicIndex}-${faqIndex}`}
                        className="glass-card border-border/50 rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left text-card-foreground hover:text-primary smooth-transition">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Card>
            ))}
          </div>

          <Card className="glass-card border-primary/30 p-8 mt-12 text-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">Still need help?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@auralabscribe.com">
                <button className="px-6 py-3 rounded-xl gradient-primary text-white font-medium hover:scale-105 smooth-transition glow-primary">
                  Contact Support
                </button>
              </a>
              <button className="px-6 py-3 rounded-xl glass-card border-border/50 font-medium hover:border-primary smooth-transition">
                View Documentation
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
