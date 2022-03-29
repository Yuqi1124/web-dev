import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = (
    {key,
        tuit = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "reactJs.png"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    let attachments;
    if(tuit.hasOwnProperty("attachments")) {
        if (Object.keys(tuit["attachments"])[0] === "video") {
            attachments = <div className="ratio ratio-16x9">
                <iframe src={`https://www.youtube.com/embed/${tuit["attachments"]["video"]}`} title="YouTube video" allowFullScreen/>
            </div>
        }
        else {
            attachments = <img src={tuit["attachments"]["image"]} className="img-fluid" alt="tuit attached image"/>
        }
    }
    else {
        attachments = <p/>
    }
    return(<>
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={tuit['avatar-image']} className="img-fluid rounded-circle" alt="tuit image"/>
                </div>
                <div className="col-10">
                    <div>
                        <span className="fw-bold text-white">
                        {tuit["postedBy"]["username"]}
                        </span>
                        <span className="text-secondary">
                        @{tuit["postedBy"]["username"]}
                        </span>
                        <span className="text-end">
                            <i onClick={() =>
                                deleteTuit(tuit)}
                               className="fas fa-remove fa-2x
                  fa-pull-right"/>
                        </span>

                    </div>
                    <div className="text-white">
                        {tuit["tuit"]}
                    </div>
                    <div>
                        {attachments}
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    </>);
}

export default TuitListItem