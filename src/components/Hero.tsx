import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          <span className="block">Hola, soy</span>
          <span className="block mt-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Brandon Ali Lozano Mateos
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Software Engineer | Developer
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contacto"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            Contáctame
          </a>
          <a
            href="./cv.pdf"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full transition-colors"
            download
          >
            Descargar CV
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;