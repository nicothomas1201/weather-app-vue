<template>
  <div class="container-tabs" >
    <TabWeather
      v-for="(weather, index) in weatherDay"
      :key="index"
      :time="weather.dt_txt"
      :url="`${baseIconUrl}/${weather.weather[0].icon}.png`" 
      :temp="weather.main.temp"
    />
  </div>  
</template>

<script setup>
  import { toRefs, watch, reactive } from 'vue';
  import useWeatherStore  from '../stores/weather.stores';
  import TabWeather from './TabWeather.vue'
  
  const weatherStore = useWeatherStore()

  let weatherDay = reactive()
  const baseIconUrl = `https://openweathermap.org/img/w`

  const props = defineProps({
    selectDay: String
  })

  const { selectDay } = toRefs(props)
  
  watch(selectDay, () => {
    weatherDay = weatherStore.filterByDay(selectDay.value)
  }, { immediate: true })


</script>

<style scoped>
.container-tabs{
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  overflow: auto;

}

</style>