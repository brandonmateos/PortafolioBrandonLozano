import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sitio Web - La Casa Del Detector',
      description: 'Desarrollo de un sitio web económico para la ferretería La Casa Del Detector, con catálogo de herramientas, carrusel de promociones y búsqueda avanzada.',
      image: '/img/project1.png',
      tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'PostgreSQL', 'Vercel', 'GitHub'],
      github: 'https://github.com/brandonmateos/LaCasaDelDetectorWebSite?tab=readme-ov-file', // Reemplaza con el enlace real del repositorio si lo tienes
      live: 'https://la-casa-del-detector-web-site.vercel.app/' // Reemplaza con el enlace real de la página en vivo
    },
    {
      title: 'Practice - “Marca” page clone',
      description: 'Actividad de práctica de HTML y CSS, clonando la página de inicio de “Marca”.',
      image: '/img/projecto2.png',
      tech: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/brandonmateos/PracticaB4-marca.com',
      live: 'https://brandonmateos.github.io/PracticaB4-marca.com/'
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Proyectos
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden group">
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-700 rounded-full text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    <Github size={20} />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;