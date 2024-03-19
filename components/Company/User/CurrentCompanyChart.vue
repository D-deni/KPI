<script setup lang="ts">
import {Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, Chart} from 'chart.js'
import {Doughnut, Pie, PolarArea} from 'vue-chartjs'
import { useColorMode } from '@vueuse/core'

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale,)
Chart.defaults.color = '#b6b6b6'

const chartData = ref({
  labels: ['Выполненные задания', 'Выполненные IQ тесты', 'Активность', 'Посещаемость'],
  datasets: [
    {
      backgroundColor: ['rgba(109,252,118,0.4)', "rgba(252,155,0,0.91)" , "rgba(0,121,255,0.4)", "rgba(255,9,0,0.68)"],
      data: [70, 70, 90, 100]
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
});
</script>

<template>
  <div>
    <PolarArea class="text-white" style="{color: white;}" :data="chartData" :options="chartOptions"></PolarArea>

  </div>
</template>

<style scoped lang="scss">

</style>