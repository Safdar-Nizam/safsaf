import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl lg:text-8xl font-display font-bold text-foreground">404</h1>
        <p className="mb-8 text-xl lg:text-2xl text-muted-foreground">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-glow text-primary-foreground font-medium transition-all glow-primary warm-shadow"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
