import React, { useState } from "react";
import "../styles/Login.scss";

function Login() {
  const [showPass, setShowPass] = useState(false);

  const RevealPassword = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.assign("/users");
  };
  return (
    <>
      <div className="brand">
        <img src="https://i.postimg.cc/tCW5Cmry/image.png" alt="Logo" />
      </div>
      <div className="loginPage">
        <div className="illustration">
          <img
            src="https://i.postimg.cc/tCW5Cmry/image.png"
            alt="Logo"
            className="logo"
          />
          <img
            src="https://i.postimg.cc/prnmC49d/image.png"
            alt="Illustration"
            className="board"
          />
        </div>
        <div className="form">
          <div>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <form onSubmit={handleLogin}>
              <div className="form-field">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-field">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                />
                <button className="show_btn" onClick={RevealPassword}>
                  Show
                </button>
              </div>
              <a href="/">FORGOT PASSWORD?</a>
              <button className="login_btn">LOG IN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
