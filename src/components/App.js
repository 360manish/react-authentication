import Signup from "./Signup";
import { Component } from "react";
import { BrowserRouter as Router, Route , Routes, Link} from "react-router-dom";
import { Container } from "react-bootstrap";
import AuthProvider from "../context/AuthContex";
import Dashboard from "./Dashboard";
import Login from './Login'
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return(
  <Container
    className="d-flex align-item-center justify-conten-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path='/'  element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route exact path='/update-profile'  element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/>
            <Route exact path="/signup" element={<Signup/>} />
            <Route exact path="login" element={<Login/>}/>
            <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  </Container>)
}

export default App;
