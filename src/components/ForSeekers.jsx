import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Network from '../assets/images/network.svg';
import Skills from '../assets/images/skills.svg';
import Apply from '../assets/images/apply.svg';

const ForSeekers = () => {

    const infos = [

        { title: "Expand Your Network", text : "Show the best of you as a professional of your area, let the recruiters thirsty!", img: Network },
        { title: "Post Your Skills", text : "Showing your creativity, past projects and previous experiences!", img: Skills },
        { title: "Apply for jobs", text : "If you see a job matching your skills, don't hesitate. GO FOR IT!", img: Apply },
    ];

    return (
    <Container className="text-center">
        <h2 className='text-primary'> If you are searching for a Job </h2>
        <p>Work on your profile, expand your potential network, check the jobs available and you may end up living a dream!</p>
        <Row className="row-cols-1 row-cols-md-3 g-5">
            {
                infos.map((info, index) => (
                    <Col key={index}>
                        <Card className='h-100 bg-light border-light p-3 shadow'>
                            <img src={info.img} alt="" />
                            <Card.Title className='text-primary'> 
                                {info.title}
                            </Card.Title>
                            <Card.Text>
                                {info.text}
                            </Card.Text>
                        </Card>
                    </Col>
                )) 
            }
        </Row>
    </Container>
    )
};

export default ForSeekers;