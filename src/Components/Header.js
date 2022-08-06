import React, { Component } from "react";
import { Link } from "react-router-dom";

import UCSDSeal from "../images/UCSD_Seal.png";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import { ReactComponent as LinkedinLogo } from "../images/linkedin.svg";
import { ReactComponent as FacebookLogo } from "../images/facebook.svg";
import { ReactComponent as GmailLogo } from "../images/gmail.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";

import "../Header.css";
import "../General.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-inner-container">
          <div className="header-display-desktop">
            <div className="header-title-nav">
              <nav className="header-title-logo">
                <Link to="/Projects">
                  <img src={UCSDSeal} alt="Tim Schneider" />
                </Link>
              </nav>
              <nav className="header-nav-list">
                <Link to="/Projects" className="header-nav-item">
                  <button className="header-nav-button projects-button">
                    Projects
                  </button>
                </Link>
                <Link to="/About" className="header-nav-item">
                  <button className="header-nav-button about-button">
                    About
                  </button>
                </Link>
                <Link to="/Resume" className="header-nav-item">
                  <button className="header-nav-button resume-button">
                    Resume
                  </button>
                </Link>
                <Link to="/Contact" className="header-nav-item">
                  <button className="header-nav-button contact-button">
                    Contact
                  </button>
                </Link>
              </nav>
            </div>
            <div className="header-socials-right">
              <div className="header-socials-nav">
                <a
                  className="icon icon--fill filter-yellow"
                  href="https://www.linkedin.com/in/timbschneider/"
                >
                  <LinkedinLogo />
                </a>
                <a
                  className="icon icon--fill filter-yellow"
                  href="https://github.com/Tasselhat"
                >
                  <GithubLogo />
                </a>
                <a
                  className="icon icon--fill filter-yellow"
                  href="https://www.facebook.com/hemstitchedirony/"
                >
                  <FacebookLogo />
                </a>
                <a
                  className="icon icon--fill filter-yellow"
                  href="https://www.instagram.com/timbschneider"
                >
                  <InstagramLogo />
                </a>
                <a
                  className="icon icon--fill filter-yellow"
                  href="mailto: tim.b.schneider@gmail.com"
                >
                  <GmailLogo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
