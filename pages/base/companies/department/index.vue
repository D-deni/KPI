<script setup lang="ts">
import DepartmentContentLists from "~/components/Company/department/DepartmentContentLists.vue";
import DepartmentCreate from "~/components/Company/department/DepartmentCreate.vue";
import {useCompanies} from "~/stores/companies";
import {useAuthStore} from "~/stores/auth";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import TheFilter from "~/components/UI/TheFilter.vue";
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TheSceleton from "~/components/UI/TheSceleton.vue";
import TheTextarea from "~/components/UI/TheTextareaAutosize.vue";
import {useChat} from "~/stores/chat";

const chat = useChat()
const currentUser = useAuthStore()
const departmentList = useCompanies()
departmentList.loadDepartmentList()
defineProps({
  formTitle: String
})

useSeoMeta({
  title: 'Департаменты',
  description: 'Список департаментов компании'
})
</script>

<template>
  <div>
    <TheTextContent :text-type="'pageTitle'">{{ $t('Страница департаментов компании') }}</TheTextContent>
    <div class="flex items-center gap-x-4" v-if="currentUser.user.role_en !== 'admin'">
      <TheBreadcrumbs :breadcrumb-link="`/base/companies`">
        {{ $t('Компания') }}
      </TheBreadcrumbs>
      <div>
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none">
          <path class="dark:stroke-white stroke-black"
                d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </div>
      <TheBreadcrumbs>
        {{ $t('Департаменты') }}
      </TheBreadcrumbs>
    </div>
    <div class="flex max-md:flex-wrap max-md:justify-center max-md:gap-y-4 relative items-center justify-between w-full gap-x-10 ">
      <TheSearch class="w-9/12 max-md:w-full max-md:mx-auto max-md:relative"/>
      <TheFilter />
      <DepartmentCreate class="w-3/12 max-md:w-9/12 max-md:mb-4 text-sm"></DepartmentCreate>
    </div>
    <div class="flex max-lg:flex-col ">
      <div v-if="!departmentList.get_all_department.results" class="flex w-full gap-y-4 gap-x-4 flex-wrap">
        <TheSceleton v-for="item in 6" border-radius="10px" width="30%" height="100px" ></TheSceleton>
      </div>
      <div v-else class="w-full max-lg:order-2 flex flex-wrap">
        <DepartmentContentLists v-for="department in departmentList?.get_all_department.results"
                                :department-item="department"></DepartmentContentLists>
      </div>
      <div class="w-3/12 max-lg:w-full max-lg:mb-8">
        <TheContentBlock>
          <h2 class="text-center tracking-widest dark:text-white">{{ $t('Информация о департамента') }}</h2>
          <div class="mt-6">
            <div class="flex items-center my-4 gap-x-5 justify-center">
              <div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12">
                <div>
                  <svg class="dark:stroke-white stroke-black" fill="none" width="35px" height="35px" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z"></path>
                    <path
                      d="M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z"></path>
                    <path
                      d="M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z"></path>
                  </svg>
                </div>
                <p class="tracking-widest">{{ $t('Количество') }}: </p></div>
              <div>
                <p
                  class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white">
                  <span>{{ departmentList.get_all_department.count }}</span>
                </p>
              </div>
            </div>

          </div>
        </TheContentBlock>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>