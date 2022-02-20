import { useState } from 'react'
import ReactPaginate from 'react-paginate';

const ItemsPagination = ({ data }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 5;
    const seenPages = pageNumber * dataPerPage;
    const pageCount = Math.ceil(data.length/dataPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }


  return (
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
  )
}

export default ItemsPagination