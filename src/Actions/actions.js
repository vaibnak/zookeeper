import axios from 'axios'

export function Selecthero (animal) {
  return {
   type: 'HERO_clicked',
   payload: animal
  }
}

export function getanimallist(){

  return function(dispatch){
  const url = 'http://localhost:3000/animals';
  const request = axios.get(url);
  request.then(response => {
   dispatch({
    type: 'fetch_animals',
    payload: response.data

   })

  }).catch(err => console.log(err))
  
    
  }
}
