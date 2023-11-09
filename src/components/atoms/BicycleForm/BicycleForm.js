import './BicycleForm.css';

const BicycleForm=()=>{

    return(
<div class="rgii2regiall">
<div class="reggi2wrapper">
<span class="reggi2big-circle" ></span>
<div class="reggi2title">
</div>
<form action="POST" data-netlify="true">
  <div class="reggi2form">
  
    <div class="reggi2title">
    Bicycle specific questions
   </div>
   <p className='reggi2p1'>Please note:</p>
   <p className='reggi2p2'>*If the following four fields are incomplete, the loss report will not be processed.</p>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Motorcycle brand:</label>
      <input type="text" class="input" id="name" name="mbrand" placeholder="Enter Motorcycle brand" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter Motorcycle brand" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Number Plate:</label>
      <input type="text" class="input" id="name" name="nplate" placeholder="Enter Number Plate" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter Number Plate" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Chassis number:</label>
      <input type="text" class="input" id="name" name="cnum" placeholder="Enter Chassis number" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter Chassis number" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">*Color:</label>
      <input type="text" class="input" id="name" name="mcolor" placeholder="Enter Color" maxlength="30"
        pattern="[A-Za-z]{1,32}" title="Enter Color" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">Short Description:</label>
      <textarea class="textarea" name="mdiscrip" id="" cols="30" rows="5" placeholder="Enter Short Discription"
        pattern="^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$" maxlength="100" required></textarea>
    </div>


    <div class="reggi2inputfield">
      <label for="" class="reggi2lbl">Date of Lost</label>
      <input type="date" class="input" name="mdlost" required/>
    </div>

    <div class="reggi2inputfield">
      <label class="reggi2lbl">Lost State:</label>
      <input type="text" class="input" name="mlstate" placeholder="Enter Lost state"
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
export default BicycleForm;