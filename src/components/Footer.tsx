
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ishita Agrawal
            </h3>
            <p className="text-xl text-gray-300 font-light">
              Web Developer | Aspiring Data Analyst | Tech Enthusiast
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://linkedin.com/in/ishita-agrawal2503" 
              className="group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 rounded-full bg-gray-800/50 group-hover:bg-blue-500/20 transition-all">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="hidden sm:inline font-medium">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/ishita-2503" 
              className="group flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 rounded-full bg-gray-800/50 group-hover:bg-purple-500/20 transition-all">
                <Github className="h-6 w-6" />
              </div>
              <span className="hidden sm:inline font-medium">GitHub</span>
            </a>
            <a 
              href="mailto:Ishitaagrawal.2503@gmail.com" 
              className="group flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
            >
              <div className="p-3 rounded-full bg-gray-800/50 group-hover:bg-pink-500/20 transition-all">
                <Mail className="h-6 w-6" />
              </div>
              <span className="hidden sm:inline font-medium">Email</span>
            </a>
          </div>
          
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm flex items-center">
                © {currentYear} Ishita Agrawal. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
