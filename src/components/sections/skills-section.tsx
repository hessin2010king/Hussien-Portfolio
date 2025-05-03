
import { useState } from "react";
import { skills } from "@/data/portfolio-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Backend");
  
  const categories = ["Backend", "Frontend", "Development & Operations", "Personal Skills"];
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="content-wrapper">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="text-muted-foreground">My technical and professional expertise</p>
        </div>
        
        <Tabs defaultValue="Tech Stack" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="mx-auto mb-6">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map(skill => (
                  <Card key={skill.name} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
