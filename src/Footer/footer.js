import './footer.css';
import React, { Component } from 'react';
import {Form,FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import IoSocialFacebookOutline from 'react-icons/lib/io/social-facebook-outline'
import { SocialIcon } from 'react-social-icons'
import ko from './footerlogo.png'
import GoogleMapReact from 'google-map-react'
import mark from './marker.png'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Footer extends React.Component{
 static defaultProps = {
     center: {
         lat: 33.894973,
         lng: 35.511785
     },
     zoom: 15
 };
    render(){
        return(
            <div>
                <div className='footer-wrapper'>
                 <a href='/'> <img src={ko} className='footerlogo'/></a>
       
       <div className='footer-map'>
       <div style={{ height: '200px', width:'300px' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.894973}
            lng={35.511785}
            text={'Nadros'}
            src={mark}
          />
        </GoogleMapReact>
      </div>
       </div>

       <div className='footer-list'>
       <ul>
      <li><a href='/tutor'> Find A Tutor</a></li>
      <li><a>Careers</a></li>
      <li><a>Contact Us</a></li>
      <li><a>About</a></li>
      </ul>
       </div>
                        <div className='footer-signup'>
                       
                        <h1 className='coloring'>Sign Up</h1>
                    <Form inline>
                    <FormGroup controlId="formInlineName">
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel></ControlLabel>{' '}
                        <FormControl type="email" placeholder="jane.doe@example.com" />
                    </FormGroup>{' '}
                            <Button type="submit" bsStyle="primary">Sign Up</Button>
                    </Form>
                    <div className='icons'>
                    <SocialIcon url="http://facebook.com" network="facebook" color="white"  />
<SocialIcon url="http://youtube.com" network="youtube" color="white"  />
<SocialIcon url="http://instagram.com" network="instagram" color="white"  />
<SocialIcon url="http://google.com" network="google" color="white"  />
                    </div>
                    </div>
           </div>
                </div>

               
        );
    }
}