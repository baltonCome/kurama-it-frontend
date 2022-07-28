import { useState, useEffect } from 'react';
import User from './User';
import Row from 'react-bootstrap/Row';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import useAxiosPrivate from '../services/useAxiosPrivate';

const FetchUsers = () => {

    const [users, setUsers] = useState([])
    const api = useAxiosPrivate();

    useEffect( () => {

        let mounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try{
                const response = await api.get('/users', {
                    signal: controller.signal
                });
                console.log(response.data);
                mounted && setUsers(response.data.users);
            }catch (err){
                console.error(err);
            }
        }

        getUsers();

        return () => {
            mounted = false;
            controller.abort();
        }
    }, [api])

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