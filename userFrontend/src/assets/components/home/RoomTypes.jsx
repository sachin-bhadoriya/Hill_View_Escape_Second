import React, { useState } from "react";
import "./RoomTypes.css";
import { rooms } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader"
const RoomTypes = () => {
  const [isLoading, setIsLoading] = useState(null)
  const [isLoadingAllRoom, setIsLoadingAllRoom] = useState(false)
  const navigate = useNavigate()

  const handleBookNow = (roomId) => {
    setIsLoading(roomId);
    // setTimeout(() => {
      navigate(`/room/${roomId}`);
      setIsLoading(null)
    // }, 2000);
  };

  const handleAllRooms = () => {
    setIsLoadingAllRoom(true);
    // setTimeout(() => {
      navigate("/room");
      setIsLoadingAllRoom(false);
    // }, 2000);
  }

  return (
    <div className="bgColorZinc">
      <div className="container">
        <div className="">
          <div className="contentAbout">
            <p className="aboutTitleHero playFair mb-0"> Featured Rooms</p>
            <span className="aboutDescHero outFit fontColorZinc">
              Discover our handpicked selection of exceptional properties around
              the world, offering unparalleled luxury and unforgettable
              experiences.
            </span>
          </div>
        </div>
        <div className="roomCards">
          <div className="container-fluid">
            <div className="row">
              {[...rooms].reverse().slice(0, 4).map((room, index) => (
                <div
                  key={index}
                  className="my-2 col-12	col-sm-6	col-md-4	col-lg-3	col-xl-3"
                >
                  <div className="cardRoom">
                    <img
                      className="roomImage"
                      src={room.image}
                      alt={room.name}
                    />
                    <div className="roomContent p-3 container">
                      <div className="roomNameCont">
                        <div className="roomNameTitleCont playFair">
                          <span>{room.name}</span>
                        </div>
                        <div className="outFit ">
                          <span>
                            <i className="fa-solid fa-star"></i>
                            <span className="starRoom"> {room.rating}</span>
                          </span>
                        </div>
                      </div>
                      <div className="outFit mb-1">
                        <span className="roomNameAddressCont fontColorZinc">
                          {room.description.slice(0, 70)}...
                        </span>
                      </div>
                      <div className="roomNameCont my-2 mt-2 mb-1">
                        <div className="outFit">
                          <span>
                            <span className="roomAmount darkFontWeight">
                              {" "}
                              {room.price}
                            </span>
                            <span className="roomTime fontColorZinc">/day</span>
                          </span>
                        </div>
                        <div className="outFit bookNowBtnCont">
                          <span>
                            <button onClick={() => handleBookNow(room.id)} className="bookNowBtn">{
                              isLoading === room.id ? <><Loader /></> : <>Book Now</>
                            }</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="allRoomCont text-center outFit">
              <button onClick={handleAllRooms}>
                {isLoadingAllRoom ? <><Loader /></> : <>View All Rooms</>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypes;
