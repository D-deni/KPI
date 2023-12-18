<script setup lang="ts">
defineProps({
  newsItem: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
  <div class="mt-10">
    <NuxtLink :to="`/base/companies/news/${newsItem.id}`"
              class="transition-all cursor-pointer p-4 dark:border-gray-500 dark:hover:bg-gray-700 hover:bg-gray-200 hover:rounded-lg flex gap-x-4 border-b">
      <div class="">
        <img v-if="newsItem.photo" class="w-[150px] h-[150px] rounded-lg" :src="newsItem.photo" alt="">
      </div>
      <div class="w-7/12">
        <h1 class="tracking-widest text-2xl">{{ newsItem.title }}</h1>
        <p class="break-words my-4">{{newsItem.description}}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>