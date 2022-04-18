import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <h1>ONEGYM</h1>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="copyright-text">
            &copy; 2022 All rights reserved | Mahdy Abrar Sharzy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
