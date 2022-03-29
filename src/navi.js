import React from "react";
import {Link} from "react-router-dom";

const Navi = () => {
    return(
        <>
            <h2>This is to assist navigation</h2>
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
