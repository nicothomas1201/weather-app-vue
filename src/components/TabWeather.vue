<template>
  <div class="tab-weather">
    <span class="time">{{ formatHour }}</span>
    <img :src="url" />
    <div class="temp">{{ formatTemp }}</div>
  </div>
</template>

<script setup>
import moment from "moment"
import { toRefs, computed } from "vue"

  const props = defineProps({
    url: String,
    temp: Number,
    time: String
  })

  
  const { url, time, temp } = toRefs(props)

  const formatHour = computed(() => {
    return moment(time.value).format('h a')
  })

  const formatTemp = computed(() => {
    return `${Math.round(temp.value)}°`
  })
</script>


<style scoped>
.tab-weather{
  background: var(--black);
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  padding: 16px 12px;
  border-radius: 58px;
  color: var(--white);
}

.time{
  font: var(--body2-regular);
}

.temp{
  font: var(--body1-bold);
}
</style>