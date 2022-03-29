import OldPostSummaryItem  from "./old-PostSummaryItem.js";
import posts from "./old-posts.js";

const PostSummaryList = () => {
    return (`
    <ul class="list-group">
        ${posts.map(post => {
            return (OldPostSummaryItem(post))}).join("")}
    </ul>
    `)
}

export default PostSummaryList

