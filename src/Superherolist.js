import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Selecthero,getanimallist, Deleteanimal } from "./Actions/actions";
import {bindActionCreators} from 'redux';


class Superhero extends Component{
componentWillMount(){
    this.props.getanimallist()
}
    Renderlist(){
let counter = 0
 return    this.props.animallist.map((sp) => {
    counter = counter + 1  
    return  <ListGroupItem key={counter} onClick = {() => this.props.sphero(sp)}>Name = {sp.name} <br/> <Button bsStyle="warning" 
    onClick = {() => {this.deletethis(sp.id)}}>delete</Button></ListGroupItem>
        } )
}

deletethis(id){
    console.log("identification ",id)
    this.props.deleteanimal(id);
}

    render()
{
    console.log("props ", this.props)
    if(!this.props.animallist){
        return(<div>Loading...</div>)
    }
    return <div>
     
        <ListGroup>
        {this.Renderlist()} 
        </ListGroup>
        <br/>
        <Button bsStyle="success" block onClick= {() => {this.props.getanimallist()}}>Its working</Button>
</div>
}
}



function mapToConnect(state){

    return{
        special: state.men,
        super: state.super,
        animallist: state.animallist,
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        sphero: Selecthero, 
        getanimallist: getanimallist,
        deleteanimal: Deleteanimal
    },dispatch)
}


export default connect(mapToConnect, mapDispatchToProps)(Superhero);