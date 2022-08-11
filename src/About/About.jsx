import React from "react";
import { Link } from "react-router-dom";
import Console from "./Console";

import "../index.css";
import "./Terminal.css";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main id="page" className="terminal-container" role="main">
        <div className="tv">
          <Console />
          <div className="collection">
            More: <Link to="/Projects">Projects</Link>, or{" "}
            <Link to="/Resume">Resume</Link> and{" "}
            <Link to="/Contact">Contact</Link>{" "}
          </div>
          <div className="flicker"></div>
          <div className="scanlines"></div>
        </div>
      </main>
    );
  }
}
