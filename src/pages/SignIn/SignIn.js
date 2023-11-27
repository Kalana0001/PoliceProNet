import {supabase} from '../../Config/SupaBaseClient';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcon from '../../components/atoms/SocialIcon/SocialIcon';
import { faEnvelope, faLock,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'

function SignIn() {

  let navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData,setFormData]= useState({
    email:'',
    password:'',
  })

  console.log(formData)
  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword(
        {
          email: formData.email,
          password: formData.password,
        }
      )
      if (error) throw error
      console.log('Sign-in successful:',data)
      navigate('/home')

    }catch(error){
      alert(error)
    }
}

const togglePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};
    return (
        <form action="#" class="sign-in-form" onSubmit={handleSubmit}>
        <h2 class="title">Sign in</h2>
        <div class="input-field">
          <i class="fas fa-user"><FontAwesomeIcon icon={faEnvelope}/></i>

          <input 
          type="email"
          name='email'
          onChange={handleChange} 
          placeholder="Enter your email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"    required/>
        </div>
        <div class="input-field">
          <i class="fas fa-lock"><FontAwesomeIcon icon={faLock}/></i>

          <input 
          onChange={handleChange}
          name='password'
          placeholder="Enter password"
          autocomplete="off" 
          onkeyup='check()' 
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          maxlength="100" 
          minlength="8" 
          type={showPassword ? 'text' : 'password'}
          required />
        </div>

        <i class="showps2" onClick={togglePasswordVisibility}>
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
                  </i>

        <button type="submit" class="btn" >Sign In</button> 

        <p class="social-text">Or Sign in with social platforms</p>
        <SocialIcon/>
      </form>
    );
  }
  
  export default SignIn;