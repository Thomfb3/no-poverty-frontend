import React, { useContext } from "react";
import LoginModal from "../auth/LoginModal";
import UserContext from "../auth/UserContext";

function LoginPage({
    login,
    signup,
    toggleModal,
    modalOn,
    modalIsSignup
}) {
    const hiddenClass = modalOn ? "not-hidden" : "hidden";
    const { currentUser } = useContext(UserContext);

    return (
        <>
            {modalOn && !currentUser &&
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