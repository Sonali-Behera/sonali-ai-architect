
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '400+', label: 'Problems Solved' },
    { number: '5+', label: 'AI Products Deployed' },
    { number: '5+', label: 'Tech Seminars Led' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who I Am
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate <span className="font-semibold text-primary">Generative AI Developer</span> at Third Rock Techkno with over 2 years of experience building cutting-edge AI solutions that make a real difference.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise spans across <span className="font-semibold">LangChain, AI Agent & LLM integration, MCP, FastAPI, and Python</span>, enabling me to create intelligent systems that solve complex real-world problems. I love turning abstract AI concepts into tangible, scalable solutions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest AI research, conducting tech seminars for my team, or diving deep into algorithm challenges. I believe in continuous learning and sharing knowledge with the developer community.
              </p>

              <div className="pt-4">
                <h3 className="font-semibold text-gray-900 mb-3">What drives me:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Building AI systems that enhance human productivity
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Solving complex backend engineering challenges
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Contributing to open-source and tech communities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Mentoring and sharing knowledge through seminars
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-0">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
