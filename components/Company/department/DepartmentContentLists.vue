<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
defineProps({
  departmentItem: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
  <div class="p-2 max-sm:w-full flex max-sm:block ">
    <div @click="router.push(`/base/companies/department/${departmentItem.id}`)"
         class="transition-all text-center shadow-md overflow-hidden hover:shadow-lg border dark:shadow-gray-500 dark:border-gray-500 p-4 rounded-lg cursor-pointer ">
      <div
        class="items-center gap-x-4 max-lg:w-full max-md:justify-center tracking-widest text-lg max-sm:w-full max-sm:text-center">
        {{ departmentItem.name }}
      </div>
      <div class="text-center flex h-full justify-center gap-x-10 mt-4 break-words">
        <div class="flex flex-col items-center max-lg:w-6/12 max-sm:w-full ">
          <p class="tracking-widest text-sm dark:text-gray-400">{{ $t('Руководитель') }}</p>
          <p class="mt-2" v-if="departmentItem.department_director_name">
            {{departmentItem.department_director_name}}</p>
          <div v-else class="">
            <svg class="dark:stroke-white stroke-black" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21V19.5C4 16.4624 6.46243 14 9.5 14H12.5C15.5376 14 18 16.4624 18 19.5V21M7 21V18M15 21V18M16.5 6L16.8367 5.49493C17.1969 4.95461 17.9371 4.82782 18.4566 5.21745C19.0073 5.63047 19.0645 6.43549 18.5778 6.92224L17.8536 7.64645C17.6272 7.87282 17.5 8.17986 17.5 8.5M17.5 10V10.2M13.8281 4.89801C14.6435 3.74945 15.9842 3 17.5 3C19.9853 3 22 5.01472 22 7.5C22 9.98528 19.9853 12 17.5 12C16.2549 12 15.1279 11.4943 14.3131 10.6771M15 8.00001C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8.00001C7 10.2092 8.79086 12 11 12C11.8312 12 12.6032 11.7465 13.2429 11.3125C14.3033 10.5931 15 9.37794 15 8.00001Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/></svg>
          </div>
        </div>
        <div class="h-full w-[1px] dark:bg-gray-500 bg-gray-300"></div>
        <div class="text-center flex flex-col  items-center max-lg:w-6/12 max-sm:w-full ">
          <p class="tracking-widest text-sm dark:text-gray-400">{{ $t('Заместитель') }}</p>
          <p class="mt-2" v-if="departmentItem.vice_department_director_name">
            {{departmentItem.vice_department_director_name}}</p>
          <div v-else class="">
            <svg class="dark:stroke-white stroke-black" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21V19.5C4 16.4624 6.46243 14 9.5 14H12.5C15.5376 14 18 16.4624 18 19.5V21M7 21V18M15 21V18M16.5 6L16.8367 5.49493C17.1969 4.95461 17.9371 4.82782 18.4566 5.21745C19.0073 5.63047 19.0645 6.43549 18.5778 6.92224L17.8536 7.64645C17.6272 7.87282 17.5 8.17986 17.5 8.5M17.5 10V10.2M13.8281 4.89801C14.6435 3.74945 15.9842 3 17.5 3C19.9853 3 22 5.01472 22 7.5C22 9.98528 19.9853 12 17.5 12C16.2549 12 15.1279 11.4943 14.3131 10.6771M15 8.00001C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8.00001C7 10.2092 8.79086 12 11 12C11.8312 12 12.6032 11.7465 13.2429 11.3125C14.3033 10.5931 15 9.37794 15 8.00001Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>