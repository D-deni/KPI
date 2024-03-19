<script setup lang="ts">
defineProps({
  breadcrumbLink: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <NuxtLink class="text-[12px] !bg-transparent border-none tracking-widest font-bold transition-all" :class="{'dark:hover:text-gray-200 hover:text-gray-500 hover:underline text-gray-300' : breadcrumbLink.length, 'text-gray-400' : breadcrumbLink.length === 0 }" :to="breadcrumbLink">
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<style scoped >

</style>