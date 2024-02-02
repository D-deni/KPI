<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useAuthStore} from "~/stores/auth";
import {useUserStore} from "~/stores/users";
import {useRoute} from "vue-router";
import TheChatAvatar from "~/components/Chat/ChatNav/UI/TheChatAvatar.vue";
import nuxtStorage from "nuxt-storage/nuxt-storage";
const userStore = useUserStore()
const chatStore = useChat()
const user = useAuthStore()
const route = useRoute()

defineProps({
  dragClass: {
    type: Boolean,
    default: false,
  }
})

function message(chat_id: Number) {
  let socket = new WebSocket(`wss://buildwithus.ai-softdev.com/ws/chat/${chat_id}?token=${nuxtStorage.localStorage.getData('token')}`)
  socket.onmessage = (data) => {
    let msg = JSON.parse(data.data.message)
    console.log(msg)
  }
}
</script>

<template>
  <NuxtLink :to="`/base/chat/${chat.id}`"
            v-for="chat in chatStore.get_chat_list.results?.filter((e)=> chatStore.displayChat === 'all' || e.is_group === true && chatStore.displayChat === 'groups' || e.is_group === false && chatStore.displayChat === 'users')"
            @click="chatStore.activeChatNav = false; message(chat.id);  chatStore.showPinnedWindow = false; chatStore.messageUpdate = {}; chatStore.messageForwarded = {}; chatStore.messageReplied = { }; chatStore.showChatInfo = false; chatStore.showGroupCreateChoice = false"
            class="flex justify-between px-4 gap-x-2 dark:hover:bg-gray-500 hover:bg-gray-300 cursor-pointer transition-all duration-200 py-2"
            @dragenter="chat.id ? dragClass = true : dragClass = false"
            @dragleave="dragClass = false"
            :class="{'dark:hover:!bg-semiCyan ' : route.path === `/base/chat/${chat.id}`, 'hover:!bg-cyan' : route.path === `/base/chat/${chat.id}`, '!bg-blue-400' : dragClass && chat.id === chat.id}">
    <div class="flex gap-x-2">
      <TheChatAvatar :chat="chat"/>
      <div class="text-sm break-words">
        <p v-if="chat.user?.id !== user.user.id && chat.user?.id" class="text-black dark:text-white">
          {{ user.user.id !== chat.user?.id ? (chat.user.first_name + ' ' + chat.user.last_name) : (user.user.first_name + ' ' + user.user.last_name)}}</p>
        <p v-else-if="!chat.user?.id && !chat.is_group" class="tracking-wider text-black dark:text-white">{{ $t('Избранное') }}</p>
        <p v-else-if="chat.is_group" class="text-black dark:text-white">{{chat.name}}</p>
        <p v-if="chat.last_message.text && !chat.last_message.file_name" class="text-gray-400" :class="{'text-gray-500 dark:text-white' : route.path === `/base/chat/${chat.id}`}">
          {{ chat.last_message.text?.length > 15 ? chat.last_message.text.slice(0, 15) + '...' : chat.last_message.text }}</p>
        <p v-else-if="chat.last_message.text && chat.last_message.file_name" class="text-gray-400" :class="{'text-gray-500 dark:text-white' : route.path === `/base/chat/${chat.id}`}"><span>{{chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0,15) + '...' : chat.last_message.file_name}}</span>{{', ' + chat.last_message.text}}</p>
        <p v-else-if="!chat.last_message.text && chat.last_message.file_name" class="text-gray-400" :class="{'text-gray-500 dark:text-white' : route.path === `/base/chat/${chat.id}`}">{{chat.last_message.file_name.length > 20 ? chat.last_message.file_name.slice(0,20) + '...' : chat.last_message.file_name}}</p>
      </div>
    </div>
    <div class="text-[12px] flex gap-x-1">
      <div v-if="chat.user?.id">
        <svg v-if="chat.last_message.sender.id === user.user.id" class="fill-semiCyan" :class="{'fill-white' : route.path === `/base/chat/${chat.id}`}" width="20px"
             height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path v-if="chat.last_message.text?.length > 0" fill-rule="evenodd" clip-rule="evenodd"
                d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"/>
          <path v-if="chat.last_message.read !== false" fill-rule="evenodd" clip-rule="evenodd"
                d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"/>
        </svg>
      </div>
      <p class="text-gray-400" :class="{'text-white' : route.path === `/base/chat/${chat.id}`}">
        {{ chat.last_message.created_at ? new Date(chat.last_message.created_at).toLocaleTimeString().slice(0, 5) : '' }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">

</style>