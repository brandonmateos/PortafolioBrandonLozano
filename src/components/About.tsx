import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sobre Mí
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras. 
              Con experiencia en desarrollo web full stack, me especializo en crear aplicaciones 
              web modernas y eficientes.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Mi objetivo es combinar diseño y funcionalidad para crear experiencias digitales 
              excepcionales que resuelvan problemas reales.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-500">Experiencia</h3>
                <p className="text-gray-300">+3 años</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-500">Proyectos</h3>
                <p className="text-gray-300">+20 completados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;