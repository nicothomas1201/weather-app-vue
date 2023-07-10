<!-- este se va encargar del drag and drop del panel y del container -->

<template>
  <div 
    ref="panel" 
    class="container-panel"
    :style="{'margin-block-end': `-${margin}px`}"
  >
    <div  
      @touchstart="handleClick" 
      class="touch-bar"></div>
    <PanelHeader @changeView="changeView" />
    <PanelTabsView :selectDay="day" />
  </div>
</template>

<script setup>
  import PanelHeader from './PanelHeader.vue';
  import PanelTabsView from './PanelTabsView.vue';
  import  useWeatherStore  from '../stores/weather.stores';
  import { ref } from 'vue';

  const weatherStore = useWeatherStore()
  const day = ref(weatherStore.getFirstDay())
  const panel = ref(null)
  const margin = ref(0)
  const isOpen = ref(false)
  const PANEL_BLOCK_SIZE = 248


  const changeView = (selectDay) => {
    day.value = selectDay
  }
  
 

  function handleClick(){
    isOpen.value ? open() : close()
  }

  

  


  function open(){
    isOpen.value = false
    margin.value = 0
    
  }

  function close(){
    isOpen.value = true
    margin.value = PANEL_BLOCK_SIZE - 25
  }

  

  

</script>

<style scoped>
.container-panel{
  inline-size: 100%;
  max-block-size: 248px;
  block-size: 100vh;
  background: var(--bg);
  position: relative;
  justify-content: start;
  overflow: hidden;
  transition: margin .5s ease;
}
.touch-bar{
  position: absolute;
  inline-size: 64px;
  block-size: 4px;
  border-radius: 5px;
  background: var(--white);
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
}
</style>