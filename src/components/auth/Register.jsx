import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFileSignature } from 'react-icons/fa'
import { FaUserNinja, FaMailBulk, FaKey, FaLock } from 'react-icons/fa'

const Register = () => {

  return (
    <Container className='d-flex justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3'>
      <Card>
        <Card.Header className='text-center' >Register Form</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label> <FaFileSignature/> Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <FaUserNinja/> Choose A Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
              <Form.Text className="text-muted">
                The choosen username will appear whenever you interact in our Website.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <FaMailBulk/> Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <FaKey/> Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                Choose a strong password!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> <FaLock/> Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password Confirmation" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Register