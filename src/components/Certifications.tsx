import React from 'react';
import styles from './Certifications.module.css';
import { ExternalLink } from 'lucide-react';



const Certifications = () => {
  const certifications = [
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      organization: 'Microsoft',
      date: '2022',
      image: 'https://raw.githubusercontent.com/brandonmateos/PortafolioBrandonLozano/refs/heads/main/img/micosoft-azure.webp',
      badge: '🏆',
      view: 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=414&cvid=mWNhiFLz93g21J17YZtwlg=='

    },
    {
      title: 'Google Cloud Computing Foundations Certificate',
      organization: 'Google',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027',
      badge: '🎓',
      view: 'https://www.credly.com/badges/9993c1a8-84dd-4a7d-b664-758cd15117f2/linked_in_profile'
    },
    {
      title: 'Introduction to Cybersecurity',
      organization: 'Cisco',
      date: '2023',
      image: 'https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png',
      badge: '🎓',
      view: 'https://www.credly.com/badges/1e63c2dd-70fb-4da4-a13a-24a0c1485be4/linked_in_profile'
    }
  ];

  const handleCertClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certificaciones" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Certificaciones
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => handleCertClick(cert.view)}
              className={`${styles.certCard} group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-500`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span 
                  className={`${styles.badge} absolute top-4 right-4 text-3xl sm:text-4xl`}
                >
                  {cert.badge}
                </span>
              </div>
              
              <div className="p-6 sm:p-8 bg-gray-800">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-2">{cert.organization}</p>
                <p className="text-xs sm:text-sm text-gray-500">{cert.date}</p>
                <ExternalLink className="absolute bottom-4 right-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </div>
              
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/100 rounded-xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;