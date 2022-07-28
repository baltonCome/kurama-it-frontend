import React from 'react';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import moment from 'moment';
import ReadMore from 'read-more-react';
import Container from 'react-bootstrap/Container';

const Job = ({ job }) => {

    if(job){

        const required_skills = job.required_skills+''; 
        const skills = required_skills.split(',');
        
        return (
            
            <Container>
                <Card className="my-4 p-3 bg-light border-0">
                    <Card.Body>
                        <Card.Title> 
                            <div className="h5">
                                { job.title }
                                <div className="text-muted my-2 font-weight-light float-end small">
                                { job.user.username}{',  '} { moment(job.created_at).fromNow() }!
                                </div>
                            </div>  
                        </Card.Title>
                        <Card.Subtitle>
                            
                            <h5 className="mb-2">
                                <Badge className="mr-2" pill bg="secondary"> { job.job_type } </Badge>{' '} 
                                <Badge pill bg="info"> {  job.location } </Badge>
                            </h5>
                        </Card.Subtitle>
                        <Card.Text>
                            <ReadMore text= { job.description } readMoreText="Read More!"/>
                        </Card.Text>
                        <h4 className='mb-2'>
                            <Badge pill bg='warning' className="mr-2"> { job.salary } $ </Badge>
                        </h4>
                        <div>
                            {   
                                skills.map((skill) => (
                                    <Badge pill bg='success' style = {{ margin: 2 }}>
                                        {skill}
                                    </Badge>
                                )) 
                            } 
                            <Button variant='primary' className="float-end"> Apply </Button>
                        </div>  
                    </Card.Body>
                </Card>
            </Container>
        )
    }else{
        return "";
    }
}

export default Job;