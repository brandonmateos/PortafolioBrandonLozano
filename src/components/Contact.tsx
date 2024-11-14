import React from 'react';
import { Mail, Github, Linkedin, Facebook, Instagram, Phone, PhoneCall, PhoneIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contáctame
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">¡Hablemos!</h3>
            <p className="text-gray-400">
              Estoy interesado en oportunidades freelance y posiciones de tiempo completo.
              Si tienes alguna pregunta o propuesta, no dudes en contactarme.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:brandon.lozano.cyberdev@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-500 transition-colors"
              >
                <Mail size={24} />
                <span>brandon.lozano.cyberdev@gmail.com </span>
              </a>
              
              <a
                href="https://github.com/brandonmateos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-500 transition-colors"
              >
                <Github size={24} />
                <span>github.com/brandonmateos</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/brandon-ali-lozano-mateos-421002269/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-500 transition-colors"
              >
                <Linkedin size={24} />
                <span>linkedin.com/in/brandon-ali-lozano-mateos-421002269</span>
              </a>

              <a
                href="https://www.instagram.com/brandonmateos_02/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-500 transition-colors"
              >
                <Instagram size={24} />
                <span>instagram.com/brandonmateos_02</span>
              </a>

              <a
                href="https://wa.me/+523143058295"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-500 transition-colors"
              >
                <PhoneIcon size={24} />
                <span>WhatsApp +523143058295</span>
              </a>
              
                

            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;