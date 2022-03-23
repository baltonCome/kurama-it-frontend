import Navmenu from '../components/Navmenu';
import Footer from '../components/Footer';
import { useState, useEffect} from 'react'
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import { FaMapPin, FaMailBulk } from 'react-icons/fa';
import api from '../services/Api';

const Profile = () => {

    const [ user, setUser ] = useState([]);

    useEffect(() => {
        //Dont forget to fetch the jobs of the selectd user
        //We decided to make the update here, se vira mano
    },[])

    return (
        <>
        <Navmenu />
        <div>
            <div style={{ height: "25vh" }} className='bg-light'>
                <Image 
                roundedCircle={true}
                thumbnail={true}
                width={160}
                height={160}
                style={{ marginTop: 120, marginLeft: 40, zIndex: 1 , position: "absolute" }}
                >

                </Image>

            </div>
            <div style={{ height: "25vh" }} className='bg-dark'>
                
            </div>
            <Container>
                <Row>
                    <Col lg={3} className="p-2">
                        <Card className="my-3">
                            <Card.Body>
                                <h4>Introduction</h4>
                                <p> <FaMapPin /> </p>
                                <p> <FaMailBulk /> </p>
                            </Card.Body>
                        </Card>
                        <Card className="my-3">
                            <Card.Body>
                                <h4>Skills</h4>
                                <p className='text-muted'>Skills for potential!</p>
                            </Card.Body>
                        </Card>
                        <Card className="my-3">
                            <Card.Body>
                                <h4>Languages</h4>
                                <p className='text-muted'>Mastered languages!</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={9} className="p-2">
                        <Card className="my-3">
                            <Card.Body>
                                <h4>Experience</h4>
                                <p className='text-muted'>The experience from past jobs </p>
                            </Card.Body>
                        </Card>
                        <Card className="my-3">
                            <Card.Body>
                                <h4>Education</h4>
                                <p className='text-muted'>Education history</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
        </>
    )
}

export default Profile