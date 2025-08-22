import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import mockData from '../mock';

const Footer = () => {
  const { personal } = mockData;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'API Development', 
    'React Applications',
    'Node.js Backend',
    'Database Design',
    'Technical Consulting'
  ];

  const handleScrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold text-emerald-400 mr-2">AC</div>
              <div>
                <h3 className="text-xl font-semibold">{personal.name}</h3>
                <p className="text-slate-400">{personal.title}</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              {personal.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={personal.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-slate-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} {personal.name}. Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1 fill-current" />
              <span>and lots of coffee</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Available for freelance work</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;