<template>
  <div class="mt-6">
    <NuxtLink :to="`/base/tasks/${task.id}`"
      class="shadow-xl dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:shadow-none dark:border-none cursor-pointer hover:translate-x-4 transition-all px-6 py-2 rounded-lg w-11/12 max-lg:w-full max-[425px]:flex-wrap flex flex-col justify-between">
      <div class="flex relative justify-between max-[425px]:gap-y-6">
        <div class="flex w-full max-sm:flex-col max-sm:gap-y-6 max-sm:items-center max-sm:text-center justify-around">
          <TaskTable>
            <template v-slot:tableHead>{{ $t('Наименование') }}</template>
            <template v-slot:tableBody>{{ task.title }}</template>
          </TaskTable>
          <TaskTable>
            <template v-slot:tableHead>{{ $t('Дата') }}</template>
            <template v-slot:tableBody>{{ new Date(task.created_at).toLocaleDateString() }}</template>
          </TaskTable>
          <TaskTable class="text-center">
            <template v-slot:tableHead>{{ $t('Срок выполнения') }}</template>
            <template v-slot:tableBody>{{ new Date(task.deadline).toLocaleDateString() }}</template>
          </TaskTable>
          <TaskTable class="text-center" v-if="loadCurrentUser.user.role_en === 'company_admin'">
            <template v-slot:tableHead>{{ $t('Ответственный') }}</template>
            <template v-slot:tableBody>{{ task.main_performer.first_name + ' ' + task.main_performer.last_name }}</template>
          </TaskTable>
        </div>
        <div class="absolute z-0 -right-6 -top-2 w-[30px] h-[30px] opacity-80 rounded-bl-2xl rounded-tr-lg"
             :class="{'bg-orange-500' : task.status === 'performing', 'bg-red-500' : task.status === 'rejected', 'bg-green-500' : task.status === 'completed', 'bg-blue-500' : task.status === 'watching'}">
        </div>
      </div>
      <div class="my-10 font-bold tracking-widest">
        <p>{{ task.description}}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import TaskTable from '/components/Tasks/TaskUI/TasksTable.vue'
import {useAuthStore} from "~/stores/auth";
const loadCurrentUser = useAuthStore()
const props = defineProps({
  task: {
    type: Object,
    required: true,
  }
})

</script>

<style lang="scss" scoped>

</style>