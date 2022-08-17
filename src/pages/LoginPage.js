import React, { useState } from "react";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import './LoginPage.css';

function LoginPage({ login, signup }) {
    const [side, setSide] = useState("left")
    const sideStyle = side === "left" 
        ? { left: "-15px", backgroundPosition: "0% 100%" } 
        : { left: "50%", backgroundPosition: "100% 100%"}


    const handleSwitch = () => {
        if (side === "left") {
            setSide("right")
        } else {
            setSide("left")
        }
    }


    return (
        <div className="form-container">
            <div className={`form-screen`} style={sideStyle}></div>
            <div className="form-side">
                <SignupForm signup={signup} />
                <button className="form-button-link" onClick={handleSwitch}>Don't have an account</button>
            </div>
            <div className="form-side">
                <LoginForm login={login} />
                <button className="form-button-link" onClick={handleSwitch}>Already have an account</button>
            </div>
        </div>
    )
}

export default LoginPage;