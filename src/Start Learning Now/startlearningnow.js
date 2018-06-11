import React, { Component } from 'react';
import {NavBar} from '../NavBar/Navbar'
import {Footer} from '../Footer/footer'
import {Button} from 'react-bootstrap'
import './startlearningnow.css';


export default class Startlearningnow extends React.Component{
    render(){
        return(
            <div className='thisdiv'>
<NavBar/>
<div className='startlearningchapters'>
<div className='chapter-strt-lrning'>
<div className='chapter-right'>
<h1 className='innertitle'>Mathematics - Social Economics</h1>
<p className='chp-numb'>7 Chapters</p>
<div className='stats'>
<h5>Number Of Videos:41 Language:Eng-Arb</h5>
</div>
<Button bsStyle="primary" className='startlearning'>
      Start Learning
    </Button>
</div>


<div className='chapter-left'>
<h1 className='innerlogo'>SE</h1>
</div>
</div>
<div className='chapter-strt-lrning'>
<div className='chapter-right'>
<h1 className='innertitle'>Mathematics - Life Sciences</h1>
<p className='chp-numb'>7 Chapters</p>
<div className='stats'>
<h5>Number Of Videos:41 Language:Eng-Arb</h5>
</div>
<Button bsStyle="primary"  className='startlearning'>
      Start Learning
    </Button>
</div>
<div className='chapter-left'>
<h1 className='innerlogo'>LS</h1>
</div>
</div>
<div className='chapter-strt-lrning'>
<div className='chapter-right'>
<h1 className='innertitle'>Mathematics - General Sciences</h1>
<p className='chp-numb'>7 Chapters</p>
<div className='stats'>
<h5>Number Of Videos:41 Language:Eng-Arb</h5>
</div>
<Button bsStyle="primary"  className='startlearning'>
      Start Learning
    </Button>
</div>
<div className='chapter-left'>
<h1 className='innerlogo'>GS</h1>
</div>
</div>
</div>
<Footer/>
  </div>
        );
    }
}