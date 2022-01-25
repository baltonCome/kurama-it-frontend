import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import axios from 'axios';

function App(){

    const [jobs, setJobs] = useState([]);

    axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true, headers : { 'Content-Type' : 'application/json' } });
    useEffect(() => {
        axios.get("http://localhost:8000/api/job/java", { withCredentials : true }).then(({data}) => {
            setJobs(data);
        })    
        console.log(jobs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
       
    return ( 
        <>
            <Container>
                <h1>Hello Boys</h1>
                <Link to="/home">Home</Link>
                <p></p>
                <Link to="/login">Login</Link>
                <Outlet />
            </Container>
        </>
    )
}

export default App