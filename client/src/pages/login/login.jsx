import React, { useState, useContext, useEffect } from "react";
import "./login.scss";

import axios from "../../utils/axiosConfig";

const url = "http://localhost:5000";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/auth/login", {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("jwt", res.data.token);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="img"></div>
        <div className="form">
          <div>
            <h1>Log in</h1>
            <form action="">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                className="input email"
                type="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={changeHandler}
              />
              <label className="label" htmlFor="pass">
                Password
              </label>
              <input
                name="password"
                className="input pass"
                type="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={changeHandler}
              />
              <input id="check" className="check" type="checkbox" />
              <label htmlFor="check">show password</label>
              <button className="btn" onClick={SubmitHandler}>
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
