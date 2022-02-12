import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Profiles from '../assets/images/profiles.svg';
import BestMatch from '../assets/images/bestmatch.svg';
import Post from '../assets/images/post.svg';

const ForEmployers = () => {

    return (

    <Container className="text-center py-5">
        <h2 className='text-primary'> If you are an employer </h2>
        <p className=""> Post a jod and find based on your requirements the professional who fits the best for the contract, internship or even freelance!</p>
        <Row className="row-cols-1 row-cols-md-3 g-5">
            <Col>
                <Card className='h-100 bg-light border-light p-3 shadow'>
                    <img src={Profiles} alt="" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Go through Profiles</Card.Title>
                        <Card.Text>
                            Check the skills, previous experiences of every user and what they have done!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='h-100 bg-light border-light p-3 shadow'>
                    <img src={BestMatch} alt="" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Find the best Match</Card.Title>
                        <Card.Text>
                            Get the best candidates based on what kind of professional you are searching!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='h-100 bg-light border-light p-3 shadow'>
                    <img src={Post} alt="" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Post jobs</Card.Title>
                        <Card.Text>
                            And you will see the best professionals from anywhere applying!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
};

export default ForEmployers;
