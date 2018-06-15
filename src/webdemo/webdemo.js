import React, { Component } from 'react';
import './webdemo.css';
import {PageHeader, small} from 'react-bootstrap'
import Iframe from 'react-iframe'
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o'
import FaFileTextO from 'react-icons/lib/fa/file-text-o'
import FaEdit from 'react-icons/lib/fa/edit'
import MdPerson from 'react-icons/lib/md/person'


export class Webdemo extends React.Component{
    render(){
        return(
            <div className='webdemowrapper'>
            <div className='webdemoleft'>
            <PageHeader className='webdemolefttitle'>
 <small>KEY FEATURES</small> 
 <br/>Study Smart, Dont Study Hard
 <br/>
 <small>Nadros Offers:</small>
</PageHeader>;
<div className='webdemodiscription'>
          <h3><FaPlayCircleO/> Instructional Videos</h3>
          <p className = 'videodiscription' > All chapters are thaught by our tutors through detailed videos. Making the learning experience easy and fun.</p>
          <h3><FaEdit/> Practice Excercises</h3>
          < p className = 'videodiscription' >Excercises are provided at the end of each chapter including previous exams.</p>
          < h3 > <FaFileTextO/> Cheat Sheet </h3>
          < p className = 'videodiscription' >Cheatsheets will be available for download through pdf file.</p>
            </div>
            </div>
    
           <div className='videosection'>
<iframe width="600" height="400" src="https://www.youtube.com/embed/fq9mbWfuUio" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
           </div>
        
            
            </div>
        )
    }
}