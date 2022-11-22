import './assets/styles/style.css';
import { Routes } from 'react-router-dom';
import Home from "./pages/Home";
import FindJobs from "./pages/FindJobs";
import PostJob from "./pages/PostJob";
import ListUsers from "./pages/ListUsers"
import Profile from "./pages/Profile";
import { Route } from 'react-router-dom';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import RequireAuth from "./services/RequireAuth";
import Missing from './pages/Missing';
//import background from './assets/images/2.jpg';


const App = () => {

    return ( 
    
        <div className="font-link smooth-scrooling" /*style={{ backgroundImage: `url(${background})` }}*/>
            <Routes>
                <Route index element={ <Home />} />
                <Route path="jobs" element={ <FindJobs />} />
                <Route path="register" element={< Register/>}/>
                <Route path="login" element={<Login />} />
                <Route path="users" element={ <ListUsers />} >
                    <Route path=":userId" element={ <Profile />} />
                </Route>

                <Route element={ <RequireAuth />} >
                    <Route path="new-job" element={ <PostJob />} />
                </Route>

                <Route path='*' element={<Missing />} />
            </Routes>
        </div>
    )
}

export default App