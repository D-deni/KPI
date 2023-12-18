<script setup lang="ts">
defineProps({
  itemType: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <label v-if="itemType === 'uploadMessageFiles'" for="uploadMessageFiles"
         class="dark:hover:bg-gray-700 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
    <div>
      <slot name="ContextMenuSvg"/>
    </div>
    <span>
      <slot name="ContextMenuText"/>
    </span>
    <div>
      <slot name="ContextMenuContent"/>
    </div>
  </label>
  <div v-else class="dark:hover:bg-gray-700 hover:bg-gray-200 py-2 px-6 cursor-pointer flex items-center ">
    <div class="flex gap-x-6" >
      <div>
        <slot name="ContextMenuSvg"/>
      </div>
      <p class="text-[15px] font-mono">
        <slot name="ContextMenuText"/>
      </p>
    </div>
    <div>
      <slot name="ContextMenuContent"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>