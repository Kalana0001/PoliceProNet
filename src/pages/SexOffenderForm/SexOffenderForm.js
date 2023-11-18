
import React, { useState } from 'react';
import { supabase } from '../../Config/SupaBaseClient';
import NavBar from '../../components/NavBar/NavBar';
import './SexOffenderForm.css'


const SexOffenderForm=()=>{

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
        <div className='propert-head'>
                   <h2>Sex Offender Community Disclosure Scheme</h2>
             </div>
            < div className='adullt-para'>
             <div className="propertyform-para">
                      <p className='adup1'>The Community Disclosure Scheme is also known as the 'Keeping Children Safe Scheme' and is a way for people to ask the Police if someone is a registered child sex offender to ensure the safety of a child.
                         For more information please visit the </p>
                        <p className='adup2'><a href="https://childprotection.gov.lk/index.php/en/what-we-do/1929-call-centre-helpline" 
                         alt=" www.childprotection.gov.lk">" www.childprotection.gov.lk"</a></p>
                        <p> You can use this form to make an application:</p>
             <ul className='adup1'>
                <p> About your own child or children.</p>
                <p> About someone else's child or children.</p>
            </ul >
            <p className='adup1'>Any disclosure resulting from an application will only be provided to the person responsible for the child concerned, for example a Parent, Carer or Legal Guardian.</p>
            <p className='adup1'>Application forms are monitored Monday-Friday 08:00-16:00 hours.</p>
            <p className='adup1'><b>If you have any concerns about a child's safety or well-being please contact your local social work services or if you feel a child is at immediate risk or in danger please call 999 to speak to a police operator.</b></p>
            <p className='adup1'>All fields marked with<i> (required)</i> are mandatory and must be filled in.</p>
             <p className='adup1'>The person you are about to enquire about, do you feel that this person presents an immediate risk to child(ren)?</p>
          </div>
          </div>
          

        </div>
        <div class="adultwrapper">
        <span class="regbig-circle" ></span>
        <div class="r2title">Sex Offender Community Disclosure Scheme
        </div>
        <form action="POST" data-netlify="true" id="myForm" onSubmit={handleSubmit}>
          <div class="r2form">

          <div class="r2inputfield">
              <label class="r2lbl" >*Type</label>
              <div class="custom_select" >
                <select id="Province" name="Province"  onChange={(e)=> setProvince(e.target.value)}  required>
                  <option value="">--Select your province--</option>
                  <option value="Adult">Adult</option>
                  <option value="Child">Child</option>
                  <option value="Girl/Lady">Girl/Lady</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div class="r2inputfield">
              <label class="r2lbl">*Full Name</label>
              <input 
              type="text" 
              class="input"  
              placeholder="Enter Full name" 
              maxlength="30"
              title="Enter only alphabets"
              id='Full_Name'
              value={Full_Name}
              onChange={(e)=> setFullName(e.target.value)}
              required/>
            </div>
    
            <div class="r2inputfield" id="Gender" onChange={(e)=> setGender(e.target.value)}>
              <label for="" class="r2lbl">*Gender</label>

              <input 
              type="radio" 
              name="gender" 
              id="radio" 
              value="Male"/>
              <p class='regisex'>Male</p>

              <input 
              type="radio" 
              name="gender" 
              id="radio" 
              value="Female"
              /><p class='regisex'>Female</p>
            </div>
    
            <div class="r2inputfield">
              <label for="" class="r2lbl">*Age</label>
              <input 
              type="text" 
              class="input" 
              placeholder="Enter your age" 
              maxlength="2" 
              pattern="^[0-9]{2}$"
              required  
              title="Enter numbers only"
              id='Age'
              value={Age}
              onChange={(e)=> setAge(e.target.value)}
              />
            </div>
    
            <div class="r2inputfield">
              <label for="" class="r2lbl">*Date of Birth</label>
              <input 
              type="date" 
              class="input" 
              required
              id='DOB'
              value={DOB}
              onChange={(e)=> setDOB(e.target.value)}
              />
            </div>
    
            <p id="message"></p>
    
            <div class="r2inputfield">
              <label for="" class="r2lbl">*NIC No</label>

              <input 
              type="tel" 
              class="input"   
              placeholder="Enter your NIC number" 
              title="Please enter valid NIC number"
              id='NIC'
              value={NIC}
              onChange={(e)=> setNIC(e.target.value)}
              />
            </div>

            <div class="r2inputfield">
              <label for="" class="r2lbl">*Phone Number</label>

              <input 
              type="text" 
              class="input"  
              maxlength="10" 
              placeholder="Enter your phone number" 
              title="Please enter valid phone number"
              id='Contact_No'
              value={Contact_No}
              onChange={(e)=> setContact(e.target.value)}
              />
            </div>
            <div class="r2inputfield">
              <label class="r2lbl">*Relationship To Applicant:</label>
              <input 
              type="text" 
              class="input"  
              placeholder="Enter Relationship To Applicant" 
              maxlength="30"
              title="Enter only alphabets"
              id='Full_Name'
              value={Full_Name}
              onChange={(e)=> setFullName(e.target.value)}
              required/>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">*Address</label>
              <textarea 
              class="textarea" 
              cols="30" 
              rows="5" 
              placeholder="Enter your address"
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
              <label class="r2lbl">*Additional Information:</label>
              <textarea 
              class="textarea" 
              cols="30" 
              rows="5" 
              placeholder="Enter your Additional Information"
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
export default SexOffenderForm;