<script lang="ts" setup>
  defineProps({
    to: {
      type: String,
    }
  })
</script>

<template>
  <NuxtLink :to="to" class="flex select-none items-center gap-x-6 hover:bg-semiCyan p-2 rounded-lg transition-all duration-200 cursor-pointer">
    <div class="dark:fill-white">
      <slot name="headerContentIcon"/>
    </div>
    <p class="dark:text-white"><slot name="headerContentText"/></p>
  </NuxtLink>
</template>

<style >

</style>