import React, { useState, useContext } from "react";
import "./account.scss";

import UserContext from "../../context/userContext";
import Addresses from "../../components/Addresses/Addresses";
import Orders from "../../components/Orders/Orders";
import Profile from "../../components/Profile/Profile";

function Account() {
  const { user } = useContext(UserContext);
  const [view, setView] = useState("Orders");

  const changeComponent = (e) => {
    setView(e.target.innerText);
  };

  let component = "";

  switch (view) {
    case "Orders":
      component = <Orders />;
      break;
    case "Profile":
      component = <Profile user={user} />;
      break;
    case "Addresses":
      component = <Addresses />;
      break;
  }

  return (
    <div className="account">
      <h3 className="title">My Account</h3>
      <div className="content">
        <div className="sidebar">
          <h3 className="orders" onClick={changeComponent}>
            Orders
          </h3>
          <h3 className="profile" onClick={changeComponent}>
            Profile
          </h3>
          <h3 className="addresses" onClick={changeComponent}>
            Addresses
          </h3>
        </div>
        <div className="cntr">{component}</div>
      </div>
    </div>
  );
}

export default Account;
