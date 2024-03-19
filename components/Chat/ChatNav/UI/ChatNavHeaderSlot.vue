<script setup lang="ts">

</script>

<template>
  <div class="p-2 cursor-pointer flex flex-col items-center">
    <div>
      <slot name='ChatNavHeaderSvg'/>
    </div>
    <p class="text-[12px] text-center tracking-widest" ><slot name="ChatNavHeaderText"></slot></p>
  </div>
</template>

<style scoped lang="scss">

</style>