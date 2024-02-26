<script setup lang="ts">
import {useUserStore} from "~/stores/users";
import {useChat} from "~/stores/chat";
import {useRoute} from "vue-router";
import ChatNav from "~/components/Chat/ChatNav.vue"
import ChatCropper from "~/components/Chat/UI/ChatCropper.vue";

const windowWidth = ref(0)
const activeNav = ref(true)
const route = useRoute()
const chatStore = useChat()
const userStore = useUserStore()

chatStore.loadChatList({page: 1, limit: 100})
userStore.loadUserList({query: '', user_type: 'user-list/my-company', page: 1, limit: 10000})
onMounted(() => {
  windowWidth.value = window.innerWidth
  if (route.path === '/base/chat') {
    activeNav.value = true
  } else if (route.path === `/base/chat/${chatStore.userChat?.id}`) {
    activeNav.value = false
  }
})
onUnmounted(() => {
  chatStore.showGroupCreateChoice = false;
  chatStore.showGroupCreate = false;
  chatStore.file = '';
  chatStore.src = '';
  chatStore.fileUpload = null;
  chatStore.results = {coordinates: null, image: null}
})

useSeoMeta({
  title: 'Чат',
  description: 'Интерактивный чат для пользователей'
})
</script>


<template>
  <div class="!mx-0 !py-0">
    <div
      class="dark:border-t-gray-500 dark:shadow-gray-500 dark:bg-gray-800 bg-gray-300 flex w-full border-t border-t-gray-100 dark:text-white rounded-lg shadow-md">
      <div
        class="max-md:absolute h-screen overflow-hidden relative z-[12] rounded-l-lg dark:bg-gray-700 bg-gray-200 transition-all duration-300 w-[320px]"
        :class="{'max-md:w-0' : !chatStore.activeChatNav || route.path === `/base/chat/${route.params.id}`, 'max-md:w-full ' : route.path === `/base/chat`, 'w-[320px]' : !userStore.get_user_list.results || !chatStore.activeChatNav}">
        <ChatNav class=""/>
      </div>
      <div class="w-11/12 relative overflow-hidden max-lg:w-9/12 max-md:w-full h-screen">
        <ClientOnly>
          <NuxtPage></NuxtPage>
          <ChatCropper></ChatCropper>
        </ClientOnly>
        <div v-if="route.path === '/base/chat'"
             class="flex items-center justify-center my-auto w-full h-full text-center rounded-full px-2">
          <p class="bg-black text-white bg-opacity-40 px-10 py-2 rounded-full">
            {{ $t('Выберите пользователя для того чтобы открыть чат') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>