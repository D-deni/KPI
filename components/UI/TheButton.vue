<template>
  <button :type="t" class="font-bold  tracking-widest text-white"
          :class="{
          'bg-blue-400 w-5/12 mx-auto py-4 rounded-xl' : type === 'signIn',
          'bg-blueSemiLight' : type === 'change', 'bg-green-400' : type === 'success',
          'bg-red-400': type === 'danger',
          'dark:hover:bg-gray-600 hover:bg-gray-100 rounded-lg !text-semiCyan transition-all p-2' : type === 'chat',
          '!text-black dark:!text-white border border-semiCyan p-2 rounded-lg' : type === 'treeBtn',
          'dark:hover:bg-gray-700 hover:bg-gray-100 rounded-lg !text-semiCyan transition-all p-2' : type === 'documentBtn',
          }">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import {useTreeStore} from "~/stores/tree";
const treeStore = useTreeStore()
defineProps({
  type: String,
  t: String
})
</script>