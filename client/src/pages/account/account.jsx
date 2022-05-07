import React, {useState} from 'react'
import "./account.scss"

import Addresses from '../../components/Addresses/Addresses';
import Orders from '../../components/Orders/Orders';
import Profile from '../../components/Profile/Profile';

function Account() {
  const [view, setView] = useState("Profile");

  const changeComponent = (e) => {
    setView(e.target.innerText);
  }

  let component = "";

  switch (view) {
    case "Orders":
      component = <Orders />;
      break;
    case "Profile":
      component = <Profile />;
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
          <h3 className="orders" onClick={changeComponent}>Orders</h3>
          <h3 className="profile" onClick={changeComponent}>Profile</h3>
          <h3 classname="addresses" onClick={changeComponent}>Addresses</h3>
        </div>
        <div className="cntr">
          {component}
        </div>
      </div>
    </div>
  )
}

export default Account;