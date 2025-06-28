
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Bash'],
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      skills: ['LangChain', 'OpenAI API', 'Transformers', 'RAG', 'Embeddings', 'Prompt Engineering', 'HuggingFace'],
    },
    {
      title: 'Backend Frameworks',
      icon: '⚡',
      skills: ['FastAPI', 'Node.js', 'NestJS', 'Express.js', 'Django', 'Flask'],
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Google Cloud', 'Docker', 'CI/CD', 'Linux', 'Git'],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Vector DBs'],
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['REST APIs', 'GraphQL', 'Postman', 'Jupyter', 'VS Code', 'Agile/Scrum'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience in AI development, backend engineering, and modern software practices.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg font-bold text-gray-900">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors cursor-default text-sm py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Highlights */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">AI</span>
                </div>
                <h4 className="font-semibold text-gray-900">Generative AI Development</h4>
                <p className="text-gray-600 text-sm">LLM integration, RAG systems, and intelligent automation solutions</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900">Backend Engineering</h4>
                <p className="text-gray-600 text-sm">Scalable APIs, microservices, and high-performance server architectures</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">🔧</span>
                </div>
                <h4 className="font-semibold text-gray-900">Problem Solving</h4>
                <p className="text-gray-600 text-sm">Algorithm design, system optimization, and technical leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
