import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
const SignupPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  };
  const [message, setMessage] = useState({
    textMessage: "",
    alertClass: "",
  });
  const validationSchema = Yup.object({
    firstName: Yup.string().required("FirstName is required"),
    lastName: Yup.string().required("LastName is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is not valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "password must be at least 6 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .min(6, "Confirm Password must be at least 6 characters long"),
  });
  const onSubmit = () => {
    setMessage({
      textMessage: "Successfully Registered",
      alertClass: "alert alert-success",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnMount: true,
  });
  return (
    <>
      <Header />
      <Navbar />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div className={message.alertClass}>{message.textMessage}</div>
            <h2 className="text-center m-4">Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group my-3">
                <input
                  type="text"
                  name="firstName"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="First Name"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}{" "}
                  </small>
                ) : null}
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  name="lastName"
                  className={
                    formik.touched.lastName && formik.errors.lastName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="LastName"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <small className="text-danger">
                    {formik.errors.lastName}
                  </small>
                ) : null}
              </div>
              <div className="form-group my-3">
                <input
                  type="text"
                  name="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Email Address"
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group my-3">
                <input
                  type="password"
                  name="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <div className="form-group my-3">
                <input
                  type="password"
                  name="confirmPassword"
                  className={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Password Confirm"
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <small className="text-danger">
                    {formik.errors.confirmPassword}
                  </small>
                ) : null}
              </div>
              <div className="button">
                <button
                  type="submit"
                  value="Signup"
                  className="btn btn-primary btn-block w-100 "
                  disabled={!formik.isValid}
                >
                  <i className="bi bi-person-vcard-fill mx-3"></i>Sign up
                </button>
              </div>
            </form>
            <br />
            <p className="text-center">
              Already have an account? Login <Link to="/LoginPage">here</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3"></div>
    </>
  );
};
export default SignupPage;
