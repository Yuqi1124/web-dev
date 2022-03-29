import React from "react";
import {Link} from "react-router-dom";

const Navi = () => {
    return(
        <>
            <h2>This is to assist navigation</h2>
            <Link to="/tuiter">
                Home
            </Link> |
            <Link to="/tuiter/notifications">
                Notifications
            </Link>
        </>
    )
};

export default Navi;
