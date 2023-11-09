import NavBar from '../../components/NavBar/NavBar';
import BicycleForm from '../../components/atoms/BicycleForm/BicycleForm';
import Jewelery from '../../components/atoms/JeweleryFrom/Jewelery';
import MobilePhoneForm from '../../components/atoms/MobilePhoneForm/MobilePhoneForm';
import OtherForm from '../../components/atoms/OtherForm/OtherForm';
import WalletForm from '../../components/atoms/WalletForm/WalletForm';
import './LostProperty.css';
import React, { useState } from 'react';

const LostProperty=()=>{
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
    return(
      <span>
        <NavBar/>
        <div class="popertycontainer">
            <div className="property-form">
                <h2 className='propert-head'>Police Lost Property Form</h2>
            <div className="propertyform-para">

                <div className='lostpara1'>
                     <p>You should use this form to make a report of lost property to the Police Service of SriLanka.</p>
                    <p><b>If you have lost a vehicle or animal please do not use this form - call 119 for advice.</b></p>
                      <p><b> If you have lost a bank card please contact your bank or service provider.</b></p>
                    <p><b>If you have lost a Mobile Phone please contact your network provider then complete the form below.</b> </p>
               </div>

                <p className='lostp1'>
                    If you don't have an IMEI number (required for lost mobile phones only) there is no point in reporting your phone as lost as it cannot be fully identified. 
                    Please have your IMEI number ready before completing the form.
                 </p>
                <p className='lostp1'>
                     The IMEI number can be obtained from the Network Provider of the phone or from the original packaging.
                </p>
                <p className='lostp1'><b> Found Property is retained for three months from Date of Finding by Police SriLanka - Please report your loss timeously.</b>
                 </p><hr/>
                 <p><b>
                    Lost property and GDPR</b>
                 </p>
                 <p className='lostp1'>
                     By providing this information, you consent to Police Scotland using it for the purposes of returning lost property to its owner. 
                     We will search records of found property for items matching the description you have given, and if there is a match, we will contact you as soon as possible.
                      If no match is identified, a Loss Report will be raised and posted to you.
                </p>      
                <p className='lostp1'>
                     The information above will be used solely for this purpose. 
                     Lost and found property records are retained for one year from the date of the last action taken for each item or report. 
                     Under the Data Protection Act, you have the right to withdraw your consent at any time – to do this, please call 119. 
                     More information about how Police SriLanka processes your personal data is available on our website.
                </p><hr/>
                <p className='lostp1'>
                 All fields marked with<i> (required)</i> are mandatory and must be filled in.
                </p>
                <p className='lostp1'>
                 Some more fields may become mandatory depending on what options you select.
                </p>
            </div>
      </div>
          <div class="rgiisregiall">
          <div class="reggiswrapper">
            <form action="POST" data-netlify="true">
              <div class="reggi2form">
              <div class="reggi2inputfield">
                <label class="reggi2lbl">* What have you lost</label>
                <div class="custom_select">
                  <select id="state" name="state" value={selectedValue} onChange={handleDropdownChange} required>
                    <option value="">--Select your lost item--</option>
                    <option value="Bicycle">Bicycle</option>
                    <option value="Jewelery">Jewelery</option>
                    <option value="Wallet">Wallet</option>
                    <option value="mobilephone">Mobile Phone</option>
                    <option value="Other">Other</option>
                </select>
              </div>
            </div>
            </div>
          </form>
        </div>
        </div>

        {selectedValue === 'mobilephone' && (<MobilePhoneForm/>)}
        {selectedValue === 'Bicycle' && (<BicycleForm/>)}
        {selectedValue === 'Other' && (<OtherForm/>)}
        {selectedValue === 'Wallet' && (<WalletForm/>)}
        {selectedValue === 'Jewelery' && (<Jewelery/>)}

    </div>
    </span>
    )
}
export default LostProperty;