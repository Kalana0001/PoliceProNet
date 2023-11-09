import React, { useState } from 'react';
import  './MinorTrafic.css';
import NavBar from '../../components/NavBar/NavBar';

const MinorTrafic = () => {  
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
  const [selectedOption6, setSelectedOption6] = useState("");
  const [selectedOption7, setSelectedOption7] = useState("");
  
  
  
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleOptionChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleOptionChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };
  
  const handleOptionChange4 = (e) => {
    setSelectedOption4(e.target.value);
  };
  
  const handleOptionChange5 = (e) => {
    setSelectedOption5(e.target.value);
  };
  
  const handleOptionChange6 = (e) => {
    setSelectedOption6(e.target.value);
  };
  
  const handleOptionChange7 = (e) => {
    setSelectedOption7(e.target.value);
  };
return(
<span>
    <NavBar/>
<div className="crash-form">
    <div className="main-header">
        <h1>Minor Traffic Crash</h1><br/>
        <h3>What is a Minor Traffic Crash?</h3>
         
     </div>
    <div className="second-header">
       
        <p>The  Police Force define a traffic crash as minor, and therefore reportable, when: all involved parties exchange particulars, no driver(s) appear to be under the influence of drugs or alcohol, where vehicle(s) require towing as a result of the crash, and no person(s) are injured or seek medical treatment within 24 hours after the crash.</p>

       <br/> <p>Crashes that meet the above criteria for exchanging details and drivers not being under the influence, but result in no person(s) being injured and no vehicle(s) require towing, are no longer reportable to the NSW Police Force. Simply report these crashes to your insurance company.</p><hr/>

    </div>
    <div className="crashform">
         <form>
            <div>
                  <div class="grid-container">
                   <div class="row">
                   <div class="col">
                     <h2>When to report online</h2>
                     <ul>
                        <li>The situation is NOT an emergency or life threatening</li>
                        <li>You are no longer at the scene of the crash</li>
                        <li>No drivers/riders appeared to be under the influence of drugs or alcohol</li>
                        <li>No persons were seriously injured or killed</li>
                        <li>All drivers/riders/owners have exchanged particulars</li>
                        <li>At least one vehicle involved in the crash had to be towed because of the crash</li>
                        <li>You require a NSW Police Event number for insurance purposes</li>
                      
                    </ul>
              </div>
                    <div class="col">
                    <h2>When not to report online</h2>
                    <ul>
                        <li>The situation IS an emergency or life threatening</li>
                        <li>You are still at the scene of the crash</li>
                        <li>A driver/rider appears to be under the influence of drugs or alcohol</li>
                        <li>A person has been seriously injured or killed</li>
                        <li>A driver/rider/owner left the scene without exchanging particulars</li><hr/>
                        </ul>
                      </div>
             </div>
             </div>
             <div>
                <br/> <p>Not all types of reports can be accepted through the SL Police Force Community Portal.</p>
                <br/> <p>In order to determine if the minor traffic crash you wish to report can be reported online, you will need to complete a short questionnaire with yes, no or pick list responses.</p>
                <br/> <p>Your answers will help direct you to the appropriate online form to complete or will refer you to the appropriate service to report the crash.</p>
             </div>
          
                    
                    
             <div>
                 <div>
                      <h3>Minor Traffic Crash Triage Process</h3><hr/>
                        <label for="ask">Were you, or did any of the drivers/riders appear to be under the influence of drugs or alcohol?</label><br/>
                        <label>
                            <input type="radio" value="Yes" checked={selectedOption === "Yes"} onChange={handleOptionChange} /> Yes
                        </label>
                        <label>
                                <input type="radio" value="No" checked={selectedOption === "No"} onChange={handleOptionChange} /> No
                        </label>
                 </div>

                {selectedOption === "Yes" && (
                          <div>
                                <div className='alert-msg'>
                                    <p> This incident cannot be reported online, please attend your local police station. If you need the contact details of your local police station, please call the Police Assistance Line on 131444 (24 hours; 7 days).</p>
                                </div>
                                        
                         </div>
                )}

                {selectedOption === "No" && (
                            <div>
                                <div>
                                  <p>Have all details been exchanged in accordance with the Australian Road Rules, which specify that;</p>
                                  <ul>
                                      <li>The driver/rider must stop at the scene of the crash and exchange details with:</li>
                                      <li>All drivers/riders involved in the crash, the minimum details to be exchanged are; name and address.</li>
                                      <li>Vehicle registration number (if any) and any other information necessary to identify the vehicle (e.g. vehicle make, model and colour, VIN for unregistered vehicles) of all vehicles involved in the crash.</li>
                                      <li>Owner details of any damaged vehicle (registered or unregistered), which did not have a driver. The minimum details to be exchanged are the owner name and address.</li>
                                      <li>Owner of any damaged property (excluding vehicles, e.g. telegraph pole, street sign). The minimum details to be exchanged are the owners name and address.</li>
                                  </ul>
                                    <p><b>NOTE:</b> if the property has no apparent owner, e.g. native animals, stray stock, there is no requirement to exchange details.</p><hr/>

                                  </div>
                                  <div class="rgiisregiall">
                                  <div class="reggiswrapper">
                                  <div class="reggi2form">
                                  <div class="reggi2inputfield">
                                  <div class="custom_select">
                                        <select id="state" name="state" value={selectedOption2} onChange={handleOptionChange2} >  
                                            <option  value="">----Please select---</option>
                                            <option value="Yes2">Yes</option>
                                            <option value="No2">No</option> 
                                        </select>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>

                 {selectedOption2 === "Yes2" && (
                                        <div>
                                                           
                                    <label class="my-1 mr-2" for="inlineFormCusContact">Because of the crash, regardless of the reason, did any of the vehicle/s require towing?</label>
                                    <div class="rgiisregiall">
                                    <div class="reggiswrapper">
                                    <div class="reggi2form">
                                    <div class="reggi2inputfield">
                                    <div class="custom_select">
                                          <select className="custom-select my-1 mr-sm-2" id="damage-photo-y" value={selectedOption3} onChange={handleOptionChange3} >  
                                               <option value="">----Please select---</option>
                                               <option value="Yes3">Yes</option>
                                               <option value="No3">No</option> 
                                           </select>

                 {selectedOption3 === "Yes3" && (
                                         
                                      <div>                         
                                     </div>
                                                 )}
                                                           
                {selectedOption3 === "No3" && (
                                      <div>

                                     </div>
                                                  )}                                                             

                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div> 

                                    <label class="my-1 mr-2" for="inlineFormCusContact">Were any person(s) injured?</label>
                                    <div class="rgiisregiall">
                                    <div class="reggiswrapper">
                                    <div class="reggi2form">
                                    <div class="reggi2inputfield">
                                    <div class="custom_select">        
                                            <select className="custom-select my-1 mr-sm-2" id="damage-photo" value={selectedOption4} onChange={handleOptionChange4} >  
                                                <option value="">----Please select---</option>
                                                <option value="Yes4">Yes</option>
                                                <option value="No4">No</option>
                                            </select>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                 {selectedOption4 === "Yes4" && (
                                     <div>
                                                                  
                                                <p>Were the injured person/s:</p><br/>
                                                                 
                                                    <ul>
                                                        <li>Transported to hospital by ambulance and treated and/or admitted to hospital.</li>
                                                        <li>Treated at the scene of the crash by NSW Ambulance for an injury received during the crash.</li>
                                                            <p><b>NOTE:</b> treatment does not include:</p>
                                                        <li>Examination only by NSW Ambulance or a qualified medical practitioner.</li>
                                                        <li>Recommendations of rest or use of non-prescription medication.</li>
                                                    </ul>
                                    <div class="rgiisregiall">
                                    <div class="reggiswrapper">
                                    <div class="reggi2form">
                                    <div class="reggi2inputfield">
                                    <div class="custom_select">     
                                                <select className="custom-select my-1 mr-sm-2" id="damage-photo" value={selectedOption5} onChange={handleOptionChange5} >  
                                                        <option value="">----Please select---</option>
                                                        <option value="Yes5">Yes</option>
                                                        <option value="No5">No</option>
                                                </select>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                    {selectedOption5=== "Yes5" && (
                                    <div>
                                    <div className='alert-msg'>
                                        <br/> <p>This incident cannot be reported online, as it appears to meet the criteria for a major vehicle crash.</p><br/>
                                        <p>You must report this crash as soon as possible.</p><br/>
                                        <p>Please attend your local police station. If you need the contact details of your local police station, please call the Police Assistance Line on 131444 (24 hours; 7 days).</p><br/>
                                        <p>You will need to report this crash to police before you can commence any claim on CTP Green Slip insurance.</p><br/> 
                                    </div>
                                    </div>
                                                    )}
                    {selectedOption5=== "No5" && (
                                    <div>
                                        <p>Were the injured person/s treated by a qualified medical practitioner?</p><br/>
                                    <div className='text-ali'>
                                        <p>Treatment examples could include undergoing surgical procedures, such as stitches, casts and prescription medication.</p><br/>
                                        <p><b>NOTE:</b> treatment does not include examination only or recommendations of rest or use of non-prescription medication.</p><br/> 
                                    </div>

                                    <div class="rgiisregiall">
                                    <div class="reggiswrapper">
                                    <div class="reggi2form">
                                    <div class="reggi2inputfield">
                                    <div class="custom_select">   
                                        <select className="custom-select my-1 mr-sm-2" id="damage-photo" value={selectedOption6} onChange={handleOptionChange6} >  
                                            <option value="">----Please select---</option>
                                            <option value="Yes6">Yes</option>
                                            <option value="No6">No</option>
                                        </select>

                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                    {selectedOption6=== "Yes6" && (
                                    <div>
                                        <p>Were the injured person/s treated:</p>
                                            <ul>
                                                <li>Within 24 hours of the crash occurring.</li>
                                                <li>More than 24 hours after the crash occurred.</li>
                                            </ul>

                                    <div class="rgiisregiall">
                                    <div class="reggiswrapper">
                                    <div class="reggi2form">
                                    <div class="reggi2inputfield">
                                    <div class="custom_select"> 
                                        <select className="custom-select my-1 mr-sm-2" id="damage-photo" value={selectedOption7} onChange={handleOptionChange7} >  
                                            <option value="">----Please select---</option>
                                            <option value="Yes7">Within 24 hours</option>
                                            <option value="No7">After 24 hours</option>
                                        </select>

                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                    {selectedOption7=== "Yes7" && (

                                    <div>
                                    <div className='alert-msg'>
                                        <p>This incident cannot be reported online, as it appears to meet the criteria for a major vehicle crash.</p><br/>
                                        <p>You must report this crash as soon as possible.</p><br/>
                                        <p>Please attend your local police station. If you need the contact details of your local police station, please call the Police Assistance Line on 131444 (24 hours; 7 days).</p><br/>
                                        <p>You will need to report this crash to police before you can commence any claim on CTP Green Slip insurance.</p><br/> 
                                    </div>                         
                                    </div>
                                                    )}

                    {selectedOption7=== "No7" && (
                                    <div>
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                                    </div>
                                    </div>
                                                    )}

                                    </div>
                                                    )}
                    {selectedOption6=== "No6" && (
                                    <div><br/>                              
                                    <div class="col-auto">
                                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                                    </div>                         
                                    </div>
                                                    )}

                                                        
                                    </div>
                                                    )}
                                                              
                                    </div>
                                                   )}

                    {selectedOption4=== "No4" && (
                                    <div>
                                                                
                                        <div class="col-auto">
                                            <button type="submit" class="btn btn-primary mb-3">Submit</button>
                                        </div>
                                    </div>
                                                        )}

                                    </div>
                                        )}

                    {selectedOption2=== "No2" && (
                                    <div>
                                        <div className='alert-msg'>
                                            <p>This incident cannot be reported online, please attend your local police station. If you need the contact details of your local police station, please call the Police Assistance Line on 131444 (24 hours; 7 days).</p>
                                        </div>
                                        </div>
                                        )}
                                 </div>
                               )}
                    </div>  
                </div>   
            </form>    
        </div>      
    </div>
    </span>
   );
   }
   export default MinorTrafic;