<script setup lang="ts">
import CurrentCompanyElems from "~/components/Company/CompanyUI/CurrentCompanyElems.vue";
import {useCompanies} from "~/stores/companies";
const departments = useCompanies()
departments.loadDepartmentList()
defineProps({
  more: {
    type: Number,
    default: null
  }
})
</script>

<template>
  <div>
    <CurrentCompanyElems >
      <template v-slot:blockTitle>
        {{$t('Отделы компании')}}
      </template>
      <template v-slot:blockContent>
      <div class="grid grid-cols-4 max-[1750px]:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10 items-center gap-x-4 gap-y-4">
        <div v-for="department in departments.get_all_department.results" class="relative border p-2 h-full rounded-lg dark:border-gray-400" @mouseenter="more = department.id" @mouseleave="more = null">
          <div :class="{'blur-[1px]' : more === department.id}">
            <div class="text-center text-base tracking-widest">
              <h2>{{department.name}}</h2>
            </div>
            <div class="p-2">
              <div class="flex h-[50px] flex-col gap-y-2 my-4 ">
                <div class="">
                  <p class="tracking-widest">{{$t('Руководитель')}}</p>
                </div>
                <div>
                  <p class="break-words tracking-wider text-sm">{{department.department_director_name ? department.department_director_name : 'Отсутсвует'}}</p>
                </div>
              </div>
              <div class="flex h-[50px] flex-col gap-y-2 my-4 ">
                <div class="">
                  <p class="tracking-widest">{{$t('Заместитель')}}</p>
                </div>
                <div>
                  <p class="break-words tracking-wider text-sm">{{department.vice_department_director_name ? department.vice_department_director_name : 'Отсутсвует'}}</p>
                </div>
              </div>
            </div>
          </div>
          <Transition name="fade">
            <NuxtLink :to="`/base/companies/department/${department.id}`" v-if="more === department.id" class="cursor-pointer absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg" >
              <p class="text-center mt-20 mx-auto uppercase text-sm rounded-full dark:bg-gray-400 bg-white w-4/12">{{$t('Подробнее')}}</p>
            </NuxtLink>
          </Transition>
        </div>
      </div>
      </template>
    </CurrentCompanyElems>
  </div>
</template>

<style scoped lang="scss">

</style>