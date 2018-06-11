import React, { Component } from 'react';
import './tutor.css';
import {Carousel, PageHeader} from 'react-bootstrap';
import MdPersonPinCircle from 'react-icons/lib/md/person-pin-circle';
import TiContacts from 'react-icons/lib/ti/contacts'
import dummy from '../images/dummy.jpg';

export class Tutor extends React.Component{
    render(){
        return(
            <div className='tutorwrapper'>
            <div className='tutorleft'>
   <PageHeader className='webdemolefttitle'>
 <small>Find A Tutor</small> 
 <br/>Need More Help With Your Studies? Study With Our Tutors.
</PageHeader>;
<div className='webdemodiscription'>
          <h3><MdPersonPinCircle/> Find A Tutor Near You</h3>
          <p className = 'videodiscription' > Meet and study our with our tutors anywhere you like or just come and study with them at NADROS.</p>
          <h3><TiContacts/> Get In Contact With Our Tutors</h3>
          < p className = 'videodiscription' > Get in contact with our tutors and schedule an appointment with them.</p>
            </div>
            </div>
            <div className='tutorright'>
            
             <div className='carouselwrapper'>
            <Carousel>
  <Carousel.Item>
    <div className='carouselcontent'></div>
    <Carousel.Caption>
       <div className='totor'>
      <img src={dummy} className='tutdum'/>
<h1>Joe Moe</h1>
<p>Active Tutor At Nadros</p>
<p>Mathematics -SE</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <div className='carouselcontent1'>
     </div>
    <Carousel.Caption>
      <div className='totor'>
      <img src={dummy} className='tutdum'/>
<h1>Joe Moe</h1>
<p>Active Tutor At Nadros</p>
<p>Mathematics -SE</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
     <div className='carouselcontent2'></div>
    <Carousel.Caption>
       <div className='totor' onClick='/tutor'>
      <img src={dummy} className='tutdum'/>
<h1>Joe Moe</h1>
<p>Active Tutor At Nadros</p>
<p>Mathematics -SE</p>
</div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
            </div>
            </div>
            
        )
    }
}