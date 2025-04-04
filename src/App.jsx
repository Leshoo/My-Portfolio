import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;