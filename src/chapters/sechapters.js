import React, { Component } from 'react';
import './sechapters.css';
import {NavBar} from '../NavBar/Navbar'
import {Footer} from '../Footer/footer'
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import {Tab, Tabs,Panel, ProgressBar} from 'react-bootstrap'

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
<div className='tester'>
<div className='top-part'>
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<h1 className='h521'><h1><a>Functions</a></h1>
<br/><small>0 out of 10 complete</small>
</h1>
<ProgressBar bsStyle="success" now={40} />
</div>
<div className='tabs'>
<ul className='list'>
  <ul>
    1.
    <a>Inverse Functions</a>
  </ul>
 <ul>
   2.
    <a>Finding The Domain Of a function.</a>
  </ul>
  <ul>
    3.
    <a>Adding And Subtracting.</a>
  </ul>
<ul>
  4.
    <a>Finding The Range.</a>
  </ul>
</ul>
</div>
</div>



<div className='sechapters'>
<div className="a" href="/">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters' href="/se/chapters/functions">Functions<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain Of a function.</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions.</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='third'>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Finding The Range</a></ul>
</div>
</div>
</div>
<div className="a">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters'>Compound Interest<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain Of a function.</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions.</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>
<div className='third'>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Finding The Range</a></ul>
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
<ul><a className='sections'>Finding The Domain Of a function.</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions.</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>
<div className='third'>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Finding The Range</a></ul>
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
<ul><a className='sections'>Finding The Domain Of a function.</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions.</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>
<div className='third'>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Finding The Range</a></ul>
</div>
</div>
</div>
<div className="a">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters'>Sequence<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain Of a function.</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions.</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>
<div className='third'>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Finding The Range</a></ul>
</div>
</div>
</div>
<div className="a">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters'>Economic Function<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain Of a function.</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions.</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>
<div className='third'>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Finding The Range</a></ul>
</div>
</div>
</div>
<div className="b">
<div className='se-logo'>
<p className='se-inside-logo'>SE</p>
</div>
<a className='allthechapters'>Antiderivaties<p className='p'>0 Of 40 Complete</p></a>
<div className='ulwrapper'>
<div className='first'>
<ul><a className='sections'>Inverse Functions</a></ul>
<ul><a className='sections'>Finding The Domain Of a function.</a></ul>
<ul><a className='sections'>Function Notation</a></ul>
</div>
<div className='second'>
<ul><a className='sections'>Composition of Functions.</a></ul>
<ul><a className='sections'>Adding And Subtracting</a></ul>
<ul><a className='sections'>Partial Functions</a></ul>
</div>
<div className='third'>
<ul><a className='sections'>Finding The Domain</a></ul>
<ul><a className='sections'>Finding The Range</a></ul>
</div>
</div>
</div>
</div>

<div className='othersections'>
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
<Footer/>
</div>
                );
            }
        }
