
import { education, certifications } from "@/data/portfolio-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

export function EducationSection() {
  return (
    <div className="content-wrapper">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Education & Certifications</h2>
          <p className="text-muted-foreground">My academic journey and professional development</p>
        </div>
        
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="mx-auto mb-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription className="text-base">{edu.institution}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {edu.duration}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p>{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      {cert.issuer}
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center hover:text-primary transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-2">
                      Issued: {cert.date}
                    </div>
                    {cert.description && <p>{cert.description}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
