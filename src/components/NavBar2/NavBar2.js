import { useRef } from "react";
import './NavBar2.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faDashboard, faHome, faPhone, faRightFromBracket, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import imgg1 from "../../Images/headlogo1.png"

function NavBar2() {
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
                <a href="/" class='navia'><FontAwesomeIcon icon={faHome}/>Home</a>
                <a href="/about" class='navia'><FontAwesomeIcon icon={faUserFriends}/>About US</a>
                <a href="/licensersignin" class='regsignin' ><FontAwesomeIcon icon={faUser}/>licenser</a>
                <a href="/register" class='regsignin' ><FontAwesomeIcon icon={faUser}/>Complainer</a>
                <a href="/policesignin" class='regsignin' ><FontAwesomeIcon icon={faUser}/>Police Officer</a>
                <a href="/adminsignin" class='regsignin' ><FontAwesomeIcon icon={faUser}/>Admin</a>
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

export default NavBar2;

