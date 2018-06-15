import React, { Component } from 'react';
import {NavBar} from '../NavBar/Navbar';
import {Footer} from '../Footer/footer';
import {Popover, Tooltip, Modal, Button} from 'react-bootstrap';
import './sechaptercategories.css';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import TiEdit from 'react-icons/lib/ti/edit'

import {
  goNext,
  subscribe,
  goBack,
  getState
} from './store'
import Chat from '../Chat'


export default class SeFunctions extends React.Component {
       constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
 

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
    const { imageSrc, videoId, title, type } = topic
    this.setState({ videoId, title, index, type, imageSrc, show: true });
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
<div className='firstbox'>
<div className='box-top-part'>
<p className='top-part-tittle'>Inverse Functions</p>
</div>
<div className='box-bottom-part'>
<ul className='list-wrap'>
  <li className='list-size'><a onClick={this.handleShow(0)}><FaPlayCircleO/>Finding the inverse of a function</a></li>
  <li className='list-size'><a onClick={this.handleShow(1)}><FaPlayCircleO/>Excercise- finding the inverse of a function</a></li>
  <li className='list-size'><a onClick={this.handleShow(2)}><FaPlayCircleO/>Domain of a function</a></li>
  <li className='list-size'><a onClick={this.handleShow(3)}><FaPlayCircleO/>Range of a function</a></li>
  <li className='list-size'><a onClick={this.handleShow(4)}><FaPlayCircleO/>Excercise-finding domain and range of a function</a></li>
  
  
</ul>
<Button bsStyle="primary" className='strt-lrning-btn' onClick={this.handleShow(0)}>Start Learning</Button>
</div>
</div>
<div className='firstbox'>
<div className='box-top-part'>
<p className='top-part-tittle'>Composition of functions</p>
</div>
<div className='box-bottom-part'>
<ul className='list-wrap'>
  <li className='list-size'><a onClick={this.handleShow(0)}><FaPlayCircleO/>Finding the inverse of a function</a></li>
  <li className='list-size'><a onClick={this.handleShow(1)}><FaPlayCircleO/>Excercise- finding the inverse of a function</a></li>
  <li className='list-size'><a onClick={this.handleShow(2)}><FaPlayCircleO/>Domain of a function</a></li>
  <li className='list-size'><a onClick={this.handleShow(3)}><FaPlayCircleO/>Range of a function</a></li>
  <li className='list-size'><a onClick={this.handleShow(4)}><FaPlayCircleO/>Excercise-finding domain and range of a function</a></li>
       
  
</ul>
<Button bsStyle="primary" className='strt-lrning-btn'>Start Learning</Button>
</div>
</div>

<div className='firstbox1'>
<div className='box-top-part'>
<p className='top-part-tittle'>Test - Functions</p>
</div>
<div className='box-bottom-part'>
              <ul className='list-wrap'>
<li className='list-size'><a onClick={this.handleShow(0)}><TiEdit/>Take functions exam</a></li></ul>
<Button bsStyle="primary" className='strt-lrning-btn pozi'>Start Learning</Button>
</div>
</div>


<Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { this.state.type === 'video'
            ? <iframe width="870" height="400" src={"https://www.youtube.com/embed/"+this.state.videoId} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            : this.state.type === 'image' 
            ? <img src={this.state.imageSrc} alt={this.state.title}/>
            : <div>dunno what this is... :(</div>
            }
            <div className='prev-next-btn-div'>
        <Button onClick={goBack} bsStyle="primary" className='nxt-btn'>Previous</Button>
            <Button onClick={goNext} bsStyle="primary" className='nxt-btn' >Next</Button>
            
          </div>     <Chat/>
        
          </Modal.Body>
          <Modal.Footer>
          
\
          </Modal.Footer>

        </Modal>
</div>    

                <Footer/>
            </div>
                );
            }
        }