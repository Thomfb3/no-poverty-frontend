import React, { useState, useContext, useEffect } from "react";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

function LoginModal({ login, signup, modalIsSignup }) {
    const [isSignup, setIsSignup] = useState(modalIsSignup)
    const loginStyle = { left: "-15px", backgroundPosition: "0% 100%" };
    const signupStyle = { left: "50%", backgroundPosition: "100% 100%"};
    const [sideStyle, setSideStyle] = useState(modalIsSignup ? signupStyle : loginStyle)

    const handleSwitch = () => {
        if (isSignup) {
            setIsSignup(false)
            setSideStyle(loginStyle);
        } else {
            setIsSignup(true)
            setSideStyle(signupStyle);
        }
    }

    return (
        <div className="Login-Form__container">
            <div className="Login-Form__screen" style={sideStyle}></div>
            <div className="Login-Form__side">
                <SignupForm signup={signup} />
                <button className="Login-Form__switch" onClick={handleSwitch}>Already have an account? Login.</button>
            </div>
            <div className="Login-Form__side">
                <LoginForm login={login} />
                <button className="Login-Form__switch" onClick={handleSwitch}>Don't have an account? Sign Up.</button>
            </div>
        </div>
    )
}

export default LoginModal;