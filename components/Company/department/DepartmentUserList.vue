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
  <div class="my-6">
    <NuxtLink :to="`/base/users/${userItem.id}`" class="transition-all shadow-md hover:shadow-lg border dark:border-none dark:shadow-none dark:bg-gray-400 dark:hover:bg-gray-300 p-4 rounded-lg flex max-[1241px]:flex-col max-[1241px]:gap-y-4 justify-between items-center cursor-pointer ">
      <div class="flex items-center gap-x-4 w-3/12 max-lg:w-full max-lg:x-mx-auto">
        <img class="w-14 h-14 rounded-full" :src="loadCurrentUser.get_server_domain + userItem.photo_url" alt="">
        <h2 class="tracking-widest font-bold max-xl:text-center">{{ userItem.first_name + ' ' + userItem.last_name }}</h2>
      </div>
      <div class="flex flex-col items-center justify-center w-5/12 max-lg:w-full  mx-auto">
        <p class="text-lg font-bold tracking-widest mb-2" v-if="loadCurrentUser.user.role === 'Администратор сайта'">{{$t('Роль | Должность')}}</p>
        <p class="text-lg font-bold tracking-widest mb-2" v-else>{{$t('Должность')}}</p>
        <div class="text-center flex flex-col gap-y-2">
          <h2 class="tracking-widest text-sm text-gray-600" v-if="loadCurrentUser.user.role === 'Администратор сайта'">({{ userItem.role }})</h2>
          <h2 class="tracking-widest text-md ">{{ userItem.position }}</h2>
        </div>
      </div>
      <div class="w-2/12 max-[1241px]:w-full max-lg:x-mx-auto text-center">
        <h2 class="tracking-widest font-bold" v-if="loadCurrentUser.user.role === 'Администратор сайта' || loadCurrentUser.user.role === 'Администратор компании'">{{$t('Дата регистрации')}}</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">

</style>