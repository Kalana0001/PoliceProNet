import { faFacebook, faInstagram, faLinkedin, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo1 from '../../Images/logo11.png';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createEvent } from '@testing-library/react';
import { faArrowAltCircleRight,faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import SocialIcon from '../atoms/SocialIcon/SocialIcon';

const Footer=()=>{

    return(
        <footer>
        <div class="fcontain">
            <div class="frow">
                  <div class="ffcol" id="fcompany">
                      <img src={logo1} alt="" class="flogo"/>
                      <p>
                        
                      "PoliceProNet: Web platform streamlines law enforcement, enhances public safety, 
                      and offers user-specific tools for efficient management and responsiveness."
                      </p>
                      <SocialIcon/>
                  </div>


                  <div class="ffcol" id="fservice">
                     <h3>Services</h3>
                     <div class="flink">
                        <a href="#">Illustration</a>
                        <a href="#">Creatives</a>
                        <a href="#">Poster Design</a>
                        <a href="#">Card Design</a>
                     </div>
                  </div>

                  <div class="ffcol" id="useful-links">
                     <h3>Links</h3>
                     <div class="flink">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Our Policy</a>
                        <a href="#">Help</a>
                     </div>
                  </div>

                  <div class="ffcol" id="contact">
                      <h3>Contact</h3>
                      <div class="contact-details">
                         <i class="fa fa-location"><FontAwesomeIcon icon={faLocation}/></i>
                         <p>331 Olcott Mawatha, 6th Floor, <br/> Colombo</p>
                      </div>
                      <div class="contact-details">
                         <i class="fa fa-phone"><FontAwesomeIcon icon={faPhone}/></i>
                         <p>+ 01 234 567 88</p>
                      </div>
                      <div class="contact-details">
                         <i class="fa fa-phone"><FontAwesomeIcon icon={faEnvelope}/></i>
                         <p class="footemail"> policepronet@pubsec.gov.lk</p>
                      </div>
                  </div>
            </div>

            <div class="frow">
                  <div class="ffform">
                    <form action="">
                        <input class="ffinput" type="text" placeholder="Email here..."/>
                        <button class="fffbtn"><i class="footteleicon"><FontAwesomeIcon class="fabtnicon" icon={faTelegram}/></i></button>
                    </form>
                  </div>
            </div>
            <hr class="bottomline"/>
        </div>
        <div class="copyright">
            Copyright © 2023 PoliceProNet | All Rights Reserved by [PoliceProNet], Inc.
        </div>
     </footer>
    )
};
export default Footer;