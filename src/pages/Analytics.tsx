import Navigation from "@/components/Navigation";
import FloatingShapes from "@/components/FloatingShapes";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BarChart3, TrendingUp, FileText, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const Analytics = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    total: 0,
    thisMonth: 0,
    thisWeek: 0,
    subjects: 0,
  });
  const [subjectBreakdown, setSubjectBreakdown] = useState<{ subject: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchAnalytics();
    }
  }, [user]);

  const fetchAnalytics = async () => {
    try {
      const { data: records, error } = await supabase
        .from("lab_records")
        .select("*")
        .eq("user_id", user?.id);

      if (error) throw error;

      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));

      const thisMonthRecords = records?.filter(
        (r) => new Date(r.created_at) >= startOfMonth
      ).length || 0;

      const thisWeekRecords = records?.filter(
        (r) => new Date(r.created_at) >= startOfWeek
      ).length || 0;

      const uniqueSubjects = new Set(records?.map((r) => r.subject)).size;

      const subjectCounts = records?.reduce((acc: any, record) => {
        acc[record.subject] = (acc[record.subject] || 0) + 1;
        return acc;
      }, {});

      const breakdown = Object.entries(subjectCounts || {}).map(([subject, count]) => ({
        subject,
        count: count as number,
      }));

      setStats({
        total: records?.length || 0,
        thisMonth: thisMonthRecords,
        thisWeek: thisWeekRecords,
        subjects: uniqueSubjects,
      });

      setSubjectBreakdown(breakdown);
    } catch (error: any) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Records",
      value: stats.total,
      icon: <FileText className="w-6 h-6 text-primary" />,
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "This Month",
      value: stats.thisMonth,
      icon: <Calendar className="w-6 h-6 text-secondary" />,
      color: "from-secondary/20 to-secondary/5",
    },
    {
      title: "This Week",
      value: stats.thisWeek,
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      color: "from-primary-glow/20 to-primary-glow/5",
    },
    {
      title: "Unique Subjects",
      value: stats.subjects,
      icon: <BarChart3 className="w-6 h-6 text-secondary" />,
      color: "from-secondary-glow/20 to-secondary-glow/5",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Analytics</h1>
            <p className="text-xl text-muted-foreground">
              Track your lab record creation progress
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((stat, index) => (
                  <Card
                    key={index}
                    className="glass-card border-border/50 overflow-hidden hover:scale-105 smooth-transition"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`h-24 bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="p-6 text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.title}</div>
                    </div>
                  </Card>
                ))}
              </div>

              {subjectBreakdown.length > 0 && (
                <Card className="glass-card border-border/50 p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Records by Subject
                  </h2>
                  <div className="space-y-4">
                    {subjectBreakdown.map((item, index) => {
                      const maxCount = Math.max(...subjectBreakdown.map((s) => s.count));
                      const percentage = (item.count / maxCount) * 100;

                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground font-medium">{item.subject}</span>
                            <span className="text-muted-foreground">{item.count} records</span>
                          </div>
                          <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                            <div
                              className="h-full gradient-primary smooth-transition"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              )}

              {stats.total === 0 && (
                <Card className="glass-card border-border/50 p-12 text-center">
                  <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No Data Yet
                  </h3>
                  <p className="text-muted-foreground">
                    Start creating lab records to see your analytics
                  </p>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
