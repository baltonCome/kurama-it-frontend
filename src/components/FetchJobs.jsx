import { useState } from 'react';
import Job from './Job';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
 
const FetchJobs = ({ jobs }) => {

  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 4;
  const seenPages = pageNumber * dataPerPage;
  const pageCount = Math.ceil(jobs.length/dataPerPage);

  const changePage = ({selected}) =>{
    setPageNumber(selected);
  }

  return (
    <Container>
      { jobs && (
          jobs
          .slice(seenPages, seenPages + dataPerPage)
          .map((job) => (
          <Job
            key={job.id}
            job={job}
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
}

export default FetchJobs;