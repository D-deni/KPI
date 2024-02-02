<script setup lang="ts">
import TheTitle from "~/components/UI/TheTitle.vue"
import TheBreadcrumbs from "~/components/UI/TheBreadcrumbs.vue";
import {useCompanies} from "~/stores/companies";
import {useRoute} from "vue-router";
import TheContentBlock from "~/components/UI/TheContentBlock.vue";
import TheSearch from "~/components/UI/TheSearch.vue";
import TheFilter from "~/components/UI/TheFilter.vue";
import DepartmentUserList from "~/components/Company/department/DepartmentUserList.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import router from "#app/plugins/router";
import TheSceleton from "~/components/UI/TheSceleton.vue";

const currentDepartment = useCompanies()
const route = useRoute()


defineProps({
  showWarning: {
    type: Boolean,
    default: false
  }
})
watchEffect(() => {
  currentDepartment.loadDepartment({id: route.params.id})
})
watchSyncEffect(()=>{
  useSeoMeta({
    title: `${currentDepartment.current_department.name}`
  })
})
</script>

<template>
  <div>
    <div class="mb-10">
      <TheTextContent :text-type="'pageTitle'">{{ $t('Департамент') }} <span
        class="text-base text-white bg-blueSemiLight py-2 px-4 rounded-full">{{ currentDepartment.get_department.name}}</span>
      </TheTextContent>
    </div>
    <div class="flex items-center gap-x-4">
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
      <TheBreadcrumbs :breadcrumb-link="`/base/companies/department`">
        {{ $t('Департаменты') }}
      </TheBreadcrumbs>
      <div>
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none">
          <path class="dark:stroke-white stroke-black"
                d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
                stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </div>
      <TheBreadcrumbs>
        {{ currentDepartment.get_department.name }}
      </TheBreadcrumbs>
    </div>
    <div class="flex items-center gap-x-10">
      <div class="flex items-center w-11/12 gap-x-10">
        <TheSearch class="w-7/12"></TheSearch>
        <TheFilter/>
      </div>
      <TheButton type="danger" class="px-10 py-2 rounded-full" @click="showWarning = true">{{ $t('Удалить') }}
      </TheButton>
      <TheModal v-if="showWarning" @showModal="showWarning = !showWarning">
        <div>
          <TheTextContent>{{ $t('Предупреждение') }}</TheTextContent>
          <div class="text-center text-lg mt-2 tracking-widest">
            <p>{{ $t('Вы действительно хотите удалить департамент?') }}</p>
            <p class="!text-base">{{ $t('Удалённые департаменты восстановке не подлежат') }}</p>
          </div>
        </div>
        <div class="flex justify-center gap-x-10 mt-10">
          <TheButton type="danger" class="w-3/12 py-2 rounded-full" @click="showWarning = false">{{ $t('Отмена') }}
          </TheButton>
          <TheButton type="success" class="w-3/12 py-2 rounded-full" @click="currentDepartment.deleteDepartment({id: currentDepartment.get_department.id}, $router)">{{ $t('Удалить') }}</TheButton>
        </div>
      </TheModal>
    </div>
    <div class="flex gap-x-10 w-full">
      <div v-if="!currentDepartment.get_department?.id" class="flex w-full gap-y-4 flex-col">
        <TheSceleton v-for="i in 5" border-radius="10px" width="90%" height="80px"></TheSceleton>
      </div>
      <div v-else class="w-full">
        <DepartmentUserList v-for="userItem in currentDepartment?.get_department?.participants"
                            :user-item="userItem"></DepartmentUserList>
      </div>
      <div class="w-3/12">
        <TheContentBlock class="w-full">
          <TheTextContent>Информация</TheTextContent>
          <div>
            <div class="flex items-center my-4 gap-x-5 justify-center">
              <div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12">
                <div>
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                       data-v-inspector="components/TheHeader.vue:26:11">
                    <g id="User / Users_Group" data-v-inspector="components/TheHeader.vue:27:13">
                      <path id="Vector" class="dark:stroke-white stroke-black"
                            d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
                            stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                            data-v-inspector="components/TheHeader.vue:28:15"></path>
                    </g>
                  </svg>
                </div>
                <p class="tracking-widest">{{ $t('Сотрудников') }}: </p></div>
              <div>
                <p
                  class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white" >{{currentDepartment.get_department.participants?.length}}</p>
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