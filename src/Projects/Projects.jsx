import React from "react";
import { Link } from "react-router-dom";

import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Canvas from "../Components/Canvas";
import ProximityGraph from "../Components/ProximityGraph";
import "./Main.css";
import "../General.css";
import "../index.css";

import backgroundDividerImg from "../images/background-divider-img-dark.png";
import placeholderImage from "../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg";
import floatingMoney from "../images/TasselHat_flood_of_100_dollar_bills_floating_around_99f70f51-a9f5-4454-8c18-af8a19b2c7ad.png";
import howLongImage from "../images/TasselHat_hourglass_ultra_realistic_cinematic_lighting_volumetr_6b725a44-8920-4117-8b52-5a2d212d9529.png";
import howLongHover from "../images/HowLongHover.png";
import budgetHover from "../images/BudgetAppFreeExample.png";
import sortingHover from "../images/SortingHover.png";
import terminalHover from "../images/TerminalHover.png";
import sortingVisImage from "../images/TasselHat_sorting_algorithm_visualizer_4da05818-e32d-4852-bda1-d11d7f3bfd87.png";
import terminalImage from "../images/TasselHat_vintage_computer_terminal_with_a_black_screen_b8caed54-9099-4b43-9803-7f9fc29ae758.png";
import shastaImage from "../images/ShastaHomepage.png";
import shastaPreviewImage from "../images/P1070738.webp";
import optiwingImage from "../images/OptiwingLogin.png";
import optiwingPreviewImage from "../images/LandingPage5by3.png";

let projectHoverID = 0;

