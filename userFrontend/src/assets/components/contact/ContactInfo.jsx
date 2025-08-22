import React from 'react'
import "./ContactInfo.css"
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocation } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className='mainContactCont'>
      <div className="contactCont" style={{ backgroundImage: `url(https://media.istockphoto.com/id/516548781/photo/hotel-reception-with-bell.webp?a=1&b=1&s=612x612&w=0&k=20&c=bcVd79iIIW4wlwyhdKQkWgtP3v6a-6Rk2ZjOWcJOPIQ=)` }}>
        <div className="contactHead playFair">Contact Us</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-auto">
            <div className="infoParts">
              <div>
                <h3 className='playFair'>Contact Information</h3>
                <p className='outFit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium consectetur odit. Earum, beatae ex.</p>
              </div>
              <div className='subContIcons'>
                <div className='contIconsmini'>
                  <FiPhoneCall />
                </div>
                <div className='contTextmini'>
                  +91 987 654 3210
                </div>
              </div>
              <div className='subContIcons'>
                <div className='contIconsmini'>
                  <TfiEmail />
                </div>
                <div className='contTextmini'>
                  bhadoriyasachin33 @gmail.com
                  {/* Gwalior, Madhya Pradesh, India */}
                </div>
              </div>
              <div className='subContIcons'>
                <div className='contIconsmini'>
                  <FaMapLocation />
                </div>
                <div className='contTextmini'>
                  Gwalior, Madhya Pradesh, India
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_1280.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo