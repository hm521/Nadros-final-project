import React, { Component } from 'react';
import './demo.css';
import {Tab, Tabs, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';


export class NavJustified extends React.Component {
  handleSelect(selectedKey) {
    
  }

  render() {
    return (
      <div className="navwrapper">
      
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example" className='bck-grnd-color'>
          <Tab eventKey={1} className='width' title=" MTH-Sociology And Economics">
          <div className='sediscription'>

          <PageHeader>
  Chapters:
</PageHeader>
          <ListGroup>

  <ListGroupItem href="se/chapters/functions">
    SE - Function
  </ListGroupItem>
    <ListGroupItem  href="#">
     SE - Compound Interest
  </ListGroupItem>
    <ListGroupItem  href="#">
     SE - Statistics in two variables
  </ListGroupItem>
    <ListGroupItem  href="#">
     SE - Probability
  </ListGroupItem>
    <ListGroupItem  href="#">
    SE - Sequence
  </ListGroupItem>
    <ListGroupItem  href="#">
 SE - Economic Function
  </ListGroupItem>
    <ListGroupItem  href="#">
     SE - Antiderivaties
  </ListGroupItem>

</ListGroup>;
  </div>
  </Tab>

          <Tab eventKey={2} className='width' title="MTH-Life Sciences">
          <div className='lsdescription'>
                      <PageHeader>
  Chapters:
</PageHeader>
          <ListGroup>

  <ListGroupItem  href="#">
     LS - Functions
  </ListGroupItem>
    <ListGroupItem href="#">
  LS - Statistics
  </ListGroupItem>
    <ListGroupItem  href="#">
    LS - Complex Numbers
  </ListGroupItem>
    <ListGroupItem  href="#">
    LS - Differential Equations
  </ListGroupItem>
    <ListGroupItem  href="#">
    LS - Probability
  </ListGroupItem>
    <ListGroupItem  href="#">
LS - Planes and Lines
  </ListGroupItem>
    <ListGroupItem  href="#">
    LS - Anti - derivatives
  </ListGroupItem>

</ListGroup>;
</div>
  </Tab>
          <Tab eventKey={3} className='width' title="MTH-General Sciences">
          <div className='gsdescription'>
                      <PageHeader>
  Chapters:
</PageHeader>
          <ListGroup>

  <ListGroupItem  href="#">
    GS - Functions
  </ListGroupItem>
    <ListGroupItem  href="#">
    GS - Compound Interest
  </ListGroupItem>
    <ListGroupItem  href="#">
    GS - Statistics in two variables
  </ListGroupItem>
    <ListGroupItem  href="#">
    GS - Probability
  </ListGroupItem>
    <ListGroupItem  href="#">
    GS - Sequence
  </ListGroupItem>
    <ListGroupItem  href="#">
GS - Economic Function
  </ListGroupItem>
    <ListGroupItem  href="#">
    GS - Antiderivaties
  </ListGroupItem>

</ListGroup>;
</div>
  </Tab>
        </Tabs>;
      </div>
    );
  }
}

