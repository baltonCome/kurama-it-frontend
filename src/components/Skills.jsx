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

    const skills = [

        { title: "Back-end", text : "Java, Python, PHP, Node, Laravel, SpringBoot...", icon: <FaBug /> },
        { title: "Front-end", text : "React, Vue, Angular, CSS, HTML, Bootstrap, Tailwind...", icon: <FaDraftingCompass /> },
        { title: "Software Engineering", text : "Documentation, Diagrams, Software Design, Prototype...", icon: <FaProjectDiagram /> },
        { title: "Design", text : "Corel Draw, Adobe Photoshot, Figma, Adobe Ilustrator...", icon: <FaPallet /> },
        { title: "Database", text : "MySql, MongoDB, MariaDB, Oracle, PostgreSQL, Cassandra...", icon: <FaDatabase /> },
        { title: "Network & connections", text : "Servers, Proxy Servers, Mail Servers, Application Servers...", icon: <FaGlobe /> },
    ];

    return (
    
        <div className="bg-light">
            <Container className="text-center my-5">
                <div className="pt-5">
                    <h2 className='text-primary'>Find Professionals According to the required Skills</h2>
                </div>
                <Row className="row-cols-1 row-cols-md-3 g-5 p-5">
                    {
                        skills.map((skill, index) => (
                            <Col key={index}>
                                <Card className='h-100 shadow'>
                                    <Card.Title className='text-primary d-inline'> 
                                        <div className="mb-1">
                                            {skill.icon}
                                        </div>
                                        {skill.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {skill.text}
                                    </Card.Text>
                                </Card>
                            </Col>
                        )) 
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Skills;
