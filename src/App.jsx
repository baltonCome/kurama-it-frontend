import './assets/styles/style.css';
//import background from './assets/images/2.jpg';
import ListUsers from './pages/ListUsers';


const App = () => {

    return ( 
    
        <div className="font-link smooth-scrooling" /*style={{ backgroundImage: `url(${background})` }}*/>
           <ListUsers />
        </div>
    )
}

export default App