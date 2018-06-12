import React, {Component} from 'react'
import {connect} from 'react-redux'
class Superhero extends Component{
render(){
console.log(this)
    return <h1>Welcome to the age of superheroes</h1>


}
}

function mapToConnect(state){
    return{
        favoutite: "ironman"
    }
}

//export default Superhero
export default connect(mapToConnect)(Superhero);