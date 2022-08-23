import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import NoPovertyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import UserContext from "../auth/UserContext";
import ResourceList from "../resources/ResourceList";

function ResourcePage () {
    console.debug("Resouces Page");
    const { currentUser } = useContext(UserContext);
    if (!currentUser) {
        return <Navigate to="/login"/>
    };

    // if (!isLoaded) return <LoadingSpinner />;

    return (
        <>
            <ResourceList />
        </>

    )


}

export default ResourcePage;