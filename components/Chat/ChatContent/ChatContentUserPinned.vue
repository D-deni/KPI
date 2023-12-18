<script setup lang="ts">
import {useChat} from "~/stores/chat";
import TheChatContentPinnedMessages from "~/components/Chat/UI/Pinned/TheChatContentPinnedMessages.vue";
import TheChatContentPinnedHeader from "~/components/Chat/UI/Pinned/TheChatContentPinnedHeader.vue";
import TheChatContentPinnedFooter from "~/components/Chat/UI/Pinned/TheChatContentPinnedFooter.vue";

const chat = useChat()
</script>

<template>
  <div
    class="absolute z-[11] top-0 dark:bg-[#1F2937] bg-gray-300 right-0 h-full text-white transition-all duration-200"
    :class="{'w-full' : chat.showPinnedWindow, 'w-0' : !chat.showPinnedWindow}">
    <div class="flex flex-col h-full">
      <TheChatContentPinnedHeader/>
      <TheChatContentPinnedMessages class="h-full"/>
      <TheChatContentPinnedFooter></TheChatContentPinnedFooter>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>