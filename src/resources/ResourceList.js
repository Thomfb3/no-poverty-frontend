import React, { useState, useEffect, useContext } from "react";
import NoPovertyApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import UserContext from "../auth/UserContext";
import ResourceCard from "../resources/ResourceCard";

function ResourcePage() {
    console.log("Resource")
    console.debug("Resouces Page");
    const [isLoaded, setIsLoaded] = useState(false);
    const [resources, setResources] = useState([])
    const { currentUser } = useContext(UserContext);

    async function getResources() {
        let resources = await NoPovertyApi.getAllResources();
        setResources(resources)
        setIsLoaded(true);
    }

    useEffect(() => {
        getResources();
    }, []);

    if (!isLoaded) return <LoadingSpinner />;

    return (
        <>
            <div className="Resource-List__header-box">
                <h2 className="Resource-List__header">Resources</h2>
                <button className="Resource-List__button">Create new</button>
            </div>
            <div className="Resource-List">
                {resources.length &&
                    resources.map(r => (

                        <ResourceCard
                            key={r._id}
                            name={r.name}
                            description={r.description}
                            caption={r.caption}
                            type={r.type}
                            owner={r.owner}
                            address={r.address}
                            status={r.status}
                            allocationFinite={r.allocationFinite}
                            allocated={r.allocated}
                            capacity={r.capacity}
                            allocatedMembers={r.allocatedMembers}
                            mainImageUrl={r.mainImageUrl}
                            galleryImages={r.gallerImages}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ResourcePage;