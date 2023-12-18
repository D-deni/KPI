<script setup lang="ts">
import autosize from "autosize";

const el = ref()

onMounted(() => {
  autosize(el.value)
})
onBeforeUnmount(() => {
  autosize.destroy(el.value)
})

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
</script>

<template>
 <textarea
   @input="$emit('update:modelValue', $event.target.value)"
   :v-model="modelValue"
   :value="modelValue"
   ref="el"
   class=" placeholder-style p-4 resize-none example break-words dark:bg-gray-700 bg-gray-200 w-full max-h-[300px] items-center border-l border-black dark:border-opacity-20 border-opacity-10 outline-none text-sm tracking-wide"
   placeholder="Написать сообщение..."/>
</template>

<style scoped lang="scss">
.example::-webkit-scrollbar {
  display: none;
}

.example {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>