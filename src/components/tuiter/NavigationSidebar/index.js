import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
    return(
        <>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="/tuiter" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-house-chimney"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-inline-block d-none d-xl-block">Home</span>
                        </div>
                    </div>
                </a>
                <a href="explore" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-hashtag"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-inline-block d-none d-xl-block">Explore</span>
                        </div>
                    </div>
                </a>
                <a href="notifications" className={`list-group-item list-group-item-action ${active === 'notification' ? 'active' : ''}`}>
                    <div class="row">
                        <div className="col-2">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-inline-block d-none d-xl-block">Notification</span>
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <div class="row">
                        <div className="col-2">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-inline-block d-none d-xl-block">Messages</span>
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-inline-block d-none d-xl-block">Bookmarks</span>
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-inline-block d-none d-xl-block">Lists</span>
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-inline-block d-none d-xl-block">Profile</span>
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                        <div className="col-10">
                            <span className="d-inline-block d-none d-xl-block">More</span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
