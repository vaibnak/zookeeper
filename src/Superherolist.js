import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Grid, Row, Col} from 'react-bootstrap'
import { Selecthero } from "./Actions/actions";
import {bindActionCreators} from 'redux';
class Superhero extends Component{

    Renderlist(){
let counter = 0
 return    this.props.special.map((sp) => {
    counter = counter + 1  
    return  <ListGroupItem key={counter} onClick = {() => console.log("you have clicked",sp.name)}>Name = {sp.name}</ListGroupItem>
        })

    
    }

    render()
{
console.log("Superherolist ",this )
return <div>
     <Grid>
      <Row className = "show-grid">
       <Col md = {4}>
        <ListGroup>
        {this.Renderlist()} 
        </ListGroup>
       </Col>
       <Col md = {8}>
       <h2>Details</h2>
       </Col>
      </Row>
     </Grid>
</div>
}
}

//console.log("store binded from conbineReducer", state)

function mapToConnect(state){
//    console.log("store binded from conbineReducer", state)
    return{
        special: state.men
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        sphero: Selecthero 
    },dispatch)
}

//export default Superhero
export default connect(mapToConnect, mapDispatchToProps)(Superhero);