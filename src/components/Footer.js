import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link to="/" className="text-white hover:text-blue-400 mx-2">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-400 mx-2">About</Link>
          <Link to="/pricing" className="text-white hover:text-blue-400 mx-2">Pricing</Link>
          <Link to="/panel" className="text-white hover:text-blue-400 mx-2">Panel</Link>
        </div>

        <div className="mb-4">
          <Link to="/terms" className="hover:text-blue-400 mx-2">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-blue-400 mx-2">Privacy Policy</Link>
        </div>

        <div className="mb-4 flex justify-center space-x-4">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaGithub size={24} />
          </a>
          <a href="https://discord.com/yourserver" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaDiscord size={24} />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
        </div>

        <div className="text-gray-500">
          &copy; {new Date().getFullYear()} Eikemo.dev. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
