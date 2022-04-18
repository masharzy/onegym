import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="container">
      <div class="row justify-content-center align-items-center fourZeroFour-row">
        <div class="col-md-12 col-sm-12">
          <div
            class="card border-0 mx-auto"
          >
            <h3 class="display-1 text-muted text-center">404</h3>

            <span class="card-subtitle mb-2 text-muted text-center">
              Page Could Not Be Found
            </span>

            <div class="card-body mx-auto">
              <Link to="/" class="btn btn-info text-white">
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
