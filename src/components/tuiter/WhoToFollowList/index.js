import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (<>
            <ul className="list-group">
            <li className="list-group-item fw-bold"> Who to follow </li>
                {
                    who.map(wh => {
                        return(
                            <WhoToFollowListItem who={wh}/>
                        );
                    })
                }
            </ul>
    </>); }

export default WhoToFollowList
