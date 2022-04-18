import React from "react";
import { Link } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="col-md-4">
      <div className="service card h-100">
        <img src={img} className="card-img-top service-image" alt="" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Price: ${price}</p>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-button ms-3 mb-4">
          <Link to='/checkout' className="checkout-btn btn btn-light btn-lg rounded-pill">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
