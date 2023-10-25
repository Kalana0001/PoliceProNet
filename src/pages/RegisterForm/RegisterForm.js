import './RegisterForm.css';

const RegisterForm=()=>{

    return(
        <div class="rgiregiall">
        <div class="r2wrapper">
        <span class="regbig-circle" ></span>
        <div class="r2title">User Registration Form
        </div>
        <form action="POST" data-netlify="true">
          <div class="r2form">
    
            <div class="r2inputfield">
              <label class="r2lbl">First Name</label>
              <input type="text" class="input" id="name" name="fname" placeholder="Enter first name" maxlength="30"
                pattern="[A-Za-z]{1,32}" title="Enter only alphabets" required/>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">Last Name</label>
              <input type="text" class="input" id="name" name="lname" placeholder="Enter last name" maxlength="30"
                pattern="[A-Za-z]{1,32}" title="Enter only alphabets" required/>
            </div>
    
            <div class="r2inputfield" id="gender">
              <label for="" class="r2lbl">Gender</label>
              <input type="radio" name="gender" id="radio" value="Male"/><p class='regisex'>Male</p>
              <input type="radio" name="gender" id="radio" value="Female"/><p class='regisex'>Female</p>
            </div>
    
            <div class="r2inputfield">
              <label for="" class="r2lbl">Age</label>
              <input type="text" class="input" name="age" placeholder="Enter your age" maxlength="2" pattern="^[0-9]{2}$"
                required  title="Enter numbers only"/>
            </div>
    
            <div class="r2inputfield">
              <label for="" class="r2lbl">Date of Birth</label>
              <input type="date" class="input" name="dob" required/>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">Email Address</label>
              <input type="email" class="input" name="email" placeholder="Enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" required/>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">Password</label>
              <input type="password" class="input" id="password" name="" placeholder="Enter your password min 8 characters"
                autocomplete="off" onkeyup='check()' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                maxlength="100" minlength="8" required/>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">Confirm Password</label>
              <input type="password" onkeyup='check()' class="input" id="confirm-password" name=""
                placeholder="Confirm password" autocomplete="off" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                maxlength="100" minlength="8" required/>
            </div>
    
            <p id="message"></p>
    
            <div class="r2inputfield">
              <label for="" class="r2lbl">Phone Number</label>
              <div class="custom-select" id="phone-codes">
                <select id="phone-code">
                  <option value="+91">+91</option>
                </select>
              </div>
              <input type="tel" class="input" name="phone-number" maxlength="10" id="phone-number"
                placeholder="Enter your phone number" pattern="[7-9]{1}[0-9]{9}" title="Please enter valid phone number"/>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">Address</label>
              <textarea class="textarea" name="address" id="" cols="30" rows="5" placeholder="Enter your address"
                pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$" maxlength="100" required></textarea>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">State</label>
              <div class="custom_select">
                <select id="state" name="state" required>
                  <option value="">--Select your state--</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">Pin Code</label>
              <input type="text" class="input" name="pincode" placeholder="Enter your pin code" maxlength="6"
                pattern="^[0-9]{6}$" required/>
            </div>
    
            <div class="r2inputfield" id="hobbies" >
              <label for="" class="r2lbl">Hobbies</label>
              <div class="hobbies" >
                <input type="checkbox" name="Hobbies" id="" value="Music"/>
                <label for="">Music</label>
                <input type="checkbox" name="Hobbies" id="" value="Movies"/>
                <label for="">Movies</label>
                <input type="checkbox" name="Hobbies" id="" value="Sports"/>
                <label for="">Sports</label>
                <input type="checkbox" name="Hobbies" id="" value="Travel"/>
                <label for="">Travel</label>
              </div>
            </div>
    
            <div class="r2inputfield">
              <label class="r2lbl">Upload Photo</label><p id="file-size">*Max size 100kb.</p>
              <input type="file" name="myfile" id="myfile" placeholder="Upload your photo" rows="7" required />
              
            </div>
    
            <div class="r2inputfield terms">
              <label id="check" class="r2lbl">
                <input type="checkbox" name="check" value="Declared" required/>
                <span class="checkmark"></span>
              </label>
              <p class='regiregip1'>I hereby declare that the above information provided is true and correct.</p>
            </div>
    
            <div class="r2inputfield" required>
              <div data-netlify-recaptcha="true"></div>
            </div>
    
            <div class="r2inputfield btns" id="r2btn">
              <button type="submit" value="Register" class="r2btn" onclick="checkPassword()">Register</button>
              <button type="reset" value="Reset" class="r2btn">Reset</button>
            </div>
    
          </div>
        </form>
      </div>
          </div>
    )
}
export default RegisterForm;