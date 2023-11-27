import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faDashboard, faHome, faPhone, faRightFromBracket, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import imgg1 from "../../Images/headlogo1.png"
import LogOut from "../../pages/Logout/Logout";

function LicenserNavbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
    <span className="headhead">
        <header>
            <h3><img src={imgg1} className="imggg1" /></h3>
            <nav ref={navRef}>
                <a href="/licenserhome" class='navia'><FontAwesomeIcon icon={faHome}/>Home</a>
                <a href="/licenserdashboard" class='navia'><FontAwesomeIcon icon={faDashboard}/>Dashboard</a>
                <a href="/contactus" class='navia'><FontAwesomeIcon icon={faPhone}/>Contact US</a>
                <LogOut/>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
            <FontAwesomeIcon icon={faClose} />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    </span>
    );
}

export default LicenserNavbar;

