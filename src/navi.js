import React from "react";
import {Link} from "react-router-dom";

const Navi = () => {
    return(
        <>
            <h1>This is to assist navigation</h1>
            <Link to="/labs">
                Labs
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
        </>
    )
};


export default Navi;
