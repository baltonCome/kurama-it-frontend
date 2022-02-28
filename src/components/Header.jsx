import Navmenu from './Navmenu';
import Main from '../assets/images/main.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'; 
import { FaSearch, FaArrowCircleDown } from 'react-icons/fa';
//import { useRef } from 'react';

const Header = () => {

    //const employerRef = useRef(null);
    //const scrollToEmployer = () => employerRef.current.scrollIntoView();

    return(
        <div className="">
            <Navmenu />
            <Container style={{ height: "100vh" }} className='justify-content-center align-items-center'>
                <div className='d-flex justify-content-center'>
                    <Form className="d-flex mt-3 w-75">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 rounded-pill"
                            aria-label="Search"
                        />
                        <Button className="rounded-pill"> <FaSearch /> </Button>
                     </Form>
                </div>
                <Row className="align-items-center">
                    <Col className='p-2 text-center'>
                        <h1 className='display-4 fw-bold my-5 text-primary'>KuramaIT</h1>
                        <h3 className="p-1">Connecting those who need with those who know, from anywhere at anytime!</h3>
                        <p className="p-2">Ready to Try?!</p>
                        <div>
                            <Button className="rounded-pill btn-lg my-2 shadow">
                                Post a Job!
                            </Button>{" "}
                            <Button variant="light" className="rounded-pill btn-outline-primary btn-lg shadow">
                                Find a Job!
                            </Button>
                        </div>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <img
                            src={Main}
                            width="600"
                            className="d-inline-block align-top"
                            alt="KuramaIT"
                        />
                    </Col>
                    <div >
                    </div>
                    
                </Row>
                <div className='text-center'>
                    <Button className="rounded-pill" onClick> <FaArrowCircleDown /> </Button>
                </div>
            </Container>
        </div>   
    )
};

export default  Header;