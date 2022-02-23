import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaMailBulk, FaKey } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/Api';
import AuthContext from '../../services/AuthProvider';

const LOGIN_URL = '/login'

const Login = () => {

  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const error = () => 
  toast.error(errorMsg, {
    position: "top-center"
  });

  const userLogged = () => 
  toast.success("Login Successfuly!", {
    position: "top-center"
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await api.post(LOGIN_URL,
        JSON.stringify({email , password}),
        {
          Headers: {'Content-Typer' : 'application/json'},
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response))
      const accessToken = response?.data?.accessToken;
      setAuth({ email, password, accessToken })
      setSuccess(true);
      setPassword('');
      setEmail('');
    } catch (error) {
      if(error.response){
        if(error.response.status === 401){
          setErrorMsg("Unrecognized Credentials!");
          setSuccess(false);
        }else{
          setErrorMsg("Error on server, try again later")
          setSuccess(false);
        }
      }else if(error.request){
        setErrorMsg("No Response from server, try again later")
        setSuccess(false);
      }else{
        setErrorMsg("Unknown error!");
        setSuccess(false);
      }
    }
    success ? userLogged() : error();
  }

  return (
    <>
    <ToastContainer />
    <Container className='d-flex justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3'>
      <Card>
        <Card.Header className='text-center' >Login Form</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email"> 
                <FaMailBulk/> Email address
              </Form.Label>
              <Form.Control 
                type="email" 
                id="email"
                placeholder="Enter email" 
                autocomplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password"> <FaKey/> Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export default Login