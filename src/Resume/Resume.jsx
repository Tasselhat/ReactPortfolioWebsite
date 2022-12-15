import React from "react";

import backgroundDividerImg from "../images/background-divider-img.png";
import CMDlogo from "../images/cmd-logo.png";
import CSS3logo from "../images/CSS3-Logo.png";
import Githublogo from "../images/Github-logo.png";
import Javalogo from "../images/Java-logo.png";
import JavaScriptlogo from "../images/JavaScript-logo.png";
import Nodejslogo from "../images/Node.js-logo.png";
import Npmlogo from "../images/Npm-logo.png";
import Pythonlogo from "../images/Python-logo.png";
import Reactlogo from "../images/React-logo.png";
import HTMLlogo from "../images/HTML5-logo.png";
import VSCodelogo from "../images/VSCode-logo.png";
import MongoDBlogo from "../images/mongodb.svg";

import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import "./Resume.css";
import "../General.css";
import "../index.css";

// Function will execute on click of button
const onButtonClick = () => {
  // using JavaScript method to get PDF file
  fetch("Engineering Resume Dec 2022.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Engineering Resume Dec 2022.pdf";
      alink.click();
    });
  });
};
export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <img
          className="background-divider-img"
          src={backgroundDividerImg}
          alt=""
        />
        <main id="page" className="main-container-resume" role="main">
          <div className="Resume-Wrapper">
            <header className="resume-info">
              <button
                onClick={() => onButtonClick()}
                className="pdf-download-button"
              >
                <span className="pdf-download-button-front">
                  Download PDF version
                </span>
              </button>
              <h1>Tim Schneider</h1>
              <h2>Web Development, Design, Gymnastics Coach</h2>
              <h4>
                <a href="mailto:Tim.b.schneider@gmail.com">
                  Tim.b.schneider@gmail.com &nbsp;&nbsp;
                </a>
                <a href="tel:5035167078">
                  -&nbsp;&nbsp; (503) 516-7078 &nbsp;&nbsp;
                </a>
                -&nbsp;&nbsp; San Diego, CA &nbsp;&nbsp;-&nbsp;&nbsp;
                <a href="linkedin.com/in/timbschneider">
                  <u>linkedin.com/in/timbschneider</u>
                  &nbsp;&nbsp;
                </a>
                <a href="https://github.com/Tasselhat">
                  -&nbsp;&nbsp; <u>github.com/Tasselhat</u>
                </a>
              </h4>
            </header>
            <div className="Education-Wrapper">
              <h2>
                <u>EDUCATION</u>
              </h2>
              <p>
                B.S. in Psychology with a Specialization in Developmental
                Psychology / 3.96 GPA /<b>UC San Diego </b>/ September 2021 -
                June 2023
              </p>
              <p>
                AA-T Psychology / 3.87 GPA /<b>Lake Tahoe Community College </b>
                / September 2019 - June 2021
              </p>
            </div>
            <div className="languages-wrapper">
              <div className="languages-container">
                <h3>
                  <u>PROGRAMMING LANGUAGES & TOOLS</u>
                </h3>
                <div>
                  <li>
                    Javascript
                    <img src={JavaScriptlogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    React.js
                    <img src={Reactlogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    Python
                    <img src={Pythonlogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    HTML 5
                    <img src={HTMLlogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    Responsive CSS
                    <img src={CSS3logo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    Node.js + Express.js
                    <img src={Nodejslogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    MongoDB + Atlas
                    <img src={MongoDBlogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    Java (Elementary)
                    <img src={Javalogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    <a href="https://github.com/Tasselhat">
                      Git + Github for version control
                      <img src={Githublogo} alt="" className="tool-logo" />
                    </a>
                  </li>
                  <li>
                    VS Code Editor
                    <img src={VSCodelogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    npm (Node Package Manager)
                    <img src={Npmlogo} alt="" className="tool-logo" />
                  </li>
                  <li>
                    Command Line + Git Bash
                    <img src={CMDlogo} alt="" className="tool-logo" />
                  </li>
                </div>
              </div>
              <div>
                <figure className="wakatime-piechart">
                  <embed src="https://wakatime.com/share/@TasselHat/8cf6e5cd-c294-4305-9b17-4b0e31297e0f.svg"></embed>
                </figure>
              </div>
            </div>
            <div className="Projects-Wrapper">
              <h2>
                <u>PROJECTS</u>
              </h2>
              <p>
                <h3>Budget App Free</h3>
                <a href="https://www.budgetappfree.com/">
                  <u>www.BudgetAppFree.com</u>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a href="https://github.com/Tasselhat/BudgetTracker">
                  <u>github.com/Tasselhat/BudgetTracker</u>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              </p>
              <br />
              <p>
                Full-stack&nbsp;&nbsp;&nbsp;&nbsp;Personal
                Project&nbsp;&nbsp;&nbsp;&nbsp;Sept 2022 - Nov 2022
              </p>
              <p>
                Web app for submitting and saving user budget, displaying to
                users a breakdown of their expenses and savings (React , Node ,
                Express , MongoDB, Heroku )
              </p>
              <p>
                <h3>Optiwing SEO tool (W.I.P)</h3>
                <a href="https://www.optiwing.com/">
                  <u>www.Optiwing.com</u>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                Private Repository
              </p>
              <br />
              <p>
                Full-stack&nbsp;&nbsp;&nbsp;&nbsp;Personal
                Project&nbsp;&nbsp;&nbsp;&nbsp;Sept 2022 - Nov 2022
              </p>
              <p>
                Web tool for submitting keywords as a csv file and receiving a
                ranking list and connection map of related search terms for
                google search engine optimization. (React , Node , Express ,
                MongoDB, Heroku )
              </p>
            </div>
            <div className="Work-Experience-Wrapper">
              <h2>
                <u>WORK EXPERIENCE</u>
              </h2>
              <h3>Shasta Gymnastics Academy</h3>
              <p>
                Front-end Development&nbsp;&nbsp;&nbsp;&nbsp;November 2022 -
                Present &nbsp;&nbsp;&nbsp;&nbsp;(Redding, CA - Remote)
              </p>
              <li>Designed and launched new website</li>
              <li>Offer support and monthly website maintenance and upkeep</li>
              <li>
                Implemented class calendar utilizing google calendar API and
                backend email server for contact page
              </li>
            </div>
            <div className="Skills-Wrapper">
              <h3>
                <u>SKILLS & FOCUSES</u>
              </h3>
              <div>
                <li> User Experience</li>
                <li> UI design</li>
                <li> Leadership and Teaching experience</li>
                <li>Continually seeking improvement and expanding education</li>
                <li> Research experience</li>
                <li>Background in psychology and human development</li>
              </div>
            </div>
            <div className="Leadership-Awards-Wrapper">
              <h3>
                <u>LEADERSHIP & AWARDS</u>
              </h3>
              <p>
                <b>Eagle Scout Award </b>/ Boy Scouts of America - Awarded July
                18, 2016
              </p>
              <p>
                <b>Treasurer </b>/ AGS Honor Society & Circle K - Kiwanis
                Service Club Tahoe Branch - Sept 2020 - June 2021
              </p>
              <p>
                <b>Media Chair </b>/ UCSD Club Gymnastics - June 2022 - June
                2023
              </p>
              <p>
                <b>Provost Honors | 4.0 GPA </b>/ UC San Diego - Terms: Fall Qtr
                2021, Winter Qtr 2022
              </p>
              <p>
                <b>Janice Tait Memorial Scholarship</b>/ Awarded Fall 2020
              </p>
              <p>
                <b>Soroptimist International of South Lake Tahoe Scholarship</b>
                / Awarded Fall 2020
              </p>
            </div>
            <div>
              <h3>
                <u>RELEVANT COURSEWORK</u>
              </h3>
              <p>
                <b>Intro to Computer Programming </b>/ Fall 2020 - Introduction
                to computer programming and object oriented programming using
                the Java programming langauge.
              </p>
            </div>
          </div>
        </main>
        <div className="footer-background-overlay"></div>
        <Footer />
      </div>
    );
  }
}
