import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div className="row">
            <div className="col-2">
                <img src="./tuiter/IMG_4240.jpg" className="img-fluid rounded-circle" alt="tuit image"/>
            </div>
            <div className="col-10">
                <textarea value={whatsHappening}
                          placeholder="What's happening?"
                          className="form-control bg-black text-white"
                          onChange={(event) =>
                                    setWhatsHappening(event.target.value)}>
                </textarea>
                <div className="mb-3">
                    <span className="ms-3 me-3 text-primary"><i className="fa-solid fa-image"></i></span>
                    <span className="me-3 text-primary"><i className="fa-solid fa-chart-line"></i></span>
                    <span className="me-3 text-primary"> <i className="fa-solid fa-face-smile"></i></span>
                    <span className="me-3 text-primary"><i className="fa-solid fa-calendar"></i></span>
                    <span className="d-flex justify-content-end">
                        <button onClick={tuitClickHandler} className="btn btn-primary rounded-pill">
                        Tuit
                    </button>
                    </span>

                </div>

            </div>
        </div>

    );
}
export default WhatsHappening;