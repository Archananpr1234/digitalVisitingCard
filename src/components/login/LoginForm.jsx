import React, { useState } from "react";
import "./LoginForm.css"
import { ImCross } from "react-icons/im";
import RegisterForm from "../register/RegisterForm";
const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState({});

    const closeModel = () => {
        props.isModel(false)
    }

    const handleCheckLogin = (value) => {
        setIsLogin(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let error1 = {

        }

        if (!email) {
            error1.email = 'Email is required';


        }
        if (!password) {
            error1.password = 'Password is required';

        }

        if (!email || !password) {
            setError(error1)
            alert('failed')
        }

        if (email && password) {
            setError({});
            console.log('Email:', email);
            console.log('Password:', password);
            // Add your form submission logic here
        }


    }
    return (
        <>
            {isLogin ?
                <div className="model-container">
                    <div className="model-content">
                        <div className="model-header">
                            <p className="model-header-paragraph">Digital Visiting Card</p>
                            <span onClick={() => closeModel()}>< ImCross /></span>
                        </div>
                        <p >Sign-In / Sign-Up Account</p>
                        <hr className="login-underline" />

                        <form className="model-form" onSubmit={handleSubmit}>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span className="text-red-600">{error?.email}</span>

                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="text-red-600">{error?.password}</span>
                            <button className="login-btn" type="submit">Sign In</button>

                        </form>

                        <div className="model-bottom">
                            <span>Doesn't have an account?</span>
                            <button onClick={() => setIsLogin(false)}>Register Here</button>
                        </div>
                    </div>
                </div>
                :
                <RegisterForm checkIsLogin={handleCheckLogin} heading='Create Business Card' closeModel={closeModel} />
            }
        </>
    )
}
export default LoginForm

