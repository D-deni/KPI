<script setup lang="ts">
import {useChat} from "~/stores/chat";
import {useAuthStore} from "~/stores/auth";

const chat = useChat()
const currentUser = useAuthStore()
defineProps({
  item: {
    type: Object,
    default: () => {
    }
  },
  textType: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div @contextmenu.prevent>
    <div class="flex items-end gap-x-2 p-1 rounded-lg"
         :class="{'max-md:justify-end' : item.sender.id === currentUser.user.id}">
      <div
        class="rounded-full max-md:hidden w-[30px]" :class="{'max-md:!block': chat.userChat.is_group, 'max-md:!hidden' : item.sender.id === currentUser.user.id}" >
        <slot name="userImage"/>
      </div>
      <div class="flex flex-col py-1 px-2 gap-x-2 rounded-xl max-w-[40%] max-lg:max-w-[50%] max-md:max-w-[80%] relative
                  before:absolute before:border-l-[5px] before:border-l-transparent before:border-r-[10px] before:border-b-[10px] before:border-r-transparent before:w-[3px] before:h-[3px] before:bottom-0"
           :class="{'dark:bg-gray-600 bg-gray-200 dark:shadow-none shadow-md max-md:rounded-r-xl max-md:rounded-l-lg': item.sender.id !== currentUser.user.id,
            'dark:bg-gray-700 bg-gray-200 dark:shadow-none shadow-md max-md:rounded-l-xl max-md:rounded-r-lg': item.sender.id === currentUser.user.id,
            'before:dark:border-b-gray-700 before:border-gray-200 before:-left-1 max-md:before:-right-2 max-md:before:left-auto' : item.sender.id === currentUser.user.id,
            'before:dark:border-b-gray-600 before:border-gray-200 before:-left-1 max-md:before:-left-1' : item.sender.id !== currentUser.user.id
      }">
        <p v-if="item.forwarded_from?.id" class="text-semiCyan font-bold text-[12px]">
          <slot name="userForwarded"></slot>
        </p>
        <div class="break-words relative">
          <p class="text-[12px] text-blueSemiLight tracking-widest" v-if="chat.userChat.is_group && !item.forwarded_from?.id && item.sender.id !== currentUser.user.id">
            <slot name="userSenderName"/>
          </p>
          <p class="text-sm break-all">
            <slot name="userMessage"/>
            <div class="flex items-center justify-end gap-x-1 float-right ml-2"
                 :class="{'mt-1' : item.text?.length <= 70}">
              <div v-if="item.pinned === true && !chat.showPinnedWindow">
                <svg class="fill-semiCyan" width="13px" height="13px" viewBox="0 0 256 256" id="Flat"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M231.999,107.31445,173.47168,165.8418c4.55664,12.67968,6.44531,33.88965-13.18945,59.98584a15.96991,15.96991,0,0,1-11.64649,6.33007q-.5625.03955-1.124.03956a16.0039,16.0039,0,0,1-11.31934-4.69141L88,179.314,53.65723,213.65674a8.00018,8.00018,0,0,1-11.31446-11.31348L76.686,168,28.2959,119.60986a16.01339,16.01339,0,0,1,1.2832-23.78613C55.00488,75.312,79.34082,79.35205,89.99316,82.69287L148.68555,24l.001-.001a16.02135,16.02135,0,0,1,22.627,0L232,84.68652a15.99888,15.99888,0,0,1-.001,22.62793Z"/>
                </svg>
              </div>
              <p v-if="new Date(item.updated_at).toLocaleString() !== new Date(item.created_at).toLocaleString()" class="text-[12px] tracking-wider font-light dark:text-gray-400 text-gray-400">{{$t('изменено')}}</p>
              <p class="text-[12px] text-end text-gray-400">
                <slot name="userDate"/>
              </p>
              <div>
                <svg v-if="item.sender.id === currentUser.user.id" class="fill-semiCyan" width="20px" height="20px"
                     viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z"></path>
                  <path v-if="item.read && item.sender.id === currentUser.user.id" fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z"></path>
                </svg>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>