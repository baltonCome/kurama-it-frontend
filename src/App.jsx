import { useState, useEffect } from 'react';
//import { Outlet, Link } from "react-router-dom";
import FetchJobs from './components/FetchJobs';
import api from './services/Api';
import Header from './components/Header';
import './assets/styles/style.css';
import ForEmployers from './components/ForEmployers';
import ForSeekers from './components/ForSeekers';
import Skills from './components/Skills';
import WhyKurama from './components/WhyKurama';
import Footer from './components/Footer';
import SendFeedback from './components/SendFeedback';
import FetchFeedbacks from './components/FetchFeedbacks';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//import background from './assets/images/KuramaIT.svg';


const App = () => {

    const [jobs, setJobs] = useState([])
    const [feedbacks, setFeedbacks] = useState([])

    useEffect( () => {
        api.get('')
        .then((res) => {
            setJobs(res.data.jobs)
        })
        .catch(error => console.log(error))
    }, [])

    useEffect( () => {
        api.get('/feedback')
        .then((res) => {
            setFeedbacks(res.data.feedbacks)
        })
        .catch(error => console.log(error))
    }, [])

    const addFeedback = (feedback) => {
        console.log(feedback.rating, feedback.feedback)
    }

    return ( 
    
        <div className="font-link smooth-scrooling" /*style={{ backgroundImage: `url(${background})` }}*/>
            {
            // <>
            //     <Register />
            // </>
            <>
                <Register />
            </>

            /* <>
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
                <SendFeedback onFeedback={addFeedback} />
            </>
            <>
                <FetchFeedbacks feedbacks={feedbacks} />
            </>
            <>
                <Footer />
            </> */}

            {/* <Link to="/home">Home</Link>
            <p></p>
            <Link to="/login">Login</Link>
            <Outlet /> */}
        </div>
    )
}

export default App