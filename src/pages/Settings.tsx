import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Settings as SettingsIcon, FileText, Type, Palette, Download, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const handleReset = () => {
    if (confirm("Are you sure you want to reset all app data? This cannot be undone.")) {
      localStorage.clear();
      toast.success("App data reset successfully");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 space-y-2 animate-fade-up">
            <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <SettingsIcon className="w-10 h-10 text-primary" />
              Settings
            </h1>
            <p className="text-muted-foreground">Customize your lab record experience</p>
          </div>

          <div className="space-y-6">
            {/* Template Settings */}
            <Card className="glass-card border-border/50 p-6 animate-fade-up">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold text-card-foreground">Template Settings</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="template" className="text-card-foreground">Template Style</Label>
                    <Select defaultValue="modern">
                      <SelectTrigger id="template" className="glass-card border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="glass-card border-border/50">
                        <SelectItem value="classic">Classic</SelectItem>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="futuristic">Futuristic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="export" className="text-card-foreground">Default Export Format</Label>
                    <Select defaultValue="pdf">
                      <SelectTrigger id="export" className="glass-card border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="glass-card border-border/50">
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="word">Microsoft Word</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>

            {/* Appearance Settings */}
            <Card className="glass-card border-border/50 p-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Palette className="w-6 h-6 text-secondary" />
                  <h2 className="text-xl font-semibold text-card-foreground">Appearance</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="animations" className="text-card-foreground">Enable Animations</Label>
                    <Switch id="animations" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="glow" className="text-card-foreground">Glow Effects</Label>
                    <Switch id="glow" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="particles" className="text-card-foreground">Particle Effects</Label>
                    <Switch id="particles" defaultChecked />
                  </div>
                </div>
              </div>
            </Card>

            {/* Typography Settings */}
            <Card className="glass-card border-border/50 p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Type className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold text-card-foreground">Typography</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="font-family" className="text-card-foreground">Font Family</Label>
                    <Select defaultValue="poppins">
                      <SelectTrigger id="font-family" className="glass-card border-border/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="glass-card border-border/50">
                        <SelectItem value="poppins">Poppins</SelectItem>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="urbanist">Urbanist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="font-size" className="text-card-foreground">Font Size</Label>
                    <Slider
                      id="font-size"
                      defaultValue={[16]}
                      min={12}
                      max={20}
                      step={1}
                      className="py-4"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Export Settings */}
            <Card className="glass-card border-border/50 p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Download className="w-6 h-6 text-secondary" />
                  <h2 className="text-xl font-semibold text-card-foreground">Export Options</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-format" className="text-card-foreground">Auto-format Code</Label>
                    <Switch id="auto-format" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="include-images" className="text-card-foreground">Include Images</Label>
                    <Switch id="include-images" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="watermark" className="text-card-foreground">Add Watermark</Label>
                    <Switch id="watermark" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Danger Zone */}
            <Card className="glass-card border-destructive/50 p-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Trash2 className="w-6 h-6 text-destructive" />
                  <h2 className="text-xl font-semibold text-card-foreground">Danger Zone</h2>
                </div>
                <p className="text-muted-foreground text-sm">
                  Resetting app data will delete all your saved records and settings. This action cannot be undone.
                </p>
                <Button
                  variant="destructive"
                  onClick={handleReset}
                  className="w-full sm:w-auto"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Reset App Data
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
