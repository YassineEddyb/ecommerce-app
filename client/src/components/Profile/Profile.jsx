import React, { useState } from "react";
import "./Profile.scss";

import Button from "../button/button";

function Profile() {
  const [credintials, setCredintials] = useState({
    name: "yassineddyb",
    email: "yassineddyb@gmail.com",
    password: "123456",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredintials({ ...credintials, [name]: value });
  };

  return (
    <div className="profile">
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
          value={credintials.password}
          onChange={handleChange}
        />
      </div>
      <Button value="Save Changes" width="40%" />
    </div>
  );
}

export default Profile;
