
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-6">
        <div className="h-20 w-20 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion size={40} className="text-medical-blue" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-medical-darkText">404</h1>
        <p className="text-xl text-muted-foreground mb-6">The page you're looking for couldn't be found</p>
        <Button onClick={() => window.location.href = "/"} className="bg-medical-blue hover:bg-blue-600">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
