import React from 'react';
import Feedback from './Feedback';

const FetchFeedbacks = ({ feedbacks }) => {

    return (
        <>
        { feedbacks ? (feedbacks.map((feedback) => (
            <Feedback
                key={feedback.id}
                feedback={feedback}
            />
            ))) : (' There are no Feedbacks to show! ')
        }
        </>
    )
};

export default FetchFeedbacks;
