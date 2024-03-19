<script setup lang="tsx">
import {useCloudStore} from "~/stores/cloud";
import TheCloudUIStructureSubFolder from "~/components/Cloud/CloudUI/CloudUIStructure/TheCloudUIStructureSubFolder.vue";

defineProps({
  showFolder: {
    type: Object,
    default: () => {
    },
  },
})
</script>

<template>
  <div class="p-2 flex items-center gap-x-4 hover:bg-gray-700 transition-all duration-200 cursor-pointer rounded-lg ">
    <div>
      <slot name="structureSvg"/>
    </div>
    <p class="tracking-widest text-sm"><slot name="structureName"/></p>
  </div>
</template>

<style scoped lang="scss">

</style>