import React from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";
import "./Login.css"
import { Link } from "react-router-dom";

const LoginCard = () => {
  return (
    <div className="app-container">
      <div className="login-card">
        <div className="login-icon">🔐</div>
        <h2 className="mb-4">Log in with email</h2>
        <div>
          <div className="input-group">
            <FiMail />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <FiLock />
            <input type="password" placeholder="Password" />
          </div>
          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>
          <button className="get-started">Get Started</button>
        </div>

        <div className="or-divider">
          New User
          <Link to="/Signup">
            Register
          </Link>
        </div>
        {/* <div className="social-buttons">
          <button><FaGoogle /></button>
          <button><FaFacebookF /></button>
          <button><FaApple /></button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginCard;
