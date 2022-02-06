import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import moment from 'moment';
import ReadMore from 'read-more-react'

const Job = ({ job }) => {

    const required_skills = job.required_skills+'';

    const skills = required_skills.split(' ');
    
    return (
        <Card className="mb-4 mt-4">
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
                    <div className="mb-2">
                        <Badge className="mr-2" pill bg="secondary"> { job.job_type } </Badge>{' '} 
                        <Badge pill bg="info"> {  job.location } </Badge>
                    </div>
                </Card.Subtitle>
                <Card.Text>
                    <ReadMore text= { job.description } readMoreText="Read More!" />
                </Card.Text>
                <div className='mb-2'>
                    <Badge pill bg='warning'> { job.salary } $ </Badge>
                </div>
                {   
                    skills.map((skill) => (
                        <Badge pill bg='success'>
                            {skill}
                        </Badge>
                    )) 
                }           
                <Button variant='primary'> Apply </Button>
            </Card.Body>
        </Card>
    )
}

export default Job;