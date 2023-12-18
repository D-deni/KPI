<script setup lang="ts">
import {useChat} from "~/stores/chat";

const chat = useChat()
</script>

<template>
  <div class="w-full h-[60px] dark:bg-gray-700 bg-gray-200 border-t border-l border-black dark:border-opacity-20 border-opacity-10 z-10">
    <div class="p-4 flex items-center gap-x-3 cursor-pointer" @click="chat.showPinnedWindow = false">
      <div>
        <svg class="dark:stroke-white stroke-black" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p class="text-black dark:text-white tracking-wider">{{chat.arrayPin.length + ' ' + $t('закреплённых сообщения')}}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>