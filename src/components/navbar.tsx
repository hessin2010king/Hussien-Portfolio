
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const sections = [
    { id: "home", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex-1 md:flex-none">
          <Link 
            to="/" 
            className="font-semibold text-xl hover:text-primary transition-colors"
            onClick={() => setActiveSection("home")}
          >
            Hussien Shokry
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className={cn(
                "relative hover-slide",
                activeSection === section.id ? "text-primary" : ""
              )}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </Button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          {/* Only show ThemeToggle on desktop */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
