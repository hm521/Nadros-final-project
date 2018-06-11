import './footer.css';
import React, { Component } from 'react';
import {Form,FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import IoSocialFacebookOutline from 'react-icons/lib/io/social-facebook-outline'
import GoogleMapReact from 'google-map-react';
import logo from '../images/logo1.png'
import { SocialIcon } from 'react-social-icons';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MARKER_SIZE = 40;
const greatPlaceStyle = {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    left: -MARKER_SIZE / 2,
    top: -MARKER_SIZE / 2
}

export class Footer extends React.Component{
static defaultProps = {
    center: {
        lat: 33.894979,
        lng: 35.510956
    },
    zoom: 16
};

    render(){
        return(
            <div className='footerdiv'>
                <div className='footerleft'>
            <img src={logo} className='footerlogo'/>            
                <div className='icons'>
                 <h1>Sign Up</h1>
                    <Form inline>
                    <FormGroup controlId="formInlineName">
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" placeholder="jane.doe@example.com" />
                    </FormGroup>{' '}
                            <Button type="submit" bsStyle="primary">Sign Up</Button>
                    </Form>
<SocialIcon url="http://facebook.com" network="facebook" color="white"  />
<SocialIcon url="http://youtube.com" network="youtube" color="white"  />
<SocialIcon url="http://instagram.com" network="instagram" color="white"  />
<SocialIcon url="http://google.com" network="google" color="white"  />
                </div>
                </div>
                </div>
                <div className='h'></div>
               <div className='i'></div>
               <div className='j'></div>
               <div className='k'></div>
        )
    }
}