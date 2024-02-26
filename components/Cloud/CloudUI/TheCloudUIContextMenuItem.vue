<script setup lang="ts">
defineProps({
  menuType: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <label v-if="menuType === 'uploadCloudFiles'" for="uploadCloudFiles" class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
    <div>
      <slot name="ContextMenuSvg"/>
    </div>
    <span>
      <slot name="ContextMenuText"/>
    </span>
    <div>
      <slot name="ContextMenuContent" />
    </div>
  </label>
  <div v-else class="dark:hover:bg-gray-500 hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-x-10">
    <div>
      <slot name="ContextMenuSvg"/>
    </div>
    <p>
      <slot name="ContextMenuText"/>
    </p>
    <div>
      <slot name="ContextMenuContent"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>