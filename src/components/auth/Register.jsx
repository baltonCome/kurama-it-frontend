import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFileSignature } from 'react-icons/fa';
import { FaUserNinja, FaMailBulk, FaKey, FaLock } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/Api';

const NAME_REGEX = /^[a-zA-Z][a-zA-Z ]{1,50}$/;
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {

  const[name, setName] = useState('');
  const[validName, setValidName] = useState(false);

  const[user, setUser] = useState('');
  const[validUser, setValidUser] = useState(false);

  const[email, setEmail] = useState('');

  const[password, setPassword] = useState('');
  const[validPassword, setValidPassword] = useState(false);

  const[match, setMatch] = useState('');
  const[validMatch, setValidMatch] = useState(false);

  const[success, setSuccess] = useState(false);
  const[errorMsg, setErrorMsg] = useState('');

  const error = () => 
    toast.error(errorMsg, {
      position: "top-center"
    });

  const dataSubmited = () => 
    toast.warn("User Registed!", {
        position: "top-center"
    });

  const validNameField = () => 
    toast.warn("Only Letters allowed for name. [2-50] characters", {
        position: "top-center"
    });

  const validUserField = () => 
    toast.warn("Only letters, Numbers, underscores and ifens allowed for Username. [4-24] characters", {
        position: "top-center"
    });

  const validPasswordField = () => 
    toast.warn("Password must have a lowercase, a uppercase and a number. [8-24] characters!", {
        position: "top-center"
    });

  const validMatchField = () => 
    toast.warn("Password confirmation must match the password!", {
        position: "top-center"
    });

  useEffect(() => {

    setValidName(NAME_REGEX.test(name));
  },[name])

  useEffect(() => {

    setValidUser(USER_REGEX.test(user));
  },[user])

  useEffect(() => {

    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === match);
  },[password, match])

  const handleSubmit = async (e) =>{

    e.preventDefault();

    if (!validName){
      validNameField();
      return
    }else if (!validUser){
      validUserField();
      return
    }else if (!validPassword){
      validPasswordField();
      return
    }else if (!validMatch){
      validMatchField();
      return
    }

    if(!NAME_REGEX.test(name) || !USER_REGEX.test(user) || !PWD_REGEX.test(password)){
      error();
      return
    }

    try{
      const response = await api.post(REGISTER_URL, 
      JSON.stringify({ name, email, password, password_confirmation: match , username: user }),
      {
        headers: {'Content-Type' : 'application/json' },
        withCredentials:true
      })
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response))
      setSuccess(true);
    }catch(error){
      setSuccess(false)
      if(error.response){
        if(error.response.status === 422){
          setErrorMsg("Email or Username already taken, try to change and try again!");
        }else{
          setErrorMsg("Error on server, try again later")
        }
      }else if(error.request){
        setErrorMsg("No Response from server, try again later")
      }else if(error.response.status === 422){
        setErrorMsg("Email or Username already taken, try to change and try again!");
      }else{
        setErrorMsg("Unknown error!")
      }
    }
    success ? dataSubmited() : error();
  }
 
  return (
    <>
    <ToastContainer />
    <Container className='d-flex justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3'>
      <Card>
        <Card.Header className='text-center' >Register Form</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor='name'> 
                <FaFileSignature/> Name
              </Form.Label>
              <Form.Control 
                id="name"
                autoComplete='off' 
                type="text"
                placeholder="Enter Your Name"
                required
                aria-invalid={validName ? "false" : "true"}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username">  
                <FaUserNinja/> Choose A Username
              </Form.Label>
              <Form.Control 
                id='username'
                type="text" 
                placeholder="Enter Username" 
                autoComplete='off' 
                required
                onChange={(e) => setUser(e.target.value)}
                aria-describedby="nidnote"
              />
              <Form.Text className="text-muted">
                The choosen username will appear whenever you interact in our Website.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email"> 
                <FaMailBulk/> Email address
              </Form.Label>
              <Form.Control 
                id="email"
                type="email" 
                placeholder="Enter email" 
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="password"> <FaKey/> Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-describedby="pwdnote"
              />
              <Form.Text className="text-muted">
                Choose a strong password!
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="confirm_pwd"> <FaLock/> Confirm Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password Confirmation" 
                id="confirm_pwd"
                onChange={(e) => setMatch(e.target.value)}
                required
                aria-describedby="confirmnote"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </>
  )
}

export default Register