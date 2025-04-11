import React from "react";
import profileImage from "../assets/Snapchat-136620936.jpg"; // Import the image

const Hero = () => {
  return (
    <section id="hero" className="w-screen h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 px-6 bg-gradient-to-r from-white to-gray-100 dark:from-[#111] dark:to-[#222] transition-colors duration-300">
      {/* Left Side (Text) */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white-900">
          Hello, I'm <span className="text-orange-500">Godfrey Leshoo</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-white-700">
          A Creative Developer from <span className="text-orange-500">Nairobi</span>
        </h2>
        <p className="text-white-600 text-lg md:w-4/5">
          I'm a passionate and dedicated developer specializing in Website creation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a href="./Godfrey_Leshoo_CV.pdf" download className="text-white border-2 border-orange-500 px-6 py-3 rounded-full shadow-md transition">
            Download CV
          </a>
          <a href="#contact" className="px-6 py-3 border-2 border-orange-500 text-white-500 rounded-full hover:bg-white-500 transition">
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a href="https://facebook.com/godfrey.leshoo.50" className="text-blue-600 text-2xl" target="blank"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/Godfrey_Leshoo" className="text-blue-400 text-2xl" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com/in/godfrey-leshoo-2a8193230" className="text-blue-700 text-2xl" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/leshoo" className="text-blue-700 text-2xl" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://wa.me/254718139099" className="text-gray-700 text-2xl" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-xl border-4 border-white dark:border-gray-700 transition-all duration-300 object-cover">
        <img
          src={profileImage}
          alt="Profile"
          className="w-90 h-90 rounded-full shadow-xl border-4 border-white"
        />
      </div>
    </section>
  );
};

export default Hero;
