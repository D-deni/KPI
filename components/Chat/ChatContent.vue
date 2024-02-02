<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useRoute} from "vue-router";
import {onKeyStroke} from "@vueuse/core";
import ChatContentUser from "~/components/Chat/ChatContent/ChatContentUser.vue";
import TheChatPreloader from "~/components/UI/ThePreloader.vue";
import TheTextareaAutosize from "~/components/UI/TheTextareaAutosize.vue";
import TheChatContentPinned from "~/components/Chat/ChatNav/UI/TheChatContentPinned.vue";
import TheModal from "~/components/UI/TheModal.vue";
import TheTextContent from "~/components/UI/TheTextContent.vue";
import TheCheckbox from "~/components/UI/TheCheckbox.vue";
import TheButton from "~/components/UI/TheButton.vue";
import ChatUploadInfo from "~/components/Chat/UI/Upload/ChatUploadInfo.vue";
import ChatUploadFile from "~/components/Chat/UI/Upload/ChatUploadFile.vue";

const route = useRoute()
const chat = useChat()
defineProps({
  messageId: {
    type: Number,
    default: null
  },
  showArrowBtn: {
    type: Boolean,
    default: false
  },
  showForwardedSetting: {
    type: Boolean,
    default: false
  },
  check: {
    type: Boolean,
    default: true
  },

})

</script>

