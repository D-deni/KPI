<script setup lang="ts">
import DocumentItemInfoChainContent
  from "~/components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainContent.vue";
import {useDocumentStore} from "~/stores/documents";
import TheButton from "~/components/UI/TheButton.vue";
import DocumentItemInfoChainFile
  from "~/components/documents/DocumentItemInfo/DocumentIemInfoChain/DocumentItemInfoChainFile.vue";

const documentStore = useDocumentStore()
</script>

<template>
  <div class="">
    <div class="border rounded-t-lg rounded-b-sm h-[500px] grid gap-x-10 px-2 mt-10 overflow-auto ">
      <DocumentItemInfoChainContent :item="documentStore.documentItem"/>
    </div>
    <div class="border-b border-l border-r p-4 rounded-b-xl rounded-t-sm ">
      <div class="flex gap-x-6 justify-center items-center">
        <DocumentItemInfoChainFile :item="documentStore.documentItem"/>
      </div>
      <div class="flex justify-center gap-x-10 mt-6">
        <TheButton class="px-2 py-1 rounded-full" :type="'danger'">{{$t('Отклонить')}}</TheButton>
        <TheButton class="px-2 py-1 rounded-full" :type="'success'">{{$t('Подтвердить')}}</TheButton>
      </div>
    </div>
    <div class="my-6">
      <p class="text-center tracking-widest text-lg">{{ $t('Описание:') }}</p>
      <p class="text-sm">{{documentStore.documentItem.description}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>