<template>
  <div 
    :style="{'background-image': `url('/backgrounds/${background}.png')`}" 
    class="container"
  >
    <PanelWeather  />
  </div>  
</template>

<script setup>
  import { ref } from "vue";
  import useWeatherStore from "@/stores/weather.stores.js"
  import PanelWeather from "./PanelWeather.vue";

  const background = ref('soleado')
  const weatherStore = useWeatherStore()

  await weatherStore.fetchWeeklyWeather()

</script>

<style scoped>
.container{
  block-size: 100vh;
  inline-size: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
</style>