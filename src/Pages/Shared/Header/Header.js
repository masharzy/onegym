import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { signOut } from "firebase/auth";
import userImage from '../../../images/user.png'

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  console.log(user);
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {user ? (
              <>
                <div class="dropdown">
                  <img
                    class="dropdown-toggle profile-img rounded-circle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    src={user.photoURL == null ? userImage : user.photoURL}
                    alt=""
                  />
                  <ul
                    class="dropdown-menu text-center"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <img
                        src={user.photoURL == null ? userImage : user.photoURL}
                        alt=""
                        class="dropdown-item rounded-circle inner-profile-img mx-auto"
                      />
                    </li>
                    <li>
                      <span class="dropdown-item">{user.displayName}</span>
                    </li>
                    <li>
                      <span class="dropdown-item">{user.email}</span>
                    </li>
                    <li>
                      <span class="dropdown-item">
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
