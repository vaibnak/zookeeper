import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import { Selecthero } from "./Actions/actions";
import {bindActionCreators} from 'redux';

class Superhero extends Component{

    Renderlist(){
let counter = 0
 return    this.props.special.map((sp) => {
    counter = counter + 1  
    return  <ListGroupItem key={counter} onClick = {() => this.props.sphero(sp)}>Name = {sp.name}</ListGroupItem>
        })

    
    }

    render()
{

return <div>
     
        <ListGroup>
        {this.Renderlist()} 
        </ListGroup>
      
</div>
}
}

//console.log("store binded from conbineReducer", state)

function mapToConnect(state){
//    console.log("store binded from conbineReducer", state)
    return{
        special: state.men,
        super: state.super
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        sphero: Selecthero 
    },dispatch)
}

//export default Superhero
export default connect(mapToConnect, mapDispatchToProps)(Superhero);