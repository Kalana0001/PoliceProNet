import { useRef } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faDashboard, faHome, faPhone, faRightFromBracket, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import imgg1 from "../../Images/headlogo1.png"

function NavBar() {
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
                <a href="/home" class='navia'><FontAwesomeIcon icon={faHome}/>Home</a>
                <a href="/dashboard" class='navia'><FontAwesomeIcon icon={faDashboard}/>Dashboard</a>
                <a href="/contactus" class='navia'><FontAwesomeIcon icon={faPhone}/>Contact US</a>
                <a href="/registerform" class='regsignout'><FontAwesomeIcon icon={faRightFromBracket}/>Sign out</a>
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

export default NavBar;

