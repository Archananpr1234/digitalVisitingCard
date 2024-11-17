import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaShareAlt } from "react-icons/fa";
import { AiOutlineFileText, AiOutlineLock, AiOutlineUndo } from "react-icons/ai"; // Icons for policy links
import "./ContactUs.css";
import { Element } from 'react-scroll';


const ContactUs = () => {
    return (
        <Element name="contact" className="contact-main-container">
            <h1>CONTACT US</h1>
            <div className="underline"></div>

            <div className="contact-content">
                {/* Contact Form */}
                <div className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input type="text" placeholder="Enter Your Mobile Number" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Enter Your Message"></textarea>
                    </div>
                    <button className="send-message-button">Send Message</button>
                </div>

                {/* Contact Info */}
                <div className="contact-info">
                    <div className="info-item">
                        <span className="icon-circle"><FiMapPin /></span>
                        <p>
                            <strong>Location:</strong><br />
                            Digital Visiting Card Online<br />
                            Vinoth Computer Centre, Near Tana Office,<br />
                            Ayothiyapattinam, Salem - 636103, Tamilnadu.
                        </p>
                    </div>
                    <div className="info-item">
                        <span className="icon-circle"><FiMail /></span>
                        <p><strong>Email:</strong> <br /> digitalvcardonline@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <span className="icon-circle"><FiPhone /></span>
                        <p><strong>Call:</strong><br /> +91 8754399898</p>
                    </div>

                    <div className="social-links">
                        <span className="icon-circle"><FaShareAlt /></span>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <FaYoutube />
                        <FaInstagram />
                    </div>

                    <div className="policy-links">
                        <a href="#"><AiOutlineFileText /> Terms & Condition</a>
                        <a href="#"><AiOutlineLock /> Privacy Policy</a>
                        <a href="#"><AiOutlineUndo /> Refund Policy</a>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default ContactUs;
