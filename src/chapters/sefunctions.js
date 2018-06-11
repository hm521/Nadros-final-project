import React, { Component } from 'react';
import {NavBar} from '../NavBar/Navbar';
import {Footer} from '../Footer/footer';
import {Panel, ListGroup, ListGroupItem,Tab, Tabs, PageHeader,Popover, Tooltip, Modal, Button} from 'react-bootstrap';
import './sechaptercategories.css';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import TiEdit from 'react-icons/lib/ti/edit'
import ko from './excercise.jpg'
import {
  goNext,
  subscribe,
  getState
} from './store'

export default class SeFunctions extends React.Component {
       constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
   this.noShow = this.noShow.bind(this);
   this.noClose = this.noClose.bind(this);

    this.unsubscribe = subscribe( newState => this.setState(newState) )

    this.state = {
      show: false,
      ...getState()
    };
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow = ( index ) => () => {
    const topic = this.state.topicsList[index]
    if(!topic){
      // no topic found
      throw new Error(`topic ${index} does not exist`)
    }
    const { videoId, title } = topic
    this.setState({ videoId, title, index, show: true });
  }

  noClose() {
    this.setState({ hide: false });
  }

  noShow() {
    this.setState({ hide: true });
  }



  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
                  
                    <div className='Menu'>
                      <NavBar/>
 <div className='webheader'>
 
 <h1 className='h1'><a href="/se/chapters"><FaAngleLeft/>MTH-SE Functions</a></h1>

 </div>                     

            <div className='sefuntions'>
<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Learn" className='theory'>
     <Panel bsStyle="primary" className='se'>
    <Panel.Heading>
      <Panel.Title componentClass="h3">Functions</Panel.Title>
    </Panel.Heading>
  <Panel.Body>

      <ListGroup>
        { this.state.topicsList.map( ( topic, index ) => {
          return <ListGroupItem key={topic.videoId} onClick={this.handleShow(index)}>{topic.title}</ListGroupItem>
        })}
  </ListGroup>
  </Panel.Body>
</Panel>;
  </Tab>
 
 
 
 
 
 
 
 
 <Tab eventKey={2} title="Practice">
     <Panel bsStyle="primary" className='se'>
    <Panel.Heading>
      <Panel.Title componentClass="h3"><TiEdit/>Excercises</Panel.Title>
    </Panel.Heading>
  <Panel.Body>

      <ListGroup>
    <ListGroupItem href="#link1" onClick={this.noShow}>Excercise 1</ListGroupItem>
    <ListGroupItem href="#link2">Excercise 2</ListGroupItem>
    <ListGroupItem href="#link1">Excercise 3</ListGroupItem>
    <ListGroupItem href="#link2">Excercise 4</ListGroupItem>
    <ListGroupItem href="#link1">Excercise 5</ListGroupItem>
    <ListGroupItem href="#link2">Excercise 6</ListGroupItem>
  </ListGroup>
  </Panel.Body>
</Panel>;
  </Tab>

</Tabs>;




 <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+this.state.videoId} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
     
          </Modal.Body>
          <Modal.Footer>
          
        
   
        
            { this.state.index >= this.state.topicsList.length
            ? false
            : <Button onClick={goNext} bsStyle="primary" >Next</Button>
            }
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

<Modal show={this.state.hide} onHide={this.noClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <img src={ko} className='sizee'/>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary">Get Solution</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

 
</div>    

                <Footer/>
            </div>
                );
            }
        }