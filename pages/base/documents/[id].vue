<script setup lang="ts">
import {useDocumentStore} from "~/stores/documents";
import {useRoute} from "vue-router";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import DocumentItemInfo from "~/components/documents/DocumentItemInfo.vue";
import DocumentItemInfoUserList from "~/components/documents/DocumentItemInfo/DocumentItemInfoUserList.vue";
import {useCompanies} from "~/stores/companies";
import {useUserStore} from "~/stores/users";

const documentStore = useDocumentStore()
const route = useRoute()
const company = useCompanies()
const user = useUserStore()
onBeforeMount(() => {
  documentStore.loadDocument({id: route.params.id})
  if (documentStore.documentItem.receiver_id) {
    user.loadUserList({page: 1, limit: 1000, user_type: 'user-list/my-company'})
  } else {
    company.loadDepartmentList()
  }
})

watchSyncEffect(()=>{
  useSeoMeta({
    title: `${documentStore.documentItem.title}`
  })
})
</script>

<template>
  <div class="flex justify-center gap-x-6 h-full ">
    <TheContentBlock class="w-8/12 h-max">
      <TheTextContent class="mx-auto text-center">{{ documentStore.documentItem.title }}</TheTextContent>
      <div class="flex items-center gap-x-4">
        <TheBreadcrumbs :breadcrumb-link="'/base/documents'">
          {{ $t('Документы') }}
        </TheBreadcrumbs>
        <div>
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="dark:stroke-white stroke-black"
                  d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                  stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <TheBreadcrumbs>
          {{ documentStore.documentItem.title }}
        </TheBreadcrumbs>
      </div>
      <div class="mt-4">
        <UMeter min="0" max="100" indicator></UMeter>
      </div>
      <DocumentItemInfo :item="documentStore.documentItem"/>
    </TheContentBlock>
    <TheContentBlock class="w-3/12">
      <DocumentItemInfoUserList/>
    </TheContentBlock>
  </div>
</template>

<style scoped lang="scss">

</style>