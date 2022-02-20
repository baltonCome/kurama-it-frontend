import React from 'react';
import { useState } from "react";
import { Rating } from 'react-simple-star-rating';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SendFeedback = ({ onFeedback }) => {

    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const requiredFields = () => 
    toast.warn("Make sure to rate and give a feedback, those fields are required!", {
        position: "top-center"
    });
    const feedbackSent = () => 
    toast.success("Your feeedback was sent!", {
        position: "top-center"
    });


    const handleRating = (rate) => {

        setRating(rate)
    }

    const handleFeedback = (e) => {

        e.preventDefault()

        if(!feedback || rating === 0 ){
            
            requiredFields();
            return
        } 

        onFeedback({rating, feedback})
        feedbackSent();
        setRating(0);
        setFeedback('')
    }

    const ratings = ["Terrible", " Bad", "Enough", "Good", "Awesome"];

    return (
        <div>   
            <Container>
                <ToastContainer />
                <div className="col-md-8 offset-md-2">
                    <Form onSubmit={handleFeedback}>
                        <Form.Label>Rate Us!</Form.Label>
                        <Form.Group className="mb-3">
                            <Rating 
                                onClick={handleRating} 
                                ratingValue={rating} 
                                showTooltip 
                                tooltipArray={ratings} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Give us your feedback here!</Form.Label>
                            <textarea value={feedback} 
                                placeholder="Your Feedback" 
                                className="form-control" 
                                name="" id="" 
                                rows="4"
                                onChange={(e) => setFeedback(e.target.value)}
                                >
                            </textarea>
                        </Form.Group>
                        <Button className="mb-3" type="submit">Submit</Button>
                    </Form>
                </div>
            </Container>
        </div>   
    )
};

export default SendFeedback;
