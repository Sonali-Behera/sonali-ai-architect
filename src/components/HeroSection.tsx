import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Download, ExternalLink, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 opacity-0 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              SB
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 opacity-0 animate-fade-in animate-delay-200">
            Hi, I'm <span className="text-primary">Sonali</span>
            <br />
            I Build Smart AI Solutions with{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Real-World Impact
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 opacity-0 animate-fade-in animate-delay-400">
            Generative AI • LangChain • LLM Integration • Backend Development
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-600">
            Building intelligent, scalable AI systems that work. Passionate about transforming complex problems into elegant solutions with 2+ years of experience in cutting-edge AI development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 opacity-0 animate-fade-in animate-delay-600">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              View Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              Download Resume
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-fade-in animate-delay-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <button
              onClick={scrollToContact}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="opacity-0 animate-fade-in animate-delay-600">
            <button
              onClick={scrollToProjects}
              className="animate-bounce p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
