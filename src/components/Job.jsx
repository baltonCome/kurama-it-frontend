import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import moment from 'moment';
import ReadMore from 'read-more-react';

const Job = ({ job }) => {

    const required_skills = job.required_skills+'';
    const skills = required_skills.split(',');
    
    return (
        
        <Card className="my-4">
            <Card.Body>
                <Card.Title> 
                    <div className="h5">
                        { job.title }
                    </div> 
                </Card.Title>
                <Card.Subtitle>
                    <div className="text-muted my-2 font-weight-light">
                        { job.user.name}{',  '} { moment(job.created_at).fromNow() }!
                    </div>
                    <h5 className="mb-2">
                        <Badge className="mr-2" pill bg="secondary"> { job.job_type } </Badge>{' '} 
                        <Badge pill bg="info"> {  job.location } </Badge>
                    </h5>
                </Card.Subtitle>
                <Card.Text>
                    <ReadMore text= { job.description } readMoreText="Read More!" />
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
                </div>
                <div className='my-2'>
                    <Button variant='primary'> Apply </Button>
                </div>        
            </Card.Body>
        </Card>
    )
}

export default Job;