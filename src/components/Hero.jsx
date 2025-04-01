import React from "react";
import profileImage from "../assets/Snapchat-136620936.jpg"; // Import the image

const Hero = () => {
  return (
    <section id="hero" className="w-screen h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 px-6 bg-gradient-to-r from-white to-gray-100">
      {/* Left Side (Text) */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hello, I'm <span className="text-orange-500">Godfrey Leshoo</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700">
          A Creative Developer from <span className="text-orange-500">Nairobi</span>
        </h2>
        <p className="text-gray-600 text-lg md:w-4/5">
          I'm a passionate and dedicated developer specializing in Website creation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a href="/Godfrey_Leshoo_CV.pdf" download className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition">
            Download CV
          </a>
          <a href="#contact" className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a href="www.linkedin.com/in/godfrey-leshoo-2a8193230" className="text-blue-600 text-2xl" target="blank"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-blue-400 text-2xl"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-blue-700 text-2xl"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="text-gray-700 text-2xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-700 text-2xl"><i className="fab fa-tiktok"></i></a>
          <a href="#" className="text-gray-700 text-2xl"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-100 flex justify-center mt-10 md:mt-0">
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
