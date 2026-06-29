import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONT-END ARSENAL",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js", "Redux"],
      color: "text-spidey-red"
    },
    {
      title: "BACK-END STRATEGY",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Python"],
      color: "text-spidey-blue"
    },
    {
      title: "HEROIC TOOLS",
      skills: ["Git", "Docker", "AWS", "Figma", "Jest", "Vite"],
      color: "text-white"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="marvel-font text-5xl text-white mb-4"
          >
            TECHNICAL <span className="text-spidey-blue">SKILLS</span>
          </motion.h2>
          <div className="w-24 h-1 bg-spidey-blue mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-spidey-black/50 p-8 rounded-2xl border border-white/5 hover:border-spidey-red/30 transition-colors"
            >
              <h3 className={`marvel-font text-2xl mb-6 ${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: '#E23636',
                      color: '#fff'
                    }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive "Web" Background element */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#2B3E93" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="50%" cy="50%" r="40%" fill="url(#grad1)" />
           </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;
