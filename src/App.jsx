import { Link } from "react-router-dom";

function App(){

    return (
        <>
            <div className="container">
                <h1>Hello Boys</h1>

                <Link to="/Home">Home</Link>
                <Link to="/Login">Login</Link>
            </div>
        </>
    )
}

export default App