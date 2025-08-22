import React from 'react'
import { useParams } from "react-router-dom";
import './BookingPage.css'
import { AiFillHome } from "react-icons/ai";
import { FaWifi } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { rooms } from "../../data"


const BookingPage = () => {
    const { id } = useParams();
    const room = rooms.find((r) => r.id.toString() === id);


    return (
        <div className="main-container">
            <div className="top-welcome-image" style={{ backgroundImage: "url(https://plus.unsplash.com/premium_vector-1734702678077-de35e9cacdf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww)" }}>
                <p className='playFair'>Welcome to Booking Page</p>
            </div>
            <div className='container'>
                <div className="data-container">
                    <p className='main-content'>
                        <span className='playFair title'>{room.name}</span>
                        <span className='outFit type'>(Double Bed)</span>
                        <span className='outFit discount'>20% off</span>
                    </p>
                    <p style={{ display: "flex" }}>
                        <div className="stars" style={{ display: "flex", gap: "3px" }}>
                            {/* <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i> */}

                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                if (ratingValue <= Math.floor(room.rating)) {
                                    return <i key={index} className="fa-solid fa-star"></i>;
                                } else if (
                                    ratingValue === Math.ceil(room.rating) &&
                                    !Number.isInteger(room.rating)
                                ) {
                                    return <i key={index} className="fa-solid fa-star-half-stroke"></i>;
                                } else {
                                    return <i key={index} className="fa-regular fa-star"></i>;
                                }
                            })}
                        </div>

                        <span className='outFit' style={{ marginLeft: "7px", fontSize: "15px" }}>200+ reviews</span>
                    </p>
                </div>
                <div className="image-container">
                    <div className="main-image">
                        <img src={room.image} alt="img" />
                    </div>
                    <div className="child-image">
                        <img src={room.image} alt="img" />
                        <img src={room.image} alt="img" />
                        <img src={room.image} alt="img" />
                        <img src={room.image} alt="img" />
                    </div>
                </div>
                <div className="info-container">
                    <div className="service-details">
                        <p className='playFair description'>{room.description}</p>
                        <div className='outFit bp-icons-service mb-3'>
                            <div>
                                <FaWifi size={20} /> wifi
                            </div>
                            <div>
                                <MdOutlineRoomService size={20} /> room service
                            </div>
                            <div>
                                <FaSwimmingPool size={20} /> swimming pool
                            </div>
                        </div>
                    </div>
                    <div className="outFit amount-rate">
                        {room.price}
                    </div>
                </div>

                {/* booking bar */}
                <div className="booking-container-bar">

                </div>

                <div className="col-md-8">
                    <div className="" style={{ marginBottom: "70px" }}>
                        <div className="rooms-detail-informations">
                            <div className='icon-container'>
                                <AiFillHome size={19} />
                            </div>
                            <div className='content-container'>
                                <p className='title outFit'>Clean & Safe Stay</p>
                                <p className='description outFit'>A well-maintained and hygienic space just for you.</p>
                            </div>
                        </div>
                        <div className="rooms-detail-informations">
                            <div className='icon-container'>
                                <HiMiniCheckBadge size={19} />
                            </div>
                            <div className='content-container'>
                                <p className='title outFit'>Enhanced Cleaning</p>
                                <p className='description outFit'>This host follows Staybnb's strict cleaning standards.</p>
                            </div>
                        </div>
                        <div className="rooms-detail-informations">
                            <div className='icon-container'>
                                <FaLocationDot size={19} />
                            </div>
                            <div className='content-container'>
                                <p className='title outFit'>Excellent Location</p>
                                <p className='description outFit'>90% of guests rated the location 5 stars.</p>
                            </div>
                        </div>
                        <div className="rooms-detail-informations">
                            <div className='icon-container'>
                                <FaHeart size={19} />
                            </div>
                            <div className='content-container'>
                                <p className='title outFit'>Smooth Check-In</p>
                                <p className='description outFit'>100% of guests gave check-in a 5-star rating.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="room-content-para">
                    <div className='col-md-8'>
                        <p className='outFit'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis impedit voluptatibus laboriosam ut doloremque facere aspernatur modi dolore mollitia, sapiente dolorem? Deserunt quis pariatur, beatae vero officia, quisquam nihil exercitationem eius cumque distinctio, fuga officiis consequuntur maxime cupiditate neque excepturi. Eligendi, iste. Asperiores ea rerum delectus, ab eveniet voluptate.
                        </p>
                        <hr />
                    </div>
                    <div className="review-btn">
                        <button className='outFit'>Review</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPage