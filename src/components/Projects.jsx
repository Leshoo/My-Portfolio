import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";

const projects = [
  {
    title: "Portfolio Website",
    category: "Web Development",
    description: "A fully responsive portfolio built with React and Tailwind CSS.",
    image: project1,
    link: "#",
  },
  {
    title: "E-commerce App",
    category: "Web Development",
    description: "A modern e-commerce platform with payment integration.",
    image: project2,
    link: "#",
  },
  {
    title: "AI Chatbot",
    category: "AI & Automation",
    description: "An AI-powered chatbot for customer support.",
    image: project3,
    link: "#",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "A secure mobile banking app with great UI/UX.",
    image: project4,
    link: "#",
  },
  {
    title: "Stock Market Analysis Tool",
    category: "Data Science",
    description: "A tool for analyzing stock market trends using machine learning.",
    image: project5,
    link: "#",
  },
];

const categories = ["All", "Web Development", "AI & Automation", "Mobile Development", "Data Science"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="w-screen py-16 px-6 bg-gradient-to-r from-white to-gray-100"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">My Projects</h2>
        <p className="text-gray-600 mt-2">Explore my latest works</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedCategory === category ? "bg-orange-500 text-white" : "bg-white text-gray-800"
            } border border-gray-300 hover:bg-orange-400 hover:text-white transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition border border-gray-200"
          >
            <img src={project.image} alt={project.title} className="rounded-lg w-full" />
            <h3 className="text-xl font-semibold mt-4 text-gray-900">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-3 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
