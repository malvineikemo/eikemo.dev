import React from 'react';
import { motion } from 'framer-motion';

function Privacy() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl">Privacy Policy</h1>
    </motion.div>
  );
}

export default Privacy;
