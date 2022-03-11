import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const User = ({ user }) => {

    return (
        <Col>
            <Card className='h-100'>
                <Card.Img 
                    variant="top" 
                    src="holder.js/100px180?text=Image cap" 
                />
                <Card.Body>
                    <Card.Title className="fw-bold text-center">
                        { user.username }
                    </Card.Title>
                    <Card.Text className="text-center">
                        { user.skills }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default User;