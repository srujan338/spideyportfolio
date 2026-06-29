import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DAILY BUGLE CMS",
      description: "A high-performance content management system designed for fast-paced news environments.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1504711432869-efd5973e8d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "border-spidey-red"
    },
    {
      title: "WEB-SHOOTER DASHBOARD",
      description: "Real-time monitoring tool for tracking mission statistics and gadget performance.",
      tech: ["Vue.js", "Firebase", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "border-spidey-blue"
    },
    {
      title: "NYC PATROL MAP",
      description: "Interactive 3D mapping application for navigating the concrete jungle efficiently.",
      tech: ["Next.js", "Three.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1496815667911-d1488e3c7484?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "border-white"
    },
    {
      title: "MULTIVERSE CHAT",
      description: "Secure, encrypted communication platform for connecting across different dimensions.",
      tech: ["Socket.io", "Express", "React"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "border-spidey-red"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-spidey-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="marvel-font text-5xl text-white mb-4"
          >
            THE WEB OF <span className="text-spidey-red">PROJECTS</span>
          </motion.h2>
          <div className="w-24 h-1 bg-spidey-red mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of successful missions and digital infrastructures I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-xl border-2 ${project.color} group bg-black`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="marvel-font text-2xl text-white mb-2 group-hover:text-spidey-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-white/10 text-white rounded uppercase tracking-widest border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-spidey-red transition-colors font-bold">
                    <Github size={16} /> CODE
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-spidey-red transition-colors font-bold">
                    <ExternalLink size={16} /> LIVE DEMO
                  </a>
                </div>
              </div>

              {/* Spider Web Decoration in Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-none stroke-current">
                   <path d="M100 0 L0 100 M100 0 L0 0 M100 0 L100 100" strokeWidth="2" />
                   <path d="M100 0 Q 50 0 50 50" strokeWidth="1" />
                   <path d="M100 0 Q 100 50 50 50" strokeWidth="1" />
                 </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="marvel-font text-xl border-2 border-spidey-red px-10 py-3 hover:bg-spidey-red transition-all"
          >
            VIEW FULL ARCHIVE
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
