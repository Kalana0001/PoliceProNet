import './OtherForm.css';

const OtherForm=()=>{

    return(
<div class="rgii2regiall">
<div class="reggi2wrapper">
<span class="reggi2big-circle" ></span>
<div class="reggi2title">
</div>
<form action="POST" data-netlify="true">
  <div class="reggi2form">
  
    <div class="reggi2title">
    Other Properties
   </div>
   <p className='reggi2p1'>Please note:</p>
   <p className='reggi2p2'>*If the following four fields are incomplete, the loss report will not be processed.</p>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Item:</label>
      <input type="text" class="input" id="name" name="oiname" placeholder="Enter item name" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter item name" required/>
    </div>

    <p className='reggi2p3'>Description</p>
   <p className='reggi2p4'>Provide a brief description of about your missing items.</p>
   
   <p className='reggi2p6'>If appropriate please include make, model, colour, 
   serial numbers and any other distinguishing features to the property e.g. scratches.</p>
   <p className='reggi2p7'>Lost mobile phones can also be reported via the website 
    <a href='www.ineed.police.lk/'>www.ineed.police.lk/</a>where it will be linked to a national database.</p>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Short Description:</label>
      <textarea class="textarea" name="osdisc" id="" cols="30" rows="5" placeholder="Enter Short Description"
        pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$" maxlength="100" required></textarea>
    </div>

    <div class="reggi2inputfield">
      <label for="" class="reggi2lbl">Date of Lost</label>
      <input type="date" class="input" name="odlost" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">Lost State:</label>
      <input type="text" class="input" id="olstate" name="lname" placeholder="Enter Lost State" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter Lost State" required/>
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
export default OtherForm;