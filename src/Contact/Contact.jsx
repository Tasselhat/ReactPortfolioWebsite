import React from "react";

import "../index.css";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="page" class="main-container" role="main">
        <img
          class="background-divider-img"
          src="../images/5ef2e559f911d339e9e83b94_image-divider-bottom.png"
          alt=""
        />
        <div class="content-wrapper">
          <div class="content-container">
            <div class="grid-thumbs">
              <a
                href="http://127.0.0.1:5500/.Portfolio_websites/HowLongPage/HowLong.html"
                class="grid-item"
              >
                <div class="preview-img">
                  <img src="../images/2782179.jpg" alt="" />
                </div>
                <div class="project-title">
                  <h1>How Long Have I Been Alive?</h1>
                </div>
              </a>
              <a class="grid-item">
                <div class="preview-img">
                  <img
                    src="../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg"
                    alt=""
                  />
                </div>
                <div class="project-title">
                  <h1>Project Placeholder Name</h1>
                </div>
              </a>
              <a class="grid-item">
                <div class="preview-img">
                  <img
                    src="../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg"
                    alt=""
                  />
                </div>
                <div class="project-title">
                  <h1>Project Placeholder Name</h1>
                </div>
              </a>
              <a class="grid-item">
                <div class="preview-img">
                  <img
                    src="../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg"
                    alt=""
                  />
                </div>
                <div class="project-title">
                  <h1>Project Placeholder Name</h1>
                </div>
              </a>
              <a class="grid-item">
                <div class="preview-img">
                  <img
                    src="../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg"
                    alt=""
                  />
                </div>
                <div class="project-title">
                  <h1>Project Placeholder Name</h1>
                </div>
              </a>
              <a class="grid-item">
                <div class="preview-img">
                  <img
                    src="../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg"
                    alt=""
                  />
                </div>
                <div class="project-title">
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
