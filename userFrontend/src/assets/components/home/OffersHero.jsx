import React from "react";
import "./OffersHero.css";
import { offers } from "../../data"
const OffersHero = () => {
  return (
    <>
      <div className="offersHeroCont">
        <div className="container">
          <div className="offersContent">
            <div className="offersContentSubCont">
              <div className="mainContentOffer">
                <p className="playFair">Exclusive Offers</p>
                <span className="outFit fontColorZinc">
                  Take advantage of our limited-time offers and special packages
                  to enhance your stay and create unforgettable memories.
                </span>
              </div>
              <div className="allOfferLink">
                <button className="">View All Offers <span className="arrow">→</span></button>
              </div>
            </div>
          </div>
          <div className="offersCards">
            <div className="row">
              {offers.map((offer, index) => (
                <div key={index} className="col-md-4 my-2">
                <div className="offer-card" style={{backgroundImage: `url(${offer.link})`}}>
                  <div className="offer-label outFit">{offer.discOff}</div>
                  <div className="offer-content">
                    <h5 className="playFair fs-4">{offer.title}</h5>
                    <p className="offer-subtitle outFit">
                      {offer.subtitle}
                    </p>
                    <p className="offer-expiry outFit">{offer.expiry}</p>
                    <a href="#" className="offer-button outFit" >
                      View Offers <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </div>
              ))}

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersHero;
