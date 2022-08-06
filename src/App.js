import React from "react";
import Projects from "./Projects/Projects.jsx";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer.jsx";
import HowLong from "./HowLong/HowLong.jsx";
import Resume from "./Resume/Resume.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="ReactPortfolioWebsite/" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/HowLong" element={<HowLong />} />
      </Routes>
      <Routes>
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/SortingVisualizer" element={<SortingVisualizer />} />
      </Routes>
    </div>
  );
}

export default App;
