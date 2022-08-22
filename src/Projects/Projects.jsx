import React from "react";
import { Link } from "react-router-dom";

import placeholderImage from "../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg";
import placeholderImage2 from "../images/4139af14-2b47-4241-a5f0-69ae2308e542_progress_image_76.webp";
import howLongImage from "../images/TasselHat_hourglass_ultra_realistic_cinematic_lighting_volumetr_6b725a44-8920-4117-8b52-5a2d212d9529.png";
import sortingVisImage from "../images/TasselHat_sorting_algorithm_visualizer_4da05818-e32d-4852-bda1-d11d7f3bfd87.png";
import backgroundDividerImg from "../images/5ef2e559f911d339e9e83b94_image-divider-bottom.png";
import terminalImage from "../images/TasselHat_vintage_computer_terminal_with_a_black_screen_b8caed54-9099-4b43-9803-7f9fc29ae758.png";
import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "./Main.css";
import "../General.css";
import "../index.css";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <main id="projectspage" className="projects-container" role="main">
          <img
            className="background-divider-img"
            src={backgroundDividerImg}
            alt=""
          />
          <div className="content-wrapper">
            <div className="content-container">
              <div className="grid-thumbs">
                <Link to="/SortingVisualizer" className="grid-item">
                  <div className="preview-img">
                    <img src={sortingVisImage} alt="" />
                  </div>
                  <div className="project-title">
                    <h1>Sorting Visualizer</h1>
                  </div>
                </Link>
                <Link to="/HowLong" className="grid-item">
                  <div className="preview-img">
                    <img src={howLongImage} alt="" />
                  </div>
                  <div className="project-title">
                    <h1>How Long Have I Been Alive?</h1>
                  </div>
                </Link>
                <Link to="/About" className="grid-item">
                  <div className="preview-img">
                    <img src={terminalImage} alt="vintage computer terminal" />
                  </div>
                  <div className="project-title">
                    <h1>Vintage Computer Terminal</h1>
                  </div>
                </Link>
                <a
                  href="https://github.com/Tasselhat/BudgetTracker"
                  className="grid-item"
                >
                  <div className="preview-img">
                    <img src={placeholderImage2} alt="" />
                  </div>
                  <div className="project-title">
                    <h1>Budget Tracker (WIP, github repo)</h1>
                  </div>
                </a>
                <a className="grid-item">
                  <div className="preview-img">
                    <img src={placeholderImage} alt="" />
                  </div>
                  <div className="project-title">
                    <h1>Project Placeholder Name</h1>
                  </div>
                </a>
                <a className="grid-item">
                  <div className="preview-img">
                    <img src={placeholderImage} alt="" />
                  </div>
                  <div className="project-title">
                    <h1>Project Placeholder Name</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
        <div className="footer-background-overlay"></div>
        <Footer />
      </div>
    );
  }
}
