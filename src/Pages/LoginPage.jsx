import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import EndPoints from "../Apis/Endpoints";
import * as Yup from "yup";
import axios from "axios";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    textMessage: "",
    alertClass: "",
  });

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    axios.post(EndPoints.LOGIN_URL, values).then(
      (response) => {
        setMessage({
          textMessage: "login Successfull",
          alertClass: "alert alert-success",
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      },
      (error) => {
        setMessage({
          textMessage: " No data Found",
          alertClass: "alert alert-danger",
        });
      }
    );
  };
  const validate = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must have atleast 6 characters"),
  });

  return (
    <>
      <Header />
      <Navbar />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div className={message.alertClass} role="alert">
              {message.textMessage}
            </div>
            <p className="text-center my-3" style={{ fontSize: "35px" }}>
              Login
            </p>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validate}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <Field
                        type="text"
                        name="username"
                        placeholder="Username"
                        className={
                          formik.touched.username && formik.errors.username
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="username">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group my-4">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="button">
                      <button
                        className="btn btn-primary btn-block w-100"
                        type="submit"
                        value="Login"
                        disabled={!formik.isValid}
                      >
                        <i class="bi bi-box-arrow-left"></i> Login
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>

            <br />
            <p className="text-center">
              Don't have an account? <Link to="/signupPage">Sign up</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};
export default Login;
