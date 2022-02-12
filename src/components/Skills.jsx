import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaBug } from 'react-icons/fa';
import { FaDraftingCompass } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaPallet } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

 
const Skills = () => {
  return (
    
    <div className="bg-light">
        <Container className="text-center my-5">
            <div className="pt-5">
                <h2 className='text-primary'>Find Professionals According to the required Skills</h2>
            </div>
            <Row className="row-cols-1 row-cols-md-3 g-5 p-5">
                <Col>
                    <Card className='h-100 shadow'>
                        <Card.Body>
                            <Card.Title className='text-primary'> <FaBug className='mb-1' /> Back-End</Card.Title>
                            <Card.Text>
                                Java, Python, PHP, Node, Laravel, SpringBoot...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 shadow'>
                        <Card.Body>
                            <Card.Title className='text-primary'> <FaDraftingCompass className='mb-1' /> Front-End</Card.Title>
                            <Card.Text>
                                React, Vue, Angular, CSS, HTML, Bootstrap, Tailwind...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 shadow'>
                        <Card.Body>
                            <Card.Title className='text-primary'> <FaProjectDiagram className='mb-1' /> Software Engineering</Card.Title>
                            <Card.Text>
                                Documentation, Diagrams, Software Design, Prototype...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 shadow'>
                        <Card.Body>
                            <Card.Title className='text-primary'> <FaPallet className='mb-1' /> Designers</Card.Title>
                            <Card.Text>
                                Corel Draw, Adobe Photoshot, Figma, Adobe Ilustrator...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 shadow'>
                        <Card.Body>
                            <Card.Title className='text-primary'> <FaDatabase className='mb-1' /> Database Managers</Card.Title>
                            <Card.Text>
                                MySql, MongoDB, MariaDB, Oracle, PostgreSQL, Cassandra...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='h-100 shadow'>
                        <Card.Body>
                            <Card.Title className='text-primary'> <FaGlobe className='mb-1' /> Network & Connections</Card.Title>
                            <Card.Text>
                                Servers, Proxy Servers, Mail Servers, Application Servers...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
};

export default Skills;
