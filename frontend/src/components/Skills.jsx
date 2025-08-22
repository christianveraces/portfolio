import React from 'react';
import { Code, Server, Cloud, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import mockData from '../mock';

const Skills = () => {
  const { skills } = mockData;

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: skills.frontend,
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: 'bg-emerald-50 border-emerald-200 text-emerald-800'
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: skills.devops,
      color: 'bg-purple-50 border-purple-200 text-purple-800'
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: skills.tools,
      color: 'bg-orange-50 border-orange-200 text-orange-800'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl font-semibold text-slate-800">
                  <div className="p-2 bg-emerald-100 rounded-lg mr-3">
                    <IconComponent className="h-6 w-6 text-emerald-600" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.color} hover:shadow-sm transition-shadow cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Skill Progress Bars */}
      <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200">
        <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Proficiency Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { skill: 'JavaScript', level: 80 },
            { skill: 'MySQL', level: 95 },
            { skill: 'C#', level: 85 },
            { skill: 'Python/FastAPI', level: 90 },
            { skill: 'Microsoft Office', level: 88 }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-700 font-medium">{item.skill}</span>
                <span className="text-emerald-600 font-semibold">{item.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;