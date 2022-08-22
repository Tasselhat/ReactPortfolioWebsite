import React from "react";

import backgroundDividerImg from "../images/5ef2e559f911d339e9e83b94_image-divider-bottom.png";

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
        <img
          className="background-divider-img"
          src={backgroundDividerImg}
          alt=""
        />
        <main id="page" className="main-container-resume" role="main">
          <div className="Resume-Wrapper">
            <header className="resume-info">
              <h1>Tim Schneider</h1>
              <h2>Web Development, Design, Gymnastics Coach, Education</h2>
              <p>
                Tim.b.schneider@gmail.com - (503) 516-7078 - San Diego, CA -
                linkedin.com/in/timbschneider
              </p>
            </header>
            <div className="Education-Wrapper">
              <h2>
                <u>EDUCATION</u>
              </h2>
              <p>
                B.S. in Psychology with a Specialization in Developmental
                Psychology / 3.96 GPA / <b>UC San Diego </b>/ September 2021 -
                June 2023
              </p>
              <p>
                AA-T Psychology / 3.87 GPA /{" "}
                <b>Lake Tahoe Community College </b>/ September 2019 - June 2021
              </p>
            </div>
            <div className="Work-Experience-Wrapper">
              <h2>
                <u>WORK EXPERIENCE</u>
              </h2>
              <h3>San Diego UNITED Training Center</h3>
              <p>
                Gymnastics/Camp Coach &nbsp;&nbsp;&nbsp;&nbsp;November 2021 -
                Present &nbsp;&nbsp;&nbsp;&nbsp;(San Diego, CA)
              </p>
              <li>
                Coaching Developmental level 3/4/5, and assistant coaching
                Optional level and Xcel Bronze-Diamond competitive women's
                gymnastics.
              </li>
              <li>
                Coaching introductory level women's artistic gymnastics and
                tumbling classes
              </li>
              <li>
                Maintaining a safe learning environment, creating lesson plans,
                Fostering an encouraging and fun atmosphere. Completing daily
                tasks and duties. Speaking with parents with regards to athlete
                progress.
              </li>
              <h3>Tumbleweeds Gymnastics</h3>
              <p>
                Gymnastics/Camp Coach &nbsp;&nbsp;&nbsp;&nbsp;June 2018 -
                September 2021 &nbsp;&nbsp;&nbsp;&nbsp;(Minden & Carson City,
                NV)
              </p>
              <li>
                Coaching introductory level men's and women's artistic
                gymnastics, and trampoline gymnastics (T&T). As well as
                Pre-Team, and assistant coaching competitive women's artistic
                level 3, and Xcel Bronze.
              </li>
              <li>
                Summer camp coach responsibilities include supervising campers,
                completing daily tasks/chores, and organizing games/activities.
              </li>
            </div>
            <div className="Skills-Wrapper">
              <h3>
                <u>SKILLS & CHARACTERISTICS</u>
              </h3>
              <div>
                <li> User Experience</li>
                <li> UI/UX design</li>
                <li> Leadership and Teaching experience</li>
                <li>Continually seeking improvement and expanding education</li>
                <li> Passionate about teaching</li>
                <li> Research experience</li>
                <li> Background in childhood development</li>
              </div>
            </div>
            <div className="Languages-Wrapper">
              <h3>
                <u>PROGRAMMING LANGUAGES & TOOLS</u>
              </h3>
              <div className="languages-container">
                <div>
                  <li> Javascript</li>
                  <li> React.js</li>
                  <li> Python</li>
                  <li> HTML 5</li>
                  <li> Responsive CSS</li>
                  <li> Java (Elementary)</li>
                  <li> Git + Github for version control</li>
                  <li> VS Code, Visual Studio</li>
                  <li> Node.js</li>
                  <li> npm (Node Package Manager)</li>
                  <li> Command Line</li>
                  <li> Sublime Text Editor</li>
                </div>
                <div>
                  <figure className="wakatime-piechart">
                    <embed src="https://wakatime.com/share/@TasselHat/8cf6e5cd-c294-4305-9b17-4b0e31297e0f.svg"></embed>
                  </figure>
                </div>
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
                <b>Intro to computer programming </b>/ Fall 2020 - Introduction
                to computer programming basics and object oriented programming
                using the Java programming langauge
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
