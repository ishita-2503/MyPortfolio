
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "Ishitaagrawal.2503@gmail.com", href: "mailto:Ishitaagrawal.2503@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8890195525", href: "tel:+918890195525" },
    { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India", href: null },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ishita-agrawal2503", href: "https://linkedin.com/in/ishita-agrawal2503" },
    { icon: Github, label: "GitHub", value: "github.com/ishita-2503", href: "https://github.com/ishita-2503" }
  ];

  return (
    <div className="space-y-8 animate-slide-up">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <span className="mr-3">💬</span>
          Let's Connect
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology and development.
        </p>
      </div>
      
      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <Card key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <info.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-gray-900 dark:text-white font-medium">{info.value}</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
