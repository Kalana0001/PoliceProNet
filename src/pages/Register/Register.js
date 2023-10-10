import React, { useState } from 'react';
import './Register.css';
import logpg1 from '../../Images/car1.png';
import logpg2 from '../../Images/car2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

function Register() {
  // Use state to control the CSS class for the container
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // Event handler for Sign Up button click
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  // Event handler for Sign In button click
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
        <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon" id="icon1">
              <i><FontAwesomeIcon icon={faFacebook}/></i>
              </a>
              <a href="#" class="social-icon" id="icon2">
                <i class="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i>
              </a>
              <a href="#" class="social-icon" id="icon3">
                <i class="fab fa-google"><FontAwesomeIcon icon={faGoogle}/></i>
              </a>
              <a href="#" class="social-icon" id="icon4">
                <i class="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin}/></i>
              </a>
              <a href="#" class="social-icon" id="icon5">
                <i class="fab fa-linkedin-in"><FontAwesomeIcon icon={faWhatsapp}/></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon" id="icon1">
                <i><FontAwesomeIcon icon={faFacebook}/></i>
              </a>
              <a href="#" class="social-icon" id="icon2">
                <i class="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}/></i>
              </a>
              <a href="#" class="social-icon" id="icon3">
                <i class="fab fa-google"><FontAwesomeIcon icon={faGoogle}/></i>
              </a>
              <a href="#" class="social-icon" id="icon4">
                <i class="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin}/></i>
              </a>
              <a href="#" class="social-icon" id="icon5">
                <i class="fab fa-linkedin-in"><FontAwesomeIcon icon={faWhatsapp}/></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignUpClick} id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={logpg1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInClick} id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={logpg2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
