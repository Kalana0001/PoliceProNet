import React from 'react';
import './Card5.css'; // Ensure the correct CSS file is imported
import Image1 from '../../../Images/Image1.jpg';
import Image2 from '../../../Images/Image2.jpg';
import Image3 from '../../../Images/Image3.jpg';

const Card5=()=>{

  return(
      <div class="cdd5container">
  
      <div class="cdd5box-cdd5container">
  
          <div class="cdd5box">
              <img src={Image2} alt=""/>
              <h3>Police department gains three new officers</h3>
              <p> Madison Police Department welcomed three new officers into the force during a swearing-in ceremony in January..</p>
    
          </div>
  
          <div class="cdd5box">
              <img src={Image1} alt=""/>
              <h3>Serious assaults against Met Police officers up 95% as force mourns sergeant</h3>
              <p>Assaults against Metropolitan Police officers are becoming increasingly violent, as well as more frequent, an investigation has found.</p>
              
          </div>
  
          <div class="cdd5box">
              <img src={Image3} alt=""/>
              <h3>Review of Seattle police shows promise of reform</h3>
              <p>Federally mandated changes in the Seattle Police Department led to a stunning drop in how often officers use serious force</p>
              
          </div>
          
      </div>
  
  </div>
  )
}
export default Card5;