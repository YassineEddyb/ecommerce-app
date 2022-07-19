import React, { useState, useContext } from "react";
import "./sign-up.styles.scss";

import axios from "../../utils/axiosConfig";
import Button from "../../components/button/button";
import Input from "../../components/Input/input";
import GlobalContext from "../../context/globalContext";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";

const SingUp = () => {
  const { setIsAuth } = useContext(GlobalContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/auth/register", { ...data });
      localStorage.setItem("jwt", res.data.token);
      setIsAuth(true);
      window.location.reload();
      navigate("/");
    } catch (err) {
      setError(err.response.data.message.error.split(":")[2]);
      // console.log(err.response.data.message.error);
    }
  };

  const handleClick = (e) => {
    //   const el = document.querySelector(".pass");
    //   // if (!visible) el.type = "text";
    //   // else el.type = "password";
    //   console.log(e);
    //   // setVisible(!visible);
  };

  // const SubmitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("api/auth/login", {
  //       email: data.email,
  //       password: data.password,
  //     });
  //     localStorage.setItem("jwt", res.data.token);
  //   } catch (err) {
  //     console.log(err.response.data.message);
  //   }
  // };

  return (
    <div className="signup-page">
      {error ? <ErrorMsg msg={error} /> : null}
      <h1>Sign Up</h1>
      <form className="form">
        <Input name="name" value={data.name} changeHandler={changeHandler} />
        <Input name="email" value={data.email} changeHandler={changeHandler} />
        <Input
          className="pass"
          name="password"
          value={data.password}
          changeHandler={changeHandler}
        />
        <Input
          name="confirmPassword"
          pass
          value={data.confirmPassword}
          changeHandler={changeHandler}
        />
        <input
          id="check"
          className="check"
          type="checkbox"
          onClick={handleClick}
        />
        <Button value="Sign Up" clickHandler={handleSubmit} />
      </form>
    </div>
  );
};

export default SingUp;
