import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FetchJobs from '../components/FetchJobs';
import { FaSearch } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';

const FindJobs = () => {

    const categories = [
        { value: 'Full Stack' },
        { value: 'Back-End' }, 
        { value: 'Front-End' },
        { value: 'Software Engineer' },
        { value: 'Design' },
        { value: 'Network & Connections' },
        { value: 'Database' }, 
    ];

    const jobTypes = [
        { value: 'Remote' },
        { value: 'Partially Remote'},
        { value: 'Not Remote' },
    ];

    const timePeriods = [
        { value: 'Full Time Job' },
        { value: 'Part Time Job' },
        { value: 'Freelance' },
    ];

    return (
        <Container>
            <Row>
                <Col md={3} className="d-none d-md-block mt-3" >
                    <h5 className='m-3 fw-bold'>Common tags</h5>
                    <div>
                        <h6 className="fw-bold">Categories</h6>
                        <ListGroup>
                            <ButtonGroup vertical>
                                {
                                categories.map((category, index) => (
                                    <ListGroup.Item id={index} className="border-0">
                                    <Form.Check 
                                        type="checkbox"
                                        id={index}
                                        label={ category.value }
                                    />
                                    </ListGroup.Item>
                                )) 
                                }
                            </ButtonGroup>
                        </ListGroup>
                        <h6 className="fw-bold">Job Type</h6>
                        <ListGroup>
                            {
                                jobTypes.map((jobtype, index) => (
                                    <ListGroup.Item id={index} className="border-0">
                                    <Form.Check 
                                        type="checkbox"
                                        id={index}
                                        label={ jobtype.value }
                                    />
                                    </ListGroup.Item>
                                )) 
                            }
                        </ListGroup>
                        <h6 className="fw-bold">Time Period</h6>
                        <ListGroup>
                            {
                                timePeriods.map((time, index) => (
                                    <ListGroup.Item id={index} className="border-0">
                                    <Form.Check 
                                        type="checkbox"
                                        id={index}
                                        label={ time.value }
                                    />
                                    </ListGroup.Item>
                                )) 
                            }
                        </ListGroup>
                    </div>
                </Col>
                <Col md={9}>
                    <div className='d-flex justify-content-center'>
                        <Form className="d-flex mt-4 w-75">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="rounded-pill"
                                aria-label="Search"
                            />
                            <Button className="rounded-pill"> <FaSearch /> </Button>
                        </Form>
                    </div>
                    <div>
                        <FetchJobs />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FindJobs;