import React, { useState, useContext, useEffect } from "react";
import "./login.scss";

import axios from "../../utils/axiosConfig";
import Button from "../../components/button/button";
import Input from "../../components/Input/input";

import { useNavigate } from "react-router";
import userContext from "../../context/userContext";
import GlobalContext from "../../context/globalContext";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  // const { setUser } = useContext(userContext);
  const { setIsAuth } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [isError, setError] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    console.log(visible);
    setVisible((prevState) => !prevState);
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
      window.location.reload();
      navigate("/");
    } catch (err) {
      // console.log(err.response.data.message);
      setError(true);
    }
  };

  return (
    <div className="login-page">
      {isError ? (
        <ErrorMsg msg="Error: email or password is not correct!" />
      ) : null}
      <h1>Log in</h1>
      <form className="form">
        <Input name="email" value={data.email} changeHandler={changeHandler} />
        <Input
          className="pass"
          name="password"
          value={data.password}
          changeHandler={changeHandler}
          visible={visible}
        />
        <input
          id="check"
          className="check"
          type="checkbox"
          onClick={handleClick}
        />
        <label htmlFor="check">show password</label>
        <Button value="Log in" clickHandler={SubmitHandler} />
      </form>
    </div>
  );
};

export default Login;
