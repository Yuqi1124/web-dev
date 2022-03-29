import logo from './logo.svg';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index";
import Tuiter from "./components/tuiter/index";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreComponent from "./components/tuiter/ExploreScreen/ExploreComponent";
import NotificationScreen from "./components/tuiter/Notification"
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import Navi from "./navi";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path=""
                               element={<Navi/>}/>
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreComponent/>}/>
                            <Route path="notifications"
                                   element={<NotificationScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>

    );
}




export default App;

