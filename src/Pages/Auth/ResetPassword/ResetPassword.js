import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";

const ResetPassword = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });

  const handleEmailChange = (e) => {
    const value = e.target.value;
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handlePasswordReset = async(e) => {
    e.preventDefault();
    await sendPasswordResetEmail(userInfo.email, userInfo.password);
    toast.success("Password Reset Email Sent");
  };

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
      <div className="row">
        <div className="login mx-auto p-0 col-12">
          <div className="login-card card px-md-3">
            <h2 className="text-center text-dark mt-5">Reset Password</h2>
            <form
              onSubmit={handlePasswordReset}
              className="card-body cardBody-color"
            >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control py-2"
                  id="exampleInputEmail1"
                  onChange={handleEmailChange}
                  required
                />
                {errors && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className="text-center">
                <button
                  className="btn btn-color py-2 mb-4 w-100"
                  disabled={userInfo.email ? false : true}
                >
                  Send Password Reset Email
                </button>
              </div>
              <div className="text-center mb-2 text-dark">
                Go to Login?&nbsp;
                <Link to="/login" className="link fw-bold">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
