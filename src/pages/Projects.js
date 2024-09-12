import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const projectsData = [
  {
    id: 1,
    title: "Project One",
    description: `# Project One
    This is the first project. It involves using **React** and **Framer Motion**.`,
  },
  {
    id: 2,
    title: "Project Two",
    description: `# Project Two
    This project is focused on **Tailwind CSS** for styling and responsiveness.`,
  },
  {
    id: 3,
    title: "Project Three",
    description: `# Project Three
    A demonstration of **JavaScript** and **APIs** for dynamic content.`,
  },
  // Add more projects as you like
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl text-center mb-8">Projects</h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleProjectClick(project)}
            >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-sm">Click to view details</p>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="text-white absolute top-4 right-4"
                  onClick={handleClose}
                >
                  Close
                </button>
                <h2 className="text-3xl font-semibold mb-4">
                  {selectedProject.title}
                </h2>
                <ReactMarkdown className="prose prose-invert">
                  {selectedProject.description}
                </ReactMarkdown>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
