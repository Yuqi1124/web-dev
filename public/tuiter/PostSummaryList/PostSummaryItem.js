
const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
                    <div class="row">
                        <div class="col-9">
                            <div class="text-secondary">
                                ${post.topic}
                            </div>
                            <div>
                                <span class="fw-bold">${post.userName}</span>
                                <i class="fa-solid fa-circle-check"></i>
                                <span class="text-secondary"> - ${post.time}</span>
                            </div>
                            <div class="fw-bold">
                                ${post.title}
                            </div>
                        </div>
                        <div class="col-3">
                            <img src=${post.image} class="img-fluid wd-rounded-more">
                        </div>
                    </div>
                </li>
    `);
}

export default PostSummaryItem