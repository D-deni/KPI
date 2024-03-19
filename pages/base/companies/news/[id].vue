<script setup lang="ts">

import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import {useCompanies} from "~/stores/companies";
import {useRoute} from "vue-router";

const newsItem = useCompanies()
const route = useRoute()
watchEffect(()=> {
  newsItem.loadNews({id: route.params.id})
})
</script>

<template>
  <div>
    <TheTextContent>
      {{newsItem.news.title}}
    </TheTextContent>
    <div>
      <div class="flex items-center gap-x-4">
        <TheBreadcrumbs :breadcrumb-link="'/base/companies'">
          {{$t('Компания')}}
        </TheBreadcrumbs>
        <div>
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="dark:stroke-white stroke-black" d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <TheBreadcrumbs>
          {{newsItem.news.title}}
        </TheBreadcrumbs>
      </div>
    </div>
    <div>

    </div>
  </div></template>

<style scoped lang="scss">

</style>