<template>
  <div class="w-full relative h-[92%]">
    <TheChatPreloader v-if="!chat.userChat.id"></TheChatPreloader>
    <div v-else class="flex relative h-full flex-col" :class="{'z-20' : chat.showDragInfo}" >
      <TheChatContentPinned/>
      <ChatContentUser></ChatContentUser>
      <form class="flex mt-auto relative"
            @submit.prevent="chat.messageText?.length > 0 && chat.messageText?.trim() !== '' || chat.messageForwarded.id ? chat.createMessage({id: chat.get_user_chat.id, text: chat.messageText, message_id: chat.messageForwarded.id}).then(res=> {chat.messageText = ''}): chat.messageText">
        <div class="flex flex-col h-full w-full">
          <Transition name="slide-up">
            <div v-if="chat.messageUpdate.id || chat.messageForwarded.id || chat.messageReplied.id"
                 class="dark:bg-gray-700 flex justify-between items-center bg-gray-200 border-l border-black dark:border-opacity-20 border-opacity-10  w-full h-[50px] max-sm:h-[70px]">
              <div class="flex items-center">
                <div class="ml-2">
                  <svg v-if="chat.messageUpdate.id" class="fill-semiCyan" width="25px" height="25px"
                       viewBox="0 0 16 16"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M13.8 2.2a2.51 2.51 0 0 0-3.54 0l-6.9 6.91-1.76 3.62a1.26 1.26 0 0 0 1.12 1.8 1.23 1.23 0 0 0 .55-.13l3.62-1.76 6-6 .83-.82.06-.06a2.52 2.52 0 0 0 .02-3.56zm-.89.89a1.25 1.25 0 0 1 0 1.77l-1.77-1.77a1.24 1.24 0 0 1 .86-.37 1.22 1.22 0 0 1 .91.37zM2.73 13.27 4.29 10 6 11.71zm4.16-2.4L5.13 9.11 10.26 4 12 5.74z"/>
                  </svg>
                  <svg v-if="chat.messageForwarded.id" @click="showForwardedSetting = true" class="stroke-semiCyan" width="25px" height="25px"
                       viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.48 18.5368H21M4.68 12L3 12.044M4.68 12C4.68 13.3255 5.75451 14.4 7.08 14.4C8.40548 14.4 9.48 13.3255 9.48 12C9.48 10.6745 8.40548 9.6 7.08 9.6C5.75451 9.6 4.68 10.6745 4.68 12ZM10.169 12.0441H21M12.801 5.55124L3 5.55124M21 5.55124H18.48M3 18.5368H12.801M17.88 18.6C17.88 19.9255 16.8055 21 15.48 21C14.1545 21 13.08 19.9255 13.08 18.6C13.08 17.2745 14.1545 16.2 15.48 16.2C16.8055 16.2 17.88 17.2745 17.88 18.6ZM17.88 5.4C17.88 6.72548 16.8055 7.8 15.48 7.8C14.1545 7.8 13.08 6.72548 13.08 5.4C13.08 4.07452 14.1545 3 15.48 3C16.8055 3 17.88 4.07452 17.88 5.4Z"
                      stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg v-if="chat.messageReplied.id" width="25px" height="25px" viewBox="-0.5 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g class="fill-semiCyan" id="Icon-Set-Filled" transform="translate(-102.000000, -1195.000000)" >
                        <path d="M113.983,1202.01 L113.983,1196.11 C114.017,1195.81 113.936,1195.51 113.708,1195.28 C113.312,1194.89 112.67,1194.89 112.274,1195.28 L102.285,1206.24 C102.074,1206.45 101.984,1206.72 101.998,1207 C101.984,1207.27 102.074,1207.55 102.285,1207.76 L112.219,1218.65 C112.59,1218.97 113.271,1219.15 113.708,1218.71 C113.935,1218.49 114.035,1218.29 114,1218 L114,1212 C120.6,1212 126.569,1216.75 127.754,1223.01 C128.552,1221.17 129,1219.15 129,1217.02 C129,1208.73 122.276,1202.01 113.983,1202.01"
                              id="reply"/>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="py-2 px-4 text-sm tracking-widest">
                  <div v-if="chat.messageUpdate.id">
                    <p class="text-semiCyan" >{{ $t('Редактирование') }}</p>
                  </div>
                  <div v-if="chat.messageForwarded.id">
                    <p class="text-semiCyan" >{{ chat.checkboxForwarded ? chat.messageForwarded.sender.first_name + ' ' + chat.messageForwarded.sender.last_name : $t('Имя отправителя скрыто') }}</p>
                  </div>
                  <div v-if="chat.messageReplied.id">
                    <p class="text-semiCyan text-[12px]" >{{$t('В ответ') + ' ' + chat.messageReplied.sender.first_name + ' ' + chat.messageReplied.sender.last_name}}</p>
                    <p class="">{{chat.messageReplied.text.length > 20 ? chat.messageReplied.text.slice(0,20) + '...' : chat.messageReplied.text }}</p>
                  </div>
                  <div>
                    <p v-if="chat.messageUpdate.id"><span v-if="chat.messageUpdate.file_name" class="text-[12px] text-gray-400">{{chat.messageUpdate.file_name.slice(0,20) + '...' + chat.messageUpdate.file_name.substr(-6) + ','}}</span> {{ chat.messageUpdate.text?.length > 50 ? chat.messageUpdate?.text.slice(0, 50) + '...' : chat.messageUpdate?.text}}</p>
                    <p v-else>{{chat.messageForwarded.text?.length > 50 ? chat.messageForwarded?.text.slice(0, 50) + '...' : chat.messageForwarded?.text}}</p>
                  </div>

                </div>
              </div>
              <div class="mr-4 cursor-pointer" @click="chat.messageUpdate = {}; chat.messageForwarded = {}; chat.messageReplied = {}">
                <svg class="fill-gray-500" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"/>
                </svg>
              </div>
            </div>
          </Transition>
          <div class="bg-gray-600">
            <TheTextareaAutosize
              v-if="chat.messageUpdate.id"
              v-model:modelValue="chat.messageUpdate.updateText"
              @keydown.enter.prevent="chat.updateMessage({id: chat.messageUpdate.id, text: chat.messageUpdate.updateText}).then(res=>{ chat.messageUpdate = {}})"
              @keydown.shift.prevent=""
              class="h-[50px] -mb-2 pr-24 pl-5"
              :class="{'!pl-12' : chat.messageUpdate.id}"
              placeholder="Написать сообщение..."/>
            <TheTextareaAutosize
              v-else-if="!chat.messageUpdate.id"
              v-model:modelValue="chat.messageText"
              @keydown.shift.enter.prevent=""
              @keydown.enter.prevent
              @keyup.shift.enter.capture
              @keyup.enter.prevent="chat.messageText?.length > 0 && chat.messageText?.trim() !== '' || chat.messageForwarded.id
              ? chat.createMessage({id: chat.get_user_chat.id, text: chat.messageText, message_id: chat.messageForwarded.id}).then(res=> {chat.messageText = ''})
              : chat.messageForwarded = {}; chat.messageText = ''; console.log(1243)"
              class="h-[50px] -mb-2 pr-24 pl-5 "
              placeholder="Написать сообщение..."/>
            <ChatUploadFile v-if="!chat.messageUpdate.id || !chat.messageForwarded.id"/>
            <Transition name="fade">
              <button
                v-if="chat.messageText?.length > 0 && chat.messageText?.trim() !== '' || chat.messageForwarded.id"
                class="absolute right-2 bottom-2">
                <div>
                  <svg width="35px" height="35px" viewBox="0 0 24 24" fill="cyan" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                      stroke="#000000" stroke-width="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </button>
              <button
                @click="chat.updateMessage({id: chat.messageUpdate.id, text: chat.messageUpdate.updateText}).then(res=>{ chat.messageUpdate = {}})"
                v-else-if="chat.messageUpdate.updateText?.length > 0 && chat.messageUpdate.updateText?.trim() !== '' || chat.messageUpdate.file"
                class="absolute right-2 bottom-2">
                <div>
                  <svg class="fill-semiCyan" width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path>
                  </svg>
                </div>
              </button>
              <div v-else class="absolute right-2 bottom-0.5"
                   @click="timer === 0 ? chat.showVoiceInfo = true  : chat.showVoiceInfo = false">
                <button>
                  <svg class="fill-gray-500 dark:hover:fill-gray-300 hover:fill-gray-700 transition-all" width="35px" height="35px" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M12 4.5C10.314 4.5 9 5.80455 9 7.35V12.15C9 13.6955 10.314 15 12 15C13.686 15 15 13.6955 15 12.15L15 7.35C15 5.80455 13.686 4.5 12 4.5ZM7.5 7.35C7.5 4.919 9.54387 3 12 3C14.4561 3 16.5 4.919 16.5 7.35L16.5 12.15C16.5 14.581 14.4561 16.5 12 16.5C9.54387 16.5 7.5 14.581 7.5 12.15V7.35ZM6.75 12.75C6.75 15.1443 9.0033 17.25 12 17.25C14.9967 17.25 17.25 15.1443 17.25 12.75H18.75C18.75 15.9176 16.0499 18.3847 12.75 18.7129V21H11.25V18.7129C7.95007 18.3847 5.25 15.9176 5.25 12.75H6.75Z"/>
                  </svg>
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </form>
      <ChatUploadInfo @dragleave.stop="chat.showDragInfo = false"/>
    </div>
    <TheModal v-if="showForwardedSetting" :type="'resizeInfoWindow'" class="p-4"
              @showModal="showForwardedSetting = false">
      <div class="my-2">
        <TheTextContent>{{ $t('Переслать сообщение') }}</TheTextContent>
        <div class="px-4 py-2 !font-light">
          <div>
            <p>{{ $t('Вы можете убрать имя отправителя. В этом случае сообщение будет выглядеть как Ваше.') }}</p>
            <div>
              <TheCheckbox :t="'checkboxChat'" :checked="check"/>
            </div>
            <button class="text-sm font-light text-semiCyan hover:underline tracking-wider"
                    @click="showForwardedSetting = false; chat.showSendWindow = true">
              {{ $t('Изменить получателя') }}
            </button>
          </div>
          <div class="flex justify-end">
            <TheButton :type="'chat'" @click="showForwardedSetting = false;">{{ $t('Готово') }}</TheButton>
          </div>
        </div>
      </div>
    </TheModal>

  </div>
</template>

<style scoped lang="scss">

</style>