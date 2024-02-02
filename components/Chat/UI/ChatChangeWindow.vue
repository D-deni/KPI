<script setup lang="ts">
import {useChat} from "~/stores/chat";
import ChatChangeWindowElem from "~/components/Chat/UI/ChatChangeWindowElem.vue";

const chat = useChat()
</script>

<template>
  <div class="">
    <div @click.stop="chat.showChangeWindowChat = !chat.showChangeWindowChat"
         class="p-1 rounded-full transition-all duration-200 cursor-pointer dark:hover:bg-gray-500 hover:bg-gray-200" :class="{'dark:bg-gray-500 bg-gray-200' : chat.showChangeWindowChat}">
      <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 12H12.01M12 6H12.01M12 18H12.01M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6Z"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
    <Transition name="fade" >
      <div v-if="chat.showChangeWindowChat" @click.stop="chat.showChangeWindowChat = false" class="absolute top-14 right-8 z-50 dark:bg-gray-600 bg-gray-200 border border-gray-300 dark:border dark:border-gray-500">
        <ChatChangeWindowElem @click="chat.showChatInfo = true" v-if="chat.get_user_chat.is_group">
          <template v-slot:chatWindowSettingContentSvg>
            <svg class="dark:fill-white fill-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" />
              <path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z" />
            </svg>
          </template>
          <template v-slot:chatWindowSettingContentText>
            {{$t('Информация о группе')}}
          </template>
        </ChatChangeWindowElem>
        <ChatChangeWindowElem @click="chat.showChatInfo = true" v-else>
          <template v-slot:chatWindowSettingContentSvg>
            <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.5" cx="12" cy="9" r="3"  stroke-width="1"/>
              <circle cx="12" cy="12" r="10"  stroke-width="1"/>
              <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"  stroke-width="1" stroke-linecap="round"/>
            </svg>
          </template>
          <template v-slot:chatWindowSettingContentText>
            {{$t('Показать профиль')}}
          </template>
        </ChatChangeWindowElem>
        <ChatChangeWindowElem @click="chat.showChatChangeInfoModal = true; chat.updateChatName = chat.userChat.name" v-if="chat.get_user_chat.is_group">
          <template v-slot:chatWindowSettingContentSvg>
            <svg class="dark:stroke-white stroke-black" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.5" cx="12" cy="9" r="3"  stroke-width="1"/>
              <circle cx="12" cy="12" r="10"  stroke-width="1"/>
              <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"  stroke-width="1" stroke-linecap="round"/>
            </svg>
          </template>
          <template v-slot:chatWindowSettingContentText>
            {{$t('Управление группой')}}
          </template>
        </ChatChangeWindowElem>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

</style>