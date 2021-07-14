import React from "react";
import logo from "../assets/monstercat-logo.svg";
import { accessUrl } from "../monstercat";
import "../styles/Login.css";


function Login() {
  return (
    <div className="login">
      {/* Logo */}
      <img src={logo} alt="logo" />

      {/* Login */}
      <a href={accessUrl} className="login-btn">authorise with spotify</a>
    </div>
  );
}

export default Login;
