<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
const loadCurrentUser = useAuthStore()
defineProps({
  userItem: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <div class="my-2 flex">
    <NuxtLink :to="`/base/users/${userItem.id}`" class="transition-all shadow-md hover:shadow-lg border dark:border-none dark:shadow-none dark:bg-gray-700  dark:hover:bg-gray-800 p-4 rounded-lg items-center max-md:flex  max-md:w-full max-sm:flex-col max-sm:gap-y-4">
      <div class="flex   items-center max-md:w-4/12 gap-x-4 max-lg:mx-auto">
        <img class="w-14 h-14 rounded-full" :src="loadCurrentUser.get_server_domain + userItem.photo_url" alt="">
        <h2 class="tracking-widest font-bold  break-words">{{ userItem.first_name + ' ' + userItem.last_name }}</h2>
      </div>
      <div class="flex flex-col items-center justify-center my-2 max-md:w-4/12  mx-auto">
        <div>
          <p class="text-lg font-bold tracking-widest mb-2" v-if="loadCurrentUser.user.role_en === 'admin'">{{$t('Роль | Должность')}}</p>
          <p class="text-lg font-bold tracking-widest mb-2" v-else>{{$t('Должность')}}</p>
        </div>
        <div class="text-center flex flex-col gap-y-2 tes-sm">
          <h2 class="tracking-widest text-sm text-gray-600" v-if="loadCurrentUser.user.role_en === 'admin'">({{ userItem.role }})</h2>
          <h2 class="tracking-widest text-md ">{{ userItem.position }}</h2>
        </div>
      </div>
      <div class="flex flex-col items-center text-center">
        <h2 class="tracking-widest font-bold" v-if="['company_admin', 'director', 'vice_director'].includes(loadCurrentUser.user.role_en)">{{$t('Дата регистрации')}}</h2>
        <p>123123123</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>