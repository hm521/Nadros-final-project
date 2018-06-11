import React, { Component } from 'react';
import './startlearning.css';
import {Button} from 'react-bootstrap';

export class Startlearning extends React.Component{
    render(){
        return(
            <div className='startlearningdiv'>
            <h1 className='startlearningh1'>What Are You Waiting For?Join Our Community Now</h1>
          
    <Button bsStyle="primary" bsSize="large" className='startlearningnowbutton' href='/startlearning'> 
      Start Learning Now  
  </Button>
  </div>
        );
    }
}