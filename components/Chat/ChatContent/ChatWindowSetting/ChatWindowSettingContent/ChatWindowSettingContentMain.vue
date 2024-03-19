<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
import {useChat} from "~/stores/chat";
const chat = useChat()
const loadAuthStore = useAuthStore()
</script>

<template>
  <div class="p-4">
    <div class="flex items-center tracking-wider gap-x-4">
      <div>
        <img v-if="chat.get_user_chat.user?.id || chat.get_user_chat.photo_url"
             class="w-[80px] h-[80px] rounded-full"
             :src="!chat.get_user_chat.is_group
                ? loadAuthStore.get_server_domain + chat.get_user_chat.user?.photo
                : loadAuthStore.get_server_domain + chat.get_user_chat?.photo_url"
             alt="">
        <div v-else>
          <div class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full bg-blueSemiLight">
            <p class="uppercase" v-for="chatName in chat.get_user_chat.name.split(' ').slice(0,2)"
               @click="console.log(chatName[0])">{{ chatName[0] }}</p>
          </div>
        </div>
      </div>
      <div>
        <p class="text-lg tracking-widest">{{ chat.get_user_chat.name }}</p>
        <p class="text-sm text-gray-400">{{ chat.get_user_chat.users?.length + ' ' + $t('участников') }}</p>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

</style>