import React from "react";
import { motion } from "framer-motion";
import "./ThankYou.css";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="thankyou-container">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="thankyou-card"
      >
        {/* Emoji Animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="thankyou-emoji"
        >
          🎉🥳✨
        </motion.div>

        {/* Image */}
        <div className="overflow-hidden">
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/3900/3900805.png"
            alt="Thank You"
            className="thankyou-img"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>

        {/* Text */}
        <motion.h1
          className="thankyou-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Thank You for Subscribing! 💌
        </motion.h1>

        <motion.p
          className="thankyou-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          We’re excited to have you with us. Get ready for awesome updates 🚀
        </motion.p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="thankyou-button"
        >
          <Link to="/" style={{textDecoration: "none", color: "white"}}>
            Go Back Home 🏡
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
