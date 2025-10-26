const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Sphere 1 */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl animate-float" 
           style={{ animationDelay: "0s", animationDuration: "8s" }} />
      
      {/* Floating Sphere 2 */}
      <div className="absolute top-1/3 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-accent/15 to-primary/15 blur-3xl animate-float"
           style={{ animationDelay: "2s", animationDuration: "10s" }} />
      
      {/* Floating Sphere 3 */}
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 blur-3xl animate-float"
           style={{ animationDelay: "4s", animationDuration: "12s" }} />
      
      {/* Rotating Cube */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-10">
        <div className="w-full h-full animate-spin" style={{ animationDuration: "20s" }}>
          <div className="w-full h-full border-2 border-primary/30 rounded-lg transform rotate-45" />
        </div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
           style={{
             backgroundImage: `
               linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
               linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
             `,
             backgroundSize: "100px 100px"
           }} />
      
      {/* Gradient Orbs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent blur-3xl animate-pulse" 
           style={{ animationDuration: "6s" }} />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent blur-3xl animate-pulse"
           style={{ animationDuration: "8s" }} />
    </div>
  );
};

export default FloatingShapes;
