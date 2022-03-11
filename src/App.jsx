import './assets/styles/style.css';
import { Routes } from 'react-router-dom';
import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import PostJob from "./pages/PostJob";
import ListUsers from "./pages/ListUsers"
import Profile from "./pages/Profile";
import { Route } from 'react-router-dom';
//import background from './assets/images/2.jpg';


const App = () => {

    return ( 
    
        <div className="font-link smooth-scrooling" /*style={{ backgroundImage: `url(${background})` }}*/>
            <Routes>
                <Route index element={ <Home />} />
                <Route path="jobs" element={ <FindJobs />} />
                <Route path="new-job" element={ <PostJob />} />
                <Route path="users" element={ <ListUsers />} >
                    <Route path=":userId" element={ <Profile />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App