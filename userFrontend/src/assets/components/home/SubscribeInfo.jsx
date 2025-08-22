import React, { useState } from 'react'
import axios from "axios";
import "./SubscribeInfo.css"
import Loader from "../Loader"
import { useNavigate } from 'react-router-dom'

const SubscribeInfo = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isBlank, setIsBlank] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleSubmitInfo = async () => {
    if (!name || !email) {
      setIsBlank(true)
      return;
    }

    try {
      setIsSubscribing(true);
      await axios.post("https://hill-view-escape-second-backend.onrender.com/subscribe", { name, email });
      navigate("/thanku")
    } catch (error) {
      console.error("Error while subscribing:", error);
    } finally {
      setIsSubscribing(false);
    }
  }

  return (
    <div className="newsletter-container">
      <div className="left-curve"></div>
      <h2 className="newsletter-title playFair">Subscribe to our newsletter</h2>
      <div className="newsletter-form">
        <input 
          type="text" 
          value={name} 
          onChange={(e) => {
            setName(e.target.value);
            setIsBlank(false); // reset error when user types
          }} 
          placeholder="First name" 
          required 
        />

        <input 
          type="email" 
          value={email} 
          onChange={(e) => {
            setEmail(e.target.value);
            setIsBlank(false); // reset error when user types
          }} 
          placeholder="Email address" 
          required 
        />

        {isSubscribing ? (
          <div className="loading-btn">
            <Loader />
          </div>
        ) : (
          <button 
            // style={{ backgroundColor: isBlank ? "red" : "blue", color: "white" }} 
            onClick={handleSubmitInfo}
            disabled={isSubscribing} // disable button when subscribing
          >
            Subscribe Now
          </button>
        )}
      </div>
      {isBlank && <p style={{ color: "white", marginTop: "8px" }}>⚠ Please fill all fields</p>}
    </div>
  )
}

export default SubscribeInfo
