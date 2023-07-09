<script setup>
  import { defineAsyncComponent } from 'vue';
import Loading from './components/Loading.vue';

  // const Home = defineAsyncComponent(() => new Promise(resoleve => {
  //   setTimeout(() => {
  //     resoleve(import('./components/Home.vue'))
  //   }, 2500)
  // }))

  const Home = defineAsyncComponent(() => import('./components/Home.vue'))
</script>

<template>
  <Suspense>
    <template #default>
      <Home />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<style scoped>
</style>
