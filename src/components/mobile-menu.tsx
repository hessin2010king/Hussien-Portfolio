
import { useState } from "react";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

interface MobileMenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function MobileMenu({ activeSection, setActiveSection }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const sections = [
    { id: "home", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    setOpen(false);
  };

  return (
    <div className="fixed top-0 right-4 z-50 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-16">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          {/* Theme toggle at the top of mobile menu */}
          <div className="flex justify-between items-center mb-6 pt-4">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggle />
          </div>
          
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className={`justify-start ${
                  activeSection === section.id ? "text-primary" : ""
                }`}
                onClick={() => handleNavigation(section.id)}
              >
                {section.label}
              </Button>
            ))}
            <Button variant="outline" className="mt-4">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
