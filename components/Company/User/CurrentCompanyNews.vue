<script setup lang="ts">
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";
import CurrentCompanyElems from "~/components/Company/CompanyUI/CurrentCompanyElems.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import CurrentCompanyNewsList from "~/components/Company/User/News/CurrentCompanyNewsList.vue";

const currentUser = useAuthStore()
const companyNews = useCompanies()

watchEffect(() => {
  companyNews.loadNewsList()
})
</script>

<template>
  <div class="w-11/12 mx-auto">
    <CurrentCompanyElems>
      <template v-slot:blockTitle>
        {{ $t('Новости компании') }}
      </template>
      <template v-slot:blockContent>
        <div>
          <CurrentCompanyNewsList v-for="companyItem in companyNews.get_all_news" :news-item="companyItem"></CurrentCompanyNewsList>
        </div>
      </template>
    </CurrentCompanyElems>
  </div>
</template>

<style scoped lang="scss">

</style>