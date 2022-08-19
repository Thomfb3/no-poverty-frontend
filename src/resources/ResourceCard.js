import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ResourceCard() {
    console.debug("ResourceCard");

    const { currentUser } = useContext(UserContext);
        return (
           
            <Link to={`/resources/user_${id}`} className="ResourceCard">
                <div className={"ResourceCard__container"}>
                    <div className="ResourceCard__inner-container">
                        <div>
                            <p className="ResourceCard__title">{title}</p>
                            <p className="ResourceCard__description">{description}</p>
                        </div>
                        <div>
                            <p className="ResourceCard__points">{points} pts</p>
                        </div>
                        <div className="ResourceCard__due-date">
                            <p className="ResourceCard__due-date--label">Due Date</p>
                        </div>
                
                    </div>
                </div>
            </Link>
        );
};

export default ResourceCard;




