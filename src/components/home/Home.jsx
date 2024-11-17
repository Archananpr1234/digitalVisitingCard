import React, { useState } from "react";
import './Home.css'
import { Element } from "react-scroll";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../register/RegisterForm";
const Home = () => {
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const[regiHeading, setRegiHeading] = useState('');


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

        <Element name="home" className="home-container">
            <div className="home-item-left">
                <h1>Inspire your client<br /> Digitally</h1>
                <p>We Convert Your Normal Visiting Card into Digital Business Card. Our<br /> platform allows professionals to easily share their Business information<br /> without the need for paper business cards</p>
                <div className="inspire-button ">
                    <button className="inspire-bussiness-button" onClick={() => handleClickButton(true, 'Create Business Card')}>Create Business Card</button>
                    <button className="inspire-franchise-button" onClick={() => handleClickButton(true, 'Create As a Franchise')}>Create As a Franchise</button>

                </div>

            </div>
            <div className="home-item-right-img">
                <img src="./public/mobile-img.png" alt="" />

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
export default Home