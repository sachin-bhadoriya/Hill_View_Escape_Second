import React from 'react'
import './Rooms.css'
import { FaWifi } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { rooms } from '../../data';
import { Link } from 'react-router-dom';



const Rooms = () => {
    return (
        <div className='w-100'>
            <div className="subContainer" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
                <div className="roomsTitleandData">
                    <p className='playFair roomsTitle'>Hotels Rooms</p>
                    <p className='outFit roomsPara'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
                </div>

            </div>
            <div>
                {rooms.map((i) => (
                    <div key={i.id} className='container'>
                        <Link to={`/room/${i.id}`} className='roomsCard d-flex ' style={{ textDecoration: "none" }}>
                            <div className="imageContainer">
                                <img src={i.image} alt="rooms" />
                            </div>
                            <div className="infoContainer">
                                <div>
                                    <div className='info-con-main'>
                                        <p className='playFair roomTitle'>{i.name}</p>
                                        <p className='outFit roomPara'>{i.description}</p>
                                    </div>


                                    <p className='mb-3'>
                                        {[...Array(5)].map((_, index) => {
                                            const ratingValue = index + 1;
                                            if (ratingValue <= Math.floor(i.rating)) {
                                                return <i key={index} className="fa-solid fa-star"></i>;
                                            } else if (
                                                ratingValue === Math.ceil(i.rating) &&
                                                !Number.isInteger(i.rating)
                                            ) {
                                                return <i key={index} className="fa-solid fa-star-half-stroke"></i>;
                                            } else {
                                                return <i key={index} className="fa-regular fa-star"></i>;
                                            }
                                        })}
                                        {/* <span>200+ reviews</span> */}
                                    </p>



                                    <p className='outFit roomServiceIcons mb-3'>
                                        <FaWifi size={20} />
                                        <MdOutlineRoomService size={20} />
                                        <FaSwimmingPool size={20} />
                                    </p>
                                    <p className='outFit amount'>{i.price}/day</p>
                                </div>
                                <hr />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rooms