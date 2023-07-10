import { defineStore } from 'pinia'
import { getCurrentWeather, getLatLon, getWeeklyWeather } from "../services/index.js"
import moment, { months } from 'moment/moment.js'


export default defineStore('weather', {
  state: () => ({
    weeklyWeather: []
  }),

  getters:{
    filterByDay: (state) => (selectDay) => {
      return state.weeklyWeather.filter( item => {
        const day = moment(item.dt_txt).format('dddd')
        return day === selectDay
      })      
    },

    getDays: (state) => () =>{
      return state.weeklyWeather.filter((item, index, self) => {
        const daysRepetidos = self.findIndex(item2 => {
          return moment(item2.dt_txt).format('dddd') === moment(item.dt_txt).format('dddd')
        }) 
        return daysRepetidos === index
      }).map( item => moment(item.dt_txt).format('dddd'))
    },    

    getFirstDay: ( state ) => () => {
      const textDate =state.weeklyWeather[0].dt_txt
      const day = moment(textDate).format('dddd')
      return day
    }
  },

  actions: {
    async fetchCurrentWeather(){

    },

    async fetchWeeklyWeather(){
      const { lat, lon } = await getLatLon()
      const  { list } = await getWeeklyWeather(lat, lon)
      this.weeklyWeather = list
    },


  }
})
