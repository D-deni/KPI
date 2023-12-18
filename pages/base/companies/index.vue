<script setup lang="ts">
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import CompanyCreate from "~/components/Company/admin/CompanyCreate.vue";

import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";

import CurrentCompanyInfo from "~/components/Company/User/CurrentCompanyInfo.vue";
import CompanyList from "~/components/Company/admin/CompanyList.vue";
import CompanyStats from "~/components/Company/CompanyUI/CompanyStats.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";

const currentUser = useAuthStore()
const companies = useCompanies()
const params = {
  page: 1,
  limit: 5,
  query: '',
}
function loadPage(page) {
  if (page === '<') {
    if (Number(params.page) > 1) {
      params.page -= 1;
    }
  } else if (page === '>') {
    if (Number(params.page) < companies.company.number_of_pages) {
      params.page = Number(params.page) + 1
    }
  } else {
    if (Number(page) <= companies.company.number_of_pages) {
      params.page = Number(page)
    }
  }
  // console.log(page)
  if (window.innerWidth > 1000) {
    window.scrollTo({top: 600})
  } else if (window.innerWidth < 1000) {
    window.scrollTo({top: 895})
  } else {
    window.scrollTo()
  }
}

watchEffect(() => {
  if (currentUser.user.role_en === 'employee' || currentUser.user.role_en === 'company_admin') {
    companies.loadCurrentCompany()
  } else if (currentUser.user.role_en === 'admin') {
    companies.loadCompanyList({page: params.page, limit: params.limit, query: params.query})
  }
})

</script>

<template>
  <div>
    <div  v-if="currentUser.user.role_en !== 'admin'">
      <div class="text-center flex items-center tracking-widest gap-x-2 justify-center max-sm:flex-col mb-10">
        <p class="text-lg">{{ $t('Страница информации о ') }}</p>
        <p class="font-bold text-white bg-blueSemiLight p-2 px-4 rounded-full">{{ companies.company.name}}</p>
      </div>
      <div class="">
        <CurrentCompanyInfo/>
      </div>
    </div>
    <div v-else-if="currentUser.user.role_en === 'admin'">
      <TheTextContent :text-type="'pageTitle'">
        {{ $t('Страница списка Компаний') }}
      </TheTextContent>
      <div class="flex justify-between items-center">
        <TheSearch class="my-10 w-6/12"/>
        <CompanyCreate class="w-2/12"></CompanyCreate>
      </div>
      <div class="flex gap-x-10">
        <div class="w-full gap-y-10 flex flex-col">
          <CompanyList v-for="item in companies?.get_all_company.results" :company-block="item"></CompanyList>
        </div>
        <TheContentBlock
          class="w-3/12 h-full transition-all rounded-md p-4">
          <h2 class="text-center text-lg tracking-widest font-bold dark:text-white">{{ $t('Информация Компаний') }}</h2>
          <CompanyStats>
            <template v-slot:statsName>
              {{ $t('Количество компаний') }}
            </template>
            <template v-slot:statsValue>
              <p v-if="companies.get_all_company.count > 0">{{ companies.get_all_company.count }}</p>
              <p v-else>{{ '0' }}</p>
            </template>
          </CompanyStats>
        </TheContentBlock>

      </div>
      <div class="flex justify-center gap-x-4 mt-10">
        <div v-if="companies?.get_all_company.count > 5" v-for="(page, id) in companies?.get_all_company.links" :key="id"
             class="px-4 py-2  rounded-full cursor-pointer"
             :class="{'bg-blue-400 text-white' : page.active, 'bg-gray-200 text-black hover:bg-blue-400 hover:text-white transition-all' : !page.active}"
             @click="loadPage(page.label); companies.loadCompanyList({page: params.page, limit: params.limit, query: params.query})">
          {{ page.label }}
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">

</style>