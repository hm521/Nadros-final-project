import React, { Component } from 'react';
import './Navbar.css';
import {Button, Nav, Navbar, Checkbox, NavItem,Panel, NavDropdown, MenuItem, Popover, Tooltip, Modal, Form, FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import logo1 from '../images/logo1.png'





export class NavBar extends Component {
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
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div className="Menu">
        < Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img src={logo1} className='logo1'/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
             
              <NavDropdown eventKey={3} title="Sections" id="basic-nav-dropdown"  className='fnt-size'>                
              <MenuItem eventKey={3.1}>MTH-Soiciology Economics</MenuItem>
                <MenuItem eventKey={3.2}>MTH-Life Sciences</MenuItem>
                <MenuItem eventKey={3.3}>MTH-Gneneral Sciences</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/tutor" className='fnt-size fnd-tutr-clr'>
              Find A tutor
      </NavItem>
              <NavItem eventKey={1} href="#" className='fnt-size' >
                Log In
      </NavItem>
              <Button bsStyle="primary" className='fnt-size signup-btn sign-up-pst' onClick={this.handleShow}>Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
    


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
      <Button type="submit" className='zis'>Sign in</Button>
    </Col>
  </FormGroup>
</Form>;
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}


