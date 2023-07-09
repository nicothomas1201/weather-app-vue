<template>
  <div>
    {{  dayId }}
  </div>  
</template>

<script setup>
  import { toRefs } from 'vue';

  const props = defineProps({
    dayId: Number
  })

  const { dayId } = toRefs(props)

</script>

<style scoped>

</style>