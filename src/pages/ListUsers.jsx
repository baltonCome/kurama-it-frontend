import React from 'react';
import Navmenu from '../components/Navmenu';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaSearch } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FetchUsers from '../components/FetchUsers';
import FormControl from 'react-bootstrap/FormControl';

const ListUsers = () => {

    return (
        <>
        <Navmenu />
        <Container>
            <Row>
                <div className='d-flex justify-content-center'>
                    <Form className="d-flex mt-4 w-75">
                        <FormControl
                            type="search"
                            placeholder="Search users by skills, location"
                            className="rounded-pill"
                            aria-label="Search"
                        />
                        <Button className="rounded-pill"> <FaSearch /> </Button>
                    </Form>
                </div>
                <div>
                    <FetchUsers />
                </div>
            </Row>
        </Container>
        <Footer />
        </>
        
    )
}

export default ListUsers