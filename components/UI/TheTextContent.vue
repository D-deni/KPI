<script setup lang="ts">
defineProps({
  textType: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <p class="text-center dark:text-white text-black text-lg tracking-widest " :class="{'mb-10' : textType === 'pageTitle'}"><slot/></p>
  </div>
</template>

<style scoped lang="scss">

</style>