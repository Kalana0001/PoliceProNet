
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialIcon.css';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcon=()=>{

    return(
        <span>
            <div class="contsocial-icons">
              <a href="#">
                <i class="fab fa-facebook-f" id="sicon" ><FontAwesomeIcon icon={faFacebook}/></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter" id="sicon"><FontAwesomeIcon icon={faTwitter}/></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram" id="sicon"><FontAwesomeIcon icon={faInstagram}/></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in" id="sicon"><FontAwesomeIcon icon={faLinkedin}/></i>
              </a>
            </div>
        </span>
    )
};
export default SocialIcon;