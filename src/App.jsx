import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import FetchJobs from './components/FetchJobs';
import api from './services/Api';
import Header from './components/Header';
import './assets/styles/style.css';
//import background from './assets/images/KuramaIT.svg';


const App = () => {

    const [jobs, setJobs] = useState([])

    useEffect( () => {
        api.get('')
        .then((res) => {
            setJobs(res.data.jobs)
            console.log(res)
        })
        .catch(error => console.log(error))
    }, [])

    return ( 
    
        <div className="font-link smooth-scrooling" /*style={{ backgroundImage: `url(${background})` }}*/>
            <>
                <Header />
            </>
            <>
                { <FetchJobs jobs= {jobs} /> }
            </>
            <Link to="/home">Home</Link>
            <p></p>
            <Link to="/login">Login</Link>
            <Outlet />
        </div>
    )
}

export default App