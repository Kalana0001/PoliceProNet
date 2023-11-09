import './RegisterForm.css';
import React, { useState } from 'react';
import { supabase } from '../../Config/SupaBaseClient';
import NavBar from '../../components/NavBar/NavBar';


const RegisterForm=()=>{

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
        <div class="r2wrapper">
        <span class="regbig-circle" ></span>
        <div class="r2title">User Registration Form
        </div>
        <form action="POST" data-netlify="true" id="myForm" onSubmit={handleSubmit}>
          <div class="r2form">
    
            <div class="r2inputfield">
              <label class="r2lbl">*First Name</label>

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
              <label class="r2lbl">*Last Name</label>
              <input 
              type="text" 
              class="input"  
              placeholder="Enter last name" 
              maxlength="30"
              pattern="[A-Za-z]{1,32}" 
              title="Enter only alphabets"
              id='Lname'
              value={Lname}
              onChange={(e)=> setLname(e.target.value)}
              required/>
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
              <label class="r2lbl">*Province</label>
              <div class="custom_select">
                <select id="Province" name="Province"  onChange={(e)=> setProvince(e.target.value)}  required>
                  <option value="">--Select your province--</option>
                  <option value="Central Province">Central Province</option>
                  <option value="Eastern Province">Eastern Province</option>
                  <option value="North Central Province">North Central Province</option>
                  <option value="Northern Province">Northern Province</option>
                  <option value="North Western Province">North Western Province</option>
                  <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
                  <option value="Southern Province">Southern Province</option>
                  <option value="Uva Province">Uva Province</option>
                  <option value="Western Province">Western Province</option>
                </select>
              </div>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">*State</label>
              <div class="custom_select">
                <select id="State" name="State"  onChange={(e)=> setState(e.target.value)} required>
                  <option value="">--Select your state--</option>
                  <option value="Ampara">Ampara</option>
                  <option value="Anuradhapura">Anuradhapura</option>
                  <option value="Badulla">Badulla</option>
                  <option value="Batticloa">Batticloa</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Galle">Galle</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Hambantota">Hambantota</option>
                  <option value="Jafna">Jafna</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Kegalle">Kegalle</option>
                  <option value="Kilinochchi">Kilinochchi</option>
                  <option value="Kurunegala">Kurunegala</option>
                  <option value="Mannar">Mannar</option>
                  <option value="Matale">Matale</option>
                  <option value="Matara">Matara</option>
                  <option value="Monaragala">Monaragala</option>
                  <option value="Mullaitivu">Mullaitivu</option>
                  <option value="Nuwara Eliya">Nuwara Eliya</option>
                  <option value="Polonnaruwa">Polonnaruwa</option>
                  <option value="Puttalam">Puttalam</option>
                  <option value="Ratnapura">Ratnapura</option>
                  <option value="Trincomalee">Trincomalee</option>
                  <option value="Vauniya">Vauniya</option>
                </select>
              </div>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">Postal Code</label>
              <input 
              type="text" 
              class="input" 
              placeholder="Enter your postal code" 
              maxlength="6"
              required
              id='Postal_Code'
              value={Postal_Code}
              onChange={(e)=> setPcode(e.target.value)}
              />
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
export default RegisterForm;