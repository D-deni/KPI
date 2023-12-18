<script setup lang="ts">

</script>

<template>
  <div class=" dark:shadow-md dark:shadow-gray-500 dark:border-t-gray-500 border-t border-t-gray-100 shadow-lg dark:text-white text-black bg-opacity-80 p-4 rounded-lg">
    <p class="font-bold text-md tracking-widest text-center text-md mb-2"><slot name="blockTitle"/></p>
    <div>
      <slot name="blockContent"></slot>
    </div>
  </div>
</template>

<style scoped >

</style>