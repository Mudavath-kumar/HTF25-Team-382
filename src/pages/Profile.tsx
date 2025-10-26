import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { User, Mail, Save, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    full_name: "",
    student_id: "",
    department: "",
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single();

      if (error && error.code !== "PGRST116") throw error;

      if (data) {
        setProfile({
          full_name: data.full_name || "",
          student_id: data.student_id || "",
          department: data.department || "",
        });
      }
    } catch (error: any) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .upsert({
          id: user?.id,
          full_name: profile.full_name,
          student_id: profile.student_id,
          department: profile.department,
        });

      if (error) throw error;

      toast.success("Profile updated successfully!");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 space-y-2 animate-fade-up">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Profile</h1>
            <p className="text-muted-foreground">Manage your account information</p>
          </div>

          <Card className="glass-card border-border/50 p-8 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Label>
                <Input
                  id="email"
                  value={user?.email || ""}
                  disabled
                  className="bg-muted/50 border-border/50 text-muted-foreground"
                />
                <p className="text-xs text-muted-foreground">Email cannot be changed</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="full_name" className="text-foreground">
                  Full Name
                </Label>
                <Input
                  id="full_name"
                  value={profile.full_name}
                  onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary text-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="student_id" className="text-foreground">
                  Student ID
                </Label>
                <Input
                  id="student_id"
                  value={profile.student_id}
                  onChange={(e) => setProfile({ ...profile, student_id: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary text-foreground"
                  placeholder="Enter your student ID"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department" className="text-foreground">
                  Department
                </Label>
                <Input
                  id="department"
                  value={profile.department}
                  onChange={(e) => setProfile({ ...profile, department: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary text-foreground"
                  placeholder="Enter your department"
                />
              </div>

              <Button
                onClick={handleSave}
                disabled={loading}
                className="w-full gradient-primary text-white glow-primary"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </Card>

          <Card className="glass-card border-border/50 p-6 mt-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Account Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">--</div>
                <div className="text-sm text-muted-foreground">Total Records</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                <div className="text-3xl font-bold text-secondary mb-1">--</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">--</div>
                <div className="text-sm text-muted-foreground">Subjects</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
