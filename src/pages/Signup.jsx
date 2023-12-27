import { useFormik } from "formik";
import "../cssfiles/signup.css";
import { signUpSchema } from "../schemas/index1";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  tel: "",
  email: "",
  password: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [res, setRes] = useState("");
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, { resetForm }) => {
        setData(values);
        console.log("data added");
        console.log(data);
        resetForm();
      },
    });

  useEffect(() => {
    if (data !== "") {
      handleSubmitButton();
    }
  }, [data]);

  const handleSubmitButton = async () => {
    try {
      const response = await axios.post("http://localhost:8400/register", {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      });
      setRes(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const {
    firstname: firstnameTouched,
    lastname: lastnameTouched,
    tel: telTouched,
    email: emailTouched,
    password: passwordTouched,
  } = touched;

  return (
    <div className="main-contact-fluid container-fluid">
      <div className="container main-contact">
        <div className="main-contact-content">
          <h1 className="main-content-heading">Sign Up</h1>
          <p>
            Discover trendy and comfortable t-shirts at Future Chaos!
            <br /> Find cool graphics, classic styles, and statement pieces to
            express your unique style.
            <br /> Shop now for quality and comfort.
            <br /> Fast shipping available.
            <br /> Visit Future Chaos today!
          </p>
        </div>

        <div className="main-contact-form">
          <div className="form-div">
            <form action="" method="" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="form-group1">
                  First name*
                  <br />
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    required
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstname && firstnameTouched ? (
                    <p className="form-error">{errors.firstname}</p>
                  ) : null}
                </div>
                <div className="form-group2">
                  Last name*
                  <br />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    required
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.lastname && lastnameTouched ? (
                    <p className="form-error">{errors.lastname}</p>
                  ) : null}
                </div>
              </div>
              <label>Mobile No*</label>
              <br />
              <input
                type="tel"
                className="form-input"
                name="tel"
                id="mobile"
                required
                value={values.tel}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.tel && telTouched ? (
                <p className="form-error">{errors.tel}</p>
              ) : null}
              <label>Email*</label>
              <br />
              <input
                type="email"
                className="form-input"
                name="email"
                id="email"
                required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && emailTouched ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
              <label className="mt-3">Password*</label>
              <br />
              <input
                type="password"
                className="form-input"
                name="password"
                id="password"
                required
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && passwordTouched ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
              {res.success === false ? (
                <h5 className="registered">
                  Already Registered! Please SignIn
                </h5>
              ) : null}
              {res.success === true ? (
                <h5 className="registered">
                  Successfully Registered! Please SignIn
                </h5>
              ) : null}
              <input
                type="submit"
                value="submit"
                className="submit-form mt-4"
              />
            </form>
            <h5 className="signin-button">
              Already have an Account!{" "}
              <button onClick={handleSignIn}>Sign In</button>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
