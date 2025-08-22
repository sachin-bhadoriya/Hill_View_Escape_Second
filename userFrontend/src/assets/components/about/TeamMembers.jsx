import React from 'react'
// import Index from "../parts/TeamCards/js/index"
// import SecondCards from "../parts/TeamCards/SecondCards"
import "./TeamMembers.css"
import { teamMembers } from "../../data"
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';


const TeamMembers = () => {
  return (
    <div className='TeamMemberContainer'>
      <h3 className='playFair text-center my-5'>Meet Our Team</h3>
      <div className="memberCardCont container">
        {teamMembers.map((i, index) => (
          <div key={index} className="teamMemberMainCard">
            <div class="hoverWrapper">
              <div class="hoverCard">
                <div className="relImg">
                  <img src={`${i.image}`} alt="" />
                </div>
                <div className="absData">
                  <h5 className='playFair'>{i.name}</h5>
                </div>
              </div>
              <div class="memberCard">
                <h2 className='dmSerifDisplay'>{i.name}</h2>
                <h5 className='exo'>{i.designation}</h5>
                <div className="teamSocialIcons">
                  <div className='linkedinIcon'>
                    <FaGithub />
                  </div>
                  <div className='TwitterIcon'>
                    <FaTwitter />
                  </div>
                  <div className='InstaGramIcon'>
                    <FaInstagram />
                  </div>
                  <div className='faceBookIcon'>
                    <FaFacebookF />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="teamMemberMainCard">
          <div class="hoverWrapper">
            <div class="hoverCard"></div>
            <div class="memberCard"></div>
          </div>
        </div>
        <div className="teamMemberMainCard">
          <div class="hoverWrapper">
            <div class="hoverCard"></div>
            <div class="memberCard"></div>
          </div>
        </div>
        <div className="teamMemberMainCard">
          <div class="hoverWrapper">
            <div class="hoverCard"></div>
            <div class="memberCard"></div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default TeamMembers