import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import FetchJobs from './components/FetchJobs';
import api from './services/Api';

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
    
        <Container>
            <>
                { <FetchJobs jobs= {jobs} /> }
            </>
            <Link to="/home">Home</Link>
            <p></p>
            <Link to="/login">Login</Link>
            <Outlet />
        </Container>
    )
}

export default App