import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './services/AuthProvider';

const rootElement = document.getElementById("root");

render(
  
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>,
  rootElement
);