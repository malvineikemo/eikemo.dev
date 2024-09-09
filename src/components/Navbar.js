import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <NavLink
            to="/"
            exact
            className="hover:text-blue-400"
            activeClassName="text-blue-500"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="hover:text-blue-400"
            activeClassName="text-blue-500"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className="hover:text-blue-400"
            activeClassName="text-blue-500"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/panel"
            className="hover:text-blue-400"
            activeClassName="text-blue-500"
          >
            Panel
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
