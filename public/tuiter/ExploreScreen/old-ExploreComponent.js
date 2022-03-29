import PostSummaryList from "../PostSummaryList/old-index.js";

const OldExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11">
                    <div class="input-group">
                        <input type="search" class="form-control rounded-pill ps-5 mb-2" placeholder="Search Twitter">
                        <span class="fa-solid fa-magnifying-glass position-absolute start-0 ms-3 wd-signtly-down input-group-append wd-z-to-front"></span>
                    </div>
                </div>
                <div class="col-1">
                    <i class="d-flex justify-content-center mt-1 fs-4 fa-solid fa-gear text-primary"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a href="for-you.html" class="nav-link active">For You</a>
                </li>
                <li class="nav-item">
                    <a href="trending.html" class="nav-link">Trending</a>
                </li>
                <li class="nav-item">
                    <a href="news.html" class="nav-link">News</a>
                </li>
                <li class="nav-item">
                    <a href="sports.html" class="nav-link">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a href="entertainment.html" class="nav-link">Entertainment</a>
                </li>
           </ul>
           <ul class="list-group">
                <li class="list-group-item p-0">
                    <div class="card">
                        <img src="../Starship-Mk1-Day.jpeg" class="card-img img-fluid">
                        <div class="card-img-overlay text-white fa-2x fw-bold d-flex align-items-end">SpaceX's Starship</div>
                    </div>
                </li>
           </ul>
           ${PostSummaryList()}
    `);
}
export default OldExploreComponent;
