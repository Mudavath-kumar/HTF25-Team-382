import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Download, Edit, Trash2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface LabRecord {
  id: string;
  studentName: string;
  subject: string;
  experimentTitle: string;
  createdAt: string;
}

const Dashboard = () => {
  const [records, setRecords] = useState<LabRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedRecords = JSON.parse(localStorage.getItem("labRecords") || "[]");
    setRecords(savedRecords);
  }, []);

  const handleDelete = (id: string) => {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
    localStorage.setItem("labRecords", JSON.stringify(updatedRecords));
    toast.success("Record deleted successfully");
  };

  const filteredRecords = records.filter(
    (record) =>
      record.experimentTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.studentName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRecordColor = (index: number) => {
    const colors = [
      "from-primary/20 to-primary/5",
      "from-secondary/20 to-secondary/5",
      "from-primary-glow/20 to-primary-glow/5",
      "from-secondary-glow/20 to-secondary-glow/5",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 animate-fade-up">
            <div>
              <h1 className="text-4xl font-bold text-foreground">My Records</h1>
              <p className="text-muted-foreground mt-2">
                {records.length} {records.length === 1 ? "record" : "records"} saved
              </p>
            </div>
            <Link to="/create">
              <Button className="gradient-primary text-white glow-primary group">
                <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 smooth-transition" />
                Create Record
              </Button>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search records..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-card border-border/50 pl-10 focus:border-primary"
              />
            </div>
          </div>

          {/* Records Grid */}
          {filteredRecords.length === 0 ? (
            <Card className="glass-card border-border/50 p-12 text-center">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {searchQuery ? "No records found" : "No records yet"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery
                  ? "Try adjusting your search query"
                  : "Create your first lab record to get started"}
              </p>
              {!searchQuery && (
                <Link to="/create">
                  <Button className="gradient-primary text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Record
                  </Button>
                </Link>
              )}
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecords.map((record, index) => (
                <Card
                  key={record.id}
                  className="glass-card border-border/50 overflow-hidden hover:scale-105 smooth-transition hover:glow-primary cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Color Header */}
                  <div className={`h-32 bg-gradient-to-br ${getRecordColor(index)} flex items-center justify-center`}>
                    <FileText className="w-16 h-16 text-primary group-hover:scale-110 smooth-transition" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground line-clamp-2">
                        {record.experimentTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{record.subject}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{record.studentName}</span>
                      <span>{new Date(record.createdAt).toLocaleDateString()}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 glass-card border-border/50 hover:border-primary"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="glass-card border-border/50 hover:border-primary"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(record.id)}
                        className="glass-card border-border/50 hover:border-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
