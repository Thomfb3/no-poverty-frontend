import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import npLogo from "../assets/no-poverty-logo.svg";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

function Navigation({ logout, toggleModal, toggleModalSignup }) {
    const { currentUser } = useContext(UserContext);

    return (
        <nav className="Navigation">
            <div className="Navigation__nav">
                <div className="Navigation__logo-box" >
                    <img className="Navigation__logo" src={npLogo} width={170} />
                </div>
                <div className="Navigation__profile">
                    {currentUser && <div
                                        className="Navigation__login Navigation__login--logout"
                                        onClick={logout}>
                                        <LogoutIcon className="Navigation__login--icon" />Logout
                                    </div>
                                    }
                    {!currentUser && 
                        <>
                        <div
                            className="Navigation__login Navigation__login--login"
                            onClick={toggleModal}>
                                <LoginIcon className="Navigation__login--icon" />Login
                        </div>
                        <div 
                            className="Navigation__login Navigation__login--signup"
                            onClick={toggleModalSignup}>
                                <PersonAddIcon className="Navigation__login--icon" />Signup
                        </div>
                        </>
                    }
                </div>
            </div>

        </nav>
    );
};


export default Navigation;