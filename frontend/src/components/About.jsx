import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import mockData from '../mock';

const About = () => {
  const { personal, experience } = mockData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Passionate about creating digital experiences that make a difference
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Personal Info */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Get to know me</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {personal.bio}
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-slate-600">
                <MapPin className="h-5 w-5 mr-3 text-emerald-600" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Calendar className="h-5 w-5 mr-3 text-emerald-600" />
                <span>Available for freelance work</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Award className="h-5 w-5 mr-3 text-emerald-600" />
                <span>2+ years of experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={exp.id} className="border-l-4 border-l-emerald-600 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">{exp.title}</h4>
                      <p className="text-emerald-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  <div className="space-y-1">
                    {exp.achievements.slice(0, 2).map((achievement, idx) => (
                      <div key={idx} className="flex items-start text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;