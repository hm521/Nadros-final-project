import React, { Component } from 'react';
import './section1.css';
import {Grid, Row, Col, Image,Button, Nav, Navbar, Checkbox, NavItem,Panel, NavDropdown, MenuItem, Popover, Tooltip, Modal, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import logo from '../images/logo.png'
const wellStyles = {
    maxWidth: 400,
    margin: '0 auto 10px'
};

export class Section1 extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false

    };
  }
  

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
 render(){
        return(
            <div className='section1'>
        <div className='section1content'>
        <div className='homepageheaderwrapper' align='center'>
        <p className='homepageheader'>"Nadros Is The Most Affordable Way To Study Mathematics For Your Official Exams"</p>
        </div>
        <div className='boxwrapper'>
<div className='boxes'>
          <div className='box1'>
          <div className='sebox'>
     <p className='seboxtitle'>SE</p>
     </div>
     <h1 className='seboxheader1'>Sociology And Economics</h1>
     <p className='mathematics'>Mathematics</p>
    <Button  bsStyle="primary" bsSize="large" className='takethiscoursebtn' onClick={this.handleShow}>
      Take This Course
    </Button>
  
          </div>
          <div className='box2'>
       <div className='lsbox'>
     <p className='lsboxtitle'>LS</p>
     </div>
      <h1 className='seboxheader'>Life Science</h1>
     <p className='mathematics'>Mathematics</p>
          <Button  bsStyle="primary" bsSize="large" className='takethiscoursebtn' href="/comingsoon">
      Take This Course
    </Button>
          </div>
          <div className='box3'>
            <div className='gsbox'>
     <p className='gsboxtitle'>GS</p>
     </div>
      <h1 className='seboxheader'>General Science</h1>
     <p className='mathematics'>Mathematics</p>
          <Button  bsStyle="primary" bsSize="large" href="/comingsoon" className='takethiscoursebtn'>
      Take This Course
    </Button>
          </div>
          </div>
        </div>
        </div>


          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><h1>Sign Up</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={logo} />
<Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Username
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Retype password
    </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Retype-Password" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                   Code
    </Col>
                  <Col sm={10}>
                    <FormControl  placeholder="Payment Code" />
                  </Col>
                </FormGroup>
    
    <p className='moj'>Nadros Requires A One Time Payment Of 10$ In order To Access Nadros Courses<br/>
    After Payment You Will Get Lifetime Access To Nadros Courses.</p>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit"><a href='/se/chapters'>Sign in</a></Button>
    </Col>
  </FormGroup>
</Form>;
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>



        </div>
        )
    }
}    
