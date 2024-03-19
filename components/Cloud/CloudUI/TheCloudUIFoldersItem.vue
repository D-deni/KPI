<script setup lang="ts">
defineProps({
  folderLink: {
    type: String,
    default: ''
  },
  activeFolder: {
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
  },
  showInfo: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
       class="flex relative  cursor-pointer rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700 items-center justify-between tracking-widest text-sm dark:text-white"
       :class="{'flex-col' : changeView === 'tile'}">
    <div class="flex items-center gap-x-6" :class="{'flex-col' : changeView === 'tile'}">
      <div>
        <slot name="folderSvg"/>
      </div>
      <div class="">
        <slot name="folderName" :class="{'text-base' : changeView === 'tile'}"/>
      </div>
    </div>
    <div class="flex justify-evenly gap-x-10 items-center" :class="{'hidden' : changeView === 'tile'}">
      <p>
        <slot name="folderDate"/>
      </p>
      <p>
        <slot name="folderMemory"/>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>