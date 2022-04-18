import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import userImage from '../../../images/user.png';
import "./Footer.css";

const Footer = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <footer>
      <div className="container text-center text-white">
        <div className="row">
          <h1 className="footer-title">ONEGYM</h1>
          <ul className="nav justify-content-center align-items-center">
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
            {user ? (
              <>
                <div className="dropdown">
                  <img
                    className="dropdown-toggle footer-profile-img rounded-circle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    src={user.photoURL == null ? userImage : user.photoURL}
                    alt=""
                  />
                  <ul
                    className="dropdown-menu text-center"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <img
                        src={user.photoURL == null ? userImage : user.photoURL}
                        alt=""
                        className="dropdown-item rounded-circle inner-profile-img mx-auto"
                      />
                    </li>
                    <li>
                      <span className="dropdown-item">{user.displayName}</span>
                    </li>
                    <li>
                      <span className="dropdown-item">{user.email}</span>
                    </li>
                    <li>
                      <span className="dropdown-item">
                        <button
                          onClick={handleSignOut}
                          className="btn btn-primary text-white rounded-pill w-100 nav-link"
                        >
                          Log Out
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>

                <li className="nav-item">
                  <button
                    onClick={handleSignOut}
                    className="btn btn-primary text-white rounded-pill px-3 nav-link"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="footer-nav" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="footer-nav" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
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
