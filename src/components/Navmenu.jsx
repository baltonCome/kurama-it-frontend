import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/images/KuramaIT.png';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navmenu = () => {

    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Container fluid>
                <Navbar.Toggle bsPrefix='navbar-toggler' aria-controls="offcanvasNavbar" className="border-0"/>
                <Navbar.Brand to='#'>
                    <img
                        src={Logo}
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="KuramaIT"
                    />
                </Navbar.Brand> 
                <div className='d-none d-lg-block'>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink className="link-primary mx-2" to="/"> Home 
                        </NavLink>
                        <NavLink className="link-primary mx-2" to="/jobs"> Jobs
                        </NavLink>
                        <NavLink className="link-primary mx-2" to="/new-job"> Post Job 
                        </NavLink>
                        <NavLink className="link-primary mx-2" to="/users"> See Profiles
                        </NavLink>
                    </Nav>
                </div>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink className="link-primary btn " to="/"> Home
                        </NavLink>
                        <NavLink className="link-primary btn" to="/jobs"> Jobs
                        </NavLink>
                        <NavLink className="link-primary btn" to="/new-job"> Post Job 
                        </NavLink>
                        <NavLink className="link-primary btn" to="/users"> See Profiles
                        </NavLink>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
};

export default Navmenu;