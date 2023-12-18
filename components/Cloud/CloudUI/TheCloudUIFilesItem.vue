<script setup lang="ts">
defineProps({
  folderLink: {
    type: String,
    default: ''
  },
  changeView: {
    type: String,
    default: 'list',
  },
  typeElem: {
    type: String,
    default: ''
  },
  contextMenu: {
    type: Number,
    default: null,
  },
  showRead: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div :draggable="true ? typeElem === 'file' : false"
       class="flex relative transition-all duration-200 cursor-pointer rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 items-center justify-between tracking-widest text-sm dark:text-white"
       :class="{'flex-col' : changeView === 'tile'}">
    <div class="flex items-center gap-x-6" :class="{'flex-col' : changeView === 'tile'}">
      <div>
        <slot name="fileSvg"/>
      </div>
      <div>
        <slot name="fileName" :class="{'text-base' : changeView === 'tile'}"/>
      </div>
    </div>
    <div class="flex justify-evenly gap-x-10 items-center" :class="{'hidden' : changeView === 'tile'}">
      <p>
        <slot name="fileDate"/>
      </p>
      <p>
        <slot name="fileMemory"/>
      </p>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>