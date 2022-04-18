import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase.init";
import googleImage from "../../../images/social/Google.svg";
import "./Register.css";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    general: "",
  });
  const [createUserWithEmailAndPassword, user, loading, emailAndPasswordError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[a-zA-Z]{3,}/;
    const validName = nameRegex.test(value);
    if (validName) {
      setUserInfo({ ...userInfo, name: value });
      setErrors({ ...errors, name: "" });
    } else {
      setErrors({
        ...errors,
        name: "Name is required And Must be 3 Characters",
      });
      setUserInfo({ ...userInfo, name: "" });
    }
  };
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
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    if (userInfo.password === value) {
      setUserInfo({ ...userInfo, confirmPassword: value });
      setErrors({ ...errors, confirmPassword: "" });
    } else {
      setErrors({ ...errors, confirmPassword: "Password NOT Match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    await updateProfile({ displayName: userInfo.name });
  };

  useEffect(() => {
    if (emailAndPasswordError) {
      const newErrorMessage = emailAndPasswordError.message
        .split("Firebase: Error (auth/")
        .join("")
        .split("-")
        .join(" ")
        .split(").")
        .join("");
      toast.error(newErrorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    } else if (user?.user?.uid) {
      toast.success("Registration Successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  }, [emailAndPasswordError, user]);

  let navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
  }, [user]);

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
        <div className="register mx-auto p-0 col-12">
          <div className="register-card card px-md-3">
            <h2 className="text-center text-dark mt-5">Sign Up</h2>
            <form
              onSubmit={handleRegister}
              className="card-body cardBody-color"
            >
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control py-2"
                  id="exampleInputName"
                  onChange={handleNameChange}
                  required
                />
                {errors && <p className="text-danger">{errors.name}</p>}
              </div>
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
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>

                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control py-2"
                    id="exampleInputPassword1"
                    onChange={handlePasswordChange}
                    required
                  />
                  <FontAwesomeIcon
                    style={{
                      top: "25%",
                      right: 5,
                      fontSize: "18px",
                      cursor: "pointer",
                      position: "absolute",
                    }}
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEye : faEyeSlash}
                  />
                </div>

                {errors && <p className="text-danger">{errors.password}</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Confirm Password
                </label>

                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control py-2"
                    id="exampleInputPassword2"
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                </div>

                {errors && (
                  <p className="text-danger">{errors.confirmPassword}</p>
                )}
              </div>
              <div className="text-center">
                <button
                  className="btn btn-color py-2 mb-3 w-100"
                  disabled={
                    (userInfo.name,
                    userInfo.email,
                    userInfo.password,
                    userInfo.confirmPassword)
                      ? false
                      : true
                  }
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center mb-3 text-dark">
                Already have an account?&nbsp;
                <Link to="/login" className="text-dark link fw-bold">
                  Login
                </Link>
              </div>
            </form>
            <div className="row align-items-center text-center mb-3">
              <div className="col-md-5">
                <hr />
              </div>
              <p className="col-md-2">Or</p>
              <div className="col-md-5">
                <hr />
              </div>
            </div>
            <div className="google-login">
              <button
                id="continueWithGoogle"
                className="btn btn-color py-2 mb-5 w-100"
                onClick={() => signInWithGoogle()}
              >
                <img src={googleImage} alt="" /> &nbsp;{" "}
                <span style={{ color: "rgba(42, 65, 79, 1)" }}>
                  Continue With Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
