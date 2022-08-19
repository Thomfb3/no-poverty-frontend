import React, { useEffect, useState, useContext } from "react";
import LoginModal from "../auth/LoginModal";

function LoginPage({
    login,
    signup,
    toggleModal,
    modalOn,
    modalIsSignup
}) {
    const hiddenClass = modalOn ? "not-hidden" : "hidden";

    return (
        <>
            {modalOn &&
                <div className={`Login-Modal__container ${hiddenClass}`}>
                    <div className="Login-Modal__modal">
                        <button className="Login-Modal__close" onClick={toggleModal}>X</button>
                        <LoginModal
                            login={login}
                            signup={signup}
                            modalIsSignup={modalIsSignup}
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default LoginPage;