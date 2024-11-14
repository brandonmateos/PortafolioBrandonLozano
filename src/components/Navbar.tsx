import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#inicio" className="hover:text-purple-500 transition-colors">Inicio</a>
              <a href="#sobre-mi" className="hover:text-purple-500 transition-colors">Sobre Mí</a>
              <a href="#proyectos" className="hover:text-purple-500 transition-colors">Proyectos</a>
              <a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a>
              <a href="#certificaciones" className="hover:text-purple-500 transition-colors">Certificaciones</a>
              <a href="#contacto" className="hover:text-purple-500 transition-colors">Contacto</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Inicio</a>
            <a href="#sobre-mi" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Sobre Mí</a>
            <a href="#proyectos" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Proyectos</a>
            <a href="#skills" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Skills</a>
            <a href="#certificaciones" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Certificaciones</a>
            <a href="#contacto" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;