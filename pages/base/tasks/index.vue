<template>
  <div>
    <TheTextContent :text-type="'pageTitle'">
      {{ $t('Страница c заданиями') }}
    </TheTextContent>
    <div class="flex max-[1170px]:flex-col max-lg:items-center justify-between">
      <div class="flex flex-col w-full max-xl:flex-wrap gap-y-10 max-xl:items-center">
        <div class="w-full mx-auto">
          <TasksReport></TasksReport>
        </div>
        <div class="w-full">
          <TaskContent></TaskContent>
        </div>
      </div>
      <div class="flex flex-col w-4/12 max-[1170px]:w-full gap-y-10" >
        <div v-if="chartData.datasets[0].data[0]!=undefined" class="dark:border dark:border-gray-500 dark:shadow-md dark:shadow-gray-500 shadow-2xl rounded-lg p-4 w-full bg-blue-5" :class="{'h-[400px]' : statsList.get_tasks.count > 0}">
          <Pie class="tracking-wider cursor-pointer" v-if="statsList.get_tasks.count > 0" :data="chartData" :options="chartOptions"/>
          <p v-else class="text-2xl break-words dark:text-white tracking-widest text-center">{{$t('Статистика отсутствует')}}</p>
        </div>
        <div class="dark:border dark:border-gray-500 dark:shadow-md dark:shadow-gray-500 shadow-2xl rounded-lg p-4 w-full">
          <TasksNotification class=""></TasksNotification>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TasksReport from "../../../components/Tasks/TasksReport.vue";
import TaskContent from "~/components/Tasks/TasksContent"
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TasksNotification from "~/components/Tasks/TasksNotification.vue";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Chart} from 'chart.js'
import {Doughnut, Pie} from 'vue-chartjs'
import {useTaskList} from "~/stores/tasks";
import {definePageMeta} from "#imports";
const statsList = useTaskList()
ChartJS.register(ArcElement, Tooltip, Legend)
Chart.defaults.color = '#b6b6b6'

const chartData = ref({
  labels:['Выполненые', 'В процессе', 'На расмотрении', 'Отмененные'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#3b82f6', '#DD1B16'],
      data: [statsList?.get_stats[2]?.count, statsList?.get_stats[0]?.count, statsList?.get_stats[4]?.count, statsList?.get_stats[3]?.count]
    }
  ]
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
});

useSeoMeta({
  title: 'Задания',
  description: 'Страница с заданиями пользователей платформы'
})

</script>

<style lang="scss" scoped>

</style>