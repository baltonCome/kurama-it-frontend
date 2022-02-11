import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../assets/images/KuramaIT.png';
import Nav from 'react-bootstrap/Nav';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

const Navmenu = () => {

    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Toggle bsPrefix='navbar-toggler' aria-controls="offcanvasNavbar"/>
                <Navbar.Brand href='#'>
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
                        <Nav.Link href="#"> <div className="rounded-pill btn btn-outline-primary"> Home </div> </Nav.Link>
                        <Nav.Link href="#"> <div className="rounded-pill btn btn-outline-primary"> Register </div> </Nav.Link>
                        <Nav.Link href="#"> <div className="rounded-pill btn btn-outline-primary"> Login </div> </Nav.Link>
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
                        <Nav.Link href="#"> <div className="rounded-pill btn btn-outline-primary"> Home </div> </Nav.Link>
                        <Nav.Link href="#"> <div className="rounded-pill btn btn-outline-primary"> Register </div> </Nav.Link>
                        <Nav.Link href="#"> <div className="rounded-pill btn btn-outline-primary"> Login </div> </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
};

export default Navmenu;