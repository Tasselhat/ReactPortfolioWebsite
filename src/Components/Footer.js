import React, { Component } from "react";

import { ReactComponent as GithubLogo } from "../images/github.svg";
import { ReactComponent as LinkedinLogo } from "../images/linkedin.svg";
import { ReactComponent as FacebookLogo } from "../images/facebook.svg";
import { ReactComponent as GmailLogo } from "../images/gmail.svg";
import { ReactComponent as InstagramLogo } from "../images/instagram.svg";

import "../Footer.css";
import "../General.css";

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="footer-box">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-column-content">
              <h3>Tim Schneider</h3>
              <div style={{ paddingbottom: "40px" }}>
                Web Development, Design Enthusiast
              </div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <div className="line"></div>
              <ul>
                <li className="list-item">
                  <a href="Projects" className="footer-link">
                    Projects
                  </a>
                </li>
                <li className="list-item">
                  <a href="About" className="footer-link">
                    About
                  </a>
                </li>
                <li className="list-item">
                  <a href="Tools" className="footer-link">
                    Tools
                  </a>
                </li>
                <li className="list-item">
                  <a href="Resume" className="footer-link">
                    Resume
                  </a>
                </li>
                <li className="list-item">
                  <a className="footer-link"></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <div className="line"></div>
              <ul>
                <li className="list-item">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    Scroll to top
                  </button>
                </li>
                <li className="list-item">
                  <a className="footer-link"></a>
                </li>
                <li className="list-item">
                  <a className="footer-link"></a>
                </li>
                <li className="list-item">
                  <a className="footer-link"></a>
                </li>
                <li className="list-item">
                  <a className="footer-link"></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <div className="line"></div>
              <a href="/Contact" className="footer-link padding-bottom-24">Contact Me</a>
              <a
                href="mailto: tim.b.schneider@gmail.com"
                className="footer-link padding-bottom-24"
              >
                Tim.b.schneider@gmail.com
              </a>
              <a href="tel:5035167078" className="footer-link padding-bottom-24">(503)-516-7078</a>
              <div className="line"></div>
              <div>
                <a
                  className="icon-footer icon--fill"
                  href="https://www.linkedin.com/in/timbschneider/"
                >
                  <LinkedinLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="https://github.com/Tasselhat"
                >
                  <GithubLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="https://www.facebook.com/hemstitchedirony/"
                >
                  <FacebookLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="https://www.instagram.com/timbschneider"
                >
                  <InstagramLogo />
                </a>
                <a
                  className="icon-footer icon--fill"
                  href="mailto: tim.b.schneider@gmail.com"
                >
                  <GmailLogo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
