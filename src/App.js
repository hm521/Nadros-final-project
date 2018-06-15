import React, { Component } from 'react';
import './App.css';
import {NavBar} from './NavBar/Navbar.js';
import {Section1} from './Section1/section1.js';
//import {NavJustified} from './Demo Section/demo.js'
import {Footer} from './Footer/footer.js';
import {Webdemo} from './webdemo/webdemo.js';
import {Tutor} from './Tutor Section/tutor.js'
import {Startlearning} from '../src/startlearningsection/startlearning'

class HomePage extends Component {
  render() {
    return (
      <div className="Menu">
   <NavBar />
<Section1/>

<Webdemo />
 <  Tutor />
 <Startlearning/>
 <Footer/>
      </div>
    );
  }
}

export default HomePage;
