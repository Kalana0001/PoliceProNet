import { useRef } from "react";
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faDashboard, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

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
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href="/home"><FontAwesomeIcon icon={faHome}/>Home</a>
                <a href="/dashboard"><FontAwesomeIcon icon={faDashboard}/>Dashboard</a>
                <a href="/blog"><FontAwesomeIcon icon={faHome}/>Blog</a>
                <a href="/#">About me</a>
                <a href="/register"><FontAwesomeIcon icon={faUser}/>Sign in</a>
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

