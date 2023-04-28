import "./login.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const [change, setChange] = useState(false);

  function handleChange(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  const [RegisterData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    EmailR: "",
    passwordR: "",
    reEnterPassword: "",
  });

  function handleRegChange(event) {
    setRegisterData({
      ...RegisterData,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmitR(event) {
    event.preventDefault();

    if (
      RegisterData.passwordR === RegisterData.reEnterPassword &&
      RegisterData.passwordR.length >= 8
    ) {
      console.log("valid password");
    } else if (RegisterData.passwordR !== RegisterData.reEnterPassword) {
      console.log("password dont match");
    } else if (RegisterData.passwordR.length < 8) {
      console.log("password isnt strong enough");
    } else {
      console.log("password isnot valid");
    }

    console.log("Form Data:", RegisterData);
  }

  function alter() {
    setChange((prevState) => !prevState);
    setFormData({
      Email: "",
      Password: "",
    });
    setRegisterData({
      firstName: "",
      lastName: "",
      EmailR: "",
      passwordR: "",
      reEnterPassword: "",
    });
  }

  return (
    <div className="datatable">
      <div className="main">
        {change ? (
          <div>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  id="Email"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <input
                  required
                  type="password"
                  placeholder="Password"
                  id="Password"
                  value={formData.Password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">
                {" "}
                <Link to="/" className="link-1">
                  Login
                </Link>
              </button>
            </form>
            <div className="alt">
              <p>new account?</p>
              <button onClick={alter}>Sign Up</button>
            </div>
          </div>
        ) : (
          <>
            <div className="main">
              <div className="head">
                <h1>Sign Up</h1>
              </div>
              <form onSubmit={handleSubmitR}>
                <div className="input">
                  <input
                    required
                    placeholder="FirstName"
                    type="text"
                    id="firstName"
                    value={RegisterData.firstName}
                    onChange={handleRegChange}
                  />
                </div>
                <div className="input">
                  <input
                    required
                    placeholder="LastName"
                    type="text"
                    id="lastName"
                    value={RegisterData.lastName}
                    onChange={handleRegChange}
                  />
                </div>
                <div className="input">
                  <input
                    required
                    placeholder="Email"
                    type="email"
                    id="EmailR"
                    value={RegisterData.EmailR}
                    onChange={handleRegChange}
                  />
                </div>
                <div className="input">
                  <input
                    required
                    placeholder="Password"
                    type="password"
                    id="passwordR"
                    value={RegisterData.passwordR}
                    onChange={handleRegChange}
                  />
                </div>
                <div className="input">
                  <input
                    required
                    placeholder="re-enter Password"
                    type="password"
                    id="reEnterPassword"
                    value={RegisterData.reEnterPassword}
                    onChange={handleRegChange}
                  />
                </div>

                <button type="submit">
                  <Link to="/" className="link-2">
                    Submit
                  </Link>
                </button>
              </form>
            </div>
            <div className="alt alternative">
              <p>Have an account?</p>
              <button onClick={alter}>Sign in</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
