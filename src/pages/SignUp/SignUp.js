import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcon from '../../components/atoms/SocialIcon/SocialIcon';
import { faEnvelope, faEye, faEyeSlash, faLock, } from '@fortawesome/free-solid-svg-icons';
import {supabase} from '../../Config/SupaBaseClient';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (password !== confirmpassword) {
      alert("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }
	      alert('Check your email for the login link!');
      console.log('User registered:', user);
      // You can redirect or perform other actions upon successful registration
    } catch (error) {
      console.error('Error registering user:', error.message);
      setError('Error registering user. Please try again.');
    }
    setLoading(false);
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
    return (
            <form action="#" class="sign-up-form" onSubmit={handleRegister} >
            <h2 class="title">Sign up</h2>

            <div class="input-field">
              <i ><FontAwesomeIcon icon={faEnvelope}/></i>

              <input  
                type="email"
                placeholder="Enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" 
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}/>
                
            </div>

            <div class="input-field">
              <i class="fas fa-lock"><FontAwesomeIcon icon={faLock}/></i>
              <input 
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password min 8 characters"
		            autocomplete="off" 
                onkeyup='check()'
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                maxlength="100" 
                minlength="8" 
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div class="input-field">
              <i class="fas fa-lock"><FontAwesomeIcon icon={faLock}/></i>

              <input 
              type={showPassword ? 'text' : 'password'}
              name='confirmPassword'
              placeholder="Confirm Password" 
	            autocomplete="off" 
              onkeyup='check()'
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              maxlength="100" 
              minlength="8" 
              value={confirmpassword}
              required={true}
              onChange={(e) => setconPassword(e.target.value)} />
            </div>
            <i class="showps" onClick={togglePasswordVisibility}>
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                  </i>

            <button type="submit" class="btn" disabled={loading}>
              {loading ? <span>Loading...</span> : <span>Sign Up</span>}
            </button> 
            
            <p class="social-text">Or Sign up with social platforms</p>
            <SocialIcon/>
          </form>
    );
  }
  
  export default SignUp;