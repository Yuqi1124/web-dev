const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-house-chimney"></i>
                        </div>
                        <div class="col-10">
                            <span class="d-inline-block d-none d-xl-block">Home</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action active">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-hashtag"></i>
                        </div>
                        <div class="col-10">
                            <span class="d-inline-block d-none d-xl-block">Explore</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <div class="col-10">
                            <span class="d-inline-block d-none d-xl-block">Notification</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="col-10">
                            <span class="d-inline-block d-none d-xl-block">Messages</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-bookmark"></i>
                        </div>
                        <div class="col-10">
                            <span class="d-inline-block d-none d-xl-block">Bookmarks</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-list"></i>
                        </div>
                        <div class="col-10">
                            <span class="d-inline-block d-none d-xl-block">Lists</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="col-10">
                            <span class="d-inline-block d-none d-xl-block">Profile</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action mb-2">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa-solid fa-ellipsis"></i>
                        </div>
                        <div class="col-10">
                            <span class="d-inline-block d-none d-xl-block">More</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
