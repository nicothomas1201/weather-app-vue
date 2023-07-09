import axios from "axios";


const baseURL = `https://api.openweathermap.org/data/2.5/`

const weatherRequest = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json'
  }
})

export {
  weatherRequest
}