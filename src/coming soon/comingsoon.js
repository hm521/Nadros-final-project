import React, { Component } from 'react';
import './comingsoon.css'
import {Button, ButtonToolbar} from 'react-bootstrap'

export default class Comingsoon extends React.Component{
    render(){
        return(
<div className='comingsoon'>
<div className='wrapper'>
<h1 className='h11'>Coming Soon</h1>

    <Button bsStyle="primary" bsSize="large" href='/' className='button'>
      Go Back
    </Button>

</div>
</div>


        );
    }
}