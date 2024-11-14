import React from 'react';
import { Download, Github, Linkedin, Mail, Moon, ExternalLink, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-400">© 2024 - Brandon Ali Lozano Mateos</p>
      </footer>
    </div>
  );
}

export default App;