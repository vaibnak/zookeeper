import axios from 'axios'

export function Selecthero (animal) {
  return {
   type: 'HERO_clicked',
   payload: animal
  }
}
const url = 'http://localhost:3000/animals';
export function getanimallist(){

  return function(dispatch){
  const url = 'http://localhost:3000/animals';
  const request = axios.get(url);
  request.then(response => {
   dispatch({
    type: 'fetch_animals',
    payload: response.data

   })
  })
}
}
   
export function sendanimal(animal){
  return function(dispatch){
    
    const post = axios.post(url, animal);
    post.then(
      response => {
         dispatch({
           type: 'send_animals',
           payload: response.data
         }).catch(err => console.log(err))
       }
     )
   }

   }

   export function Deleteanimal(an){
     return function(dispatch){
       
      const del = axios.delete(`${url}/${an}`)
      del.then(response => {
        dispatch({
          type: 'Delete_Animal',
          payload: response.status,
          id: an,
        })
      }).catch(err => console.log(err))
     }
   }

  
    
  

