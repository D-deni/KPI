<template>
  <div>
    <div
      class="flex justify-center gap-x-10 max-md:flex-wrap max-md:gap-y-4 max-md:items-center">
      <div class="w-2/12 max-md:w-full flex max-md:justify-center items-center gap-x-2">
        <div class="cursor-pointer relative transition-all" @mouseenter="moveElem = true"
             @mouseleave="moveElem = false" @click="moveElem = true">
          <svg class="dark:stroke-gray-200 stroke-black" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke-width="1.5"/>
            <path
              d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
              stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="12" cy="16" r="1" class="dark:fill-white fill-black"/>
          </svg>
          <Transition name="slide-down">
            <div v-if="moveElem"
              class="absolute dark:bg-gray-700 bg-white w-[220px] max-md:left-0 right-0 top-10 z-10 shadow-md rounded-lg p-2">
              <h3 class="text-center tracking-wider">{{ $t('Статусы выполнения') }}</h3>
              <TaskFilterStatus>
                <template v-slot:statusColor>
                  <div class="bg-orange-500 w-[25px] h-[25px] rounded-full"></div>
                </template>
                <template v-slot:statusName>
                  {{ $t('Выполняется') }}
                </template>
              </TaskFilterStatus>
              <TaskFilterStatus>
                <template v-slot:statusColor>
                  <div class="bg-green-500 w-[25px] h-[25px] rounded-full"></div>
                </template>
                <template v-slot:statusName>
                  {{ $t('Выполнено') }}
                </template>
              </TaskFilterStatus>
              <TaskFilterStatus>
                <template v-slot:statusColor>
                  <div class="bg-red-500 w-[25px] h-[25px] rounded-full"></div>
                </template>
                <template v-slot:statusName>
                  {{ $t('Отклонено') }}
                </template>
              </TaskFilterStatus>
              <TaskFilterStatus>
                <template v-slot:statusColor>
                  <div class="bg-blue-500 w-[25px] h-[25px] rounded-full"></div>
                </template>
                <template v-slot:statusName>
                  {{ $t('На расмотрении') }}
                </template>
              </TaskFilterStatus>
            </div>
          </Transition>
        </div>
        <TheButton
          @click="showFilter = !showFilter"
          type="button"
          class="tracking-widest rounded-full dark:bg-gray-400 p-3 bg-gray-300 hover:bg-gray-400 transition-all duration-200">
          {{ $t('Фильтр') }}
        </TheButton>
      </div>
      <Transition name="fade">
        <TheModal @showModal="showFilter = !showFilter" v-if="showFilter">
          <div>
            <div class="relative">
              <h2 class="text-center font-bold text-2xl max-md:text-xl dark:text-white tracking-widest">
                {{ $t('Фильтрация по поиску') }}</h2>
              <div class="absolute top-0 right-0 max-md:-right-3 max-md:-top-2" @click="showFilter = false">
                <svg class="dark:stroke-white stroke-black" width="35px" height="35px" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke-width="1.5"/>
                  <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <div class="flex justify-center mx-auto my-10 max-lg:flex-col items-center gap-y-10">
              <TaskFilter class="p-4" :class="{'box' : showStatus ==='status'}"
                          @showEvent="showStatus = !showStatus; showStatus = 'status'">
                <template v-slot:filterIcon>
                  <svg class="fill-black dark:fill-gray-100" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.4013 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5H15.0415C15.1017 6.85896 15.2257 7.19631 15.4013 7.5ZM13.2289 7.5C13.1282 7.17938 13.0589 6.84484 13.0247 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7C4.5 7.27614 4.72386 7.5 5 7.5H13.2289ZM5 11.5C4.72386 11.5 4.5 11.7239 4.5 12C4.5 12.2761 4.72386 12.5 5 12.5H19C19.2761 12.5 19.5 12.2761 19.5 12C19.5 11.7239 19.2761 11.5 19 11.5H5ZM5 16.5C4.72386 16.5 4.5 16.7239 4.5 17C4.5 17.2761 4.72386 17.5 5 17.5H19C19.2761 17.5 19.5 17.2761 19.5 17C19.5 16.7239 19.2761 16.5 19 16.5H5Z"/>
                    <circle cx="18" cy="6" r="3"/>
                  </svg>
                </template>
                <template v-slot:filterTitle>
                  {{ $t('По статусу') }}
                </template>
                <template v-slot:filterChevron>
                  <svg class="transition-all dark:stroke-white stroke-black"
                       :class="{'rotate-180' : showStatus === 'status'}" width="25px" height="25px" viewBox="0 0 24 24"
                       fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
              </TaskFilter>
              <TaskFilter class="p-4" :class="{'box' : showStatus ==='date'}"
                          @showEvent="showStatus = !showStatus; showStatus = 'date'">
                <template v-slot:filterIcon>
                  <svg class="dark:fill-white" width="25px" height="25px" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.67326018,0 C6.0598595,0 6.37326018,0.31324366 6.37326018,0.699649298 L6.373,2.009 L13.89,2.009 L13.8901337,0.708141199 C13.8901337,0.321735562 14.2035343,0.00849190182 14.5901337,0.00849190182 C14.976733,0.00849190182 15.2901337,0.321735562 15.2901337,0.708141199 L15.29,2.009 L18,2.00901806 C19.1045695,2.00901806 20,2.90399995 20,4.00801605 L20,18.001002 C20,19.1050181 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1050181 0,18.001002 L0,4.00801605 C0,2.90399995 0.8954305,2.00901806 2,2.00901806 L4.973,2.009 L4.97326018,0.699649298 C4.97326018,0.31324366 5.28666085,0 5.67326018,0 Z M1.4,7.742 L1.4,18.001002 C1.4,18.3322068 1.66862915,18.6007014 2,18.6007014 L18,18.6007014 C18.3313708,18.6007014 18.6,18.3322068 18.6,18.001002 L18.6,7.756 L1.4,7.742 Z M6.66666667,14.6186466 L6.66666667,16.284778 L5,16.284778 L5,14.6186466 L6.66666667,14.6186466 Z M10.8333333,14.6186466 L10.8333333,16.284778 L9.16666667,16.284778 L9.16666667,14.6186466 L10.8333333,14.6186466 Z M15,14.6186466 L15,16.284778 L13.3333333,16.284778 L13.3333333,14.6186466 L15,14.6186466 Z M6.66666667,10.6417617 L6.66666667,12.3078931 L5,12.3078931 L5,10.6417617 L6.66666667,10.6417617 Z M10.8333333,10.6417617 L10.8333333,12.3078931 L9.16666667,12.3078931 L9.16666667,10.6417617 L10.8333333,10.6417617 Z M15,10.6417617 L15,12.3078931 L13.3333333,12.3078931 L13.3333333,10.6417617 L15,10.6417617 Z M4.973,3.408 L2,3.40831666 C1.66862915,3.40831666 1.4,3.67681122 1.4,4.00801605 L1.4,6.343 L18.6,6.357 L18.6,4.00801605 C18.6,3.67681122 18.3313708,3.40831666 18,3.40831666 L15.29,3.408 L15.2901337,4.33697436 C15.2901337,4.72338 14.976733,5.03662366 14.5901337,5.03662366 C14.2035343,5.03662366 13.8901337,4.72338 13.8901337,4.33697436 L13.89,3.408 L6.373,3.408 L6.37326018,4.32848246 C6.37326018,4.7148881 6.0598595,5.02813176 5.67326018,5.02813176 C5.28666085,5.02813176 4.97326018,4.7148881 4.97326018,4.32848246 L4.973,3.408 Z"/>
                  </svg>
                </template>
                <template v-slot:filterTitle>
                  {{ $t('По дате') }}
                </template>
                <template v-slot:filterChevron>
                  <svg class="transition-all dark:stroke-white stroke-black"
                       :class="{'rotate-180' : showStatus === 'date'}"
                       width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
              </TaskFilter>
            </div>
            <div v-if="showStatus === 'status'"
                 class="flex justify-around dark:text-white tracking-widest max-sm:flex-col flex-wrap max-sm:flex-nowrap">
              <TaskFilterStatus :class="{'dark:bg-gray-500 bg-gray-100' : activeStatus === 'performed'}"
                                @activeStatus="activeStatus = !activeStatus; activeStatus = 'performed'">
                <template v-slot:statusColor>
                  <div class="bg-orange-500 w-[25px] h-[25px] rounded-full"></div>
                </template>
                <template v-slot:statusName>
                  {{ $t('Выполняется') }}
                </template>
              </TaskFilterStatus>
              <TaskFilterStatus :class="{'dark:bg-gray-500 bg-gray-100' : activeStatus === 'completed'}"
                                @activeStatus="activeStatus = !activeStatus; activeStatus = 'completed'">
                <template v-slot:statusColor>
                  <div class="bg-green-500 w-[25px] h-[25px] rounded-full"></div>
                </template>
                <template v-slot:statusName>
                  {{ $t('Выполнено') }}
                </template>
              </TaskFilterStatus>
              <TaskFilterStatus :class="{'dark:bg-gray-500 bg-gray-100' : activeStatus === 'rejected'}"
                                @activeStatus="activeStatus = !activeStatus; activeStatus = 'rejected'">
                <template v-slot:statusColor>
                  <div class="bg-red-500 w-[25px] h-[25px] rounded-full"></div>
                </template>
                <template v-slot:statusName>
                  {{ $t('Отклонено') }}
                </template>
              </TaskFilterStatus>
              <TaskFilterStatus :class="{'dark:bg-gray-500 bg-gray-100' : activeStatus === 'expectation'}"
                                @activeStatus="activeStatus = !activeStatus; activeStatus = 'expectation'">
                <template v-slot:statusColor>
                  <div class="bg-blue-500 w-[25px] h-[25px] rounded-full"></div>
                </template>
                <template v-slot:statusName>
                  {{ $t('На расмотрении') }}
                </template>
              </TaskFilterStatus>
            </div>
            <div v-else-if="showStatus === 'date'" class="flex items-center justify-center mx-auto w-full" >
              <VueDatePicker class="mx-auto max-md:flex-col flex justify-center" v-model="date" range inline
                             :preset-ranges="presetRanges">
                <template #yearly="{label, range, presetDateRange}">
                  <span @click="presetDateRange(range)"></span>
                </template>
              </VueDatePicker>
            </div>
            <div class="flex justify-evenly my-10">
              <TheButton :type="'danger'" class="w-3/12 max-sm:w-5/12 py-2 rounded-lg" @click="showFilter = false">
                {{$t('Отмена')}}
              </TheButton>
              <TheButton type="button" class="w-3/12 max-sm:w-5/12  py-2 rounded-lg bg-semiCyan">{{$t('Поиск')}}</TheButton>
            </div>
          </div>
        </TheModal>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">

