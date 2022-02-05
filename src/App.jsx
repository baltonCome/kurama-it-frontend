import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import FetchJobs from './components/FetchJobs';
import api from './services/Api';

const App = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [jobs, setJobs] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
        api.get('')
        .then((response) => {
            setJobs(response.data.jobs)
            console.log(response)
        })
        .catch(error => console.log(error))
    }, [])

    return ( 
    
        <Container>
            <>
                { <FetchJobs jobs= {jobs} /> }
            </>
            <h1>Hello Boys</h1>
            <Link to="/home">Home</Link>
            <p></p>
            <Link to="/login">Login</Link>
            <Outlet />
        </Container>
    )
}

export default App