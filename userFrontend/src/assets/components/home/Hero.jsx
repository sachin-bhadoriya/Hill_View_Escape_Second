import React, { useState } from "react";
import "./Hero.css";
// import { Label, Select } from "flowbite-react";
import { rooms } from "../../data";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const Hero = () => {
  const navigate = useNavigate()
  const [roomType, setRoomType] = useState(rooms[0]?.name || "")
  const [checkIn, setCheckIn] = useState(new Date().toISOString().split("T")[0])
  const [checkOut, setCheckOut] = useState(
    (() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split("T")[0];
    })()
  )
  const [guestNo, setGuestNo] = useState(1)
  const [checkAvail, setCheckAvail] = useState(false)

  const handleCheckingAvail = () => {

    setCheckAvail(true);
    console.log("Room Type:", roomType);
    console.log("CheckIn:", checkIn);
    console.log("CheckOut:", checkOut);
    console.log("Guests:", guestNo);

    setTimeout(() => {
      navigate("/room");
      setCheckAvail(false);
    }, 3000);
  };


  return (
    <div className="heroSection">
      <div className="contentHero">
        <div className="contentHeroText">
          <div className="smallHeaderHero outFit">
            <span>The Ultimate Hotel Experience</span>
          </div>
          <div className="mainHeaderHero playFair">
            <p>Discover Your Perfect Gateway Destination</p>
          </div>
          <div className="paraHeaderHero outFit">
            <p>
              Unparalleled luxury and comfort await at the world's most
              exclusive hotels and resorts. Start your journey today.
            </p>
          </div>
        </div>







        {/* booking container */}
        <div className="search-bar-container shadow">
          <div className="form-group">
            <label htmlFor="roomTypes">
              <i className="fa-regular fa-calendar"></i> Room Type
            </label>
            <select id="roomTypes" required value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              {rooms.map((room, index) => (
                <>
                  <option className="roomLists" key={index}>{room.name}</option>
                </>

              ))}
            </select>
          </div>

          <div className="form-group">
            <label>
              <i className="fa-regular fa-calendar"></i> Check in
            </label>
            <input
              value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
              type="date"
            // defaultValue={new Date().toISOString().split("T")[0]}
            />
          </div>
          {/* working */}
          <div className="form-group">
            <label>
              <i className="fa-regular fa-calendar"></i> Check out
            </label>
            <input
              value={checkOut} onChange={(e) => setCheckOut(e.target.value)}
              type="date"
            // defaultValue={(() => {
            //   const tomorrow = new Date();
            //   tomorrow.setDate(tomorrow.getDate() + 1);
            //   return tomorrow.toISOString().split("T")[0];
            // })()}
            />
          </div>

          <div className="form-group">
            <label>
              <i className="fa-solid fa-person"></i> Guests
            </label>
            <input
              value={guestNo} onChange={(e) => setGuestNo(e.target.value)}
              type="number"
              className="guests"
              min="1"
              defaultValue="1"
            // placeholder="0"
            />
          </div>

          {/* <Link style={{ textDecoration: "none" }}> */}
          <button className="search-btn" onClick={handleCheckingAvail}>

            {checkAvail ? <>
              <Loader />
            </> : <>
              <i className="fa fa-search"></i> <span>Check Availability</span>
            </>}
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
