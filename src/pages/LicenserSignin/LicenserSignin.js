import React, { useState } from 'react';
import logpg1 from '../../Images/car1.png';
import NavBar2 from '../../components/NavBar2/NavBar2';
import {supabase} from '../../Config/SupaBaseClient';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcon from '../../components/atoms/SocialIcon/SocialIcon';
import { faEnvelope, faLock,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



function LicenserSignin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      
      const { data, error } = await supabase
        .from('licenser')
        .select()
        .eq('email', email)
        .eq('password', password);

      if (error) {
        window.alert('An error occurred during login');
      } else if (data.length === 0) { 
        window.alert('Invalid email or password');
      } else {
        const loggedInUser = data[0];
        
        console.log('Login successful',loggedInUser);
        
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        navigate('/licenserhome', { state: { user: loggedInUser } });
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      window.alert('An error occurred during login');
    }
  };
  


const togglePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

  return (
<span>
  <NavBar2/>
    <div className='container'>
      <div className="forms-container" >
        <div className="signin-signup">

        <form action="#" class="sign-in-form" onSubmit={handleLogin}>
        <h2 class="title">Sign in</h2>
        <div class="input-field">
          <i class="fas fa-user"><FontAwesomeIcon icon={faEnvelope}/></i>

          <input 
          type="email"
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"    
          required/>
        </div>

        <div class="input-field">
          <i class="fas fa-lock"><FontAwesomeIcon icon={faLock}/></i>

          <input 
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name='password'
          placeholder="Enter password"
          autocomplete="off" 
          onkeyup='check()' 
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          maxlength="100" 
          minlength="8" 
          required />
        </div>

        <i class="showps2" onClick={togglePasswordVisibility}>
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                  </i>

        <button type="submit" class="btn" >Sign In</button> 

        <p class="social-text">Or Sign in with social platforms</p>
        <SocialIcon/>
      </form>


        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Police Officer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
          </div>
          <img src={logpg1} className="image" alt="" />
        </div>
      </div>
    </div>
    </span>  
  );
}

export default LicenserSignin;
