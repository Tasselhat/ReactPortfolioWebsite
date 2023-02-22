import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Canvas from "../Components/Canvas";
import ProximityGraph from "../Components/ProximityGraph";
import "./Main.css";
import "../General.css";
import "../index.css";

import placeholderImage from "../images/himalayas-mountain-range-sunrise-winter-above-clouds-3200x2560-1165.jpg";
import floatingMoney from "../images/TasselHat_dollar_bills_floating_around_17529129-3d9b-4f68-8309-9596ec01b529 - Copy.png";
import howLongImage from "../images/TasselHat_hourglass_ultra_realistic_cinematic_lighting_volumetr_6b725a44-8920-4117-8b52-5a2d212d9529.png";
import howLongHover from "../images/HowLongHover.png";
import budgetHover from "../images/Screenshot 2022-10-18 204020.png";
import sortingHover from "../images/SortingHover.png";
import terminalHover from "../images/TerminalHover.png";
import sortingVisImage from "../images/TasselHat_sorting_algorithm_visualizer_4da05818-e32d-4852-bda1-d11d7f3bfd87.png";
import backgroundDividerImg from "../images/background-divider-img.png";
import terminalImage from "../images/TasselHat_vintage_computer_terminal_with_a_black_screen_b8caed54-9099-4b43-9803-7f9fc29ae758.png";
import shastaImage from "../images/Screenshot 2022-12-06 141117.png";
import shastaPreviewImage from "../images/P1070737.jpg";
import optiwingImage from "../images/optiwing-pricing.jpg";
import optiwingPreviewImage from "../images/Optiwing-landing.jpg";

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
        }, 1000);
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
                <Header />
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
                        draw={ProximityGraph}
                    />
                    <h1 className="projects-header">
                        Hover for more info, click to see more
                    </h1>
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
                                    {this.state.isHovering &&
                                        projectHoverID === 5 && (
                                            <div className="on-hover-info">
                                                <h2>
                                                    Website for Shasta
                                                    Gymnastics Academy of
                                                    Redding, CA
                                                </h2>
                                            </div>
                                        )}
                                    {(!this.state.isHovering ||
                                        projectHoverID !== 5) && (
                                        <div className="project-title">
                                            <h1>Shasta Gymnastics Academy</h1>
                                        </div>
                                    )}
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
                                    {this.state.isHovering &&
                                        projectHoverID === 6 && (
                                            <div className="on-hover-info">
                                                <h2>
                                                    Web Tool for grouping
                                                    keywords by topical
                                                    similarity using Google SERP
                                                    API for search engine
                                                    optimization.
                                                </h2>
                                            </div>
                                        )}
                                    {(!this.state.isHovering ||
                                        projectHoverID !== 6) && (
                                        <div className="project-title">
                                            <h1>
                                                Optiwing SEO Keyword Grouping
                                                Tool
                                            </h1>
                                        </div>
                                    )}
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
                                    {this.state.isHovering &&
                                        projectHoverID === 1 && (
                                            <div className="on-hover-info">
                                                <h2>
                                                    Full stack budget tracking
                                                    web app with
                                                    login/registration to save
                                                    budgets. Allows users to
                                                    enter monthly expenses,
                                                    savings, and investments.
                                                    With recommendations for
                                                    saving and investing, users
                                                    enter monthly income and the
                                                    app will return charts
                                                    breaking down expenses,
                                                    discretionary spending, and
                                                    saving, as well as a
                                                    compound interest calculator
                                                    to help users spend their
                                                    money mindfully.
                                                </h2>
                                            </div>
                                        )}
                                    {(!this.state.isHovering ||
                                        projectHoverID !== 1) && (
                                        <div className="project-title">
                                            <h1>
                                                Budget Tracker Web App (M.E.R.N
                                                Stack)
                                            </h1>
                                        </div>
                                    )}
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
                                    {this.state.isHovering &&
                                        projectHoverID === 2 && (
                                            <div className="on-hover-info">
                                                <h2>
                                                    Sorting algorithms
                                                    visualizer made with React
                                                    and vanilla Javascript.
                                                    (Laptop/Desktop and Google
                                                    Chrome recommended but can
                                                    be used with any browser or
                                                    device)
                                                </h2>
                                            </div>
                                        )}
                                    {(!this.state.isHovering ||
                                        projectHoverID !== 2) && (
                                        <div className="project-title">
                                            <h1>Sorting Visualizer</h1>
                                        </div>
                                    )}
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
                                    {this.state.isHovering &&
                                        projectHoverID === 3 && (
                                            <div className="on-hover-info">
                                                <h2>
                                                    Simple react webpage that
                                                    takes two input dates and
                                                    tells you the length of time
                                                    between those dates in days.
                                                    As well as weeks, months,
                                                    years, minutes, seconds, and
                                                    hours.
                                                </h2>
                                            </div>
                                        )}
                                    {(!this.state.isHovering ||
                                        projectHoverID !== 3) && (
                                        <div className="project-title">
                                            <h1>How Long Have I Been Alive?</h1>
                                        </div>
                                    )}
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
                                    {this.state.isHovering &&
                                        projectHoverID === 4 && (
                                            <div className="on-hover-info">
                                                <h2>
                                                    Animated vintage terminal
                                                    display that takes simple
                                                    commands as inputs and
                                                    returns outputs on the
                                                    terminal display.
                                                </h2>
                                            </div>
                                        )}
                                    {(!this.state.isHovering ||
                                        projectHoverID !== 4) && (
                                        <div className="project-title">
                                            <h1>Vintage Computer Terminal</h1>
                                        </div>
                                    )}
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
                </main>
                <div className="footer-background-overlay"></div>
                <Footer />
            </div>
        );
    }
}
