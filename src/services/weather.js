import { weatherRequest } from "./request"

const API_KEY = '0c9e8b1b9de6e7acb2b5615c5fc3e244'

export async function getCurrentWeather(lat, lon){
  const response = await weatherRequest.get(`/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  return response.data
}

export async function getWeeklyWeather(lat, lon){
  const response = await weatherRequest.get(`/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
  return response.data
}