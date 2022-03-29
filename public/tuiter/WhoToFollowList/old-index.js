import OldWhoToFollowListItem from "./old-WhoToFollowListItem.js";
import who from "./old-who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <li class="list-group-item fw-bold"> Who to follow </li>
                ${who.map(p => {
                    return (
                        OldWhoToFollowListItem(p))
                }).join("")}
            </ul>
`); }

export default WhoToFollowList
