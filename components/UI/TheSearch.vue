<script setup lang="ts">
defineProps({
  modelValue: String,
})
</script>

<template>
  <div>
    <input
      class="w-full px-4 py-3 rounded-full bg-gray-100 focus:bg-gray-200 text-black tracking-widest dark:focus:opacity-100 transition-all dark:opacity-40 outline-none"
      type="text" placeholder="Найти..."
      @input="$emit('update:modelValue', $event.target.value)"
      @focusout="$emit('search')"
      @keyup.enter="$emit('search')"
      >
  </div>
</template>

<style scoped lang="scss">

</style>