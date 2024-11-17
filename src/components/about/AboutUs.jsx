import React from 'react';
import { BsCheckAll } from 'react-icons/bs'; // Import double-check icon from Bootstrap icons
import './AboutUs.css';
import { Element } from 'react-scroll';

const AboutUs = () => {
    return (
        <Element name='about' className='about-container'>
            <h1>ABOUT US</h1>
            <div className="underline"></div>
            <div className='about-items'>
                <h2>Freedom From Boring Printed Business Cards</h2>
                <p>
                    Design your digital visiting card in 2 minutes - it's easy, elegant, and affordable.
                    E-Visit Card is always in your pocket, never tears and never runs out.
                    Your Digital Visiting Card can be easily updated with our user-friendly dashboard,
                    so you won't need to re-print a business card again.

                </p>
                <div className='about-item-align'>
                    <ul>
                        <li><BsCheckAll className="icon" /> Design your digital visiting card in 2 minutes</li>
                        <li><BsCheckAll className="icon" /> Digital Visiting Card is accessible anytime from anywhere</li>
                        <li><BsCheckAll className="icon" /> Through a variety of channels</li>
                    </ul>

                </div>

            </div>
        </Element>
    );
}

export default AboutUs;
