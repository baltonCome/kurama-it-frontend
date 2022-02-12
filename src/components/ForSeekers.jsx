import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Network from '../assets/images/network.svg';
import Skills from '../assets/images/skills.svg';
import Apply from '../assets/images/apply.svg';

const ForSeekers = () => {
  return (
    <Container className="text-center">
        <h2 className='text-primary'> If you are searching for a Job </h2>
        <p>Work on your profile, expand your potential network, check the jobs available and you may end up living a dream!</p>
        <Row className="row-cols-1 row-cols-md-3 g-5">
            <Col>
                <Card className='h-100 bg-light border-light p-3 shadow'>
                    <img src={Network} alt="" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Expand Your Network</Card.Title>
                        <Card.Text>
                            Show the best of you as a professional of your area, let the recruiters thirsty!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='h-100 bg-light border-light p-3 shadow'>
                    <img src={Skills} alt="" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Post Your Skills</Card.Title>
                        <Card.Text>
                            Showing your creativity, past projects and previous experiences!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col> 
            <Col>
                <Card className='h-100 bg-light border-light p-3 shadow'>
                    <img src={Apply} alt="" />
                    <Card.Body>
                        <Card.Title className='text-primary'>Apply for Jobs</Card.Title>
                        <Card.Text>
                            If you see a job matching your skills, don't hesitate. GO FOR IT!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
};

export default ForSeekers;