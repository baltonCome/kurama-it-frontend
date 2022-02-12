import Navmenu from './Navmenu';
import Main from '../assets/images/main.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Header = () => {

    return(
        <div className="vh-100">
            <Navmenu />
            <Container>
                <Row className="align-items-center">
                    <Col className='p-2 text-center'>
                        <h1 className='display-4 fw-bold my-5 text-primary'>KuramaIT</h1>
                        <h4 className="display-6 p-1">Connecting those who need with those who know, from anywhere at anytime!</h4>
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
                </Row>
            </Container>
        </div>   
    )
};

export default  Header;