import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import determineStatus from "../helpers/determineStatus";
import capitalize from "../helpers/capitalize";
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import defaultResourceImage from '../assets/defaultResource.jpg';
import formatDate from '../helpers/formatDate';


function ResourceCard({
    name,
    description,
    caption,
    type,
    owner,
    address,
    status,
    allocationFinite,
    allocated,
    capacity,
    allocatedMembers,
    mainImageUrl,
    galleryImages,
    dateCreated,
    lastModified
}) {
    console.debug("ResourceCard");
    const { currentUser } = useContext(UserContext);
    const sc = {
        green : "#24C67C",
        red : "#F91E87", 
        yellow: "#ebc50a",
        gray : "#848484"}


    return (
        <div className="Resource-Card__card">
            <div className="Resource-Card__image-box">
                <img className="Resource-Card__image" src={defaultResourceImage} />
                <p className="Resource-Card__caption">{caption}</p>
            </div>
            <div className="Resource-Card__info">
                <h2 className="Resource-Card__name">{name}</h2>
                <p className="Resource-Card__address">{address}</p>
                <p className="Resource-Card__description">{description}</p>
                <div className="Resource-Card__lower-block">
                    <p>Status:
                        <span
                            className="Resource-Card__status"
                            style={{backgroundColor: `${determineStatus(status, sc.green, sc.red, sc.yellow, sc.gray)}`}}>{`${capitalize(status)}`}
                        </span>
                    </p> 
                    <p className="Resource-Card__vacancies">Vacancies: {capacity - allocated}</p>
                    
                </div> 
            </div>
        </div>
    );
};

export default ResourceCard;




