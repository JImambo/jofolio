import React from 'react';
import { Code2, Server, Shield, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend Development', icon: Code2, skills: skills.frontend, color: 'cyan' },
    { title: 'Backend Development', icon: Server, skills: skills.backend, color: 'emerald' },
    { title: 'Cyber Security', icon: Shield, skills: skills.security, color: 'orange' },
    { title: 'Tools & DevOps', icon: Wrench, skills: skills.tools, color: 'purple' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', bar: 'bg-cyan-500' },
      emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', bar: 'bg-emerald-500' },
      orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', bar: 'bg-orange-500' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', bar: 'bg-purple-500' }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-[#0a0e27] relative">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My expertise across different technologies and security practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);

            return (
              <div
                key={index}
                className={`bg-[#1a1d29] rounded-xl p-8 border ${colors.border} hover:border-opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-${category.color}-500/10`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className={`text-sm ${colors.text} font-semibold`}>{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors.bar} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;