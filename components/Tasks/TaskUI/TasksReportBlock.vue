<template>
<div>
  <div class="dark:shadow-gray-500 dark:border dark:border-gray-500 w-[250px] h-[250px] max-[400px]:w-400px transition-all hover:-translate-y-3 shadow-lg dark:shadow-md p-6 rounded-lg" :task="task">
    <div class="dark:bg-gray-100 shadow-lg rounded-full w-[80px] h-[80px] mx-auto flex justify-center items-center" >
      <slot name="TaskReportSvg"/>
    </div>
   <div class="flex flex-col">
     <p class="mt-6 mb-12 font-bold text-lg text-blue-400 dark:text-white "><slot name="TaskReportTitle"/></p>
     <p class="text-md dark:text-white text-blue-600"><slot name="TaskReportSubtitle"/></p>
     <div><slot name="TaskSceleton"/></div>
   </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import {useTaskList} from "~/stores/tasks";
import TheSceleton from "~/components/UI/TheSceleton.vue";

const taskList = useTaskList()

defineProps({
  task: {
    type: Number,
    default: null,
  }
})
</script>

<style lang="scss" scoped>

</style>