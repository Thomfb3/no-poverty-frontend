import React, { useState, useEffect, useContext } from "react";
import NoPovertyApi from "./api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import UserContext from "../auth/UserContext";
import ResourceCard from "../resources/ResourceCard";

function ResourceList () {
    console.debug("Resouces Page");
    const [isLoaded, setIsLoaded] = useState(false);
    const { currentUser } = useContext(UserContext);
    
    async function getResources() {
        let myResources = await NoPovertyApi.getCurrentUserResources(currentUser._id);
        setIsLoaded(true);
      }


    useEffect(() => {
        getResources();
      }, []);

    if (!isLoaded) return <LoadingSpinner />;

    return (

        <ResourceCard />

    )


}

export default ResourceList;