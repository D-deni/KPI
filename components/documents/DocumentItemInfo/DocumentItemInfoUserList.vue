<script setup lang="ts">
import {useDocumentStore} from "~/stores/documents";
import DocumentItemInfoUserListElem from "~/components/documents/DocumentItemInfo/DocumentItemInfoUserListElem.vue";
import {useUserStore} from "~/stores/users";
import {useCompanies} from "~/stores/companies";

const documentStore = useDocumentStore()
const user = useUserStore()
const company = useCompanies()
</script>

<template>
  <div>
    <p class="text-center tracking-widest font-bold">{{$t('Список сотрудников')}}</p>
    <div class="flex flex-col gap-y-2 my-2 overflow-y-auto h-screen">
      <DocumentItemInfoUserListElem class="rounded-full cursor-pointer" v-for="item in company.get_all_department.results" :item="item"  @drag.prevent/>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>