import React from "react";

import placeholderImage from "../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg";
import howLongImage from "../images/2782179.jpg";
import sortingVisPng from "../images/SortingVispng.png";
import backgroundDividerImg from "../images/5ef2e559f911d339e9e83b94_image-divider-bottom.png"
import "./Main.css";
import "../index.css";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="page" className="main-container" role="main">
        <img
          className="background-divider-img"
          src={backgroundDividerImg}
          alt=""
        />
        <div className="content-wrapper">
          <div className="content-container">
            <div className="grid-thumbs">
              <a href="/SortingVisualizer" className="grid-item">
                <div className="preview-img">
                  <img src={sortingVisPng} alt="" />
                </div>
                <div className="project-title">
                  <h1>Sorting Visualizer</h1>
                </div>
              </a>
              <a href="/HowLong" className="grid-item">
                <div className="preview-img">
                  <img src={howLongImage} alt="" />
                </div>
                <div className="project-title">
                  <h1>How Long Have I Been Alive?</h1>
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
    );
  }
}
