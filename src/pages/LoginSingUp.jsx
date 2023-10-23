import React from "react";
import "./css/LoginSingup.css"

function LoginSingUp() {
  return (
    <div className="loginSingup">
      <div className="loginSingup-container">
        <h2>Sing up</h2>
        <div className="loginSingup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginSingup-login">Already have an account? <span>Login</span></p>
        <div className="loginSingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacity policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSingUp;
