
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "reactJs.png"
        }
    }
) => {
    return(<>
    <li className="list-group-item">
                    <div className="row">
                        <div className="col-9">
                            <div className="text-secondary">
                                {post.topic}
                            </div>
                            <div>
                                <span className="fw-bold">{post.userName}</span>
                                <i className="fa-solid fa-circle-check"></i>
                                <span className="text-secondary"> - {post.time}</span>
                            </div>
                            <div className="fw-bold">
                                {post.title}
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={post.image} className="img-fluid" style={{borderRadius: "20px"}} alt="post image"/>
                        </div>
                    </div>
                </li>
    </>);
}

export default PostSummaryItem