<script setup lang="ts">
defineProps({
  departmentItem: {
    type: Object,
    default: ()=>{}
  }
})
</script>

<template>
  <div class="my-6 max-md:my-2">
    <NuxtLink :to="`/base/companies/department/${departmentItem.id}`" class="transition-all shadow-md hover:shadow-lg border dark:border-none dark:shadow-none dark:bg-gray-400 dark:hover:bg-gray-300 p-4 rounded-lg w-11/12 max-md:w-full flex max-[1241px]:flex-col max-[1241px]:justify-center max-[1241px]:gap-y-4 max-md:gap-y-0 justify-between  cursor-pointer ">
      <div class="flex items-center gap-x-4 w-4/12 max-lg:w-full max-md:justify-center tracking-widest text-lg max-sm:w-full max-sm:text-center">
        {{departmentItem.name}}
      </div>
     <div class="flex w-full text-center max-sm:flex-col max-sm:gap-y-3">
       <div class="flex flex-col items-center justify-center w-5/12 max-lg:w-6/12 max-sm:w-full mx-auto">
         <p class="tracking-widest text-sm">{{$t('Руководитель')}}</p>
         <p class="tracking-widest">{{departmentItem.department_director_name ? departmentItem.department_director_name : 'Отсутствует'}}</p>
       </div>
       <div class="w-5/12 text-center max-lg:w-6/12 max-sm:w-full">
         <p class="tracking-widest text-sm">{{$t('Заместитель')}}</p>
         <p class="tracking-widest">{{departmentItem.vice_department_director_name ? departmentItem.vice_department_director_name : 'Отсутствует'}}</p>
       </div>
     </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>