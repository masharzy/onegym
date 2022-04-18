import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import userImage from "../../../images/user.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4 sticky-top bg-white shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h4>ONEGYM</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <div className="dropdown">
                    <img
                      className="dropdown-toggle profile-img rounded-circle nav-link"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      src={user.photoURL == null ? userImage : user.photoURL}
                      alt=""
                    />
                    <ul
                      className="dropdown-menu text-center mb-2"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <img
                          src={
                            user.photoURL == null ? userImage : user.photoURL
                          }
                          alt=""
                          className="dropdown-item rounded-circle inner-profile-img mx-auto"
                        />
                      </li>
                      <li>
                        <span className="dropdown-item">
                          {user.displayName}
                        </span>
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
                </li>

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
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
