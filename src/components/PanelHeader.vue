<template>
  <ul class="header">
    <li 
      @click="handle(data.id)" 
      v-for="data in weeklyWeather" 
      :key="data.id"
      :class="data.id === active ? 'active' : ''"
      >
      {{ data.day }}
    </li>
  </ul>
</template>

<script setup>
  import { ref } from 'vue';
  import  useWeatherStore  from '@/stores/weather.stores.js';
  import { storeToRefs } from 'pinia'

  const emits = defineEmits()
  const active = ref(0)
  
  const weatherStore = useWeatherStore()
  const { weeklyWeather } = storeToRefs(weatherStore)

  const handle = (id) => {
    active.value = id
    emits('changeView', id)
  }
</script>

<style scoped>
.header{
  color: var(--white);
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 24px;
  padding: 26px 16px;
  padding-block-end: 0;
  overflow: auto;
  justify-content: space-between;
}

li{
  padding-block-end: 4px;
  border-block-end: 2.5px solid transparent; 
}

.active{
  color: var(--primary);
  border-block-end-color: var(--primary); 
}

</style>