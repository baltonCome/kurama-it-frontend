import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Globe from '../assets/images/globe.svg';
import Developer from '../assets/images/developer.svg';
import Money from '../assets/images/money.svg'
import Card from 'react-bootstrap/Card';
import Logo from '../assets/images/KuramaIT.png'

const WhyKurama = () => {
  return (
    
    <div className='bg-light'>
        <Container className="text-center my-5">
            <div className='pt-5'>
                <h3 className='text-primary'>Why KuramaIT?!</h3>
            </div>
            <Row className="row-cols-1 row-cols-lg-2 g-4 p-5">
                <Col>
                    <Carousel fade>
                        <Carousel.Item interval={3000}>
                            <Card className='h-100 p-3 shadow border-0 bg-light'>
                                <img 
                                    className='img-fluid'
                                    src={Money}
                                    alt="Savings"
                                />
                                <Card.Body>
                                    <Card.Title className='text-primary'>Free Posting</Card.Title>
                                    <Card.Text>
                                         Find the professionl you are looking for without paying!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <Card className='h-100 p-3 shadow border-0 bg-light'>
                                <img 
                                    className='img-fluid'
                                    src={Developer}
                                    alt="Developer"
                                    
                                />
                                <Card.Body>
                                    <Card.Title className='text-primary'>All Type Of Developers</Card.Title>
                                    <Card.Text>
                                        Full or part-time, for front or back-end, designers...
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <Card className='h-100 p-3 shadow border-0 bg-light'>
                                <img
                                    className='img-fluid'
                                    src={Globe}
                                    alt="Any Location" 
                                />
                                <Card.Body>
                                    <Card.Title className='text-primary'>Any Location</Card.Title>
                                    <Card.Text>
                                        From near or far, even for remote jobs, here is where you can find!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="position-relative">
                    <div className='mb-4'>
                        <img
                            className='img-fluid'
                            src={Logo} 
                            alt="KuramaIT" 
                            width="250"
                        />
                    </div>
                    <div>
                        <p>With the increase in the use of technologies, there are several people and entities that seek services from professionals in the area of technology. Other than that, technology has been increasingly present in our daily lives. With this website we seek to bring together those who have the need with those who have the ability.</p>
                       <p> We have a problem, we need a developer or design specialist for example, where can I find it? Will  he be reliable?... These and more similar questions are what our site seeks to solve in a easy and   effective way!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default WhyKurama;
