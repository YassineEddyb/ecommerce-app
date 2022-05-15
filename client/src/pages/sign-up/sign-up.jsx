import React, { useState } from "react";
import "./sign-up.styles.scss";

import axios from "../../utils/axiosConfig";
import Button from "../../components/button/button";
import Input from "../../components/Input/input";

const SingUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const [visible, setVisible] = useState(false);

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
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form className="form">
        <Input name="email" value={data.email} changeHandler={changeHandler} />
        <Input
          className="pass"
          name="password"
          value={data.password}
          changeHandler={changeHandler}
        />
        <Input
          name="password"
          value={data.confirmPassword}
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
        <Button value="Sign Up" onClick={SubmitHandler} />
      </form>
    </div>
  );
};

export default SingUp;
