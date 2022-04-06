import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../actions/tuits-actions"

const WhatsHappening = () => {
    let [newTuit, setNewTuit]
        = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col-2">
                <img src="./tuiter/IMG_4240.jpg" className="img-fluid rounded-circle" alt="tuit image"/>
            </div>
            <div className="col-10">
                <textarea className="form-control w-75"
                onChange={(e) =>
                setNewTuit({
                    ...newTuit,
                    tuit: e.target.value
                })}/>
                <div className="mt-2 mb-3">
                    <span className="ms-3 me-3 text-primary"><i className="fa-solid fa-image"></i></span>
                    <span className="me-3 text-primary"><i className="fa-solid fa-chart-line"></i></span>
                    <span className="me-3 text-primary"> <i className="fa-solid fa-face-smile"></i></span>
                    <span className="me-3 text-primary"><i className="fa-solid fa-calendar"></i></span>
                    <span className="d-flex justify-content-end">
                        <button onClick={() =>
                            createTuit(dispatch, newTuit)}
                                className="btn btn-primary float-end">
                        Tuit
                        </button>
                    </span>

                </div>

            </div>
        </div>

    );
}
export default WhatsHappening;