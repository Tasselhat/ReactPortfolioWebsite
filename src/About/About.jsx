import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "./Terminal.css";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="page" class="main-container" role="main">
        <div class="tv">
          <div id="terminal">
            <p>C:\WINDOWS\system32&gt;</p>
          </div>
          <div class="collection external terminal">
            More:{" "}
            <Link to="/Projects" target="top">
              Projects
            </Link>
            , or{" "}
            <Link to="/Resume" target="top">
              Resume
            </Link>{" "}
            and{" "}
            <Link to="/Contact" target="t">
              Contact
            </Link>{" "}
          </div>
          <div class="flicker"></div>
          <div class="scanlines"></div>
        </div>
      </main>
    );
  }
}
