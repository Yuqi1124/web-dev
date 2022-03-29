import TuitList from "../tuit-list"
import WhatsHappening from "./whats-happening";
import Navi from "./home-nav";

const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitList />
            <Navi/>
        </div>
    )
}
export default HomeScreen;