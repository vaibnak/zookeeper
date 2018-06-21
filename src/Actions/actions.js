import axios from 'axios'

export function Selecthero (animal) {
  return {
   type: 'HERO_clicked',
   payload: animal
  }
}

export function getanimallist(){

  const url = 'http://localhost:3000/animals';
  const request = axios.get(url);

  return{
    type: 'fetch_animals',
    payload: request
  }
}