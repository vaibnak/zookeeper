import React, { Component } from 'react';
import './App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Superhero from './Superherolist';
import Spdetails from './spdetails';
import {Grid, Row, Col} from 'react-bootstrap'
import {Panel, PanelBody, Modal, Button} from 'react-bootstrap'
import Animaladd from './Animaladd'


class App extends Component {
  constructor(){
    super()
   
  
 }

  
  render() {
    
    return (
      
      <div className="App">
      <div className = "title">
      <h1>WELCOME TO THE AGE OF SUPERHEROES</h1>
      </div>
        <Animaladd/>
        <br/>
        <br/>
      <Grid>
     
    
      <Row className = "show-grid">
       <Col md = {4}>
          <Superhero/>
          </Col>
       <Col md = {8}>
       
          <Spdetails/>
          <Button onClick = {()=> {this.popup()}}>Add to List</Button>         
       </Col>
      </Row>
     </Grid>
    
        
      </div>
    );
  }
}

export default App;
