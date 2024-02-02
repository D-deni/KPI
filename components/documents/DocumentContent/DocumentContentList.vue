<script setup lang="ts">
import {useDocumentStore} from "~/stores/documents";
import DocumentContentListElem from "~/components/documents/DocumentContent/DocumentContentList/DocumentContentListElem.vue";
const documentStore = useDocumentStore()
</script>

<template>
  <div>
    <div class="flex gap-x-2 gap-y-2 flex-wrap mt-10">
      <DocumentContentListElem v-for="item in documentStore.get_all_document.results" :item="item">
        <template v-slot:documentTitle>
          {{item.title}}
        </template>
        <template v-slot:documentFileName>
          {{item.file_name}}
        </template>
        <template v-slot:documentUserName>
          {{item.author.first_name + ' ' + item.author.last_name}}
        </template>
      </DocumentContentListElem>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>