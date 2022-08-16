import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";

import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";


function AppRoutes({ login, signup, updateCurrentUser }) {
 
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                
                <Route exact path="/login" />

                <Route exact path="/signup" />


            </Routes>
        </div>
    );
};

export default AppRoutes;