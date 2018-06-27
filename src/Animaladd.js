import React, { Component } from 'react'
import {Form,Button ,FormControl, FormGroup, ControlLabel} from'react-bootstrap'
import './App.css'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {sendanimal} from './Actions/actions'

class Animaladd extends Component {
    constructor(){
        super()
        this.state = {
        name: "",
        species: "",
        gender: "m",
        age: "",
        }
    }
  Onnamechange = (e) => {
      this.setState({
          name: e.target.value,
      })
  }
  Onspecieschange = (e) => {
    this.setState({
        species: e.target.value,
    })
  }
  Ongenderchange = (e) => {
    this.setState({
        gender: e.target.value,
    })
 }
 Onagechange = (e) => {
    this.setState({
        age: e.target.value,
    })
 }

 Onsubmiting = (e) => {
     //console.log("the state", this.state)
     this.props.sendanimal(this.state)
     
 }
  render() {
      console.log('props', this.props)
    return (
      <div>
        <Form inline>
        <FormGroup controlId="formInlineName" className = "adjust">
        <ControlLabel>Name :  </ControlLabel>
        <FormControl type="text" placeholder="Name" className="wd" onChange = {this.Onnamechange} />
        </FormGroup>
        <FormGroup controlId="formInlineName" className = "adjust">
        <ControlLabel>Species :  </ControlLabel>
        <FormControl type="text" placeholder="species" className="wd" onChange = {this.Onspecieschange}/>
        </FormGroup>
        <FormGroup controlId="formControlsSelect" className="adjust">
      <ControlLabel>Gender  :</ControlLabel>
      <FormControl componentClass="select" placeholder="Gender" className="wd" onChange = {this.Ongenderchange}>
        <option value="m">Male</option>
        <option value="f">Female</option>
      </FormControl>
    </FormGroup>
        <FormGroup controlId="formInlineEmail" className = "adjust">
        <ControlLabel>Age  :</ControlLabel>
        <FormControl type="number" placeholder="age" className="wd" onChange = {this.Onagechange}/>
        </FormGroup>
        <Button bsStyle="primary" type="submit" onClick = {this.Onsubmiting}>Send invitation</Button>
        </Form>
      </div>
    )
  }
}

function mapDispatchToprops(dispatch){
    return bindActionCreators({
        sendanimal:sendanimal,
    },dispatch)
}
//export default Animaladd;
export default connect(null, mapDispatchToprops)(Animaladd)