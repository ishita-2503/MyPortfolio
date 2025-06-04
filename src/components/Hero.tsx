import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Avatar className="w-40 h-40 mx-auto mb-8 ring-4 ring-white dark:ring-gray-700 shadow-2xl">
              <AvatarImage src="/lovable-uploads/99fc06ca-64c2-437d-a2d7-3deac707ef0e.png" alt="Ishita Agrawal" />
              <AvatarFallback className="text-4xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">IA</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="space-y-6 animate-fade-in delay-200">
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent leading-tight">
              Web Developer
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300">
              <span className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
                Aspiring Data Analyst
              </span>
              <span className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
                Tech Enthusiast
              </span>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Ishita</span> — a passionate tech learner and developer currently pursuing B.Tech in AI. 
              I love building websites and exploring data.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 group"
              onClick={() => scrollToSection("#contact")}
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="mt-12 animate-fade-in delay-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Available for freelance projects</p>
            <div className="flex justify-center">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
