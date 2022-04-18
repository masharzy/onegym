import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container text-center text-white">
        <div className="row">
          <h1 className="footer-title">ONEGYM</h1>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <Link class="footer-nav" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="footer-nav" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="footer-nav" to="/blog">
                Blog
              </Link>
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
