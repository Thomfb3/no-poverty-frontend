import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function Homepage() {
    const { currentUser } = useContext(UserContext);

    if (!currentUser) {
        return <Navigate to="/login"/>
    };

    return (
        <div className="Homepage">
            <h1 className="Homepage__hello">Hi {currentUser.firstName || currentUser.username}!<br></br>Let's get things done.</h1>
            <div className="Homepage__background">
            </div>
        </div>
    );
};

export default Homepage;