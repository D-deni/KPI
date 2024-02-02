<template>
  <div class="">
    <div class="w-screen h-screen z-50 fixed bg-black opacity-30 hidden"
         :class="{'hidden' : !activeNav, 'max-[1150px]:block' : activeNav}"
         @click="activeNav = false"/>
    <div class="flex w-full h-full dark:bg-bgPages">
      <div
        class="bg-white transition-all duration-300 dark:bg-gray-600 max-[880px]:h-screen max-[1150px]:fixed z-[70]"
        :class="{'max-[1150px]:-translate-x-24 transition-all duration-200' : !activeNav, 'max-[600px]:w-full transition-all' : activeNav}">
        <div
          class="absolute bg-gray-300 rounded-l-lg px-2 py-1 z-[100] hidden max-[1150px]:block max-md:block right-2 top-6"
          @click="activeNav = false">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.9995 15.9995L20.9995 11.9995M20.9995 11.9995L16.9995 7.99951M20.9995 11.9995H8.99951M12.9995 20.9995H6.20029C5.08019 20.9995 4.52014 20.9995 4.09231 20.7815C3.71599 20.5898 3.41003 20.2838 3.21828 19.9075C3.00029 19.4797 3.00029 18.9196 3.00029 17.7995V6.19951C3.00029 5.07941 3.00029 4.51935 3.21828 4.09153C3.41003 3.71521 3.71599 3.40925 4.09231 3.2175C4.52014 2.99951 5.08019 2.99951 6.20029 2.99951L12.9995 2.99951"
              stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <TheHeader class="max-md:overflow-x-hidden" :class="{'mr-24' : activeNav && user.my_scroll>90}" :activeNav="activeNav"></TheHeader>
      </div>
      <div class="w-full relative">
        <div class="cursor-pointer absolute top-8 max-[800px]:top-6 left-5 z-50 dark:fill-white fill-black"
             :class="{'blur' : treeStore.treeFullScreen === true}"
             @click="activeNav = !activeNav; user.openNotification = false; user.openSettings = false">
          <svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.999776 1.99957H20.9998C21.5177 1.99957 21.9845 1.46089 21.9845 0.9431C21.9845 0.425798 21.5607 0.00261796 21.0428 0.00261796H0.956408C0.43868 0.00261796 0.014912 0.425798 0.014912 0.9431C0.014912 1.46089 0.482048 1.99957 0.999776 1.99957ZM0.999776 8.99956H20.9998C21.5177 8.99956 21.9845 8.51664 21.9845 7.99933C21.9845 7.48203 21.5177 6.99958 20.9998 6.99958H0.999776C0.482048 6.99958 0.014912 7.48203 0.014912 7.99933C0.014912 8.51664 0.482048 8.99956 0.999776 8.99956ZM21.0428 15.9962H0.956408C0.43868 15.9962 0.014912 15.5727 0.014912 15.0551C0.014912 14.5379 0.482048 13.9997 0.999776 13.9997H20.9998C21.5177 13.9997 21.9845 14.5379 21.9845 15.0551C21.9845 15.5727 21.5607 15.9962 21.0428 15.9962Z"/>
          </svg>
        </div>
        <HeaderContent class="pl-14">
        </HeaderContent>
        <div class="relative" @click="user.openSettings = false; user.openNotification = false">
          <NuxtPage class="mx-6 max-sm:mx-1 py-10 h-full " :activeNav="activeNav"></NuxtPage>
        </div>
<!--    <allTips></allTips>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth";
import {useRouter} from "vue-router";
import {useRoute} from "vue-router";
import {useNotification} from "~/stores/notification";
import {useChat} from "~/stores/chat";
import {toast} from "vue3-toastify";
import {useTreeStore} from "~/stores/tree";
import nuxtStorage from "nuxt-storage/nuxt-storage";

