import React, {Component} from 'react'
import {connect} from 'react-redux'
class Superhero extends Component{

    Renderlist(){

 return    this.props.special.map((sp) => {
       return  <li>Name = {sp.name}</li>
        })

    
    }

    render()
{
console.log(this)
return <div>
<h1>Welcome to the age of superheroes</h1>
        {this.Renderlist()}
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

//export default Superhero
export default connect(mapToConnect)(Superhero);