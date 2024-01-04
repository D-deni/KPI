<script setup lang="ts">

</script>

<template>
  <div>
    <div class="text-sm flex items-center gap-x-4 dark:hover:bg-gray-500 hover:bg-gray-300 px-3 py-1 cursor-pointer">
      <div>
        <slot name="chatWindowSettingContentSvg"></slot>
      </div>
      <p><slot name="chatWindowSettingContentText"/></p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>