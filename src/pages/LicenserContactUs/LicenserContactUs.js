
import conshape from '../../Images/contshape.png'
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser'
import SocialIcon from '../../components/atoms/SocialIcon/SocialIcon';
import NavBar from '../../components/NavBar/NavBar';
import LicenserNavbar from '../../components/LicenserNavbar/LicenserNavbar';

function LicenserContactUs() {
  const [isFocused, setIsFocused] = useState(false);

  const handle1Focus = () => {
    setIsFocused(true);
  };

  const handle1Blur = (e) => {
    if (e.target.value === "") {
      setIsFocused(false);
    } 
  };

  const [is1Focused, setIs1Focused] = useState(false);

  const handle2Focus = () => {
    setIs1Focused(true);
  };

  const handle2Blur = (e) => {
    if (e.target.value === "") {
      setIs1Focused(false);
    } 
  };

    const [is2Focused, setIs2Focused] = useState(false);
  
  const handle3Focus = () => {
    setIs2Focused(true);
  };

  const handle3Blur = (e) => {
    if (e.target.value === "") {
      setIs2Focused(false);
    } 
  };

  const [is3Focused, setIs3Focused] = useState(false);
  
  const handle4Focus = () => {
    setIs3Focused(true);
  };

  const handle4Blur = (e) => {
    if (e.target.value === "") {
      setIs3Focused(false);
    } 
  };


    return (
    <span>
    <LicenserNavbar/>
    <span class="contcontall">
    <div class="concontainer">
      <span class="conbig-circle" ></span>
      <img src={conshape} class="consquare" alt="" />
      <div class="contform">
        <div class="cont-info">
          <h3 class="contitle" data-aos="fade-right">Let's get in touch</h3>
          <p class="conttext" data-aos="fade-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="continfo" data-aos="zoom-in-down">
            <div class="continformation">
            <i data-aos="fade-right"><FontAwesomeIcon icon={faLocation} class="conticon"/></i>
              <p data-aos="fade-left">331 Olcott Mawatha, 6th Floor, Colombo</p>
            </div>
            <div class="continformation">
            <i data-aos="fade-right"><FontAwesomeIcon icon={faEnvelope} class="conticon"/></i>
              <p data-aos="fade-left">policepronet@pubsec.gov.lk</p>
            </div>
            <div class="continformation">
            <i data-aos="fade-right"><FontAwesomeIcon icon={faPhone} class="conticon"/></i>
              <p data-aos="fade-left">+ 01 234 567 89</p>
            </div>
          </div>

          <div class="contsocial-media">
            <p>Connect with us :</p>
            <SocialIcon/>
          </div>
        </div>

        <div class="phone-form">
          <span class="concircle one" data-aos="zoom-in-down"></span>
          <span class="concircle two" data-aos="zoom-in-down"></span>

          <form  class="cotcontform" action="index.html" autocomplete="off">
            <h3 class="contitle" data-aos="zoom-in-down">Contact us</h3>
            <div className={`conput-container ${isFocused ? "focus" : ""}`}>
              <input type="conttext" name="name" class="continput" onFocus={handle1Focus} onBlur={handle1Blur} data-aos="zoom-in-down"/>
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div className={`conput-container ${is1Focused ? "focus" : ""}`}>
              <input type="email" name="email" class="continput" onFocus={handle2Focus} onBlur={handle2Blur} data-aos="zoom-in-down"/>
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className={`conput-container ${is2Focused ? "focus" : ""}`}>
              <input type="tel" name="phone" class="continput" onFocus={handle3Focus} onBlur={handle3Blur}  data-aos="zoom-in-down"/>
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className={`conput-container textarea ${is3Focused ? "focus" : ""}`}>
              <textarea name="message" class="continput" onFocus={handle4Focus} onBlur={handle4Blur} data-aos="zoom-in-down"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="conbtn" />
          </form>
        </div>
      </div>
    </div>
    </span>
    </span>
    );
  }
  
  export default LicenserContactUs;