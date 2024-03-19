<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  mode: {
    type: String,
    default: ''
  }
})
const focusInput = ref()
const timer = ref<number | null>(null)
watchSyncEffect(() => {
  if (props.mode === 'scan') {
    nextTick(() => {
      focusInput.value.focus()
    })
  }
})
</script>

<template>
  <div>
    <input ref="focusInput"
      class="w-full px-4 py-3 rounded-full bg-gray-100 focus:bg-gray-200 text-black tracking-widest dark:focus:opacity-100 transition-all dark:opacity-40 outline-none"
      :class="{ '': mode === 'scan' }" type="text" :placeholder="mode === 'scan' ? $t('Сканирование') : $t('Найти')"
      @input="$emit('update:modelValue', $event.target.value); $emit('search', $event.target.value)">
  </div>
</template>

<style scoped lang="scss"></style>