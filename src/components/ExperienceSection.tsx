
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Third Rock Techkno',
      position: 'Junior Programmer Analyst',
      duration: 'Jan 2023 – Present',
      location: 'Bhubaneswar, India',
      description: 'Leading AI development initiatives and backend engineering projects in a dynamic startup environment.',
      achievements: [
        'Built scalable GenAI systems serving 10,000+ users with 99.9% uptime',
        'Led backend projects using FastAPI & Node.js, reducing API response time by 35%',
        'Conducted 15+ company-wide AI seminars, upskilling 50+ team members',
        'Collaborated cross-functionally in agile setups, delivering 8 major features',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Architected microservices handling 1M+ daily requests'
      ],
      technologies: ['Python', 'FastAPI', 'Node.js', 'LangChain', 'AWS', 'Docker', 'PostgreSQL'],
      current: true
    }
  ];

  const achievements = [
    {
      title: 'Hacktoberfest 2021 Contributor',
      description: 'Active open-source contributor with multiple accepted PRs',
      icon: '🏆'
    },
    {
      title: '400+ Coding Problems Solved',
      description: 'LeetCode, GeeksforGeeks, and HackerRank platforms',
      icon: '💻'
    },
    {
      title: 'AI Seminar Leader',
      description: 'Conducted 15+ technical workshops on AI and backend development',
      icon: '🎯'
    },
    {
      title: 'Team Collaboration',
      description: 'Cross-functional agile team experience with 8+ major deliverables',
      icon: '🤝'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience & Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My professional journey in AI development and backend engineering, marked by continuous learning and impactful contributions.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                        {exp.current && (
                          <Badge className="bg-green-100 text-green-700">Current</Badge>
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-2">{exp.company}</h4>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">{exp.duration}</div>
                      <div className="text-gray-600">{exp.location}</div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-4">Key Achievements:</h5>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Notable Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
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

export default ExperienceSection;
