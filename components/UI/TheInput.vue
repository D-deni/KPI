<script setup lang="ts">
defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: String,
  required: Boolean,
  trimi: {
    type: Boolean,
    default: null
  },
  answer: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <label class="flex flex-col outline-none font-medium gap-y-2 text-md dark:text-white tracking-wider">
    <span v-if="type !== 'default'">{{ label }} <span class="text-red-500" v-if="required">*</span></span>
    <textarea name="" id="" cols="30" rows="10" v-if="type==='textarea'"
              @input="$emit('update:modelValue', $event.target.value)"
              :required="required"
              :value="modelValue"
              class="text-lg dark:text-black resize-none border outline-3 rounded-lg focus:outline-semiCyan focus:outline-1 outline-none px-4 py-2 dark:bg-gray-300"
              :class="{'!bg-red-200 border-red-400 dark:border !outline-none' : trimi && required}"
              :placeholder="label"
    ></textarea>
    <input v-else-if="type === 'file'"
           :value="modelValue"
           :required="required"
           :type="type" class="w-full rounded-lg p-2 dark:border-none text-black border outline-semiCyan outline-1"
           :placeholder="placeholder"
           multiple
           @input="$emit('update:modelValue', $event.target.files)">
    <input v-else
           :value="modelValue"
           :required="required"
           :type="type"
           class="w-full rounded-lg p-2 dark:border-none text-black border focus:outline-semiCyan focus:outline-1 outline-none dark:bg-gray-300"
           :class="{'!bg-red-200 !outline-none' : trimi, '!bg-green-400 text-white' : answer, '!dark:bg-gray-500' : type === 'createInput', '!bg-transparent dark:text-white text-black !outline-none !border-none' : type === 'default'}"
           :placeholder="placeholder"
           @input="$emit('update:modelValue', $event.target.value)">

  </label>
</template>

<style scoped lang="scss">

</style>