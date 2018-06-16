import React from 'react'

export default (state=null, action) => {
  switch(action.type){
   case 'HERO_clicked':
   console.log("payload of action: ",action.payload)

  }
  return state
}
