import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Profiles from '../assets/images/profiles.svg';
import BestMatch from '../assets/images/bestmatch.svg';
import Post from '../assets/images/post.svg';

const ForEmployers = () => {

    const infos = [

        { title: "Go through Profiles", text : "Check the skills, previous experiences of every user and what they have done!", img: Profiles },
        { title: "Find the best Match", text : "Get the best candidates based on what kind of professional you are searching!", img: BestMatch },
        { title: "Post jobs", text : "And you will see the best professionals from anywhere applying!", img: Post },
    ];

    return (

        <Container className="text-center py-5" id="employer">
            <h2 className='text-primary'> If you are an employer </h2>
            <p className=""> Post a jod and find based on your requirements the professional who fits the best for the contract, internship or even freelance!</p>
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

export default ForEmployers;
