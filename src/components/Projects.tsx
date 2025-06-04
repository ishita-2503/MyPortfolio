
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Fake News Detection",
      description: "ML + NLP model to classify real vs. fake news using natural language processing techniques and machine learning algorithms.",
      technologies: ["Python", "NLP", "Machine Learning", "Jupyter"],
      icon: "🔍",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Box Office Revenue Prediction",
      description: "Predictive model to estimate movie revenues based on various factors like genre, cast, budget, and historical data.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "NumPy"],
      icon: "🎬",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Hotel Booking Website",
      description: "Responsive website with comprehensive booking system, payment integration, and user-friendly interface for hotel reservations.",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS"],
      icon: "🏨",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-12 animate-fade-in">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group animate-scale-in overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${project.gradient} dark:opacity-90 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
                  <span className="text-5xl group-hover:scale-110 transition-transform relative z-10">{project.icon}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 dark:to-black/40"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="border-blue-200 text-blue-700 dark:border-blue-700/50 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all group"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      View Details
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
