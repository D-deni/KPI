<script setup lang="ts">

</script>

<template>
  <div class="dark:bg-gray-400 dark:hover:bg-gray-300 border dark:border-none dark:shadow-none shadow-md hover:bg-gray-100 transition-all cursor-pointer w-full p-4 my-4 rounded-lg">
    <NuxtLink to="/" class="flex justify-between tracking-widest">
      <p class="text-sm font-bold">Наименование</p>
      <div class="text-center">
        <p>Дата</p>
        <p>{{ new Date().toLocaleDateString() }}</p>
      </div>
    </NuxtLink>
    <div class="mt-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, id?
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>