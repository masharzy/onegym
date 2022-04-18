import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center fourZeroFour-row">
        <div className="col-md-12 col-sm-12">
          <div
            className="card border-0 mx-auto"
          >
            <h3 className="display-1 text-muted text-center">404</h3>

            <span className="card-subtitle mb-2 text-muted text-center">
              Page Could Not Be Found
            </span>

            <div className="card-body mx-auto">
              <Link to="/" className="btn btn-info text-white">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
