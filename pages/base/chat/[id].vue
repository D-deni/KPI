<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "~/stores/auth";
import ChatContent from "~/components/Chat/ChatContent.vue";
import Sceleton from "~/components/UI/TheSceleton.vue";
import ChatContentUserPinned from "~/components/Chat/ChatContent/ChatContentUserPinned.vue";
import TheModal from "~/components/UI/TheModal.vue";
import ChatWindowSettingContent from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent.vue";
import ChatChangeWindow from "~/components/Chat/UI/ChatChangeWindow.vue";
import ChatCropperFileInput from "~/components/Chat/UI/ChatCropperFileInput.vue";
import {Preview} from "vue-advanced-cropper";
import TheButton from "~/components/UI/TheButton.vue";
import {toast} from "vue3-toastify";
import TheInput from "~/components/UI/TheInput.vue";
import ChatFileError from "~/components/Chat/UI/ChatFileError.vue";
import ChatUploadWindow from "~/components/Chat/UI/Upload/ChatUploadWindow.vue";
import ChatUploadError from "~/components/Chat/UI/Upload/ChatUploadError.vue";
import nuxtStorage from "nuxt-storage/nuxt-storage";
const loadAuthStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const chat = useChat()
defineProps({
  activeNav: {
    type: Boolean,
    default: true
  },
})

onUnmounted(()=>{
  chat.messageText = ''
})
function messages() {
  let mes = new WebSocket(`wss://api-buildwithus.ai-softdev.com/ws/chat/${route.params.id}?token=${nuxtStorage.localStorage.getData('token')}`)
  mes.onmessage = (event) => {
    let res = JSON.parse(event.data)
    if (chat.userChat?.id === res.chat_id && mes.readyState === WebSocket.OPEN) {
      let last_message = chat.userChat.messages[chat.userChat.messages.length - 1]
      if (last_message?.date == new Date(res.created_at).toLocaleDateString()) {
        chat.userChat.messages[chat.userChat.messages.length - 1]?.messages?.push(res)
      } else {
        chat.userChat.messages.push({date: new Date(res.created_at).toLocaleDateString(), messages: [res]})
      }
    }
    for (let i = 0; i < chat.chatList.results.length; i++) {
      if (chat.chatList.results[i].id === res.chat_id) {
        chat.chatList.results[i].last_message = res
        if(res.file !== chat.userChat.photo_url && res.message_type === 'change' && res.file) {
          chat.userChat.photo_url = res.file
        }
      }

    }
    if (res.type === 'delete_message') {
      for (let j = 0; j < chat.userChat.messages.length; j++) {
        for (let i = chat.userChat.messages[j].messages.length - 1; i >= 0; i--) {
          if (chat.userChat.messages[j].messages[i].id === res.message_id) {
            chat.userChat.messages[j].messages?.splice(i, 1)
          }
        }
      }
    } else if (res.type === 'update_message') {
      for (let j = 0; j < chat.userChat.messages.length; j++) {
        for (let i = chat.userChat.messages[j].messages.length - 1; i >= 0; i--) {
          if (chat.userChat.messages[j].messages[i].id === res.message.id) {
            chat.userChat.messages[j].messages[i] = res.message;
            break;
          }
        }
      }
    }
  }
  onUnmounted(() => {
    mes.close()
  })
}

onMounted(() => {
  chat.loadUserChat({id: route.params.id, limit: 100, page: 1})
  chat.loadPinnedList({id: route.params.id, limit: 100, page: 1})
  messages()
})

useSeoMeta({
  title: 'Чат'
})

