import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to CSV Management Tool</h1>
      <p className="text-xl mb-8">
        Upload, edit, and manage your CSV files with ease.
      </p>
      <Button asChild>
        <Link to="/csv-tool">Get Started</Link>
      </Button>
    </div>
  );
};

export default Index;