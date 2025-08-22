import React, { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import mockData from '../mock';

const Projects = () => {
  const { projects } = mockData;
  const [filter, setFilter] = useState('all');

  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          A showcase of my recent work and technical expertise
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <Button
          onClick={() => setFilter('all')}
          variant={filter === 'all' ? 'default' : 'outline'}
          className={filter === 'all' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
        >
          All Projects
        </Button>
        {['React', 'Node.js', 'Python', 'TypeScript'].map((tech) => (
          <Button
            key={tech}
            onClick={() => setFilter(tech)}
            variant={filter === tech ? 'default' : 'outline'}
            className={filter === tech ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
          >
            {tech}
          </Button>
        ))}
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <Star className="h-5 w-5 text-yellow-500 flex-shrink-0" />
              </div>
              <p className="text-slate-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-100 text-slate-700">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* All Projects Grid */}
      <div>
        <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">All Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 text-xs"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 text-xs bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;