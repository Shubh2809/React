import logo from './logo.svg';
import './App.css';
import {Button, Container, Row,Col} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Player from './Components/Player'
import ListP from './Components/ListP';
import AddPlayer from './Components/AddPlayer';
import Header from './Components/Header'
import Menu from './Components/Menu';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from 'react';


function App() {


  return (
    
    <div>
      <Router>

      <ToastContainer/>
        <Container>
          <Header/>
            <Row>
              
              <Col md ={4} > 
              <Menu/>
              </Col>
              <Col md ={8} >  
                
              <Route path = "/" component={Home} exact/>
              <Route path = "/add" component={AddPlayer} exact/>
              <Route path = "/view" component={ListP} exact/>

              </Col>
            
            </Row>
        </Container>
      </Router>
    </div>
    
  );
}

export default App;
