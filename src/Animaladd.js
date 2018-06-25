import React, { Component } from 'react'
import {Form,Button ,FormControl, FormGroup, ControlLabel} from'react-bootstrap'
import './App.css'

class Animaladd extends Component {
  render() {
    return (
      <div>
        <Form inline>
        <FormGroup controlId="formInlineName" className = "adjust">
        <ControlLabel>Name :  </ControlLabel>
        <FormControl type="text" placeholder="Name" className="wd" />
        </FormGroup>
        <FormGroup controlId="formInlineName" className = "adjust">
        <ControlLabel>Species :  </ControlLabel>
        <FormControl type="text" placeholder="species" className="wd"/>
        </FormGroup>
        <FormGroup controlId="formControlsSelect" className="adjust">
      <ControlLabel>Gender  :</ControlLabel>
      <FormControl componentClass="select" placeholder="Gender" className="wd">
        <option value="select">Male</option>
        <option value="other">Female</option>
      </FormControl>
    </FormGroup>
        <FormGroup controlId="formInlineEmail" className = "adjust">
        <ControlLabel>Age  :</ControlLabel>
        <FormControl type="number" placeholder="age" className="wd"/>
        </FormGroup>
        <Button bsStyle="primary" type="submit">Send invitation</Button>
        </Form>
      </div>
    )
  }
}
export default Animaladd;