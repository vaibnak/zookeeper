import React, { Component } from 'react';
import './App.css';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import Superhero from './Superherolist';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div className = "title">
      <h1>WELCOME TO THE AGE OF SUPERHEROES</h1>
      </div>  
        
          <Superhero/>
        
        
      </div>
    );
  }
}

export default App;
