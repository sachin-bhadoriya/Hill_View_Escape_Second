import React from 'react'
import "./Services.css"
import { services } from "../../data"
const Services = () => {
  return (
    <div className="ServiceCont container">
      <div className="container">
        <h1 className="playFair text-center">Why choose Us</h1>
        <div className="row">
          {services.map((i, index) => (
            <div className="col-md-6 sclii">
              <div className="ServiceImageIcon scliiimg">
                <lord-icon
                  src={i.icon}
                  trigger="loop"
                  state="loop-wave"
                  colors="primary:#8930e8,secondary:#e83a30"
                  style={{ width: '50px', height: '50px' }}
                ></lord-icon>
              </div>
              <div className="ServiceText">
                <p className="playFair">{i.title}</p>
                <p className="savate">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services