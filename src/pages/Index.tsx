import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { ContactSection } from "@/components/sections/contact-section";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [activeSection, setActiveSection] = useState("projects");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection setActiveSection={setActiveSection} />;
      case "skills":
        return <SkillsSection />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection />;
      case "education":
        return <EducationSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <div className="relative">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <MobileMenu activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>
        
        <main className="flex-1 mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
