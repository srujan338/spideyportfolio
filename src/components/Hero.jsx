import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with City Skyline and Parallax effect */}
      <div
        className="absolute inset-0 bg-city-skyline bg-cover bg-center opacity-40"
        style={{ backgroundAttachment: 'fixed' }}
      />

      {/* Red/Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spidey-black/60 to-black" />

      {/* Spider-Web Pattern Background (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <pattern id="web-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 0 L100 100 M100 0 L0 100 M50 0 V100 M0 50 H100" stroke="white" strokeWidth="0.5" fill="none" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#web-pattern)" />
      </svg>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <h1 className="marvel-font text-6xl md:text-9xl text-white mb-4 drop-shadow-[0_5px_5px_rgba(226,54,54,0.5)]">
            WEB <span className="text-spidey-red">DEVELOPER</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-light"
        >
          Swinging through the digital cityscape, building immersive experiences one web at a time.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-spidey-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-spidey-red/20"
          >
            VIEW MISSIONS
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white hover:border-spidey-red hover:text-spidey-red text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            CONTACT ME
          </a>
        </motion.div>
      </div>

      {/* Swinging Spidey Silhouette or Icon */}
      <motion.div
        className="absolute top-0 right-10 md:right-40 w-1 h-32 bg-white/30 hidden md:block"
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ transformOrigin: 'top center' }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-spidey-red rounded-full flex items-center justify-center border-4 border-white shadow-xl">
           <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
              <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
           </svg>
        </div>
      </motion.div>

      {/* Decorative Web Lines */}
      <div className="absolute top-0 left-[10%] w-[1px] h-48 bg-white/10" />
      <div className="absolute top-0 right-[20%] w-[1px] h-64 bg-white/10" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-spidey-red rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
