const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: 'nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }
) => {
    return (<>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-2">
                            <img src={who.avatarIcon} width="48" className="rounded-circle float-start" alt="avatar icon"/>
                        </div>
                        <div className="col-6 col-xl-6 col-xxl-7">
                            <div><span className="fw-bold">{who.userName}</span>
                                <i className="fa-solid fa-circle-check"></i></div>
                            <div>{who.handle}</div>
                        </div>
                        <div className="col-4 col-xl-4 col-xxl-3 align-self-center">
                            <button className="btn btn-primary rounded-pill">Follow</button>
                        </div>
                    </div>
                </li>
    </>)
}

export default WhoToFollowListItem;