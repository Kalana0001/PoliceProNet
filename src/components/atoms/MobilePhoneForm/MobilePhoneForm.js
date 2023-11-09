import './MobilePhoneForm.css';

const MobilePhoneForm=()=>{

    return(
<div class="rgii2regiall">
<div class="reggi2wrapper">
<span class="reggi2big-circle" ></span>
<div class="reggi2title">
</div>
<form action="POST" data-netlify="true">
  <div class="reggi2form">
  
    <div class="reggi2title">
    Mobile phone specific questions
   </div>
   <p className='reggi2p1'>Please note:</p>
   <p className='reggi2p2'>*If the following four fields are incomplete, the loss report will not be processed.</p>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Phone Brand:</label>
      <input type="text" class="input" id="name" name="pbrand" placeholder="Enter Phone Brand" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter Phone Brand" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*15 digit IMEI number:</label>
      <input type="text" class="input" id="name" name="iminum" placeholder="Enter IMEI number" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter IMEI number" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Phone model:</label>
      <input type="text" class="input" id="name" name="pmodel" placeholder="Enter Phone model" maxlength="30"
        pattern="[7-9]{1}[0-9]{9}" title="Enter Phone model" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Phone Number:</label>
      <input type="tel" class="input" id="name" name="wpnum" placeholder="Enter your phone number" maxlength="10"
        pattern="[A-Za-z]{1,32}" title="Enter your phone number" required/>
    </div>

    <p className='reggi2p3'>Description</p>
   <p className='reggi2p4'>If you are reporting the loss of a mobile phone, please include the following information:</p>
   
   <p className='reggi2p5'><ul className='reggiul1'>
    <li>Your phone provider (e.g. Vodafone, O2, etc)</li>
    <li>The number of the lost phone</li>
    <li>Any distinguishing details such as case, colour, marks, etc</li>
    </ul></p>
   <p className='reggi2p6'>If appropriate please include make, model, colour, 
   serial numbers and any other distinguishing features to the property e.g. scratches.</p>
   <p className='reggi2p7'>Lost mobile phones can also be reported via the website 
    <a href='www.ineed.police.lk/'>www.ineed.police.lk/</a>where it will be linked to a national database.</p>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">Short Description:</label>
      <textarea class="textarea" name="phdisc" id="" cols="30" rows="5" placeholder="Enter Short Description"
        pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$" maxlength="100" required></textarea>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Phone Color:</label>
      <input type="text" class="input" id="name" name="phcolor" placeholder="Enter Phone Color" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter Phone Color" required/>
    </div>

    <div class="reggi2inputfield">
      <label for="" class="reggi2lbl">*Date of lost</label>
      <input type="date" class="input" name="phdlost" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">Lost State:</label>
      <input type="text" class="input" id="name" name="lname" placeholder="Enter lost state" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter only alphabets" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">Email Address</label>
      <input type="email" class="input" name="phemail" placeholder="Enter your email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" required/>
    </div>

    <p id="reggi2message"></p>

    <div class="reggi2inputfield terms">
      <label id="check" class="reggi2lbl">
        <input type="checkbox" name="check" value="Declared" required/>
        <span class="checkmark"></span>
      </label>
      <p class='regiregip1'>I hereby declare that the above information provided is true and correct.</p>
    </div>

    <div class="reggi2inputfield" required>
      <div data-netlify-recaptcha="true"></div>
    </div>

    <div class="reggi2inputfield btns" id="regii2btn">
      <button type="submit" value="Register" class="regii2btn" onclick="checkPassword()">Submit</button>
      <button type="reset" value="Reset" class="regii2btn">Reset</button>
    </div>

  </div>
</form>
</div>
</div>
    )
}
export default MobilePhoneForm;