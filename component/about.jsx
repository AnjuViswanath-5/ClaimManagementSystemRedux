import React, { Fragment } from 'react'
import Select from 'react-select';
import { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import axios from 'axios';

class AboutComponent extends React.Component {

    constructor(props) {
        super(props);
        
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
          username: localStorage.getItem('loggedinUser'),
            date:date
          }
    
         
        }
      
        
   render() {   
      return ( 
          <Fragment>          
         <Navbar bg="dark" variant="dark"  >
         <h6 style={{color: "white"}}>Claim Management System</h6>
        <Nav className="ml-auto">
      <Nav.Link >Welcome User!! {this.state.username}</Nav.Link>
      <Nav.Link >{this.state.date}</Nav.Link>
      <Nav.Link onClick={() => browserHistory.push('login')}>Log Out</Nav.Link>
        </Nav>
        </Navbar> 
      
      <Navbar bg="dark" variant="dark"  >
        <Nav className="mr-auto">
      <Nav.Link onClick={() => browserHistory.push('home')}>Home</Nav.Link>
      <Nav.Link onClick={() => browserHistory.push('viewclaimsummary')} >Update Claim</Nav.Link>
      <Nav.Link style={{color: "red"}} href="#about">About</Nav.Link>
      <Nav.Link onClick={() => browserHistory.push('contact')} >Contact Us</Nav.Link>
        </Nav>
        </Navbar> 
        <div >
            <h2> About Us</h2>
        </div>
        <div className="fixed-footer">
            <div className="container_hf">Copyright &copy; 2020</div>        
        </div>
</Fragment>
 
      );
   }
}

export default AboutComponent;   
