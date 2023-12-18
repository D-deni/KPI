<script setup lang="ts">
defineProps({
  companyBlock: {
    type: Object,
    required: true,
    default: () => {
    }
  }
})

</script>

<template>
  <div>
    <NuxtLink :to="`/base/companies/${companyBlock.id}`"
              class="transition-all cursor-pointer dark:bg-gray-400 dark:hover:bg-gray-300 dark:shadow-none shadow-xl hover:bg-gray-100 dark:border-none border-t border-t-gray-100 p-4 rounded-xl flex items-center gap-x-4 ">
      <img v-if="companyBlock.logo" class="w-[50px] h-[50px] rounded-full" :src="companyBlock.logo.replace(/\/png/g, '/webp')" alt="">
      <h1 class="tracking-widest">{{ companyBlock.name }}</h1>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>