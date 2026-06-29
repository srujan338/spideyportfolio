import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black text-white selection:bg-spidey-red selection:text-white cursor-none">
      <CustomCursor />
      {/* Progress Bar (Web line) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-spidey-red z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-spidey-black border-t border-spidey-red/30 py-8 text-center text-gray-400">
        <p className="marvel-font text-xl text-spidey-red mb-2">With Great Power Comes Great Responsibility</p>
        <p>© {new Date().getFullYear()} Spidey Dev. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
