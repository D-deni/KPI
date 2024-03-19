<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "~/stores/auth";
import {toast} from "vue3-toastify";
import ChatWindowSettingContentHeadersElems
  from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentHeaderUI/ChatWindowSettingContentHeadersElems.vue";
import ChatWindowSettingContentHeaderChange
  from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentHeaderUI/ChatWindowSettingContentHeaderChange.vue";
import ChatUserCheckbox from "~/components/Chat/UI/ChatUserCheckbox.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheButton from "~/components/UI/TheButton.vue";

const loadAuthStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const chat = useChat()
defineProps({
  showGroupAdd: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="p-4 flex justify-between tracking-wider items-center relative">
    <p class="tracking-widest">{{ $t('Информация о группе') }}</p>
    <div class="flex gap-x-4 items-center ">
      <div class="p-1 rounded-full transition-all duration-200 cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-200"
           :class="{'dark:bg-gray-500 bg-gray-200' : chat.showSettingChat}"
           @click.stop="chat.showSettingChat = !chat.showSettingChat">
        <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <Transition name="slide-down" @click.stop>
        <div v-if="chat.showSettingChat"
             class="absolute top-10 right-16 py-1 dark:bg-gray-800 bg-gray-200 flex flex-col gap-y-2">
          <ChatWindowSettingContentHeadersElems @click="$emit('showGroupAdd'); chat.showSettingChat = false;">
            <template v-slot:chatWindowSettingContentSvg>
              <svg class="stroke-black dark:stroke-white" width="20px" height="20px" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <title>i</title>
                <g id="Complete">
                  <g id="user-add">
                    <g>
                      <path d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2"/>
                      <circle cx="9" cy="7" r="4" fill="none" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="2"/>
                      <line x1="17" y1="11" x2="23" y2="11" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"/>
                      <line x1="20" y1="8" x2="20" y2="14" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"/>
                    </g>
                  </g>
                </g>
              </svg>
            </template>
            <template v-slot:chatWindowSettingContentText>
              {{ $t('Добавить участников') }}
            </template>
          </ChatWindowSettingContentHeadersElems>
          <ChatWindowSettingContentHeadersElems
            @click="chat.showChatChangeInfo = true; chat.showSettingChat = false; chat.updateChatName = chat.userChat.name">
            <template v-slot:chatWindowSettingContentSvg>
              <svg class="stroke-black dark:stroke-white" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.48 18.5368H21M4.68 12L3 12.044M4.68 12C4.68 13.3255 5.75451 14.4 7.08 14.4C8.40548 14.4 9.48 13.3255 9.48 12C9.48 10.6745 8.40548 9.6 7.08 9.6C5.75451 9.6 4.68 10.6745 4.68 12ZM10.169 12.0441H21M12.801 5.55124L3 5.55124M21 5.55124H18.48M3 18.5368H12.801M17.88 18.6C17.88 19.9255 16.8055 21 15.48 21C14.1545 21 13.08 19.9255 13.08 18.6C13.08 17.2745 14.1545 16.2 15.48 16.2C16.8055 16.2 17.88 17.2745 17.88 18.6ZM17.88 5.4C17.88 6.72548 16.8055 7.8 15.48 7.8C14.1545 7.8 13.08 6.72548 13.08 5.4C13.08 4.07452 14.1545 3 15.48 3C16.8055 3 17.88 4.07452 17.88 5.4Z"
                  stroke-width="1.5" stroke-linecap="round"></path>
              </svg>
            </template>
            <template v-slot:chatWindowSettingContentText>
              {{ $t('Управление группой') }}
            </template>
          </ChatWindowSettingContentHeadersElems>
          <ChatWindowSettingContentHeadersElems class="text-red-400"
                                                @click="chat.chatDelete({id: route.params.id}).then(res=>{chat.showSettingChat = false; showGroupAdd = false; chat.showChatInfo = false; router.push('/base/chat').then(response=>{toast.success('Чат успешно удалён', {theme: 'auto', autoClose: 1000})})})">
            <template v-slot:chatWindowSettingContentSvg>
              <svg class="stroke-red-400" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M14 12V17" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4 7H20" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </template>
            <template v-slot:chatWindowSettingContentText>
              {{ $t('Удалить группу') }}
            </template>
          </ChatWindowSettingContentHeadersElems>
        </div>
      </Transition>
      <div class="cursor-pointer p-1.5 rounded-full transition-all duration-200" @click="chat.showChatInfo = false">
        <svg class="dark:stroke-white stroke-black" width="20px" height="20px" viewBox="-0.5 0 25 25" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21.32L21 3.32001" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 3.32001L21 21.32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
  <!--  <Transition name="fade">-->
  <!--   <div>-->
  <!--     <div class="fixed w-screen h-screen top-0 left-0"-->
  <!--          @click="chat.showChatChangeInfo = false; chat.file = ''; chat.src = ''; chat.fileUpload = null; chat.results = {image: null, coordinates: null}"></div>-->
  <!--   </div>-->
  <!--  </Transition>-->
</template>

<style scoped lang="scss">

</style>