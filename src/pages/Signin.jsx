import axios from "axios";
import "../cssfiles/signin.css";
import { Formik, useFormik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setLoginOpen } from "../features/loginSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};

const Signin = () => {
  // const [data, setData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setCookie = (name, value, days) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + days);
    const cookieValue =
      encodeURIComponent(value) +
      "; expires=" +
      expiryDate.toUTCString() +
      "; path=/";
    document.cookie = name + "=" + cookieValue;
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, { resetForm }) => {
      // setData(values);
      // console.log(values);
      try {
        const res = await axios.post("http://localhost:8400/login", {
          email: values.email,
          password: values.password,
        });
        // console.log(res);
        console.log("signed In");
        const userid = res.data.userId;
        localStorage.setItem("userId", userid);
        console.log(localStorage.getItem("userId"));

        resetForm();
        if (res.data.success == true) {
          dispatch(setLoginOpen(true));
          navigate("/");
          setCookie("userId", userid, 7);
          window.alert("signed in successfully");
        } else {
          window.alert("Userame or Password do not match");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="signin-page container">
      <div className="signin-container1">
        <div className="inner-signin-text">
          <h1>Sign in</h1>
          <p>
            Elevate your style!
            <br /> Sign up now and unlock fashion's finest.
            <br /> Join us today!
          </p>
        </div>
      </div>
      <div className="signin-container2">
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="mt-2">
            Email*
          </label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          <label htmlFor="">Password*</label>
          <br />
          <input
            type="text"
            name="password"
            id="password"
            required
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
