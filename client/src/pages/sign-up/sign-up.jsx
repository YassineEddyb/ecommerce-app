import React from "react";
import "./sign-up.styles.scss";

const SignUp = () => {
  return (
    <div className="container">
      <div className="signup">
        <div className="img"></div>
        <div className="form">
          <div>
            <h1>Sign Up</h1>
            <form action="">
              <label class="label" htmlFor="email">
                Email
              </label>
              <input
                className="input email"
                type="email"
                placeholder="Enter your email"
              />
              <label class="label" htmlFor="pass">
                Password
              </label>
              <input
                className="input pass"
                type="password"
                placeholder="Enter your password"
              />
              <label class="label" htmlFor="pass">
                Password Confirm
              </label>
              <input
                className="input pass"
                type="password"
                placeholder="Re enter your password"
              />
              <button className="btn" type="submit">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
