import React, {Component} from 'react'
import {Grid, Row, Thumbnail, Col, Button, Popover, Tooltip, Modal} from 'react-bootstrap'
import './tutorpage.css'
import {NavBar} from '../NavBar/Navbar.js';
import {Footer} from '../Footer/footer.js';
import dummy from '../images/dummy.jpg';

export default class Tutorpage extends React.Component{
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

        return(

<div className='Menu'> 
<NavBar/>
<div className='tutorsgallery'>
                    <Grid>
                        <Row>
                            <Col xs={6} md={4}>
                                <Thumbnail src={dummy} className='tutorimages' alt="242x200">
                                    <h3>Joe Moe</h3>
                                   <ul className='listtutordiscription'>
                                        <li>Active Tutor At Nadros</li>
                                        <li>Located In Beirut</li>
                                        <li>Thaught Chapter 1-5 Mathematics Social Economics Section</li>
                                    </ul>
                                    <Button bsStyle="primary" onClick={this.handleShow}>Get In Contact</Button>&nbsp;
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4}>
                                <Thumbnail src={dummy} className='tutorimages' alt="242x200">
                                    <h3>Joe Moe</h3>
                                    <ul className='listtutordiscription'>
                                        <li>Active Tutor At Nadros</li>
                                        <li>Located In Beirut</li>
                                        <li>Taught Chapter 1-5 Mathematics Social Economics Section</li>
                                    </ul>
                                    <Button bsStyle="primary" onClick={this.handleShow}>Get In Contact</Button>&nbsp;
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4}>
                                <Thumbnail src={dummy} className='tutorimages' alt="242x200">
                                    <h3>Joe Moe</h3>
                                    <ul className='listtutordiscription'>
                                        <li>Active Tutor At Nadros</li>
                                        <li>Located In Beirut</li>
                                        <li>Taught Chapter 1-5 Mathematics Social Economics Section</li>
                                    </ul>
                                    <Button bsStyle="primary" onClick={this.handleShow}>Get In Contact</Button>&nbsp;
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4}>
                                <Thumbnail src={dummy}  className='tutorimages' alt="242x200">
                                    <h3>Joe Moe</h3>
                                    <ul className='listtutordiscription'>
                                        <li>Active Tutor At Nadros</li>
                                        <li>Located In Beirut</li>
                                        <li>Taught Chapter 1-5 Mathematics Social Economics Section</li>
                                    </ul>
                                       <Button bsStyle="primary" onClick={this.handleShow}>Get In Contact</Button>&nbsp;
                                </Thumbnail>
                            </Col>
                            <Col xs={6} md={4}>
                                <Thumbnail src={dummy} className='tutorimages' alt="242x200">
                                    <h3>Joe Moe</h3>
                                    <ul className='listtutordiscription'>
                                        <li>Active Tutor At Nadros</li>
                                        <li>Located In Beirut</li>
                                        <li>Taught Chapter 1-5 Mathematics Social Economics Section</li>
                                    </ul>
                                    <Button bsStyle="primary" onClick={this.handleShow}>Get In Contact</Button>&nbsp;
                                </Thumbnail>
                            </Col>
                        </Row>
                    </Grid>;



                    <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Email:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <div>example@gmail.com</div>

      
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
</div>
  <Footer/>              
</div>
        )
    }
}
