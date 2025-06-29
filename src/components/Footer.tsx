
import { Github, Linkedin, Mail, Heart, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Sonali-Behera',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/sonali-behera',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://x.com/AIWithSonali',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:sonalibehera.bbsr@gmail.com',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Sonali Behera</h3>
                <p className="text-gray-400 text-sm">Generative AI Developer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building intelligent, scalable AI systems that work. Passionate about solving complex problems
              with cutting-edge technology and clean code.
            </p>
            <div className="text-gray-400 text-sm">
              <p>📍 Bhubaneswar, India</p>
              <p>💼 Open to opportunities</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Connect With Me</h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="text-gray-400 text-sm space-y-1">
                <p>sonalibehera.bbsr@gmail.com</p>
                <p>Available for collaboration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Sonali Behera. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee ☕</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button 
                onClick={scrollToTop}
                className="hover:text-primary transition-colors"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
