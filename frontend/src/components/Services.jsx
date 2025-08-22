import React from 'react';
import { Code, Server, Cloud, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import mockData from '../mock';

const Services = () => {
  const { services } = mockData;

  const iconMap = {
    Code: Code,
    Server: Server,
    Cloud: Cloud,
    Users: Users
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Services</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Comprehensive development services to bring your ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service) => {
          const IconComponent = iconMap[service.icon] || Code;
          return (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-emerald-100 rounded-xl mr-4 group-hover:bg-emerald-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="group/btn w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                  onClick={handleContactClick}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-12">
        <h3 className="text-3xl font-semibold text-slate-800 mb-4">
          Ready to start your project?
        </h3>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how I can help bring your vision to life with modern web technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleContactClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            Start a Project
          </Button>
          <Button
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-white px-8 py-3 rounded-full text-lg font-medium"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;