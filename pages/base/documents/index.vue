<script setup lang="ts">
import DocumentContent from "~/components/documents/DocumentContent.vue";
import DocumentHeader from "~/components/documents/DocumentHeader.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import DocumentInfo from "~/components/documents/DocumentInfo.vue";
import {useDocumentStore} from "~/stores/documents";

const document = useDocumentStore()

onMounted(()=>{
  document.loadAllDocument({page: 1, limit: 15})
})

useSeoMeta({
  title: 'Документы'
})
</script>

<template>
 <div>
   <DocumentHeader class="w-6/12 mx-auto max-md:w-full"></DocumentHeader>
   <div class="flex gap-x-10 justify-center">
     <TheContentBlock class="w-9/12">
      <DocumentContent/>
     </TheContentBlock>
     <TheContentBlock>
      <DocumentInfo/>
     </TheContentBlock>
   </div>
 </div>
</template>

<style scoped lang="scss">

</style>