const treeStore = useTreeStore()
const chat = useChat()
const notice = useNotification()
const route = useRouter()
const router = useRoute()
const user = useAuthStore();
const props = defineProps({
  activeNav: {
    type: Boolean,
    default: false,
  },
})

function notification() {
  let ws = new WebSocket(`wss://api-buildwithus.ai-softdev.com/ws/notification?token=${nuxtStorage.localStorage.getData('token')}`)
  ws.onmessage = (data) => {
    let res = JSON.parse(data.data)
    if (res.type === 'notification') {
      notice.get_notification?.unshift(res.notification)
      toast.info(res.notification.text, {
        autoClose: 1500,
        theme: 'auto'
      })
    } else if (router.path.search(/\/base\/chat[\/\d]*$/g) !== -1) {
      if (res.type === 'send_message') {
        for (let i = 0; i < chat.chatList.results.length; i++) {
          if (chat.chatList.results[i].id === res.messages?.chat_id) {
            chat.chatList.results[i].last_message = res.messages
          }
          if(res.message.message_type === 'change'){
            if(chat.chatList.results[i].id === chat.userChat.id && res.message.file ){
              chat.chatList.results[i].photo_url = res.message.file
              console.log(res.message)
            }
            if(chat.chatList.results[i].name && chat.chatList.results[i].id === chat.userChat.id) {
              chat.chatList.results[i].name = chat.updateChatName
              console.log(res)
            }
          }
        }
      } else if (res.type === 'read_messages') {
        if (chat.userChat.id === res.messages[0].chat_id) {
          for (let i = 0; i < res.messages.length; i++) {
            for (let j = chat.userChat.messages.length - 1; j >= 0; j--) {
              if (chat.userChat.messages[j].id === res.messages[i].id) {
                chat.userChat.messages[j].read = true;
                break;
              }
            }
          }
        }
        for (let i = 0; i < chat.chatList.results.length; i++) {
          if (chat.chatList.results[i].last_message.id === res.messages[res.messages.length - 1].id) {
            chat.chatList.results[i].last_message.read = true;
            break
          }
        }
      } else if(res.type === 'delete_message') {
        for (let i = 0; i < chat.chatList.results.length; i++) {
          if (chat.chatList.results[i].id === res.last_message?.chat_id) {
            chat.chatList.results[i].last_message = res.last_message
          }
        }
      }
      else if(res.type === 'update_message') {
        for (let i = 0; i < chat.chatList.results.length; i++) {
          if (chat.chatList.results[i].id === res.last_message?.chat_id) {
            console.log(chat.chatList.results[i], '*****', res.last_message)
            chat.chatList.results[i].last_message = res.last_message
          }
        }
      }
    }
  }


  ws.onclose = function (e) {
    notification();
  };

  ws.onerror = function (err) {
    ws.close();
  };
}

onMounted(() => {
  if (!nuxtStorage.localStorage.getData('token')) {
    route.push('/').then(e => {
      toast.info('Для начало авторизуйтесь', {autoClose: 1500, theme: 'auto'})
    })
  } else {
    user.loadCurrentUser()
    notification()
  }
})

onUpdated(() => {
  if (!nuxtStorage.localStorage.getData('token')) {
    route.push('/').then(e => {
      toast.info('Для начало авторизуйтесь', {autoClose: 1500, theme: 'auto'})
    })
  }
})
</script>

<style lang="postcss">
.router-link-active {
  @apply dark:bg-semiCyan bg-cyan dark:border-r-cyan border-r-semiCyan border-r-4;
}

::-webkit-scrollbar {
  @apply w-2
}

::-webkit-scrollbar-track {
  @apply dark:bg-blueDarkSemiLight
}

::-webkit-scrollbar-thumb {
  @apply bg-semiCyan
}

.left-fade-enter-active {
  transition: all 0.3s ease-out;
}

.left-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.left-fade-enter-from,
.left-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
<style scoped lang="postcss">

</style>