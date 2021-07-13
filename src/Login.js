import React from "react";
import logo from "./assets/monstercat-logo.svg";
import "./styles/Login.css";

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="logo" />
      {/* Logo */}
      {/* Login */}
      <h2>Sign In</h2>

      <div className="sign-in-container">
        <h3>With Email</h3>
        <label>Email</label>
        <input type="text" placeholder="kitty@monstercat.com" />
        <br />
        <label>Email</label>
        <input type="text" placeholder="your secret" />
      </div>
    </div>
  );
}

export default Login;
