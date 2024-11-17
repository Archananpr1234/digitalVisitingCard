import React from "react";
import './Services.css'
import { CiBasketball } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineSpeed } from "react-icons/md";
import { Element } from 'react-scroll';
import { Link } from "react-scroll";

const Services = () => {
    return (
        <Element name="services" className="services-container">
            <h1>SERVICES</h1>
            <div className="underline"></div> {/* Styled underline */}
            <p className="heading-service-para">
                Our digital business card platform makes designing a card simple, convenient, and reliable.
            </p>
            <div className="service-card-container">
                <div className="service-card">
                    <div className="card-icon">
                        <CiBasketball className="icon" />
                    </div>
                    <h2>
                        <Link to="home" smooth={true} duration={500} className="service-brand">
                            Digital Visiting Card
                        </Link>
                    </h2>
                    <p>Still using old boring visiting cards? Now it's time to change. Use our Online Visiting Card service and GO DIGITAL.</p>
                </div>
                <div className="service-card">
                    <div className="card-icon">
                        <CgFileDocument className="icon" />
                    </div>
                    <h2>
                        <Link to="home" smooth={true} duration={500} className="service-brand">
                            Website Design / Development
                        </Link>
                    </h2>
                    <p>Design your own Business/Professional website in a Simple and Easy way.</p>
                </div>
                <div className="service-card">
                    <div className="card-icon">
                        <MdOutlineSpeed className="icon" />
                    </div>
                    <h2>
                        <Link to="home" smooth={true} duration={500} className="service-brand">
                            Digital Marketing
                        </Link>
                    </h2>
                    <p>Advertise online and expand your business.</p>
                </div>
            </div>
        </Element>
    );
}

export default Services;
