import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import ResourcePage from "../pages/ResourcePage";
import PrivateRoute from "./PrivateRoute";

function AppRoutes({ 
    login,
    signup,
    toggleModal,
    modalOn,
    modalIsSignup
}) {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route 
                exact 
                path="/login" 
                element={ <LoginPage 
                            login={login} 
                            signup={signup}
                            toggleModal={toggleModal}
                            modalOn={modalOn}
                            modalIsSignup={modalIsSignup}
                            /> } 
            />
            <Route exact path="/resources" element={<ResourcePage />} />
        </Routes>
    );
};

export default AppRoutes;