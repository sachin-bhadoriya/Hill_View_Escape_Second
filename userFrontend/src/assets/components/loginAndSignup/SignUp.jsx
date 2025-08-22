import React from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import "./Login.css"

const SignUp = () => {
  return (
    <div className="app-container">
      <div className="login-card">
        <div className="login-icon">🔐</div>
        <h2 className="mb-4">Sign up with email</h2>
        {/* <p>Make a new doc to bring your words, data, and teams together. For free</p> */}

        <div>

          <div className="input-group">
            <FiLock />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-group" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FiMail />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <FiLock />
            <input type="text" placeholder="Contact No." />
          </div>
          <div className="input-group">
            <FiLock />
            <input type="password" placeholder="Password" />
          </div>
          <button className="get-started">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
