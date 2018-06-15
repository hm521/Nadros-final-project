import React, { Component } from 'react';
import './sechapters.css';
import {NavBar} from '../NavBar/Navbar'
import {Footer} from '../Footer/footer'
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import {Tab, Tabs,Panel, ProgressBar, Button} from 'react-bootstrap'


export default class SeChapters extends React.Component {
        constructor(props, context) {
                super(props, context);

                this.handleSelect = this.handleSelect.bind(this);

                this.state = {
                        key: 1,
                        open:true
                };
        }

        handleSelect(key) {
                alert(`selected ${key}`);
                this.setState({
                        key
                });
        }

        
        render() {
                return (
<div className='Menu'>
<NavBar/>


<div className='webheader'>
 <h1 className='h1'><a href="/"><FaAngleLeft/>MTH-SE Chapters</a></h1>
 </div> 
 <div className='toytl'>
 <div className='divtop'>
 <div className='textarea'>
 <p> Start Your Learning Journey</p>
 <h1>Mathematics - Sociology And Economics</h1>
 <Button bsStyle="primary" className='strt-lrng-btn'>Start Learning</Button>
 </div>
 </div>
 </div>
 <div className='sechapterswrapper'>
<div className='sechapters'>
<div className="a" href="/">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters' href="/se/chapters/functions">Functions<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
</div>
</div>
<div className="a">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters'>Compound<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>
</div>
</div>
<div className="a">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters'>Statistics<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>

</div>
</div>
<div className="a">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters'>Probability<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>

</div>
</div>
<div className="ac">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters'>Probability<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>

</div>
</div>
</div>
</div>

<div className='othersection'>


<div className='kk'>
<div className='lssection'>
<div className='circle'>
<p className='circlelogo'>LS</p>
</div>
<a className='titlebox' href='/comingsoon'>MTH-Life Sciences</a>
</div>
<div className='gssection'>
<div className='circle'>
<p className='circlelogo'>GS</p>
</div>
<a className='titlebox'  href='/comingsoon'>MTH-Life Sciences</a>
</div>
</div>

</div>
<Footer/>
</div>
                );
            }
        }
