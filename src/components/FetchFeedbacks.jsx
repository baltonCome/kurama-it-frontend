import { useState } from 'react';
import Feedback from './Feedback';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';

const FetchFeedbacks = ({ feedbacks }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 4;
    const seenPages = pageNumber * dataPerPage;
    const pageCount = Math.ceil(feedbacks.length/dataPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }

    return (
        <Container>
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

export default FetchFeedbacks;
