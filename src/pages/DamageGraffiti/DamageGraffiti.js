
import React, { useState } from 'react';
import { supabase } from '../../Config/SupaBaseClient';
import NavBar from '../../components/NavBar/NavBar';
import './DamageGraffiti.css'


const DamageForm=()=>{

  const[Fname,setFname]=useState('')
  const[Lname,setLname]=useState('')
  const[Address,setAddress]=useState('')
  const[NIC,setNIC]=useState('')
  const[Contact_No,setContact]=useState('')
  const[Postal_Code,setPcode]=useState('')
  const[Age,setAge]=useState('')
  const[DOB,setDOB]=useState('')
  const [Province, setProvince] = useState('');
  const [State, setState] = useState('');
  const [Gender, setGender] = useState('');
  const [Full_Name, setFullName] = useState('');

  
  const[formError,setFormError]=useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(!Fname || !Lname || !Full_Name|| !Address || !NIC || !Contact_No || !Postal_Code || !Age || !DOB){
      setFormError('Please fill in all the fields correctly')
      return
    }
    const {data, error}=await supabase
    .from('People')
    .insert([{Fname,Lname,Full_Name,Address,NIC,Contact_No,Postal_Code,Age,DOB,Province,State,Gender}])

    if(error){
      console.log(error)
      setFormError('Please fill in all the fields correctly')
    }
    if(data){
      console.log(data)
      setFormError(null)
    }
  }


    return(
      <span>
        <NavBar/>
        <div class="rgiregiall">
        <div className="graffiti-form">
        <h2 className='propert-head'>Interntional Damage or Graffiti</h2>
    <div>
    <div className='propertyform-para'>
    <div className="main-header">
        <p>Use this form to report damage to property by graffiti to the police.</p>
         
    </div>
    <div className="lostpara1">
        <h3>To fill in this form</h3>
        <p>you will need:</p>
        <ul>
            <p>location of graffiti</p>
            <p>two digital images of the graffiti if available, one close up and one from a distance</p>
            <p>contact details of the property owner if known</p>
            <p>contact details of the property owner if known</p>
        </ul>

    </div>
    <div className="damage-form">
         <h3>Your details</h3>
         <p>All fields are required unless specified otherwise.</p><hr/>

    </div>
    </div>
    </div>

        </div>
        <div class="damwrapper">
        <span class="regbig-circle" ></span>
        <div class="r2title">Interntional Damage or Graffiti
        </div>
        <form action="POST" data-netlify="true" id="myForm" onSubmit={handleSubmit}>
          <div class="r2form">


          <div class="r2inputfield">
              <label class="r2lbl">*Damage Property Type:</label>
              <div class="custom_select">
                <select id="Province" name="Province"  onChange={(e)=> setFname(e.target.value)}  required>
                  <option value="">--Select your Property Type--</option>
                  <option value="Vehicle">Vehicle</option>
                  <option value="House">House</option>
                  <option value="Businuss">Businuss</option>
                  <option value="Building">Building</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div class="r2inputfield">
              <label for="" class="r2lbl">*Date of Damage:</label>
              <input 
              type="date" 
              class="input" 
              required
              id='DOB'
              value={DOB}
              onChange={(e)=> setDOB(e.target.value)}
              />
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">*Time</label>

              <input 
              type="text" 
              class="input" 
              placeholder="Enter first name" 
              maxlength="30"
              pattern="[A-Za-z]{1,32}" 
              title="Enter only alphabets" 
              required
              id='Fname'
              value={Fname}
              onChange={(e)=> setFname(e.target.value)}
              />
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">*Area:</label>
              <textarea 
              class="textarea" 
              cols="30" 
              rows="5" 
              placeholder="Enter your Area"
              pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$" 
              maxlength="100" 
              required
              id='Address'
              value={Address}
              onChange={(e)=> setAddress(e.target.value)}
              >
              </textarea>
            </div>

            <div class="r2inputfield">
              <label class="r2lbl">*Estimated Cost Of Damage:</label>
              <input 
              type="text" 
              class="input"  
              placeholder="Enter Estimated Cost Of Damage" 
              maxlength="30"
              title="Enter only alphabets"
              id='Full_Name'
              value={Full_Name}
              onChange={(e)=> setFullName(e.target.value)}
              required/>
            </div>

            <div class="r2inputfield">
              <label class="r2lbl">*Short Discription About Damage:</label>
              <textarea 
              class="textarea" 
              cols="30" 
              rows="5" 
              placeholder="Enter your Short Discription"
              pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$" 
              maxlength="100" 
              required
              id='Address'
              value={Address}
              onChange={(e)=> setAddress(e.target.value)}
              >
              </textarea>
            </div>
    
            <div class="r2inputfield terms">
              <label id="check" class="r2lbl">
                <input 
                type="checkbox" 
                name="check" 
                value="Declared" 
                required/>
                <span class="checkmark"></span>
              </label>
              <p class='regiregip1'>I hereby declare that the above information provided is true and correct.</p>
            </div>
    
            <div class="r2inputfield" required>
              <div data-netlify-recaptcha="true"></div>
            </div>
    
            <div class="r2inputfield btns" id="r2btn">
              <button 
              type="submit" 
              value="Register" class="r2btn" 
              onclick="checkPassword()">Submit</button>

              <button 
              type="reset" 
              value="Reset" 
              class="r2btn">Reset</button>
            </div>
    
          </div>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
      </div>
      </span>
    )
}
export default DamageForm;