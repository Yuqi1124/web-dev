const OldWhoToFollowListItem = (who) => {
    return (`
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <img src=${who.avatarIcon} class="rounded-circle wd-avatar-size">
                        </div>
                        <div class="col-6 col-xl-6 col-xxl-7">
                            <div><span class="fw-bold">${who.userName}</span>
                                <i class="fa-solid fa-circle-check"></i></div>
                            <div>${who.handle}</div>
                        </div>
                        <div class="col-4 col-xl-4 col-xxl-3 align-self-center">
                            <button class="btn btn-primary rounded-pill">Follow</button>
                        </div>
                    </div>
                </li>`)
}

export default OldWhoToFollowListItem;