import React from "react";

import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "./Resume.css";
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
        <main id="page" class="main-container" role="main">
        </main>
        <Footer />
      </div>
    );
  }
}
