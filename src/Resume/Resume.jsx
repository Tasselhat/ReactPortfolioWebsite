import React from "react";

import backgroundDividerImg from "../images/background-divider-img.png";
import CMDlogo from "../images/cmd-logo.png";
import CSS3logo from "../images/CSS3-Logo.png";
import Githublogo from "../images/Github-logo.png";
import Javalogo from "../images/Java-logo.png";
import JavaScriptlogo from "../images/JavaScript-logo.png";
import TypeScriptlogo from "../images/Typescript_logo_2020.svg";
import Nodejslogo from "../images/Node.js-logo.png";
import Npmlogo from "../images/Npm-logo.png";
import Pythonlogo from "../images/Python-logo.png";
import Reactlogo from "../images/React-logo.png";
import HTMLlogo from "../images/HTML5-logo.png";
import VSCodelogo from "../images/VSCode-logo.png";
import MongoDBlogo from "../images/mongodb.svg";
import Nextjslogo from "../images/nextjs-icon-svgrepo-com.svg";

import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import * as Fa from "react-icons/fa";
import "./Resume.css";
import "../General.css";
import "../index.css";

// Function will execute on click of button
const onButtonClick = () => {
    // using JavaScript method to get PDF file
    fetch("Software Engineering Resume - Tim Schneider.pdf").then(
        (response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download =
                    "Software Engineering Resume - Tim Schneider.pdf";
                alink.click();
            });
        }
    );
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
                                    <Fa.FaDownload /> Download Resume (PDF)
                                </span>
                            </button>
                            <h1>Tim Schneider</h1>
                            <h2>
                                Web Development, Front-end, Full-stack Software
                                Engineering
                            </h2>
                            <h4>
                                <a href="mailto:Tim.b.schneider@gmail.com">
                                    Tim.b.schneider@gmail.com &nbsp;&nbsp;
                                </a>
                                <a href="tel:5035167078">
                                    -&nbsp;&nbsp; (503) 516-7078 &nbsp;&nbsp;
                                </a>
                                -&nbsp;&nbsp; San Diego, CA
                                &nbsp;&nbsp;-&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/in/timbschneider/">
                                    <u>linkedin.com/in/timbschneider</u>
                                    &nbsp;&nbsp;
                                </a>
                                <a href="https://github.com/Tasselhat">
                                    -&nbsp;&nbsp; <u>github.com/Tasselhat</u>
                                </a>
                            </h4>
                        </header>
                        <div className="languages-wrapper">
                            <div className="languages-container">
                                <h3>
                                    <u>PROGRAMMING LANGUAGES & TOOLS</u>
                                </h3>
                                <div>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>Javascript&nbsp;</span>
                                        <img
                                            src={JavaScriptlogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>
                                            Typescript (Transitioning)&nbsp;
                                        </span>
                                        <img
                                            src={TypeScriptlogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>React.js&nbsp;</span>
                                        <img
                                            src={Reactlogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>Next.js&nbsp;</span>
                                        <img
                                            src={Nextjslogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>HTML 5&nbsp;</span>
                                        <img
                                            src={HTMLlogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>Responsive CSS&nbsp;</span>
                                        <img
                                            src={CSS3logo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>Node.js + Express.js&nbsp;</span>
                                        <img
                                            src={Nodejslogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>Python (Beginner)&nbsp;</span>
                                        <img
                                            src={Pythonlogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>MongoDB + Atlas&nbsp;&nbsp;</span>
                                        <img
                                            src={MongoDBlogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>Java (Beginner)&nbsp;</span>
                                        <img
                                            src={Javalogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <a href="https://github.com/Tasselhat">
                                            Git + Github for version
                                            control&nbsp;
                                        </a>
                                        <a href="https://github.com/Tasselhat">
                                            <img
                                                src={Githublogo}
                                                alt=""
                                                className="tool-logo"
                                            />
                                        </a>
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>VS Code Editor&nbsp;</span>
                                        <img
                                            src={VSCodelogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>
                                            npm (Node Package Manager)&nbsp;
                                        </span>
                                        <img
                                            src={Npmlogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                    <li className="resumeIcons">
                                        <Fa.FaCircle
                                            style={{
                                                fontSize: "8px",
                                                padding: "0 16px 0 0",
                                            }}
                                        />
                                        <span>
                                            Git Bash + Command Line&nbsp;&nbsp;
                                        </span>
                                        <img
                                            src={CMDlogo}
                                            alt=""
                                            className="tool-logo"
                                        />
                                    </li>
                                </div>
                            </div>
                            <div>
                                <figure className="wakatime-piechart">
                                    <embed src="https://wakatime.com/share/@TasselHat/8cf6e5cd-c294-4305-9b17-4b0e31297e0f.svg"></embed>
                                </figure>
                            </div>
                        </div>
                        <div className="Work-Experience-Wrapper">
                            <h2>
                                <u>WORK EXPERIENCE</u>
                            </h2>
                            <h3>Shasta Gymnastics Academy</h3>
                            <p>
                                <a href="https://shastagymnastics.com/">
                                    URL: <u>ShastaGymnastics.com</u>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                                <br />
                                <br />
                                Contractor | Web
                                Development&nbsp;&nbsp;&nbsp;&nbsp;November 2022
                                - Present &nbsp;&nbsp;&nbsp;&nbsp;(Redding, CA -
                                Remote)
                            </p>
                            <br />
                            <li className="p2">
                                Designed, developed, and deployed new website,
                                optimizing to achieve a Lighthouse SEO,
                                accessibility, and best practice score of 100.
                            </li>
                            <li className="p2">
                                Facilitated ongoing dialogue with owner to
                                assess client expectations, construct skeleton
                                designs, offer support, and complete monthly
                                website maintenance and upkeep, demonstrating
                                strong communication and project management
                                skills.
                            </li>
                            <li className="p2">
                                Implemented class calendar utilizing google
                                calendar API and backend email server for
                                contact page, increasing average monthly email
                                contact rate by over 400%, improving customer
                                engagement.
                            </li>
                        </div>
                        <div className="Projects-Wrapper">
                            <h2>
                                <u>PROJECTS</u>
                            </h2>
                            <p>
                                <h3>Optiwing SEO tool</h3>
                                <a href="https://www.optiwing.com/">
                                    Live URL: <u>www.optiwing.com</u>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                                <a
                                    href="https://github.com/Tasselhat/optiwinglanding"
                                    className="p2"
                                >
                                    Landing Page Code:{" "}
                                    <u>github.com/Tasselhat/optiwinglanding</u>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                                <br />
                                <p>Private Front/Backend Repository</p>
                            </p>
                            <br />
                            <p>
                                Founder&nbsp;&nbsp;&nbsp;&nbsp;Full-Stack SaaS
                                Web App&nbsp;&nbsp;&nbsp;&nbsp;Dec 2022 -
                                Present
                            </p>
                            <br />
                            <li className="p2">
                                Developed and launched a full stack SaaS web
                                application to simplify the process of
                                identifying clusters of related search terms for
                                digital marketers and SEO professionals.
                            </li>
                            <li className="p2">
                                Utilizes Google SERP API to cluster user
                                submitted keywords based on top ranking pages,
                                semantic similarity, user intent, and
                                popularity.
                            </li>
                            <li className="p2">
                                Stores keyword groups in a non-relational
                                database, served from Node.js/Express cloud
                                hosted server.
                            </li>
                            <li className="p2">
                                Achieved 50+ sign-ups, and $190.00 in sales in
                                first 3 months from launch, as an entirely
                                bootstrapped SaaS.
                            </li>
                            <li className="p2">
                                Demonstrates strong skills in web application
                                development, data management, and familiarity
                                with cloud hosting, built primarily with React,
                                Next, and Node.
                            </li>
                            <p>
                                <h3>Budget App Free</h3>
                                <a href="https://www.budgetappfree.com/">
                                    Live URL: <u>www.BudgetAppFree.com</u>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                                <a href="https://github.com/Tasselhat/BudgetTracker">
                                    Frontend Code:{" "}
                                    <u>github.com/Tasselhat/BudgetTracker</u>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                </a>
                            </p>
                            <br />
                            <p>
                                Full-stack Personal
                                Project&nbsp;&nbsp;&nbsp;&nbsp;Sept 2022 - Nov
                                2022
                            </p>
                            <br />
                            <li className="p2">
                                Created a Single Page Web Application using
                                React and Node/Express backend to allow users to
                                build and save personal budgets, display
                                expenses and savings, and calculate compound
                                interest.
                            </li>
                            <li className="p2">
                                Collaborated with other students in the UCSD
                                computer science department for ideas, and
                                feedback.
                            </li>
                            <li className="p2">
                                Successfully built and launched the app,
                                providing a useful tool for managing personal
                                finances.
                            </li>
                        </div>
                        <div className="Education-Wrapper">
                            <h2>
                                <u>EDUCATION</u>
                            </h2>
                            <p className="p2">
                                B.S. in Psychology with a Specialization in
                                Developmental Psychology / 3.96 GPA /
                                <b>UC San Diego </b>/ September 2021 - June 2023
                            </p>
                            <p>
                                AA-T Psychology / 3.87 GPA /
                                <b>Lake Tahoe Community College </b>/ September
                                2019 - June 2021
                            </p>
                        </div>
                        <div className="Skills-Wrapper">
                            <h3>
                                <u>SKILLS & FOCUSES</u>
                            </h3>
                            <div>
                                <li> UI/UX design and development</li>
                                <li>
                                    Continually seeking improvement and
                                    expanding education
                                </li>
                                <li> Research experience</li>
                                <li> Leadership and Teaching experience</li>
                                <li>
                                    Unique background in psychology and human
                                    development
                                </li>
                            </div>
                        </div>
                        <div className="Leadership-Awards-Wrapper">
                            <h3>
                                <u>LEADERSHIP & AWARDS</u>
                            </h3>
                            <p>
                                <b>Eagle Scout Award </b>/ Boy Scouts of America
                            </p>
                            <p>
                                <b>Treasurer </b>/ AGS Honor Society & Circle K
                                - Kiwanis Service Club Tahoe Branch
                            </p>
                            <p>
                                <b>Media Chair </b>/ UCSD Club Gymnastics
                            </p>
                            <p>
                                <b>Provost Honors </b>/ UC San Diego
                            </p>
                            <p>
                                <b>Janice Tait Memorial Scholarship</b>
                            </p>
                            <p>
                                <b>
                                    Soroptimist International of South Lake
                                    Tahoe Scholarship
                                </b>
                            </p>
                        </div>
                        <div>
                            <h3>
                                <u>RELEVANT COURSEWORK</u>
                            </h3>
                            <p>
                                <b>Intro to Computer Programming </b>/ Fall 2020
                                - Introduction to computer programming and
                                object oriented programming using the Java
                                programming langauge.
                            </p>
                        </div>
                    </div>
                </main>
                <div className="footer-background-overlay light"></div>
                <Footer />
            </div>
        );
    }
}
