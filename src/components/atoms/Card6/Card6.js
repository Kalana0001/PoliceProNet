import './Card6.css'; 
import Image4 from '../../../Images/Image4.jpg';
import Image5 from '../../../Images/Image5.jpg';
import Image6 from '../../../Images/Image6.jpg';

const Card6=()=>{

    return(
        <div class="cdd6container">
    
        <div class="cdd6box-cdd6container">
    
            <div class="cdd6box">
                <img src={Image4} alt=""/>
                <h3>Police Data Reveals Stark Racial Discrepancies in Social Distancing Enforcement</h3>
                <p>Police Department (NYPD) released six weeks worth of data related to social distancing enforcement.</p>
                
            </div>
    
            <div class="cdd6box">
                <img src={Image5} alt=""/>
                <h3>Police will use more stop and search powers to find weapons, says Met chief</h3>
                <p>The use of a blanket stop and search power in suspected violent areas of London has increased fourfold in the last year.</p>
                
            </div>
    
            <div class="cdd6box">
                <img src={Image6} alt=""/>
                <h3>Hitting the Streets in a Harlem Precinct</h3>
                <p>There’s only one thing wrong with “NYC 22,” the latest CBS cop show.</p>
                
            </div>
            
        </div>
        </div>
    )
}
export default Card6;
