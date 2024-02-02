<script setup lang="ts">

import DocumentItemInfoChain from "~/components/documents/DocumentItemInfo/DocumentItemInfoChain.vue";
import DocumentItemInfoContent from "~/components/documents/DocumentItemInfo/DocumentItemInfoContent.vue";
import TheButton from "~/components/UI/TheButton.vue";

defineProps({
  item: {
    type: Object,
    default: ()=>{}
  }
})
</script>

<template>
  <div class="">
    <div v-if="item.chain?.self">
      <DocumentItemInfoContent/>
    </div>
    <div class="overflow-x-hidden" v-else >
      <DocumentItemInfoChain/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>