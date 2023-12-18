<script setup lang="ts">
defineProps({
  object: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
  <div>
    <NuxtLink :to="`/base/objects/${object.id}`"  class="transition-all cursor-pointer dark:bg-gray-400 dark:hover:bg-gray-300 dark:shadow-none shadow-xl hover:bg-gray-100 dark:border-none border-t border-t-gray-100 p-4 rounded-xl flex items-center gap-x-4 ">
      <!--     <img v-if="object.logo" class="w-[50px] h-[50px]" :src="object.logo" alt="">-->
      <img class="w-[50px] h-[50px]" src="/img/logo-company.png" alt="">
      <h1 class="tracking-widest">{{object.name}}</h1>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>