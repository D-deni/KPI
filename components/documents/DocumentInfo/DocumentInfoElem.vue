<script setup lang="ts">

</script>

<template>
  <div class="flex items-center gap-x-6">
    <div class="w-full flex items-center gap-x-2">
      <div>
        <slot name="infoIcon"/>
      </div>
      <p class="tracking-wider"><slot name="infoText"/>:</p>
    </div>
    <div class="flex gap-x-4 ">
      <p><slot name="infoCount"/></p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>