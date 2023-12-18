<script setup lang="ts">
</script>

<template>
  <div class="cursor-pointer select-none" @click="this.$emit('showEvent')">
    <div class="flex items-center gap-x-2">
      <div class="flex items-center gap-x-4">
        <div>
          <slot name="filterIcon"/>
        </div>
        <p class="uppercase dark:text-white tracking-widest font-bold"><slot name="filterTitle"/></p>
      </div>
      <div>
        <slot name="filterChevron"/>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
</style>