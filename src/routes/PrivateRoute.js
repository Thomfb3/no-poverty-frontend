import React, { useContext } from "react";
import { Route, Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

function PrivateRoute({ exact, path, element }) {
    const { currentUser } = useContext(UserContext);
    console.debug(
        "PrivateRoute",
        "exact=", exact,
        "path=", path,
        "currentUser=", currentUser
    );

    if (!currentUser) {
        return <Link to="/homepage" />
    };

    return (
        <Route exact={exact} path={path} element={element} />
    );
};

export default PrivateRoute;