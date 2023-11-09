import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcon from '../../components/atoms/SocialIcon/SocialIcon';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import {supabase} from '../../Config/SupaBaseClient';
import { useNavigate } from 'react-router-dom';

function SignUp() {


    //Sign Up
  const [formData,setFormData]= useState({
    email:'',
    password:'',
    confirmPassword:'',
    full_name:'',
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
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options:{
            data:{
            full_name:formData.full_name,
            }
          }
        }
      )
      if (error) throw error
      alert('Check Your email for verification link')

    }catch(error){
      alert(error)
    }
}
    return (
            <form action="#" class="sign-up-form" onSubmit={handleSubmit} >
            <h2 class="title">Sign up</h2>

            <div class="input-field">
              <i ><FontAwesomeIcon icon={faUser}/></i>
              <input  
                type="full_name"
                name='full_name' 
                placeholder="Enter your full name" 
                onChange={handleChange}
                required/>
            </div>

            <div class="input-field">
              <i ><FontAwesomeIcon icon={faEnvelope}/></i>
              <input  
                type="email"
                name='email' 
                placeholder="Enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" 
                onChange={handleChange}
                required/>
            </div>

            <div class="input-field">
              <i class="fas fa-lock"><FontAwesomeIcon icon={faLock}/></i>
              <input 
                type="password"
                name='password' 
                placeholder="Enter password min 8 characters"
                autocomplete="off" 
                onkeyup='check()' 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                maxlength="100" 
                minlength="8" 
                onChange={handleChange}
                required/>
            </div>

            <div class="input-field">
              <i class="fas fa-lock"><FontAwesomeIcon icon={faLock}/></i>

              <input 
              type="password" 
              name='confirmPassword'
              placeholder="Confirm Password" 
              autocomplete="off" 
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              maxlength="100" 
              minlength="8" 
              onChange={handleChange}
              required />
            </div>

            <button type="submit" class="btn"  >Sign Up</button> 
            <p class="social-text">Or Sign up with social platforms</p>
            <SocialIcon/>
          </form>
    );
  }
  
  export default SignUp;