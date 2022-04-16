import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions"

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-3">
                <i className="fa-solid fa-comment"></i>
                <span>{tuit["comment"]}</span>
            </div>
            <div className="col-3">
                <i className="fa-solid fa-retweet"></i>
                <span>{tuit["retuits"]}</span>
            </div>
            <div className="col-3">
                <span>
                    Likes: {tuit.likes}
                    <i onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes + 1
                        })} className="far fa-thumbs-up ms-2"/>
                </span>
            </div>
            <div className="col-3">
                <i className="fa-solid fa-share-from-square"></i>
            </div>
        </div>

);
}
export default TuitStats;