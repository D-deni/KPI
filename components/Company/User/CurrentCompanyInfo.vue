<script setup lang="ts">
import {useCompanies} from "~/stores/companies";
import CurrentCompanyElems from "~/components/Company/CompanyUI/CurrentCompanyElems.vue";

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CurrentCompanyNews from "~/components/Company/User/CurrentCompanyNews.vue";
import CurrentCompanyFiles from "~/components/Company/User/CurrentCompanyFiles.vue";
import CurrentCompanyDepartment from "~/components/Company/User/CurrentCompanyDepartment.vue";
import CurrentCompanyChart from "~/components/Company/User/CurrentCompanyChart.vue";

const currentCompany = useCompanies()
const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin],
  theme: 'darkly',
  events: [
    {title: "event 1", date: "2022-12-26"},
    {title: "event 2", date: "2022-12-27"},
  ],
}
</script>

<template>
  <div class="flex flex-col overflow-hidden gap-y-10 ">
    <div class="flex w-11/12 max-[1400px]:flex-wrap gap-x-6 max-[1400px]:gap-y-10 mx-auto">
      <CurrentCompanyElems
          class="w-4/12 ml-auto max-[1400px]:mx-auto max-[1400px]:w-6/12 max-md:w-full max-[1400px]:order-3">
        <template v-slot:blockTitle>
          {{ $t('График') }}
        </template>
        <template v-slot:blockContent>
          <div>
            <CurrentCompanyChart/>
          </div>
        </template>
      </CurrentCompanyElems>
      <CurrentCompanyElems class="w-full mx-auto max-[1400px]:mx-auto max-[1400px]:w-full">
        <template v-slot:blockTitle>
          {{ $t('О компании') }}
        </template>
        <template v-slot:blockContent>
          <div>{{ currentCompany.company.description }}
          </div>
        </template>
      </CurrentCompanyElems>
      <CurrentCompanyElems class="w-5/12 mr-auto max-[1400px]:mx-auto max-[1400px]:w-5/12 max-md:w-full">
        <template v-slot:blockTitle>
          {{ $t('Статистика компании') }}
        </template>
        <template v-slot:blockContent>
          <div class="flex items-center my-4 gap-x-5 justify-center">
            <div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12 ">
              <div>
                <svg width="35px" height="35px" class="stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.3873 7.1575L11.9999 12L3.60913 7.14978" stroke-width="1" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                  <path d="M12 12V21" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                      d="M11 2.57735C11.6188 2.22008 12.3812 2.22008 13 2.57735L19.6603 6.42265C20.2791 6.77992 20.6603 7.44017 20.6603 8.1547V15.8453C20.6603 16.5598 20.2791 17.2201 19.6603 17.5774L13 21.4226C12.3812 21.7799 11.6188 21.7799 11 21.4226L4.33975 17.5774C3.72094 17.2201 3.33975 16.5598 3.33975 15.8453V8.1547C3.33975 7.44017 3.72094 6.77992 4.33975 6.42265L11 2.57735Z"
                      stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <p class="tracking-widest">{{ $t('Объекты') }}: {{}}</p>
            </div>
            <div>
              <p class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white">{{currentCompany.company.objects_count}}</p>
            </div>
          </div>
          <div class="flex items-center my-4 gap-x-5 justify-center">
            <div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12 ">
              <div>
                <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="User / Users_Group">
                    <path id="Vector" class="dark:stroke-white stroke-black"
                          d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
                          stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <p class="tracking-widest">{{ $t('Сотрудники') }}:</p>
            </div>
            <div>
              <p class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white">{{currentCompany.company.users_count}}</p>
            </div>
          </div>
          <div class="flex items-center my-4 gap-x-5 justify-center">
            <div class="flex items-center gap-x-2 w-8/12 max-md:w-9/12 ">
              <div>
                <svg class="dark:stroke-white stroke-black" fill="none" width="35px" height="35px" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z"/>
                  <path
                      d="M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z"/>
                  <path
                      d="M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z"/>
                </svg>
              </div>
              <p class="tracking-widest">{{ $t('Департаменты') }}: {{}}</p>
            </div>
            <div>
              <p class="rounded-full border border-gray-400 dark:border-white w-10 h-10 flex items-center justify-center dark:text-white">{{currentCompany.company.departments_count}}</p>
            </div>
          </div>
        </template>
      </CurrentCompanyElems>
    </div>
    <div class="w-11/12 mx-auto">
      <CurrentCompanyFiles/>
    </div>
    <div class="w-11/12 mx-auto">
      <CurrentCompanyDepartment/>
    </div>
    <div>
      <CurrentCompanyNews/>
    </div>
    <div class="w-11/12 mx-auto">
      <CurrentCompanyElems class="w-10/12 mx-auto ">
        <template v-slot:blockTitle>
          {{ $t('Календарь событий') }}
        </template>
        <template v-slot:blockContent>
          <div>
            <FullCalendar :options="calendarOptions"></FullCalendar>
          </div>
        </template>
      </CurrentCompanyElems>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>