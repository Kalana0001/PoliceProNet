import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faDashboard, faHome, faPhone, faRightFromBracket, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import imgg1 from "../../Images/headlogo1.png"
import LogOut from "../../pages/Logout/Logout";
import './AdminNavabar.css'

function AdminNavabar() {
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
               <p className="adminlogout"> <LogOut/></p>
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

export default AdminNavabar;

