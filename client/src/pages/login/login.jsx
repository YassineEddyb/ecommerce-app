import React, { useState, useContext, useEffect } from "react";
import "./login.scss";

import axios from "../../utils/axiosConfig";
import Button from "../../components/button/button";
import Input from "../../components/Input/input";

import { useNavigate } from "react-router";
import userContext from "../../context/userContext";
import GlobalContext from "../../context/globalContext";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { setUser } = useContext(userContext);
  const { setIsAuth } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    //   const el = document.querySelector(".pass");
    //   // if (!visible) el.type = "text";
    //   // else el.type = "password";
    //   console.log(e);
    //   // setVisible(!visible);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/auth/login", {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("jwt", res.data.token);
      // setUser({});
      setIsAuth(true);
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <div className="login-page">
      <h1>Log in</h1>
      <form className="form">
        <Input name="email" value={data.email} changeHandler={changeHandler} />
        <Input
          className="pass"
          name="password"
          value={data.password}
          changeHandler={changeHandler}
        />
        <input
          id="check"
          className="check"
          type="checkbox"
          onClick={handleClick}
        />
        <label htmlFor="check" onClick={handleClick}>
          show password
        </label>
        <Button value="Log in" clickHandler={SubmitHandler} />
      </form>
    </div>
  );
};

export default Login;
