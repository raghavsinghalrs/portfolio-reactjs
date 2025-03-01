import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Raghav</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/raghavsinghal22"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://medium.com/@raghavsinghal22"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-link"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Raghav Singhal. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
