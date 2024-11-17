import React, { useState } from "react";
import { GoCheck } from "react-icons/go";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../register/RegisterForm";
import './Pricing.css'
import { Element } from 'react-scroll';
import { Link } from "react-scroll";


const Pricing = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [regiHeading, setRegiHeading] = useState('');


    const closeModel = (value) => {
        setIsModelOpen(value);
        setIsLogin(value)
    }


    const handleCheckLogin = (value) => {
        setIsLogin(value);
        setIsModelOpen(false);
    }

    const handleClickButton = (value, str) => {
        setIsModelOpen(value);
        setRegiHeading(str)
    }
    return (

        <Element name="pricing" className="pricing-container">
            <h1>Pricing</h1>
            <hr className="underline" />
            <div className="pricing-card-Container">
                <div className="pricing-card">
                    <h3>One Business Card endless possibilites</h3>
                    <b>1000 INR</b>
                    <p>( For Lifetime )</p>
                    <b>Offer Valid till 30-Sep-2020</b>
                    <button className="pricing-card-btn" onClick={() => handleClickButton(true, 'Create Business Card')}>Create Business Card</button>

                    <ul>
                        <li><span>< GoCheck /></span>Share cards with everyone</li>
                        <li><span>< GoCheck /></span>Update card Unlimited times</li>
                        <li><span>< GoCheck /></span>Profile Photo / Company Logo</li>
                        <li><span>< GoCheck /></span>Name & Contact Number</li>
                        <li><span>< GoCheck /></span>Social Media Links</li>
                        <li><span>< GoCheck /></span>Whatsapp Chat without saving</li>
                        <li><span>< GoCheck /></span>Email Instantly</li>
                        <li><span>< GoCheck /></span>Call Now in a Touch</li>
                        <li><span>< GoCheck /></span>Website in a Click</li>
                        <li><span>< GoCheck /></span>Google Map Link</li>
                        <li><span>< GoCheck /></span>Payment Section</li>
                        <li><span>< GoCheck /></span>Your Products / Services</li>
                        <li><span>< GoCheck /></span>Photos in Gallery</li>
                        <li><span>< GoCheck /></span>Youtube Video Gallery</li>
                        <li><span>< GoCheck /></span>Product with images</li>
                        <li><span>< GoCheck /></span>Contact Form Included</li>
                        <li><span>< GoCheck /></span>QR Code Generation</li>
                    </ul>

                </div>
                <div className="pricing-card">
                    <h3>Digital Business Cards for Corporates</h3>
                    <b>CONTACT US for Pricing</b>
                    <p>( For Lifetime )</p>
                    <b>Offer Valid till 30-Sep-2020</b>
                    <button className="pricing-card-btn">
                        <Link to="home" smooth={true} duration={500} className="service-brand">
                            Contact Us
                        </Link>
                    </button>
                    <ul>
                        <li><span>< GoCheck /></span>Volume based pricing</li>
                        <li><span>< GoCheck /></span>Admin board for Unlimited Edits</li>
                        <li><span>< GoCheck /></span>Top priority email support</li>
                        <li><span>< GoCheck /></span>Manage all your employees cards</li>
                        <li><span>< GoCheck /></span>Customized Design</li>
                        <li><span>< GoCheck /></span>24/7 Chat Support</li>

                    </ul>
                </div>
                <div className="pricing-card">
                    <h3>Affiliate Program - Earn as Much You Can</h3>
                    <b>Unlimited Income</b>
                    <p>( For Lifetime )</p>
                    <b>Offer Valid till 30-Sep-2020</b>
                    <button className="pricing-card-btn">
                        <Link to="contact" smooth={true} duration={500} className="service-brand">
                            Contact Us
                        </Link>
                    </button>
                    <ul>
                        <li><span>< GoCheck /></span>20% of every referral and for life</li>
                    </ul>
                </div>
                <div className="pricing-card">
                    <h3>Franchise Partners Program</h3>
                    <b>2500 INR</b>
                    <p>( For Lifetime )</p>
                    <b>Offer Valid till 30-Sep-2020</b>
                    <button className="pricing-card-btn" onClick={() => handleClickButton(true, 'Create As a Franchise')}>Create As a Franchise</button>
                    <ul>
                        <li><span>< GoCheck /></span>Create Unlimited Cards</li>
                        <li><span>< GoCheck /></span>Login and Edit cards from Desktop</li>
                        <li><span>< GoCheck /></span>Earn 50% Profit for every card</li>
                        <li><span>< GoCheck /></span>Life Long free edits</li>
                        <li><span>< GoCheck /></span>Top priority email support</li>
                        <li><span>< GoCheck /></span>24/7 Chat Support</li>

                    </ul>
                </div>
            </div>
            {
                isModelOpen &&
                <RegisterForm checkIsLogin={handleCheckLogin} heading={regiHeading} closeModel={closeModel} />
            }
            {
                isLogin &&
                <LoginForm isModel={closeModel} />
            }
        </Element>

    )
}
export default Pricing