import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello, World!
      </motion.h1>
    </div>
  );
}

export default App;
