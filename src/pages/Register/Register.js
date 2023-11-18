import React, { useState } from 'react';
import './Register.css';
import logpg1 from '../../Images/car1.png';
import logpg2 from '../../Images/car2.png';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import NavBar2 from '../../components/NavBar2/NavBar2';


function Register() {
  // Use state to control the CSS class for the container
  const [isSignUpMode, setIsSignUpMode] = useState(true);

  // Event handler for Sign Up button click
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  // Event handler for Sign In button click
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };


//Sign Up
//Sign In

  return (
<span>
  <NavBar2/>
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container" >
        <div className="signin-signup">
        <SignIn/>
        <SignUp/>

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
            <h3>Join Us ?</h3>
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
    </span>  
  );
}

export default Register;
