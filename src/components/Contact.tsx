import React, { useState } from 'react';
import { Mail, Github, Linkedin, Facebook, Instagram, Phone, PhoneCall, PhoneIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_eu5j5hl', // Replace with your EmailJS service ID
        'template_oi3jvmu', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Brandon',
        },
        'vlSgacYwoGysLqjX_' // Replace with your EmailJS public key
      );

      toast.success('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-gray-800">
      <Toaster position="top-right" />
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
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;