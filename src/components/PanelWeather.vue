<!-- este se va encargar del drag and drop del panel y del container -->

<template>
  <div   class="container-panel">
    <div class="touch-bar"></div>
    <PanelHeader @changeView="changeView" />
    <PanelTabsView :dayId="dayId" />
  </div>
</template>

<script setup>
  import PanelHeader from './PanelHeader.vue';
  import PanelTabsView from './PanelTabsView.vue';
  import { ref } from 'vue';

  const dayId = ref(0)

  const changeView = (id) => {
    dayId.value = id
    
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