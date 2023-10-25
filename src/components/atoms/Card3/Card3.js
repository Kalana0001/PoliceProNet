import './Card3.css';
import img1 from "../../../Images/img1.jpg"
import img2 from "../../../Images/img2.jpg"
import img3 from "../../../Images/img3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card3=()=>{

    return(
        <div class="cdd2container">
    
        <div class="cdd2box-cdd2container">
    
            <div class="cdd2box">
                <img src={img1} alt=""/>
                <h3>Lost Property</h3>
                <p>When you need to report lost or misplaced property.
                            This includes reporting for insurance purposes.</p>
                <a href="/lostproperty" class="cdd2btn  motion-button"><FontAwesomeIcon icon={faArrowRight}/> Go To Link</a>
            </div>
    
            <div class="cdd2box">
                <img src={img2} alt=""/>
                <h3>Theft</h3>
                <p>When your property has been stolen by someone and you wish to make a report.</p>
                <a href="#" class="cdd2btn  motion-button"><FontAwesomeIcon icon={faArrowRight}/> Go To Link</a>
            </div>
    
            <div class="cdd2box">
                <img src={img3} alt=""/>
                <h3>Interntional Damage or Graffiti</h3>
                <p>Supporting adult sexual assault survivors with SARO reporting and police follow-up.</p>
                <a href="#" class="cdd2btn  motion-button"><FontAwesomeIcon icon={faArrowRight}/> Go To Link</a>
            </div>
            
        </div>
    
    </div>
    )
}
export default Card3;