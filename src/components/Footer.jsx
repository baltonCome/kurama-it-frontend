import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaUser } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaGavel } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaMailchimp } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='bg-info p-5'>
            <Container>
                <Row className='d-flex justify-content-center text-center'>
                    <Col md> 
                        <div>
                            <FaUser /> Balton Comé
                        </div>
                        <div>
                            <FaCode /> Web Developer
                        </div>
                        <div>
                            <FaLocationArrow /> Maputo, Mozambique
                        </div>
                    </Col>
                    <Col md={{ order: 'last' }}>
                        <div>
                            <FaLinkedin /> LinkedIn
                        </div>
                        <div>
                            <FaGithub /> GitHub
                        </div>
                        <div>
                            <FaMailchimp />BaltonCome@outlook.com
                        </div> 
                    </Col>
                    <Col md>
                        <div>
                            <FaGavel /> MIT License
                        </div>
                        <div>
                            2022 KuramaIT, <FaLaravel /> LaReact :)<FaReact />
                        </div>
                     </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
