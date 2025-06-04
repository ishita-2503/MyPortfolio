
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Teachnook, Bangalore",
      period: "July – August 2024",
      description: "Hands-on experience with model building, data preprocessing, and evaluation. Worked on various ML projects and gained practical knowledge in supervised and unsupervised learning techniques.",
      highlights: [
        "Model building and optimization",
        "Data preprocessing and cleaning",
        "Model evaluation and validation",
        "Collaborative project development"
      ],
      icon: "🤖",
      type: "Machine Learning"
    },
    {
      title: "Web Development Intern",
      company: "SKIT",
      period: "August 2023",
      description: "Front-end and back-end web development projects. Gained experience in full-stack development and modern web technologies.",
      highlights: [
        "Front-end development with modern frameworks",
        "Back-end development and API integration",
        "Responsive web design",
        "Project management and delivery"
      ],
      icon: "💻",
      type: "Web Development"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-12 animate-fade-in">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group animate-scale-in">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-gray-700/30 dark:to-blue-900/20 rounded-t-lg">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{experience.icon}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {experience.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                          <Building className="h-4 w-4" />
                          <span>{experience.company}</span>
                        </div>
                        <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 px-4 py-2 rounded-full backdrop-blur-sm">
                      <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                    {experience.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                      <span className="mr-2">⭐</span>
                      Key Highlights:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {experience.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
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

export default Experience;
