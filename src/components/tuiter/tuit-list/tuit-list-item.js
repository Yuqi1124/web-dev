import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../actions/tuits-actions";

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
                        <span className="ms-2 me-2"><i className="fa-solid fa-circle-check"></i></span>
                        <span className="text-secondary">
                        @{tuit["postedBy"]["username"]}
                        </span>
                        <span className="text-end">
                            <i className="fas fa-remove float-end" onClick={() => deleteTuit(dispatch, tuit)}/>
                        </span>

                    </div>
                    <div className="text-white">
                        {tuit["tuit"]}
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    </>);
}

export default TuitListItem