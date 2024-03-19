<script setup lang="ts">
import {useRoute} from "vue-router";
import {useUserStore} from "~/stores/users";
import {useChat} from "~/stores/chat";
import ChatNavHeaderElem from "~/components/Chat/ChatNav/UI/ChatNavHeaderElem.vue";
import TheButton from "~/components/UI/TheButton.vue";
import ChatGroupCreate from "~/components/Chat/ChatGroup/ChatGroupCreate.vue";
const userStore = useUserStore()
const chat = useChat()
const route = useRoute()
defineProps({
  activeNav: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
 <div class="">
   <form @submit.prevent="userStore.searchUser({search: chat.searchElem})" class="px-4 mb-2 pb-4">
     <input v-model="chat.searchElem"
            class="w-full hover:bg-active px-4 py-1 rounded-full max-md:w-9/12 max-md:mx-auto block text-sm bg-gray-100 focus:bg-gray-300 text-black tracking-widest dark:focus:opacity-100 transition-all dark:bg-gray-600 dark:text-white outline-none"
            type="text" placeholder="Поиск..." :class="{'max-md:hidden' : !chat.activeChatNav && route.path !== '/base/chat'}">
   </form>
   <div class="mx-4 " v-if="chat.windowWidth < 768 || chat.windowWidth > 768">
      <ChatGroupCreate/>
      <ChatNavHeaderElem/>
   </div>
 </div>
</template>

<style scoped lang="scss">

</style>