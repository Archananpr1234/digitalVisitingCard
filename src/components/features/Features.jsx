import React from "react";
import './Features.css'
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FiMessageCircle } from "react-icons/fi";
import { Element } from 'react-scroll';




const Features = () => {
    return (
        <Element name="features" className="features-main-container">
            <h1>FEATURES</h1>
            <hr className="underline" />
            <p>One business card, endless possibilities</p>

            <div className="features-main-item">
                <ul className="features-item-one">
                    <li>
                        <span className="card-icon">< IoCallSharp className="icon" /></span>
                        One CLick Call
                    </li>
                    <li>
                        <span className="card-icon"><FaWhatsapp className="icon" /></span>
                        One CLick WhatsApp
                    </li>
                    <li>
                        <span className="card-icon"><MdEmail className="icon" /></span>
                        One Click Email
                    </li>
                    <li>
                        <span className="card-icon"><FaLocationDot className="icon" /></span>
                        One CLick Navigate
                    </li>
                    <li>
                        <span className="card-icon"><FaFacebookF  className="icon"/></span>
                        Website & Social Links
                    </li>
                    <li>
                        <span className="card-icon"><HiShare  className="icon"/></span>
                        Share Unlimited
                    </li>
                    <li>
                        <span className="card-icon"><FaRegEdit className="icon" /></span>
                        Easy To Update
                    </li>
                    <li>
                        <span className="card-icon"><FaImage className="icon" /></span>
                        Photo Gallery
                    </li>
                    <li>
                        <span className="card-icon">< TfiYoutube className="icon" /></span>
                        Youtube Video Gallery
                    </li>
                    <li>
                        <span className="card-icon"><FiMessageCircle className="icon" /></span>
                        Enquiry Form
                    </li>

                </ul>




            </div>

        </Element>

    )


}

export default Features