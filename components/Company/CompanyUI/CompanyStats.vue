<script setup lang="ts">

</script>

<template>
<div class="my-10 dark:text-white tracking-wider flex flex-col gap-y-4">
  <p class="flex items-center w-11/12 justify-between gap-x-10"><slot name="statsName"/> <span class="bg-gray-300 py-2 px-4 rounded-full font-bold"><slot name="statsValue"/></span></p>
</div>
</template>

<style scoped lang="scss">

</style>