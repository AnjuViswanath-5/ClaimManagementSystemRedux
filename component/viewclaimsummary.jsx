/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import { Navbar } from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Table} from  'react-bootstrap';
import {  Link, browserHistory  } 
from 'react-router';
import { connect } from "react-redux";
import { fetchClaimList } from "../actions/claimListAction.js";


class ViewClaimSummary extends React.Component {
  constructor(props){
   
    super(props);

  var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  this.state = {
    claimList: [],
    date: date,
    username: localStorage.getItem('loggedinUser')
};

}


componentDidMount(){
  this.props.dispatch(fetchClaimList());
 }


   render() {  
     
const { error, loading, claimList } = this.props;
    if(!loading){
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
      <Nav.Link  style={{color: "red"}} onClick={() => browserHistory.push('viewclaimsummary')} >Update Claim</Nav.Link>
      <Nav.Link onClick={() => browserHistory.push('about')}>About</Nav.Link>
      <Nav.Link onClick={() => browserHistory.push('contact')}>Contact Us</Nav.Link>
        </Nav>
        </Navbar> 
      
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Claim Number</th>
            <th>Claim Type</th>
            <th>Claim Programs</th>
            <th>Claim Start Date</th>
            <th>Claim End Date</th>
            <th></th>
          </tr>
        </thead>
  
      <tbody>
       {/* {this.state.claimList} */}

       { 
            claimList.map(u =>

              <tr>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.claimno}</td>
              <td >{u.claimtype}</td>
              <td >{u.claimdesc}</td>
              <td>{u.claimstartdate}</td>
              <td>{u.claimenddate}</td>
              <td><Link to={{
              pathname: 'updateclaim',
              state: [{empid: u.id, empname: u.name ,claimno:u.claimno,claimtype:u.claimtype,
              claimdesc:u.claimdesc,claimstartdate:u.claimstartdate,claimenddate:u.claimenddate,username:this.state.username}],
              }}> Update </Link></td>
              </tr>
            )
       }       
      </tbody>
  
  </Table>
 
  <div className="fixed-footer">
            <div className="container_hf">Copyright &copy; 2020</div>        
        </div>
 </Fragment>
      );
      }
      else{
        return <div>Loading...</div>;
      }
   }
}

const mapStateToProps = (state) =>{
  console.log("state ",state);
  return{
    claimList: state.claim.items,
    loading: state.claim.loading,   
    error: state.claim.error
  };
}


export default connect(mapStateToProps)(ViewClaimSummary);


  