</script>
<template>
  <div class="h-full w-full" @click="chat.showChangeWindowChat = false">
    <div
      class="w-full flex items-center border-l max-h-[8%] max-md:pt-3 max-md:px-14 max-sm:px-2 h-[100px] px-10 border-black dark:border-opacity-20 border-opacity-10 bg-gray-200 dark:bg-gray-700">
      <div v-if="!chat.get_user_chat.user && !chat.get_user_chat.is_group || chat.get_user_chat.users?.id "
           class="flex gap-x-4 justify-center relative items-center mb-2">
        <sceleton class="opacity-50" width="40px" height="40px" border-radius="100%"></sceleton>
        <sceleton class="opacity-50" width="150px" height="10px" border-radius="4px"></sceleton>
      </div>
      <div v-else class="flex items-center justify-between w-full" @click="chat.showChatInfo = true">
        <div class="flex items-center gap-x-2 cursor-pointer">
          <div class="hidden max-md:block" @click.prevent="router.push('/base/chat')">
            <svg class="dark:fill-gray-400 fill-black" width="30px" height="30px" viewBox="0 0 1024 1024"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M604.7 759.2l61.8-61.8L481.1 512l185.4-185.4-61.8-61.8L357.5 512z"/>
            </svg>
          </div>
          <img v-if="chat.get_user_chat.user?.id || chat.get_user_chat.photo_url" class="w-[40px] h-[40px] rounded-full"
               :src="!chat.get_user_chat.is_group
                ? loadAuthStore.get_server_domain + chat.get_user_chat.user?.photo
                : loadAuthStore.get_server_domain + chat.get_user_chat?.photo_url"
               alt="">
          <div v-else class="rounded-full bg-blueSemiLight flex items-center justify-center w-[42px] h-[42px]">
            <svg v-if="!chat.get_user_chat.photo_url && !chat.get_user_chat.is_group" class="stroke-white" width="32px"
                 height="32px" viewBox="0 -0.5 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="uppercase font-bold" v-else v-for="chatName in chat.get_user_chat.name.split(' ').slice(0,2)"
               @click="console.log(chatName[0])">{{ chatName[0] }}</p>
          </div>
          <p v-if="!chat.get_user_chat.is_group">
            {{ chat.get_user_chat.user?.last_name === '' ? $t('Избранное') : chat.get_user_chat.user?.first_name + ' ' + chat.get_user_chat.user?.last_name
            }}</p>
          <p v-else>
            {{ chat.get_user_chat?.name.length > 30 ? chat.get_user_chat?.name.slice(0, 30) + '...' : chat.get_user_chat?.name
            }}</p>
        </div>
        <ChatChangeWindow/>
      </div>
    </div>
    <ChatContentUserPinned/>
    <ChatContent></ChatContent>
    <Transition name="slide-down">
      <TheModal :type="'resizeInfoWindow'" class="" v-if="chat.showChatInfo && chat.userChat?.is_group"
                @showModal="chat.showChatInfo = false; chat.showSettingChat = false; chat.showChatChangeInfo = false">
        <ChatWindowSettingContent/>
      </TheModal>
    </Transition>
    <Transition name="fade">
      <TheModal v-if='chat.showChatChangeInfoModal' :type="'resize'"
                @showModal="chat.showChatChangeInfoModal = false; chat.file = ''; chat.src = ''; chat.fileUpload = null; chat.results = {image: null, coordinates: null}">
        <div class="dark:bg-gray-700 rounded-lg h-max relative mx-auto my-auto">
          <div class="">
            <p class="text-lg">{{ $t('Настройки группы') }}</p>
          </div>
          <div class="py-1 flex items-center gap-x-6 select-none">
            <div class="relative" @mouseenter="chat.showImageChange = true" @mouseleave="chat.showImageChange = false">
              <Transition name="fade">
                <ChatCropperFileInput/>
              </Transition>
              <div v-if="!chat.src && !chat.results.image">
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
              <div v-else-if="chat.results.image">
                <preview class="w-[80px] h-[80px] rounded-full" :image="chat.results.image"
                         :coordinates="chat.results.coordinates"/>
              </div>
              <div v-else-if="chat.src && !chat.results.image">
                <img class="w-[80px] flex justify-center items-center text-xl h-[80px] rounded-full"
                     :src="chat.src"/>
              </div>
            </div>
            <div>
              <div>
                <p class="text-sm tracking-wider text-semiCyan">{{ $t('Название группы') }}</p>
                <TheInput :type="'default'" v-model="chat.updateChatName"
                          class="bg-transparent bg-opacity-0 border-b-2 border-b-semiCyan outline-none" type="text"/>
              </div>
            </div>
          </div>
          <div class="flex justify-end gap-x-2 !text-sm">
            <TheButton :type="'chat'"
                       @click="chat.showChatChangeInfoModal = false; chat.file = ''; chat.src = ''; chat.fileUpload = null; chat.results = {image: null, coordinates: null}">
              {{ $t('Отмена') }}
            </TheButton>
            <TheButton :type="'chat'"
                       @click="chat.updateChatName !== chat.userChat.name || chat.updateDescription !== chat.userChat.description || chat.fileUpload ? chat.chatUpdate({id: route.params.id, update: {name: chat.updateChatName , description: '', photo: chat.fileUpload}}).then(res=>{chat.showChatChangeInfoModal = false; chat.fileUpload = null; chat.userChat.name = chat.updateChatName; chat.updateChatName = ''}) : toast.info($t('Измените содержимое для сохранения'), {autoClose: 1500, theme: 'auto'})">
              {{ $t('Сохранить') }}
            </TheButton>
          </div>
        </div>
        <ChatFileError/>
      </TheModal>
    </Transition>
    <Transition name="fade" >
      <div v-if="chat.showChatGallery" class="fixed left-0 top-0 h-screen w-screen flex justify-center items-center z-[110]" >
        <div class="opacity-60 bg-black absolute left-0 top-0 w-screen h-screen" @click="chat.showChatGallery = false"></div>
        <div class="bg-gray-300 w-20 h-20"></div>
      </div>
    </Transition>
    <ChatUploadWindow />
    <ChatUploadError />
  </div>
</template>

<style scoped lang="scss">

</style>