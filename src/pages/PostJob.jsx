import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const PostJob = () => {
  return (
    <>
        <Container>
            <div className="text-center">
                <h2 className="fw-bold"> Find The Right Professional </h2>
                <p> Try to be precise with the description so you can find the perfect one! </p>
            </div>
            <Row>
                <Col>
                    <h4> Job Info </h4>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <FloatingLabel 
                                controlId='' 
                                label="Job Title"
                                className="mb-3"
                                >
                                <Form.Control type="text"></Form.Control>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel>

                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel>

                            </FloatingLabel>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default PostJob