import React, { useState, useContext } from "react";
import "./Profile.scss";

import Button from "../button/button";

function Profile({ user }) {
  const [credintials, setCredintials] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredintials({ ...credintials, [name]: value });
  };

  return (
    <form className="profile">
      <h4>My Profile</h4>
      <div className="input name">
        <h6>Name</h6>
        <input
          type="text"
          value={credintials.name}
          onChange={handleChange}
          name="name"
        />
      </div>
      <div className="input email">
        <h6>Email</h6>
        <input
          type="text"
          value={credintials.email}
          onChange={handleChange}
          name="email"
        />
      </div>
      <div className="input password">
        <h6>Password</h6>
        <input
          type="text"
          name="password"
          value="********"
          onChange={handleChange}
        />
      </div>
      <Button
        value="Save Changes"
        styles={{ width: "100%", maxWidth: "300px", marginTop: "2rem" }}
        clickHandler={handleChange}
      />
    </form>
  );
}

export default Profile;