import TheButton from "~/components/UI/TheButton.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TaskFilter from '~/components/Tasks/TaskUI/TaskUIFilter/TaskFilter.vue'
import TaskFilterStatus from "~/components/Tasks/TaskUI/TaskUIFilter/TaskFilterStatus.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths} from "date-fns";
import {move} from "@antfu/utils";

const params = ref({
  query: ''
})
const date = ref()
const presetRanges = ref([
  {label: 'Сегодня', range: [new Date(), new Date()]},
  {label: 'В этом месяце', range: [startOfMonth(new Date()), endOfMonth(new Date())]},

  {
    label: 'В предидущем месяце',
    range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
  },

  {label: 'В этом году', range: [startOfYear(new Date()), endOfYear(new Date())]},
  {label: 'По сроку выполнения', range: [new Date(), new Date()]},

]);

defineProps({
  moveElem: Boolean,
  showFilter: Boolean,
  showStatus: [String, Boolean],
  activeStatus: [String, Boolean],
  searchInput: String,
})
</script>

<style lang="scss">


.dp__menu_content_wrapper {
  @media screen and (max-width: 610px) {
    display: flex;
    flex-direction: column;
  }
}

.dp__action_select {
  display: none;
}

@keyframes bg {
  0% {
    background-size: 0 2px,
    2px 0,
    0 2px,
    2px 0;
  }
  25% {
    background-size: 100% 2px,
    2px 0,
    0 2px,
    2px 0;
  }
  50% {
    background-size: 100% 2px,
    2px 100%,
    0 2px,
    2px 0;
  }
  75% {
    background-size: 100% 2px,
    2px 100%,
    100% 2px,
    2px 0;
  }
  100% {
    background-size: 100% 2px,
    2px 100%,
    100% 2px,
    2px 100%;
  }
}

.box {
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, #fff 100%, #fff 100%),
  linear-gradient(to bottom, #fff 100%, #fff 100%),
  linear-gradient(to right, #fff 100%, #fff 100%),
  linear-gradient(to bottom, #fff 100%, #fff 100%);
  background-size: 100% 2px,
  2px 100%,
  100% 2px,
  2px 100%;
  border-radius: 3px;
  background-position: 0 0,
  100% 0,
  100% 100%,
  0 100%;
  animation: bg 1.25s cubic-bezier(0.19, 1, 0.22, 1) 1;
  animation-play-state: paused;
}

.box {
  animation-play-state: running;
}
</style>