import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/auth/Login";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");

render(
  <Router>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </Router>,
  rootElement
);