import React, { useState, useContext } from "react";
import "./login.scss";

import axios from "axios";
import UserContext from "../../context/userContext";

const url = "http://localhost:5000";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserContext);

  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url + "/api/auth/login", {
        email: data.email,
        password: data.password,
      });
      setUser(res.data.user);
      console.log(res.data);
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
