<script setup lang="ts">
import Gantt from "frappe-gantt/src";
import TaskGanttContentFilter from "~/components/Tasks/TaskUI/TaskUIGantt/TaskGanttContentFilter.vue";
let ganttViewMode = ref('Day')
let tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 10,
  },
  {
    id: 'Task 2',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    dependencies: 'Task 1',
    progress: 20,

  },
]
onMounted(() => {
  let gantt = new Gantt('#gantt', tasks, {
    header_height: 50,
    column_width: 30,
    step: 220,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 30,
    bar_corner_radius: 10,
    arrow_curve: 5,
    padding: 20,
    view_mode: 'Day',
    date_format: 'YYYY-MM-DD',
    language: 'ru', // or 'es', 'it', 'en', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
    custom_popup_html: null
  })
})
</script>

<template>
  <div
    class="rounded-[20px] w-full max-w-[1600px] border-t border-t-black border-opacity-5 dark:border-t-white dark:border-opacity-10 shadow-lg dark:shadow-gray-500 overflow-hidden border-gray-500 mx-auto dark:fill-transparent my-10 fill-white ">
    <div>
      <TaskGanttContentFilter/>
    </div>
    <div id="gantt"/>
  </div>
</template>

<style lang="postcss">

.grid-header {
  @apply dark:shadow
}

.lower-text {
  @apply text-[12px]
}

.upper-text {
  @apply text-xl
}

.arrow {
  @apply dark:stroke-white stroke-black
}

.lower-text, .upper-text {
  @apply dark:fill-white fill-black tracking-widest
}

.bar-group {
  @apply fill-black transition-all select-none hover:fill-blueDarkSemiLight rounded-full
}

.active .bar {
  @apply fill-blueDarkSemiLight
}

</style>
