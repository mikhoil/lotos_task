import axios from "axios";

export const axiosPeople = axios.create({
  baseURL: 'https://swapi.dev/api/people',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})