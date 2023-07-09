<template>
  {{ weather }}
</template>

<script setup>
  import { ref } from "vue";
  import { getCurrentWeather, getLatLon, getWeeklyWeather } from "../services/index.js"

  const { lat, lon } = await getLatLon()
  const data = await getCurrentWeather(lat, lon)
  const weeklyWeather = await getWeeklyWeather(lat, lon)

  const weather = await data
  

  console.log(weeklyWeather)
     
  
  
  

  // .then(res => console.log(res.data))
  
</script>