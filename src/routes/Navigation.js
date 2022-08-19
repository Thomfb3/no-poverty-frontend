import React, { useEffect, useContext } from "react";
import UserContext from "../auth/UserContext";
import npLogo from "../assets/no-poverty-logo.svg";

function Navigation({ logout, toggleModal, toggleModalSignup }) {
    const { currentUser } = useContext(UserContext);

    return (
        <nav className="Navigation">
            <div className="Navigation__nav">
                <div className="Navigation__logo-box" style={{ margin: "10px" }}>
                    <img className="Navigation__logo" src={npLogo} width={170} />
                </div>
                <div className="Navigation__profile">
                    {currentUser && <button onClick={logout}>Logout</button>}
                    {!currentUser && 
                        <>
                        <button className="Navigation__login--login" onClick={toggleModal}>Login</button>
                        <button className="Navigation__login--signup" onClick={toggleModalSignup}>Signup</button>
                        </>
                    }
                </div>
            </div>

        </nav>
    );
};


export default Navigation;