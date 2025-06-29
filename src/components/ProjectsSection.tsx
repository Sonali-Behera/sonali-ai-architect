
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Security & Compliance Assistant',
      description: 'Built an AI-powered app that automates IaC compliance checks with 95% accuracy and 40% faster reviews. Features auto-remediation, one-click fixes, GitHub/VS Code integration, and a live dashboard for real-time insights.',
      tags: ['LangChain', 'Python', 'FastAPI', 'AWS', 'Azure', 'OpenAI', 'GitHub API', 'MCP', 'MongoDB'],
      achievements: ['95% Review Accuracy', '40% Time Reduction', 'Enterprise Ready'],
      demoUrl: 'https://compliancewarden.com/',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI-Powered Meditation Assistant',
      description: 'Built an AI-powered mental wellness chatbot with intelligent conversation flows to handle queries on app features, meditation, and mental health, resulting in 30% faster response times and 25% longer user engagement.',
      tags: ['NestJS', 'OpenAI', 'RAG', 'PostgreSQL', 'TypeScript', 'Langchain'],
      achievements: ['30% Faster Response', '25% Longer Sessions', 'RAG Integration'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Conversational Data Collection Agent',
      description: 'Built an AI assistant that replaces static forms with dynamic chats, achieving 90% email validation accuracy and boosting lead quality by 35% through personalized user interactions and automated follow-ups.',
      tags: ['Node.js', 'NestJS', 'LangChain', 'MongoDB', 'Express'],
      achievements: ['Automated Validation', '90% Data Accuracy', 'Smart Follow-ups'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my expertise in AI development, backend engineering, and problem-solving.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  project.featured ? 'border-2 border-primary/20 bg-gradient-to-br from-white to-blue-50/30' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge className="bg-primary text-white">Featured</Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievement Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-green-100 text-green-700">
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {/* <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-white"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-300 hover:border-primary hover:text-primary"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          {/* <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
