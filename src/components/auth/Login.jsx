import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaMailBulk, FaKey} from 'react-icons/fa';

const Login = () => {

  return (
    <Container className='d-flex justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3'>
      <Card>
        <Card.Header className='text-center' >Login Form</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label> <FaMailBulk/> Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <FaKey/> Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Login