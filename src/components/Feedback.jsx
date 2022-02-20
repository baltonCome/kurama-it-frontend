import React from 'react';
import Card from 'react-bootstrap/Card'
import moment from 'moment';
import ReadMore from 'read-more-react';
import Container from 'react-bootstrap/Container';
import { Rating } from 'react-simple-star-rating';
import Button from 'react-bootstrap/Button';

const Feedback = ({ feedback }) => {

    const ratings = ["Terrible", " Bad", "Enough", "Good", "Awesome"];

    return (
    
        <Container>
            <Card className="my-4 p-3 bg-light">
                <Card.Body>
                    <Card.Title> 
                        <div className="h5">
                            { feedback.user.username }
                        </div> 
                    </Card.Title>
                    <Card.Subtitle>
                       <div className="h5">
                            <Rating 
                                ratingValue={ feedback.rating } 
                                readonly={true}
                                allowHalfIcon={true}
                                tooltipArray={ratings}
                            />
                        </div> 
                    </Card.Subtitle>
                    <Card.Text>
                        <ReadMore text= { feedback.testimony } readMoreText="Read More!" />
                        <div className="text-muted my-2 font-weight-light">
                            { moment(feedback.created_at).fromNow() }!
                            <Button variant='primary' className="rounded-pill float-end"> Delete </Button>
                        </div>
                    </Card.Text>    
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Feedback;
