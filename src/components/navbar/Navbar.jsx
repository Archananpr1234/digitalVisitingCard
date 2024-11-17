import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import LoginForm from "../login/LoginForm";

const Navbar = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
    const navbarHeight = -80; // Adjust this value based on your navbar height

    const loginModel = () => {
        setIsModelOpen(true);
    };

    const closeModel = (value) => {
        setIsModelOpen(value);
    };

    const handleNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-container">
            <div className="navbar-item-left">
                <Link to="home" smooth={true} duration={500} offset={navbarHeight} className="navbar-brand">
                    Digital Visiting Card
                </Link>
            </div>
            <div className="menu-icon" onClick={handleNavbar}>
                &#9776;
            </div>
            <div className={`navbar-item-right ${isMenuOpen ? "active" : ""}`} id="navbar-item-right">
                {/* Close button inside the menu */}
                <button className="close-button" onClick={handleNavbar}>
                    &#10005;
                </button>
                <ul>
                    <li><Link to="home" smooth={true} duration={500} offset={navbarHeight} activeClass="active" onClick={handleNavbar}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} offset={navbarHeight} activeClass="active" onClick={handleNavbar}>About</Link></li>
                    <li><Link to="services" smooth={true} duration={500} offset={navbarHeight} activeClass="active" onClick={handleNavbar}>Services</Link></li>
                    <li><Link to="features" smooth={true} duration={500} offset={navbarHeight} activeClass="active" onClick={handleNavbar}>Features</Link></li>
                    <li><Link to="pricing" smooth={true} duration={500} offset={navbarHeight} activeClass="active" onClick={handleNavbar}>Pricing</Link></li>
                    <li><Link to="demo" smooth={true} duration={500} offset={navbarHeight} activeClass="active" onClick={handleNavbar}>Demo Videos</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} offset={navbarHeight} activeClass="active" onClick={handleNavbar}>Contact</Link></li>
                    <button className="login-button" onClick={loginModel}>Login</button>
                </ul>
            </div>
            {isModelOpen && <LoginForm isModel={closeModel} />}
        </div>
    );
};

export default Navbar;