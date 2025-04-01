import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600">Godie<span className="text-black">Lesh</span></h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#hero" className="text-gray-700 hover:text-orange-500 text-xl transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-orange-500 text-xl transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 text-xl transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          <a href="https://facebook.com/godfrey.leshoo.50" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-700 hover:text-orange-500 text-xl transition duration-300" />
          </a>
          <a href="https://twitter.com/Godfrey_Leshoo" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-700 hover:text-orange-500 text-xl transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/godfrey-leshoo-2a8193230" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-700 hover:text-orange-500 text-xl transition duration-300" />
          </a>
          <a href="https://github.com/Leshoo" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-700 hover:text-orange-500 text-xl transition duration-300" />
          </a>
          <a href="https://wa.me/254718139099" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-gray-700 hover:text-orange-500 text-xl transition duration-300"/>
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden px-3 py-2 border rounded text-gray-700 border-gray-700">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md py-4">
          <li className="py-2">
            <a href="#hero" onClick={toggleMenu} className="text-gray-700 hover:text-orange-500 transition duration-300">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#projects" onClick={toggleMenu} className="text-gray-700 hover:text-orange-500 transition duration-300">
              Projects
            </a>
          </li>
          <li className="py-2">
            <a href="#contact" onClick={toggleMenu} className="text-gray-700 hover:text-orange-500 transition duration-300">
              Contact
            </a>
          </li>

          {/* Social Media Links in Mobile Menu */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-700 hover:text-orange-500 text-xl transition duration-300" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-700 hover:text-orange-500 text-xl transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-700 hover:text-orange-500 text-xl transition duration-300" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-700 hover:text-orange-500 text-xl transition duration-300" />
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
