import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Tecnologías Frontend',
      skills: [
        { name: 'JavaScript', icon: '💛' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Tailwind CSS', icon: '🎨' }
           
      ]
    },
    {
      title: 'Tecnologías Backend',
      skills: [
        { name: 'Node.js', icon: '💚' },
        { name: 'Python', icon: '🐍' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'REST APIs', icon: '🔌' }
      ]
    },
    {
      title: 'Herramientas & DevOps',
      skills: [
        { name: 'Git', icon: '📚' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Azure', icon: '☁️' },
        { name: 'Linux', icon: '🐧' },
        { name: 'VS Code', icon: '💻' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Stack Tecnológico
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 sm:mb-8 text-center text-purple-500">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`${styles.skillItem} group flex flex-col items-center justify-center gap-2 sm:gap-3`}
                  >
                    <div className={styles.iconWrapper}>
                      <span 
                        className={`${styles.icon} text-2xl sm:text-4xl`}
                        role="img" 
                        aria-label={skill.name}
                      >
                        {skill.icon}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 text-center group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;