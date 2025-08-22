import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/navbar/Navbar";
import Footer from "./assets/components/footer/Footer";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Room from "./assets/components/Room";
import Login from "./assets/components/loginAndSignup/LogIn";
import BookingPage from "./assets/components/rooms/BookingPage";
import ThankYou from "./assets/components/ThankYou";
import Loader from "./assets/components/Loader";
import "./App.css";
import Lottie from "lottie-react";
import loaderAnimation from "../src/assets/loader.json";
import ScrollToTop from './assets/components/ScrollToTop'
import SignUp from "./assets/components/loginAndSignup/SignUp";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="main-page-loading">
        <Lottie
          animationData={loaderAnimation}
          loop={true}
          style={{ width: 200, height: 200 }}
        />
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<Room />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/room/:id" element={<BookingPage />} />
        <Route path="/thanku" element={<ThankYou />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
