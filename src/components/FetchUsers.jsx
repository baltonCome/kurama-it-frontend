import { useState, useEffect } from 'react';
import User from './User';
import Row from 'react-bootstrap/Row';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import api from '../services/Api';

const FetchUsers = () => {

    const [users, setUsers] = useState([])

    useEffect( () => {
        api.get('/users')
        .then((res) => {
        setUsers(res.data.users)
        console.log(res.data.users);
        })
        .catch(error => console.log(error))
    }, [])

    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 12;
    const seenPages = pageNumber * dataPerPage;
    const pageCount = Math.ceil(users.length/dataPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }

    return (
        <div>
            <Container>
                <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 p-5">
                    { users && (
                        users
                        .slice(seenPages, seenPages + dataPerPage)
                        .map((user) => (
                        <User
                            key={user.id}
                            user={user}
                        />
                        )))
                    }
                </Row>
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
        </div>
    )
}

export default FetchUsers