<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
const domain = useAuthStore()
defineProps({
  chat: {
    type: Object,
    default: ()=>{}
  },
})
</script>

<template>
  <div class="">
    <div class="w-[50px]" v-if="chat.user?.id !== domain.user.id && chat.user?.id">
      <img  class="w-[50px] h-[50px] rounded-full"
           :src="domain.get_server_domain + chat.user.photo" alt="">
    </div>
    <div v-else-if="chat.is_group">
      <img v-if="chat?.photo_url" :src="domain.get_server_domain + chat?.photo_url" class="w-[50px] h-[50px] rounded-full" alt="">
      <div v-else class="rounded-full bg-blueSemiLight flex items-center justify-center w-[50px] h-[50px]">
        <p class="uppercase font-bold" v-for="chatName in chat.name.split(' ').slice(0,2)" @click="console.log(chatName[0])">{{chatName[0]}}</p>
      </div>
    </div>
    <div v-else-if="!chat.user?.id && !chat.is_group" class="rounded-full bg-blueSemiLight flex items-center justify-center w-[50px] h-[50px]">
      <svg class="stroke-white" width="35px" height="35px" viewBox="0 -0.5 25 25" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>