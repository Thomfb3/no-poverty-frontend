import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";



function AppRoutes({ login, signup, updateCurrentUser }) {

    return (

        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route 
                exact 
                path="/login" 
                element={ <LoginPage login={login} signup={signup} /> } 
            />
    
        </Routes>

    );
};

export default AppRoutes;