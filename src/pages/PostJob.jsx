import { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';

const PostJob = () => {

    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [timePeriod, setTimePeriod] = useState([]);

    const timePeriods = [
        { value: 'Full Time Job', label: 'Full Time Job' },
        { value: 'Part Time Job', label: 'Part Time Job' },
        { value: 'Freelance', label: 'Freelance' },
    ];

    const jobTypes = [
        { value: 'Remote', label: 'Remote' },
        { value: 'Partially Remote', label: 'Partially Remote' },
        { value: 'Not Remote', label: 'Not Remote' },
    ];

    const categories = [
        { value: 'Back-End' },
        { value: 'Front-End' },
        { value: 'Software Engineering' },
        { value: 'Design' },
        { value: 'Network & Connections' },
        { value: 'Database Managment'},
    ];

    useEffect(() => {

        console.log(timePeriod)
    },[timePeriod])

    

    return (
    <>
        <Container>
            <div className="text-center mb-5">
                <h2 className="fw-bold mb-1"> Find The Right Professional </h2>
                <p> Try to be precise with the description so you can find the perfect one! </p>
            </div>
            <Row className="mb-3">
                <Col md={3}>
                    <h4 className='fw-bold'> Job Information </h4>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col md={12} className="mb-3">
                            <FloatingLabel 
                                controlId='' 
                                label="Job Title"
                                className="mb-3"
                                >
                                <Form.Control type="text"></Form.Control>
                            </FloatingLabel>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FloatingLabel
                                controlId='' 
                                label="Job Category"
                                className="mb-3"
                                >
                                <Form.Select > 
                                    {
                                        categories.map((category, index) => (
                                            <option key={index}
                                                value={category.value}
                                                onChange={(e) => setCategory(e.target.value)}> 
                                                {category.value}
                                            </option>
                                        )) 
                                    }
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={6} className="mb-3">
                            <FloatingLabel
                                controlId='' 
                                label="Job SubCategory"
                                className="mb-3"
                                >
                                <Form.Select >
                                    <option
                                        value={subcategory}
                                        onChange={(e) => setSubcategory(e.target.value)}
                                    >
                                    </option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={3}>
                    <h4 className='fw-bold'> Job Type </h4>
                </Col>
                <Col md={9}>
                    <Row>
                        <Select
                            defaultValue={jobType}
                            onChange={setJobType}
                            options={jobTypes}
                        />
                    </Row>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={3}>
                    <h4 className='fw-bold'>Interaction & Location </h4>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col sm className="mb-3">
                            <Select
                                defaultValue={timePeriod}
                                onChange={setTimePeriod}
                                options={timePeriods}
                            />
                        </Col>  
                        <Row>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default PostJob