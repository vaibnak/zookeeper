import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Panel, PanelBody} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
class Spdetails extends Component {
  render() {
      
      if(!this.props.Spd)
    return (
      <div>
           <Alert>
            Click to see details
           </Alert>
      </div>
    )
    return(
        <div>
            <div>
              <Alert>
          {this.props.Spd.payload.name}<br/>
          {this.props.Spd.payload.speciality}
           </Alert>
           </div>
         
        </div>
    )
  }
}

function storeToProps(state){
    return{
        Spd: state.super,
    }
}

export default connect(storeToProps)(Spdetails);