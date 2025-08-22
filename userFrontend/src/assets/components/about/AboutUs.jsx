import React from 'react'
import { about } from "../../data"
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <div className='mainCont'>
      <div className="aboutCont" style={{ backgroundImage: `url(${about.image1})` }}>
        <div className="aboutHead playFair">About Us</div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 order-2 order-md-1 storyContainer my-auto">
            <h3 className='playFair'>{about.title}</h3>
            <p className='outFit'>{about.content}</p>
          </div>
          <div className="col-md-6 order-1 order-md-2 aboutImage">
            <div className="row">
              <div className="col-md-5 mb-3 ImageOne position-relative">
                <img src={`${about.image2}`} alt="img" />
                <div className="imageLayer"></div>
              </div>
              <div className="col-md-7 mb-3 ImageTwo position-relative">
                <img src={`${about.image3}`} alt="img" />
                <div className="imageLayer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className='playFair'>Our Mission</h3>
            <p className='outFit'>{about.mission}</p>
          </div>
          <div className="col-md-6">
            <h3 className='playFair'>Our Vission</h3>
            <p className='outFit'>{about.vision}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs