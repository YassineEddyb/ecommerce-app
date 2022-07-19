import React from "react";
import "./ErrorMsg.scss";

function ErrorMsg({ msg }) {
  return <div className="error-msg">{msg}</div>;
}

export default ErrorMsg;
