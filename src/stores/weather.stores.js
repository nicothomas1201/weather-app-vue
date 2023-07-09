import { defineStore } from 'pinia'
import { getCurrentWeather, getLatLon, getWeeklyWeather } from "../services/index.js"
import moment, { months } from 'moment/moment.js'


export default defineStore('weather', {
  state: () => ({
    weeklyWeather: []
  }),

  getters:{
    formatByDay: (state) => (list) => {
      
      return list.filter((item, index, self) => {
        const daysRepetidos = self.findIndex(item2 => moment(item2.dt_txt).format('dddd') === moment(item.dt_txt).format('dddd')) 
        return daysRepetidos === index

      })
      .map( (item, index) => {
        const day = moment(item.dt_txt).format('dddd')
        return {
          id: index,
          day,
          main: item.main,
          weather: item.weather
        }
      })  
    },

    filterById: (state) => (id) => {
      state.weeklyWeather.filter( dayWeek => dayWeek.id === id)
    }
  },

  actions: {
    async fetchCurrentWeather(){

    },

    async fetchWeeklyWeather(){
      const { lat, lon } = await getLatLon()
      const  { list } = await getWeeklyWeather(lat, lon)
      this.weeklyWeather = this.formatByDay(list)
    },


  }
})
