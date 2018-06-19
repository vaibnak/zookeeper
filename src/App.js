import React, { Component } from 'react';
import './App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Superhero from './Superherolist';
import Spdetails from './spdetails';
import {Grid, Row, Col} from 'react-bootstrap'
import {Panel, PanelBody} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div className = "title">
      <h1>WELCOME TO THE AGE OF SUPERHEROES</h1>
      </div>  
      <Grid>
      <Row className = "show-grid">
       <Col md = {4}>
          <Superhero/>
          </Col>
       <Col md = {8}>
       <Panel>
         <Panel.Body>
          <Spdetails/>
         </Panel.Body>
       </Panel>
       </Col>
      </Row>
     </Grid>
          
        
      </div>
    );
  }
}

export default App;