export default class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isHovering: false, wrapperHeight: 2000 };

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            const totalHeight =
                document.getElementById("content-wrapper").offsetHeight;
            this.setState({ wrapperHeight: totalHeight });
        }, 500);
    }

    handleMouseOver(id) {
        this.setState({ isHovering: true });
        projectHoverID = id;
    }

    handleMouseOut() {
        this.setState({ isHovering: false });
    }

    render() {
        return (
            <div>
                <Header dark={true} />
                <main
                    id="projectspage"
                    className="projects-container"
                    role="main"
                >
                    <img
                        className="background-divider-img"
                        src={backgroundDividerImg}
                        alt=""
                    />
                    <Canvas
                        className="canvas"
                        height={this.state.wrapperHeight}
                        width={window.innerWidth + 400}
                        draw={ProximityGraph}
                    />
                    <h1 className="projects-header">PROJECTS + WORK</h1>
                    <h2 className="projects-header">Hover For More Info</h2>
                    <div id="content-wrapper" className="content-wrapper">
                        <div className="content-container">
                            <div className="grid-thumbs">
                                <a
                                    href="https://shastagymnastics.com/"
                                    className="grid-item"
                                >
                                    <div className="preview-img">
                                        {this.state.isHovering &&
                                            projectHoverID === 5 && (
                                                <img
                                                    src={shastaImage}
                                                    alt="Shasta Gymnastics Website"
                                                    onMouseOver={() =>
                                                        this.handleMouseOver(5)
                                                    }
                                                    onMouseOut={() =>
                                                        this.handleMouseOut()
                                                    }
                                                />
                                            )}
                                        {(!this.state.isHovering ||
                                            projectHoverID !== 5) && (
                                            <img
                                                src={shastaPreviewImage}
                                                alt=""
                                                onMouseOver={() =>
                                                    this.handleMouseOver(5)
                                                }
                                                onMouseOut={() =>
                                                    this.handleMouseOut()
                                                }
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={
                                            this.state.isHovering &&
                                            projectHoverID === 5
                                                ? "on-hover-info active"
                                                : "on-hover-info"
                                        }
                                    >
                                        <h2>
                                            Website for Shasta Gymnastics
                                            Academy of Redding, CA
                                        </h2>
                                    </div>
                                    <div
                                        className={
                                            !this.state.isHovering ||
                                            projectHoverID !== 5
                                                ? "project-title active"
                                                : "project-title"
                                        }
                                    >
                                        <h1>
                                            Shasta Gymnastics Academy Website
                                        </h1>
                                    </div>
                                </a>
                                <a
                                    href="https://www.optiwing.com/"
                                    className="grid-item"
                                >
                                    <div className="preview-img">
                                        {this.state.isHovering &&
                                            projectHoverID === 6 && (
                                                <img
                                                    src={optiwingImage}
                                                    alt="website preview"
                                                    onMouseOver={() =>
                                                        this.handleMouseOver(6)
                                                    }
                                                    onMouseOut={() =>
                                                        this.handleMouseOut()
                                                    }
                                                />
                                            )}
                                        {(!this.state.isHovering ||
                                            projectHoverID !== 6) && (
                                            <img
                                                src={optiwingPreviewImage}
                                                alt="website preview"
                                                onMouseOver={() =>
                                                    this.handleMouseOver(6)
                                                }
                                                onMouseOut={() =>
                                                    this.handleMouseOut()
                                                }
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={
                                            this.state.isHovering &&
                                            projectHoverID === 6
                                                ? "on-hover-info active"
                                                : "on-hover-info"
                                        }
                                    >
                                        <h2>
                                            Web Tool for grouping keywords by
                                            topical similarity using Google SERP
                                            data for search engine optimization.
                                        </h2>
                                    </div>
                                    <div
                                        className={
                                            !this.state.isHovering ||
                                            projectHoverID !== 6
                                                ? "project-title active"
                                                : "project-title"
                                        }
                                    >
                                        <h2>
                                            Optiwing SEO Keyword Grouping Tool
                                        </h2>
                                    </div>
                                </a>
                                <a
                                    href="https://www.budgetappfree.com/"
                                    className="grid-item"
                                >
                                    <div className="preview-img">
                                        {this.state.isHovering &&
                                            projectHoverID === 1 && (
                                                <img
                                                    src={budgetHover}
                                                    alt=""
                                                    onMouseOver={() =>
                                                        this.handleMouseOver(1)
                                                    }
                                                    onMouseOut={() =>
                                                        this.handleMouseOut()
                                                    }
                                                />
                                            )}
                                        {(!this.state.isHovering ||
                                            projectHoverID !== 1) && (
                                            <img
                                                src={floatingMoney}
                                                alt=""
                                                onMouseOver={() =>
                                                    this.handleMouseOver(1)
                                                }
                                                onMouseOut={() =>
                                                    this.handleMouseOut()
                                                }
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={
                                            this.state.isHovering &&
                                            projectHoverID === 1
                                                ? "on-hover-info active"
                                                : "on-hover-info"
                                        }
                                    >
                                        <h2>
                                            Full stack Budget tracking web app.
                                            Allows users to enter and track
                                            monthly expenses, savings, and
                                            investments. With Charts breaking
                                            down expenses, discretionary
                                            spending, and saving, as well as a
                                            compound interest calculator.
                                        </h2>
                                    </div>
                                    <div
                                        className={
                                            !this.state.isHovering ||
                                            projectHoverID !== 1
                                                ? "project-title active"
                                                : "project-title"
                                        }
                                    >
                                        <h2>Budget Tracker Web App</h2>
                                    </div>
                                </a>
                                <Link
                                    to="/SortingVisualizer"
                                    className="grid-item"
                                >
                                    <div className="preview-img">
                                        {this.state.isHovering &&
                                            projectHoverID === 2 && (
                                                <img
                                                    src={sortingHover}
                                                    alt=""
                                                    onMouseOver={() =>
                                                        this.handleMouseOver(2)
                                                    }
                                                    onMouseOut={() =>
                                                        this.handleMouseOut()
                                                    }
                                                />
                                            )}
                                        {(!this.state.isHovering ||
                                            projectHoverID !== 2) && (
                                            <img
                                                src={sortingVisImage}
                                                alt=""
                                                onMouseOver={() =>
                                                    this.handleMouseOver(2)
                                                }
                                                onMouseOut={() =>
                                                    this.handleMouseOut()
                                                }
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={
                                            this.state.isHovering &&
                                            projectHoverID === 2
                                                ? "on-hover-info active"
                                                : "on-hover-info"
                                        }
                                    >
                                        <h2>
                                            Sorting algorithms visualizer made
                                            with React and vanilla Javascript.
                                            (Laptop/Desktop recommended but can
                                            be used with any browser or device)
                                        </h2>
                                    </div>
                                    <div
                                        className={
                                            !this.state.isHovering ||
                                            projectHoverID !== 2
                                                ? "project-title active"
                                                : "project-title"
                                        }
                                    >
                                        <h2>Sorting Visualizer</h2>
                                    </div>
                                </Link>
                                <Link to="/HowLong" className="grid-item">
                                    <div className="preview-img">
                                        {this.state.isHovering &&
                                            projectHoverID === 3 && (
                                                <img
                                                    src={howLongHover}
                                                    alt=""
                                                    onMouseOver={() =>
                                                        this.handleMouseOver(3)
                                                    }
                                                    onMouseOut={() =>
                                                        this.handleMouseOut()
                                                    }
                                                />
                                            )}
                                        {(!this.state.isHovering ||
                                            projectHoverID !== 3) && (
                                            <img
                                                src={howLongImage}
                                                alt=""
                                                onMouseOver={() =>
                                                    this.handleMouseOver(3)
                                                }
                                                onMouseOut={() =>
                                                    this.handleMouseOut()
                                                }
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={
                                            this.state.isHovering &&
                                            projectHoverID === 3
                                                ? "on-hover-info active"
                                                : "on-hover-info"
                                        }
                                    >
                                        <h2>
                                            Simple react webpage that tells you
                                            how long you have been alive.
                                        </h2>
                                    </div>

                                    <div
                                        className={
                                            !this.state.isHovering ||
                                            projectHoverID !== 3
                                                ? "project-title active"
                                                : "project-title"
                                        }
                                    >
                                        <h2>How Long Have I Been Alive?</h2>
                                    </div>
                                </Link>
                                <Link to="/About" className="grid-item">
                                    <div className="preview-img">
                                        {this.state.isHovering &&
                                            projectHoverID === 4 && (
                                                <img
                                                    src={terminalHover}
                                                    alt=""
                                                    onMouseOver={() =>
                                                        this.handleMouseOver(4)
                                                    }
                                                    onMouseOut={() =>
                                                        this.handleMouseOut()
                                                    }
                                                />
                                            )}
                                        {(!this.state.isHovering ||
                                            projectHoverID !== 4) && (
                                            <img
                                                src={terminalImage}
                                                alt="vintage computer terminal"
                                                onMouseOver={() =>
                                                    this.handleMouseOver(4)
                                                }
                                                onMouseOut={() =>
                                                    this.handleMouseOut()
                                                }
                                            />
                                        )}
                                    </div>
                                    <div
                                        className={
                                            this.state.isHovering &&
                                            projectHoverID === 4
                                                ? "on-hover-info active"
                                                : "on-hover-info"
                                        }
                                    >
                                        <h2>
                                            Animated vintage terminal display
                                            that takes simple commands as inputs
                                            and returns outputs on the terminal
                                            display.
                                        </h2>
                                    </div>

                                    <div
                                        className={
                                            !this.state.isHovering ||
                                            projectHoverID !== 4
                                                ? "project-title active"
                                                : "project-title"
                                        }
                                    >
                                        <h2>Vintage Computer Terminal</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img src={floatingMoney} alt="" className="offscreen-img" />
                    <img
                        src={sortingVisImage}
                        alt=""
                        className="offscreen-img"
                    />
                    <img src={howLongImage} alt="" className="offscreen-img" />
                    <img src={terminalImage} alt="" className="offscreen-img" />
                    <img src={howLongHover} alt="" className="offscreen-img" />
                    <img src={sortingHover} alt="" className="offscreen-img" />
                    <img src={terminalHover} alt="" className="offscreen-img" />
                    <img src={budgetHover} alt="" className="offscreen-img" />
                    <img src={shastaImage} alt="" className="offscreen-img" />
                    <img
                        src={shastaPreviewImage}
                        alt=""
                        className="offscreen-img"
                    />
                    <img src={optiwingImage} alt="" className="offscreen-img" />
                    <img
                        src={optiwingPreviewImage}
                        alt=""
                        className="offscreen-img"
                    />
                    <div className="footer-background-overlay"></div>
                </main>
                <Footer />
            </div>
        );
    }
}
