import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  // Define the animation variants
  const textVariant = {
    hidden: { y: -200, opacity: 0 }, // Starting position: above the viewport
    visible: { 
      y: 0, // Final position: original position
      opacity: 1, // Fade in
      transition: { 
        type: 'spring', // Type of animation
        stiffness: 50, // How stiff the animation feels
        damping: 10, // How much to dampen the spring effect
        duration: 1 // Duration of the animation
      }
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-800 text-white"
      initial="hidden"
      animate="visible"
      variants={textVariant}
    >
      <h1 className="text-4xl">Hello, world! (Malvin is workin on it...)</h1>
    </motion.div>
  );
}

export default Home;
