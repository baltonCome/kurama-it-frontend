import { useState, useEffect } from 'react';
import Feedback from './Feedback';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import api from '../services/Api';
import { Rating } from 'react-simple-star-rating';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feedbacks = () => {

    const [feedbacks, setFeedbacks] = useState([]);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    useEffect( () => {
        api.get('/feedback')
        .then((res) => {
            setFeedbacks(res.data.feedbacks)
        })
        .catch(error => console.log(error))
    }, [])

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

        console.log(feedback.rating, feedback.feedback)
        feedbackSent();
        setRating(0);
        setFeedback('')
    }

    const ratings = ["Terrible", " Bad", "Enough", "Good", "Awesome"];

    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 4;
    const seenPages = pageNumber * dataPerPage;
    const pageCount = Math.ceil(feedbacks.length/dataPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }

    return (
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
            { feedbacks && (
                feedbacks
                .slice(seenPages, seenPages + dataPerPage)
                .map((feedback) => (
                <Feedback
                    key={feedback.id}
                    feedback={feedback}
                />
                )))
            }
            <ReactPaginate 
                previousLabel={''}
                nextLabel={''}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'btn'}
                previousLinkClassName={'pageLink'}
                nextClassName={'btn'}
                nextLinkClassName={'pageLink'}
                activeClassName={'active'}
                pageCount={pageCount}
                onPageChange={changePage}
            />
        </Container>
    )
};

export default Feedbacks;
