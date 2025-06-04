
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Website Design & Development",
      description: "Modern, responsive websites using cutting-edge front-end technologies including React, HTML5, CSS3, and JavaScript.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "Modern UI/UX", "Fast Performance", "SEO Optimized"]
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Currently learning data analytics and available for entry-level projects involving data preprocessing, analysis, and visualization.",
      gradient: "from-purple-500 to-pink-500",
      features: ["Data Preprocessing", "Statistical Analysis", "Data Visualization", "Basic ML Models"]
    },
    {
      icon: "🤖",
      title: "Machine Learning Solutions",
      description: "Basic ML model development for classification and prediction tasks using Python and popular ML libraries.",
      gradient: "from-green-500 to-teal-500",
      features: ["Supervised Learning", "Data Modeling", "Model Evaluation", "Python Development"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-12 animate-fade-in">
            Services I Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group animate-scale-in overflow-hidden">
                <div className={`h-20 bg-gradient-to-r ${service.gradient} dark:opacity-90 flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
                  <span className="text-4xl group-hover:scale-110 transition-transform relative z-10">{service.icon}</span>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center animate-fade-in">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                  <span className="mr-3">🚀</span>
                  Ready to Work Together?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I'm always excited to take on new challenges and collaborate on interesting projects. 
                  Let's discuss how I can help bring your ideas to life!
                </p>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
