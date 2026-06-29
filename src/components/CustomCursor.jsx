import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(226, 54, 54, 0.3)",
      border: "2px solid #E23636",
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-spidey-red pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    >
       <div className="w-1 h-1 bg-spidey-red rounded-full" />

       {/* Small web lines radiating from cursor when hovering */}
       {isHovering && (
         <div className="absolute inset-0">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-spidey-red" />
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-spidey-red" />
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-spidey-red" />
           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-spidey-red" />
         </div>
       )}
    </motion.div>
  );
};

export default CustomCursor;
