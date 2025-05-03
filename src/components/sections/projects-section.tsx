import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/portfolio-data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ZoomIn, ZoomOut } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hasOverflow, setHasOverflow] = useState({ x: false, y: false });
  const imageRef = useRef<HTMLImageElement>(null);
  
  const ZOOM_LEVELS = {
    thumbnail: {
      min: 1,
      max: 2,
      step: 1
    },
    landingPage: {
      min: 1,
      max: 10,
      step: 2
    },
    regular: {
      min: 1,
      max: 10,
      step: 1
    }
  };

  const SCROLL_STEPS = {
    horizontal: 50,  // Smaller step for horizontal scrolling
    vertical: 50    // Smaller step for vertical scrolling
  };

  const handleOpenProject = (id: number) => {
    setSelectedProject(id);
    setCurrentImageIndex(0);
    setScrollPosition({ x: 0, y: 0 });
    setZoomLevel(1);
  };

  const handlePrevImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex(prev => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
      setScrollPosition({ x: 0, y: 0 });
      setZoomLevel(1);
    }
  };

  const handleNextImage = () => {
    const project = projects.find(p => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex(prev => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
      setScrollPosition({ x: 0, y: 0 });
      setZoomLevel(1);
    }
  };

  const isLandingPage = (imagePath: string) => {
    return imagePath.toLowerCase().includes('landing') || 
           imagePath.toLowerCase().includes('full page');
  };

  const handleScroll = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (!imageRef.current) return;

    const delta = direction === 'left' || direction === 'right' 
      ? SCROLL_STEPS.horizontal 
      : SCROLL_STEPS.vertical;

    setScrollPosition(prev => {
      const newPosition = {
        x: prev.x + (direction === 'left' ? delta : direction === 'right' ? -delta : 0),
        y: prev.y + (direction === 'up' ? delta : direction === 'down' ? -delta : 0)
      };
      return newPosition;
    });
  };

  const handleZoomIn = (e: React.MouseEvent, isThumbnail = false) => {
    e.stopPropagation();
    const currentImage = isThumbnail ? null : projects.find(p => p.id === selectedProject)?.images[currentImageIndex];
    let zoomConfig;
    
    if (isThumbnail) {
      zoomConfig = ZOOM_LEVELS.thumbnail;
    } else if (currentImage && isLandingPage(currentImage)) {
      zoomConfig = ZOOM_LEVELS.landingPage;
    } else {
      zoomConfig = ZOOM_LEVELS.regular;
    }
    
    setZoomLevel(prev => {
      const nextZoom = prev + zoomConfig.step;
      return nextZoom <= zoomConfig.max ? nextZoom : zoomConfig.max;
    });
  };

  const handleZoomOut = (e: React.MouseEvent, isThumbnail = false) => {
    e.stopPropagation();
    const currentImage = isThumbnail ? null : projects.find(p => p.id === selectedProject)?.images[currentImageIndex];
    let zoomConfig;
    
    if (isThumbnail) {
      zoomConfig = ZOOM_LEVELS.thumbnail;
    } else if (currentImage && isLandingPage(currentImage)) {
      zoomConfig = ZOOM_LEVELS.landingPage;
    } else {
      zoomConfig = ZOOM_LEVELS.regular;
    }
    
    setZoomLevel(prev => {
      const nextZoom = prev - zoomConfig.step;
      return nextZoom >= zoomConfig.min ? nextZoom : zoomConfig.min;
    });
  };

  const resetToOriginalSize = () => {
    setZoomLevel(1);
    setScrollPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (imageRef.current && zoomLevel > 1) {
      const containerWidth = imageRef.current.clientWidth;
      const containerHeight = imageRef.current.clientHeight;
      const imageWidth = imageRef.current.naturalWidth * zoomLevel;
      const imageHeight = imageRef.current.naturalHeight * zoomLevel;
      
      setHasOverflow({
        x: imageWidth > containerWidth,
        y: imageHeight > containerHeight
      });
    } else {
      setHasOverflow({ x: false, y: false });
      setScrollPosition({ x: 0, y: 0 });
    }
  }, [zoomLevel]);

  return (
    <div className="content-wrapper">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground">Showcasing my recent work</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-[400px]">
              <div className="h-[300px] overflow-hidden bg-muted flex items-center justify-center relative">
                <div className="absolute inset-0 -bottom-[20%]">
                  <img 
                    src={project.thumbnail} 
                    alt={project.name} 
                    className="w-full h-[125%] object-inherit transition-transform duration-500"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>
                <div className="absolute top-2 right-2 flex gap-2 z-10">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/80 hover:bg-background"
                    onClick={(e) => handleZoomOut(e, true)}
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/80 hover:bg-background"
                    onClick={(e) => handleZoomIn(e, true)}
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mt-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button onClick={() => handleOpenProject(project.id)} className="w-full">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                    <DialogHeader>
                      <DialogTitle className="text-xl sm:text-2xl">{project.name}</DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-4">
                      <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-muted aspect-video">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <img
                            ref={imageRef}
                            src={project.images[currentImageIndex]}
                            alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                            className="w-full h-full object-contain transition-transform duration-300"
                            style={{
                              transform: `scale(${zoomLevel}) translate(${scrollPosition.x}px, ${scrollPosition.y}px)`,
                              transformOrigin: 'center',
                              willChange: 'transform',
                              maxWidth: '100%',
                              maxHeight: '100%'
                            }}
                          />
                        </div>
                        
                        {/* Zoom Controls - Back to top right */}
                        <div className="absolute top-4 right-4 flex gap-2 z-30">
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-background/60 hover:bg-background/80"
                            onClick={(e) => handleZoomOut(e, false)}
                          >
                            <ZoomOut className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-background/60 hover:bg-background/80"
                            onClick={(e) => handleZoomIn(e, false)}
                          >
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                          {zoomLevel > 1 && (
                            <Button
                              variant="outline"
                              className="bg-background/60 hover:bg-background/80 text-xs px-2"
                              onClick={resetToOriginalSize}
                            >
                              Original Size
                            </Button>
                          )}
                        </div>

                        {/* Scroll Controls */}
                        {zoomLevel > 1 && (
                          <>
                            {/* Up/Down Controls */}
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute top-4 left-1/2 -translate-x-1/2 bg-background/60 hover:bg-background/80 pointer-events-auto"
                              onClick={() => handleScroll('up')}
                            >
                              <ChevronUp className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/60 hover:bg-background/80 pointer-events-auto"
                              onClick={() => handleScroll('down')}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </Button>

                            {/* Left/Right Controls */}
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute left-1/3 top-1/2 -translate-x-1/2 bg-background/60 hover:bg-background/80 pointer-events-auto"
                              onClick={() => handleScroll('left')}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute right-1/3 top-1/2 translate-x-1/2 bg-background/60 hover:bg-background/80 pointer-events-auto"
                              onClick={() => handleScroll('right')}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                          </>
                        )}

                        {/* Image Navigation - At edges */}
                        {project.images.length > 1 && (
                          <>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 z-20"
                              onClick={handlePrevImage}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/80 z-20"
                              onClick={handleNextImage}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 z-20">
                              {project.images.map((_, index) => (
                                <div
                                  key={index}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    index === currentImageIndex ? 'bg-primary' : 'bg-primary/30'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      
                      <h4 className="font-semibold text-lg mb-2">About this project</h4>
                      <p className="text-muted-foreground mb-4">{project.longDescription}</p>
                      
                      <h4 className="font-semibold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => (
                          <Badge key={tech}>{tech}</Badge>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-4">
                        {project.github && (
                          <Button variant="outline" asChild className="flex-grow sm:flex-grow-0">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub Repository
                            </a>
                          </Button>
                        )}
                        {project.githubBackend && (
                          <Button variant="outline" asChild className="flex-grow sm:flex-grow-0">
                            <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub Backend Repository
                            </a>
                          </Button>
                        )}
                        {project.githubFrontend && (
                          <Button variant="outline" asChild className="flex-grow sm:flex-grow-0">
                            <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub Frontend Repository
                            </a>
                          </Button>
                        )}
                        {project.liveDemo && (
                          <Button asChild className="flex-grow sm:flex-grow-0">
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
