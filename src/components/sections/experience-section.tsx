
import { experiences } from "@/data/portfolio-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function ExperienceSection() {
  return (
    <div className="content-wrapper">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <p className="text-muted-foreground">My professional journey</p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl md:text-2xl">{experience.position}</CardTitle>
                    <CardDescription className="text-base flex items-center">
                      {experience.company}
                      {experience.website && (
                        <a 
                          href={experience.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center hover:text-primary transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {experience.duration}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-sm">{responsibility}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
