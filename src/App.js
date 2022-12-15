import React from "react";
import Projects from "./Projects/Projects.jsx";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer.jsx";
import HowLong from "./HowLong/HowLong.jsx";
import Resume from "./Resume/Resume.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Missing from "./Pages/Missing.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route sensitive={false} path="/Projects" element={<Projects />} />
        <Route sensitive={false} path="/About" element={<About />} />
        <Route sensitive={false} path="/HowLong" element={<HowLong />} />
        <Route sensitive={false} path="/Resume" element={<Resume />} />
        <Route sensitive={false} path="/Contact" element={<Contact />} />
        <Route
          sensitive={false}
          path="/SortingVisualizer"
          element={<SortingVisualizer />}
        />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
