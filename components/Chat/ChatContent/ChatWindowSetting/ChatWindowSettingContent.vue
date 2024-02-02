<script setup lang="ts">
import ChatWindowSettingContentHeader from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentHeader.vue";
import ChatWindowSettingContentMain from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentMain.vue";
import ChatWindowSettingContentUserList from "~/components/Chat/ChatContent/ChatWindowSetting/ChatWindowSettingContent/ChatWindowSettingContentUserList.vue";
import {useChat} from "~/stores/chat";
const chat = useChat()
</script>

<template>
  <div @click="chat.showSettingChat = false">
    <ChatWindowSettingContentHeader/>
    <ChatWindowSettingContentMain/>
    <ChatWindowSettingContentUserList/>
  </div>
</template>

<style scoped lang="scss">

</style>