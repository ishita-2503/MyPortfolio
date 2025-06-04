
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-12 animate-fade-in">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    I am a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science (AI) undergraduate</span> with 
                    a keen interest in technology and hands-on experience in various programming languages and tools.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I enjoy building impactful projects and have interned in both machine learning and web development. 
                    I take pride in my collaborative nature, adaptability, and drive to keep learning in this rapidly evolving tech landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6 animate-scale-in">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-t-lg">
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <span className="mr-2">🎓</span>
                    Educational Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">B.Tech CSE (AI)</h3>
                    <p className="text-gray-600 dark:text-gray-300">SKIT Jaipur • 2022–Present</p>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800">
                      CGPA: 9.2
                    </Badge>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">12th Grade</h3>
                    <p className="text-gray-600 dark:text-gray-300">Bansal Public School, Kota</p>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      80%
                    </Badge>
                  </div>
                  
                  <div className="border-l-4 border-green-500 dark:border-green-400 pl-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">10th Grade</h3>
                    <p className="text-gray-600 dark:text-gray-300">LBS Senior Secondary School, Kota</p>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                      87%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
