import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, Facebook, Twitter, Download } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export function HeroSection({ setActiveSection }: HeroSectionProps) {
  return (
    <div className="content-wrapper">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="relative">
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-primary/20">
            <img src={"/images/profile.jpg"} alt="Profile" className="w-full h-full object-cover" />
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center text-primary/40 text-9xl font-bold">
              HS
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start max-w-lg space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl text-primary font-semibold">
            {personalInfo.title}
          </h2>
          
          <p className="text-muted-foreground">
            {personalInfo.location}
          </p>
          
          <p className="text-base">
            {personalInfo.objectiveStatement}
          </p>
          
          <div className="flex gap-4 mt-4">
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="group">
                <Mail className="h-4 w-4" />
                <span className="sr-only group-hover:inline-block">Email</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={`https://wa.me/${personalInfo.phone}`} target="_blank" rel="noopener noreferrer" className="group">
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only group-hover:inline-block">WhatsApp</span>
              </a>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.find(link => link.platform === "LinkedIn")?.url} target="_blank" rel="noopener noreferrer" className="group">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only group-hover:inline-block">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.find(link => link.platform === "GitHub")?.url} target="_blank" rel="noopener noreferrer" className="group">
                <Github className="h-4 w-4" />
                <span className="sr-only group-hover:inline-block">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.find(link => link.platform === "Facebook")?.url} target="_blank" rel="noopener noreferrer" className="group">
                <Facebook className="h-4 w-4" />
                <span className="sr-only group-hover:inline-block">Facebook</span>
              </a>
            </Button>

            <Button variant="outline" size="icon" asChild>
              <a href={socialLinks.find(link => link.platform === "Upwork")?.url} target="_blank" rel="noopener noreferrer" className="group">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295 2.913 0 5.283-2.378 5.283-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                <span className="sr-only group-hover:inline-block">Upwork</span>
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <Button onClick={() => setActiveSection("contact")}>Contact Me</Button>
            <Button variant="outline" asChild>
              <a href="/documents/Hussien Shokry Hussin Resume.pdf" download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
