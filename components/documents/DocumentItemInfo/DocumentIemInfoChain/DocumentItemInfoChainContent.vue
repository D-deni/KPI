<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
import {useDocumentStore} from "~/stores/documents";
import DocumentItemInfoChainContentElems
  from "~/components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainContentElems.vue";

defineProps({
  item: {
    type: Object,
    default: () => {
    }
  }
})
const documentStore = useDocumentStore()

const authStore = useAuthStore()
</script>

<template>
  <TransitionGroup name="list" tag="div" class="flex overflow-x-auto w-full items-center gap-x-6 ">
    <div
      class="h-24 border border-gray-500 dark:border-white px-2 rounded-lg text-center flex items-center relative ">
      <div class="flex gap-x-4 items-center w-[220px] ">
        <div class="max-w-[50px]">
          <img class="w-full rounded-full" :src="authStore.get_server_domain + item.author.photo" alt="">
        </div>
        <p class="text-[15px] w-full">
          {{ item.author?.first_name + ' ' + item.author?.last_name }}
        </p>
      </div>
    </div>
    <DocumentItemInfoChainContentElems :item="documentStore.documentItem.chain"/>
  </TransitionGroup>
</template>

<style scoped lang="scss">

</style>