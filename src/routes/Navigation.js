import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import HeaderProfile from "../common/HeaderProfile";
import UserContext from "../auth/UserContext";
// import choreBoardLogo from "../assets/images/chore-board-logo.svg";
// import MobileNavigation from "./MobileNavigation"
import AppAlert from "../common/AppAlert";
import npLogo from "../assets/no-poverty-logo.svg";

function Navigation({ logout }) {
    const { currentUser } = useContext(UserContext);


    return (
        <nav className="Navigation">
            <div className="Navigation__nav">

                <div className="Navigation__logo-box" style={{ margin: "10px" }}>
                    <img src={npLogo} width={170} />    
                </div>
                <div className="Navigation__profile">
                  { currentUser &&  <button onClick={logout}>Logout</button> }
                </div>
            </div>

        </nav>
    );
};



export default Navigation;