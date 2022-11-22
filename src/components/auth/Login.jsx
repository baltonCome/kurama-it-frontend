import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMailBulk, FaKey } from 'react-icons/fa';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/Api';
import useAuth from '../../services/useAuth';
import Logo from '../../assets/images/login.svg';
import Kurama from '../../assets/images/KuramaIT.png'; 
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const LOGIN_URL = '/login'

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { setAuth } = useAuth();
  const [email, setEmail] = useState('') ;
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
      console.log(response.data)
      console.log(response.data.token)
      setAuth( response.data )
      setSuccess(true);  
      //setPassword('');
      //setEmail('');
      navigate(from, {replace: true});
    } catch (error) {
      if(error.response){
        if(error.response.status === 401){
          setErrorMsg("Unrecognized Credentials!");
          setSuccess(false);
        }else{
          setErrorMsg("Error on server, try again later");
          setSuccess(false);
        }
      }else if(error.request){
        setErrorMsg("No Response from server, try again later");
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
    <Container style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
      <Row className="bg-light col-lg-9">
        <Col className="d-none d-md-block">
          <div className='mb-4'>
            <img
              className='img-fluid'
              src={Kurama} 
              alt="KuramaIT" 
              width="250"
            />
          </div>
         <div>
            <img
              className='img-fluid'
              src={Logo} 
              alt="KuramaIT" 
              width="250"
            />
          </div>
        </Col>
        <Col>  
          <Card className="border-0 bg-light">
            <Card.Header className='text-center' >Login Form</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit} className="row">
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
                      className="rounded-0 border-0"
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
                      className="rounded-0 border-0"
                    />
                  </Form.Group>
                  <Button className="rounded-0" variant="primary" type="submit">
                    Login
                  </Button>
                  <p className="text-center" >No Account? <NavLink className="link-primary mx-2" to="/register"> Register
                        </NavLink></p>
                </Form>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Login