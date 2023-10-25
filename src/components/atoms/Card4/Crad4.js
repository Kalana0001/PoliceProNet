import './Card4.css';
import img4 from "../../../Images/img4.jpg"
import img5 from "../../../Images/img5.jpg"
import img7 from "../../../Images/img7.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card4=()=>{

    return(
        <div class="cdd2container">
    
        <div class="cdd2box-cdd2container">
    
            <div class="cdd2box">
                <img src={img4} alt=""/>
                <h3> Minor Traffic  </h3>
                <p> When your property has been damage or crash by someone and you wish to make a report.</p>
                <a href="#" class="cdd2btn  motion-button"><FontAwesomeIcon icon={faArrowRight}/> Go To Link</a>
            </div>
    
            <div class="cdd2box">
                <img src={img5} alt=""/>
                <h3>Adult Sexual Assault</h3>
                <p>Supporting adult sexual assault survivors with SARO reporting and police follow-up.</p>
                <a href="#" class="cdd2btn  motion-button"><FontAwesomeIcon icon={faArrowRight}/> Go To Link</a>
            </div>
    
            <div class="cdd2box">
                <img src={img7} alt=""/>
                <h3>License's hold details</h3>
                <p>If your license was unfairly suspended or put on hold, and you need to report or seek clarification.</p>
                <a href="#" class="cdd2btn  motion-button"><FontAwesomeIcon icon={faArrowRight}/> Go To Link</a>
            </div>
            
        </div>
    
    </div>
    )
}
export default Card4;