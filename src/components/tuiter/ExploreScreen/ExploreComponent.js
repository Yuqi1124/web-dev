import React from "react";
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = ({active = 'for you'}) => {
    return(<>
            <div className="row">
                <div className="col-11">
                    <div className="input-group">
                        <input type="search" className="form-control rounded-pill ps-5 mb-2" placeholder="Search Twitter"/>
                        <span className="fa-solid fa-magnifying-glass position-absolute start-0 ms-3 input-group-append"
                        style={{top: "10px"}}></span>
                    </div>
                </div>
                <div className="col-1">
                    <i className="d-flex justify-content-center mt-1 fs-4 fa-solid fa-gear text-primary"></i>
                </div>
           </div>
           <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a href="for-you.html" className={`nav-link ${active === 'for you' ? 'active' : ''}`}>For You</a>
                </li>
                <li className="nav-item">
                    <a href="trending.html" className={`nav-link ${active === 'trending' ? 'active' : ''}`}>Trending</a>
                </li>
                <li className="nav-item">
                    <a href="news.html" className={`nav-link ${active === 'news' ? 'active' : ''}`}>News</a>
                </li>
                <li className="nav-item">
                    <a href="sports.html" className={`nav-link ${active === 'sports' ? 'active' : ''}`}>Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a href="entertainment.html" className={`nav-link ${active === 'entertainment' ? 'active' : ''}`}>Entertainment</a>
                </li>
           </ul>
           <ul className="list-group">
                <li className="list-group-item p-0">
                    <div className="card">
                        <img src="Starship-Mk1-Day.jpeg" className="card-img img-fluid"/>
                        <div className="card-img-overlay text-white fa-2x fw-bold d-flex align-items-end">SpaceX's Starship</div>
                    </div>
                </li>
           </ul>
           {PostSummaryList()}
    </>);
}
export default ExploreComponent;
