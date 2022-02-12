import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import FetchJobs from './components/FetchJobs';
import api from './services/Api';
import Header from './components/Header';
import './assets/styles/style.css';
import ForEmployers from './components/ForEmployers';
import ForSeekers from './components/ForSeekers';
import Skills from './components/Skills';
import WhyKurama from './components/WhyKurama';
import Footer from './components/Footer';
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
                <ForEmployers />
            </>
            <>
                <Skills />
            </>
            <>
                <ForSeekers />
            </>
                        <>
                { <FetchJobs jobs= {jobs} /> }
            </>
            <>
                <WhyKurama />
            </>
            <>
                <Footer />
            </>

            <Link to="/home">Home</Link>
            <p></p>
            <Link to="/login">Login</Link>
            <Outlet />
        </div>
    )
}

export default App