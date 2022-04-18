import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container text-center text-white">
        <div className="row">
          <h1 className="footer-title">ONEGYM</h1>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="footer-nav" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="footer-nav" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="footer-nav" to="/blog">
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
