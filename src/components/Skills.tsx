
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C", "C++", "Python", "C#", "HTML", "CSS", "JavaScript", "ReactJS"],
      color: "blue"
    },
    {
      title: "Concepts",
      icon: "🧠",
      skills: ["OOPs", "Machine Learning (Supervised)", "Machine Learning (Unsupervised)", "Data Analytics"],
      color: "purple"
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "Figma", "NumPy", "Jupyter", "Google Colab"],
      color: "green"
    },
    {
      title: "Databases & OS",
      icon: "💾",
      skills: ["MySQL", "Linux", "Windows", "macOS"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
      orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-12 animate-fade-in">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-600/50 rounded-t-lg">
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className={`${getColorClasses(category.color)} hover:scale-105 transition-transform cursor-pointer border`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center animate-fade-in">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
                  <span className="mr-3">⭐</span>
                  Specializing In
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                    <span className="text-3xl">💻</span>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                      Web Development using modern front-end technologies
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                    <span className="text-3xl">📊</span>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                      Learning Data Analytics and Machine Learning
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
